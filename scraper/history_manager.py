import json
import os
from datetime import datetime, timedelta

HISTORY_FILE = 'data/price_history.json'
CURRENT_DATA_FILE = 'data/current_data.json'

def load_json(filepath):
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                return {}
    return {}

def save_json(data, filepath):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def update_history(current_items):
    """
    current_items: dict of { "product_id": { ...product_data... } }
    """
    history = load_json(HISTORY_FILE)
    today_str = datetime.now().strftime('%Y-%m-%d')
    thirty_days_ago = datetime.now() - timedelta(days=30)
    
    updated_current = {}

    for prod_id, prod_data in current_items.items():
        price = prod_data.get('price')
        if price is None:
            continue
            
        # Initialize history for this product if not exists
        if prod_id not in history:
            history[prod_id] = []
            
        # Add today's price if not already added
        if not history[prod_id] or history[prod_id][-1]['date'] != today_str:
            history[prod_id].append({
                'date': today_str,
                'price': price
            })
            
        # Calculate all-time low in the last 30 days
        recent_prices = [
            item['price'] for item in history[prod_id] 
            if datetime.strptime(item['date'], '%Y-%m-%d') >= thirty_days_ago
        ]
        
        all_time_low = False
        if recent_prices:
            min_price = min(recent_prices)
            if price <= min_price and len(recent_prices) > 1: # Require some history to call it a low
                all_time_low = True
                
        prod_data['all_time_low'] = all_time_low
        prod_data['price_history'] = history[prod_id]
        updated_current[prod_id] = prod_data

    save_json(history, HISTORY_FILE)
    save_json(updated_current, CURRENT_DATA_FILE)
    
    return updated_current
