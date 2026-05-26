import json
import os
import time
import random
import asyncio
import cloudscraper
from bs4 import BeautifulSoup
from playwright.async_api import async_playwright
from playwright_stealth import stealth_async
from history_manager import update_history

CONFIG_FILE = 'config.json'

USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/122.0.0.0 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
]

def load_config():
    with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

# --- B-TERV: Örökre ingyenes Cloudscraper fallback ---
def scrape_with_cloudscraper(url, shop_name):
    print(f"B-TERV (Cloudscraper) használata a következő URL-hez: {url}")
    
    # A cloudscraper képes megkerülni a Cloudflare "Javascript Challenge" és alap bot védelmeit
    scraper = cloudscraper.create_scraper(
        browser={
            'browser': 'chrome',
            'platform': 'windows',
            'desktop': True
        }
    )
    
    try:
        html = scraper.get(url, timeout=30).text
        soup = BeautifulSoup(html, 'html.parser')
        products = {}
        
        if shop_name == 'Alza':
            items = soup.select('.box')
            for item in items:
                try:
                    name_el = item.select_one('.name')
                    price_el = item.select_one('.c-price-box__price')
                    img_el = item.select_one('img')
                    
                    if not (name_el and price_el and img_el): continue
                    
                    name = name_el.text.strip()
                    price_text = price_el.text.strip()
                    price = int(''.join(filter(str.isdigit, price_text)))
                    
                    url_href = item.select_one('a.name')['href']
                    product_url = "https://www.alza.hu" + url_href
                    product_id = product_url.split('/')[-1]
                    
                    img_url = img_el.get('src') or img_el.get('data-src')
                    
                    products[product_id] = {
                        "name": name, "price": price, "url": product_url, "image": img_url, "shop": "Alza"
                    }
                except Exception:
                    continue
                    
        elif shop_name == 'eMAG':
            items = soup.select('.card-item')
            for item in items:
                try:
                    name_el = item.select_one('.product-title')
                    price_el = item.select_one('.product-new-price')
                    img_el = item.select_one('img')
                    
                    if not (name_el and price_el and img_el): continue
                    
                    name = name_el.text.strip()
                    price_text = price_el.text.strip().split(',')[0]
                    price = int(''.join(filter(str.isdigit, price_text)))
                    
                    product_url = name_el['href']
                    product_id = product_url.split('/')[-1].split('?')[0]
                    img_url = img_el.get('src')
                    
                    products[product_id] = {
                        "name": name, "price": price, "url": product_url, "image": img_url, "shop": "eMAG"
                    }
                except Exception:
                    continue
        
        return products
    except Exception as e:
        print(f"Cloudscraper hiba az {url} esetében: {e}")
        return {}

# --- A-TERV: Playwright Scraper ---
async def scrape_alza(page, url):
    print(f"A-TERV: Scraping Alza URL (Playwright): {url}")
    await page.goto(url, wait_until="domcontentloaded")
    await page.wait_for_timeout(random.randint(3000, 6000))
    
    products = {}
    items = await page.locator('.box').all() 
    
    if len(items) == 0:
        raise Exception("Nem találtam termékeket (Bot védelem vagy rossz szelektor)")
        
    for item in items:
        try:
            name_el = item.locator('.name')
            if await name_el.count() == 0: continue
            name = await name_el.inner_text()
            
            price_el = item.locator('.c-price-box__price')
            if await price_el.count() == 0: continue
            price_text = await price_el.inner_text()
            price = int(''.join(filter(str.isdigit, price_text)))
            
            url_el = item.locator('a.name')
            product_url = "https://www.alza.hu" + await url_el.get_attribute('href')
            
            img_el = item.locator('img')
            img_url = await img_el.get_attribute('src')
            if not img_url or img_url.startswith('data:'):
                img_url = await img_el.get_attribute('data-src')

            product_id = product_url.split('/')[-1]

            products[product_id] = {
                "name": name, "price": price, "url": product_url, "image": img_url, "shop": "Alza"
            }
        except Exception as e:
            continue

    return products

async def scrape_emag(page, url):
    print(f"A-TERV: Scraping eMAG URL (Playwright): {url}")
    await page.goto(url, wait_until="domcontentloaded")
    await page.wait_for_timeout(random.randint(3000, 6000))
    
    products = {}
    items = await page.locator('.card-item').all()
    
    if len(items) == 0:
        raise Exception("Nem találtam termékeket (Bot védelem vagy rossz szelektor)")
        
    for item in items:
        try:
            name_el = item.locator('.product-title')
            if await name_el.count() == 0: continue
            name = await name_el.inner_text()
            
            price_el = item.locator('.product-new-price')
            if await price_el.count() == 0: continue
            price_text = await price_el.inner_text()
            price = int(''.join(filter(str.isdigit, price_text.split(',')[0])))
            
            url_el = item.locator('.product-title')
            product_url = await url_el.get_attribute('href')
            
            img_el = item.locator('img')
            img_url = await img_el.get_attribute('src')

            product_id = product_url.split('/')[-1].split('?')[0]
            
            products[product_id] = {
                "name": name, "price": price, "url": product_url, "image": img_url, "shop": "eMAG"
            }
        except Exception as e:
            continue

    return products

async def main():
    config = load_config()
    all_products = {}
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=[
                "--disable-blink-features=AutomationControlled",
                "--disable-web-security",
                "--disable-features=IsolateOrigins,site-per-process",
            ]
        )
        
        user_agent = random.choice(USER_AGENTS)
        
        context = await browser.new_context(
            user_agent=user_agent,
            viewport={"width": 1920, "height": 1080},
            java_script_enabled=True,
            bypass_csp=True
        )
        
        page = await context.new_page()
        await stealth_async(page)
        
        for shop_info in config['shops']:
            shop_name = shop_info['name']
            for url in shop_info['urls']:
                try:
                    new_products = {}
                    if shop_name == 'Alza':
                        new_products = await scrape_alza(page, url)
                    elif shop_name == 'eMAG':
                        new_products = await scrape_emag(page, url)
                    
                    if not new_products:
                        raise Exception("Üres lista érkezett.")
                        
                    all_products.update(new_products)
                except Exception as e:
                    print(f"Hiba történt a Playwright scrape közben ({url}): {e}")
                    # --- Örökre Ingyenes B-TERV aktiválása ---
                    print("B-TERV: Váltás Cloudscraper modulra...")
                    cs_products = scrape_with_cloudscraper(url, shop_name)
                    all_products.update(cs_products)
                
                await asyncio.sleep(random.uniform(3, 7))
                
        await browser.close()
        
    print(f"Összesen {len(all_products)} termék lett sikeresen kinyerve.")
    if len(all_products) > 0:
        updated_data = update_history(all_products)
        print("Ártörténet frissítve és adat elmentve.")
    else:
        print("Nem sikerült érvényes adatot gyűjteni.")

if __name__ == "__main__":
    asyncio.run(main())
