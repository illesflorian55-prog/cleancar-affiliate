---
title: "VPN Chrome Ă©s Firefox kiegĂ©szĂ­tĹ‘k: ValĂłdi vĂ©delem vagy csak illĂşziĂł?"
description: "FelraktĂˇl egy ingyenes VPN bĹ‘vĂ­tmĂ©nyt a bĂ¶ngĂ©szĹ‘dbe, Ă©s azt hiszed, biztonsĂˇgban vagy? Gyorsan Ă©bredj fel: a legtĂ¶bb kiegĂ©szĂ­tĹ‘ valĂłjĂˇban nem is VPN!"
date: "2026-08-01"
author: "The VPN Shield Team"
image: "/images/27-vpn-bongeszo-kiegeszitok-vs-alkalmazasok.png"
category: "Security"
---

# VPN Chrome Ă©s Firefox kiegĂ©szĂ­tĹ‘k: ValĂłdi vĂ©delem vagy csak illĂşziĂł?

Az interneten mindent gyorsan akarunk. Ha egy amerikai hĂ­rportĂˇl cikkĂ©t leblokkoljĂˇk elĹ‘ttĂĽnk, nem akarunk negyed ĂłrĂˇt tĂ¶lteni egy asztali szoftver letĂ¶ltĂ©sĂ©vel, telepĂ­tĂ©sĂ©vel Ă©s beĂˇllĂ­tĂˇsĂˇval. Ilyenkor a leggyorsabb reflex, hogy megnyitjuk a Google Chrome WebĂˇruhĂˇzat, beĂ­rjuk a keresĹ‘be, hogy "Free VPN", Ă©s a legelsĹ‘ talĂˇlatot egyetlen kattintĂˇssal hozzĂˇadjuk a bĂ¶ngĂ©szĹ‘nkhĂ¶z.

Megjelenik egy kis pajzs ikon a sarokban, egy gombnyomĂˇssal "AmerikĂˇba" kerĂĽlĂĽnk, az oldal betĂ¶ltĹ‘dik, mi pedig elĂ©gedetten konstatĂˇljuk, hogy a gĂ©pĂĽnk mostantĂłl fel van vĂ©rtezve a hackerek ellen.

Sajnos ez az egyik legnagyobb â€“ Ă©s legveszĂ©lyesebb â€“ illĂşziĂł a kiberbiztonsĂˇg vilĂˇgĂˇban. TĂ­zbĹ‘l kilenc felhasznĂˇlĂł nincs tisztĂˇban azzal, hogy az a kis bĂ¶ngĂ©szĹ‘s kiegĂ©szĂ­tĹ‘, amit Ă©pp feltelepĂ­tett, **technikailag egyĂˇltalĂˇn nem egy VPN.** De akkor mi az? Ă‰s mikor sodrod magad vĂ©gzetes veszĂ©lybe a hasznĂˇlatukkal? TegyĂĽk tisztĂˇba a fogalmakat!

## A fĂˇjdalmas igazsĂˇg: A kiegĂ©szĂ­tĹ‘k 90%-a csak egy Proxy

Ahogy egy korĂˇbbi cikkĂĽnkben mĂˇr rĂ©szleteztĂĽk, a VirtuĂˇlis MagĂˇnhĂˇlĂłzat (VPN) Ă©s a Proxy szerver kĂ¶zĂ¶tt szakadĂ©knyi kĂĽlĂ¶nbsĂ©g van. A Chrome, a Firefox Ă©s az Edge ĂˇruhĂˇzaiban (Web Store) talĂˇlhatĂł "VPN" bĹ‘vĂ­tmĂ©nyek tĂşlnyomĂł tĂ¶bbsĂ©ge (kĂĽlĂ¶nĂ¶sen az ingyenesek) a nĂ©v ellenĂ©re csupĂˇn **Proxy szerverkĂ©nt** mĹ±kĂ¶dnek.

**Mit jelent ez a gyakorlatban?**

1. **Nincs igazi titkosĂ­tĂˇs:** Ezek a bĹ‘vĂ­tmĂ©nyek megvĂˇltoztatjĂˇk az IP-cĂ­medet a bĂ¶ngĂ©szĹ‘n belĂĽl, Ă­gy valĂłban be fognak engedni a geoblokkolt oldalakra. Azonban az adataidat *nem titkosĂ­tjĂˇk* erĹ‘s (AES-256) protokollokkal. Ha egy kĂˇvĂ©zĂł Wi-Fi-jĂ©n hasznĂˇlod ezeket bankolĂˇsra, a hackerek a szomszĂ©d asztaltĂłl nevetve olvassĂˇk ki a jelszavaidat a "VPN"-ed ellenĂ©re is.
2. **"SzivĂˇrgĂł" adatok (WebRTC Leak):** A bĂ¶ngĂ©szĹ‘k modern funkciĂłi (mint a WebRTC, ami a videĂł- Ă©s hanghĂ­vĂˇsokhoz kell a weben) gyakran kijĂˇtsszĂˇk a proxy bĹ‘vĂ­tmĂ©nyeket, Ă©s hangtalanul kiszivĂˇrogtatjĂˇk a valĂłdi, otthoni IP-cĂ­medet az oldalaknak. Te azt hiszed, el vagy rejtve, de a weboldal pontosan lĂˇtja a valĂłs IP-det.

## RendszerszintĹ± vs. BĂ¶ngĂ©szĹ‘szintĹ± vĂ©delem

TegyĂĽk fel, hogy letĂ¶ltesz egy valĂłdi, asztali VPN programot (mint a NordVPN szoftvere a Windows-ra vagy a Mac-re). Amikor ezt bekapcsolod, az Ăşgynevezett **RendszerszintĹ±** (System-level) vĂ©delmet ad. A szĂˇmĂ­tĂłgĂ©ped minden egyes programja â€“ a bĂ¶ngĂ©szĹ‘, a Spotify, a Torrent kliensed, a Windows frissĂ­tĂ©sek, a hĂˇttĂ©rben futĂł felhĹ‘-szinkronizĂˇlĂłk â€“ belekerĂĽl a titkosĂ­tott alagĂştba.

Ezzel szemben a Chrome bĹ‘vĂ­tmĂ©ny csak **BĂ¶ngĂ©szĹ‘szintĹ±** vĂ©delmet nyĂşjt.
KĂ©pzeld el Ăşgy, mintha a hĂˇzadon csak a bejĂˇrati ajtĂłt zĂˇrnĂˇd be (a bĂ¶ngĂ©szĹ‘det), de kĂ¶zben minden ablak, a hĂˇtsĂł ajtĂł Ă©s a garĂˇzs nyitva maradna.

Ha a hĂˇttĂ©rben fut a Torrent kliensed, vagy pittyen a Skype egy ĂĽzenettel, azok a programok **NEM** a Chrome-on keresztĂĽl kommunikĂˇlnak, tehĂˇt a bĂ¶ngĂ©szĹ‘s VPN bĹ‘vĂ­tmĂ©ny nem vĂ©di Ĺ‘ket! Ezek az alkalmazĂˇsok a normĂˇl, titkosĂ­tatlan interneteddel lĂ©pnek fel a webre, felfedve a valĂłdi IP-cĂ­medet az internetszolgĂˇltatĂł Ă©s a vilĂˇg elĹ‘tt.

## Mely bĹ‘vĂ­tmĂ©nyekben bĂ­zhatsz meg?

Ne Ă©rts fĂ©lre: a bĂ¶ngĂ©szĹ‘-bĹ‘vĂ­tmĂ©nyeknek van lĂ©tjogosultsĂˇga, de csak akkor, ha tisztĂˇban vagy a korlĂˇtaikkal, Ă©s a megfelelĹ‘ forrĂˇsbĂłl szĂˇrmaznak.

**1. A rosszfiĂşk (KerĂĽld el Ĺ‘ket!):**
Minden olyan Ă¶nĂˇllĂł, ismeretlen hĂˇtterĹ± bĂ¶ngĂ©szĹ‘ kiegĂ©szĂ­tĹ‘, aminek nincs egy valĂłdi, fizetĹ‘s VPN cĂ©g a hĂˇtterĂ©ben (pl. "Hola VPN", "Touch VPN", "Free VPN for Chrome"). Ezek a cĂ©gek gyakran naplĂłzzĂˇk Ă©s eladjĂˇk a bĂ¶ngĂ©szĂ©si szokĂˇsaidat, reklĂˇmokat fecskendeznek a weboldalakra, vagy ami mĂ©g rosszabb: a te sĂˇvszĂ©lessĂ©gedet adjĂˇk el mĂˇsoknak (ahogy a Hola tette korĂˇbban).

**2. A jĂłfiĂşk (A prĂ©mium cĂ©gek bĹ‘vĂ­tmĂ©nyei):**
A nagy, megbĂ­zhatĂł VPN szolgĂˇltatĂłk (mint a Surfshark vagy az CyberGhost VPN) is kĂ­nĂˇlnak bĂ¶ngĂ©szĹ‘ kiegĂ©szĂ­tĹ‘ket. De van egy nagy kĂĽlĂ¶nbsĂ©g: 
- Ezek a kiegĂ©szĂ­tĹ‘k gyakran csak "TĂˇvirĂˇnyĂ­tĂłkĂ©nt" mĹ±kĂ¶dnek a gĂ©pedre telepĂ­tett valĂłdi VPN programhoz. (Ha a Chrome-ban rĂˇnyomsz a bekapcsolĂˇsra, a gĂ©peden elindul a rendszerszintĹ± VPN).
- MĂˇs esetekben ezek Ăşgynevezett "HTTPS Proxik". BĂˇr tovĂˇbbra is csak a bĂ¶ngĂ©szĹ‘t vĂ©dik, ezt mĂˇr titkosĂ­tott csatornĂˇn teszik, Ă©s beĂ©pĂ­tett blokkolĂłkkal (WebRTC szivĂˇrgĂˇs elleni vĂ©delemmel, reklĂˇmblokkolĂłkkal) lĂˇtjĂˇk el Ĺ‘ket.

## Mikor hasznos a kiegĂ©szĂ­tĹ‘, Ă©s mikor kĂ¶telezĹ‘ az asztali App?

Hogy a dolgokat a helyĂĽkre tegyĂĽk, Ă­me a dĂ¶ntĂ©si ĂştmutatĂł:

**HasznĂˇld csak a BĂ¶ngĂ©szĹ‘ BĹ‘vĂ­tmĂ©nyt (egy megbĂ­zhatĂł cĂ©gtĹ‘l), ha:**
- Csak egy gyors, 5 perces geoblokkolĂˇst akarsz feloldani (pl. megnĂ©zni egy kĂĽlfĂ¶ldi hĂ­rportĂˇlt).
- A munkahelyeden vagy az iskolĂˇban vagy, ahol a rendszergazda letiltotta, hogy Asztali szoftvereket (.exe) telepĂ­ts a gĂ©pre, de a Chrome-hoz tudsz bĹ‘vĂ­tmĂ©nyt adni. (Ez egy kivĂˇlĂł kiskapu az irodai tĹ±zfalak megkerĂĽlĂ©sĂ©re!)
- Egy gyenge, rĂ©gi laptopod van, ami belassulna a teljes rendszerszintĹ± titkosĂ­tĂˇstĂłl, Ă©s neked csak arra kell a VPN, hogy bĂ¶ngĂ©szĹ‘bĹ‘l olvass.

**KĂ–TELEZĹ a teljes Asztali AlkalmazĂˇst (Desktop App) hasznĂˇlnod, ha:**
- NyilvĂˇnos Wi-Fi hĂˇlĂłzaton vagy, Ă©s bankolni szeretnĂ©l.
- Torrentezel (P2P fĂˇjlmegosztĂˇs).
- BĂˇrmilyen mĂˇs szoftvert (jĂˇtĂ©kot, levelezĹ‘klienst) hasznĂˇlsz a bĂ¶ngĂ©szĹ‘n kĂ­vĂĽl.
- SzĂĽksĂ©ged van a Kill Switch (vĂ©szleĂˇllĂ­tĂł) funkciĂłra, ami a bĹ‘vĂ­tmĂ©nyekben nem lĂ©tezik.

## Ă–sszegzĂ©s

Egy Chrome vagy Firefox bĹ‘vĂ­tmĂ©ny letĂ¶ltĂ©se kĂ©nyelmes Ă©s gyors megoldĂˇs, de soha ne keverd Ă¶ssze a valĂłdi kiberbiztonsĂˇggal. A legtĂ¶bb "Free VPN" bĹ‘vĂ­tmĂ©ny csupĂˇn egy dicsĹ‘Ă­tett, adatszivĂˇrogtatĂł proxy szerver, ami egy fals biztonsĂˇgĂ©rzetbe ringat. 

Ha igazĂˇn meg akarod vĂ©deni a digitĂˇlis Ă©letedet, tĂ¶ltsd le az Ăˇltalad vĂˇlasztott prĂ©mium VPN (CyberGhost VPN, NordVPN) teljes telepĂ­tĹ‘jĂ©t a szĂˇmĂ­tĂłgĂ©pedre. Ha a "nagytesĂł" fut a hĂˇttĂ©rben, a bĂ¶ngĂ©szĹ‘d is, Ă©s a gĂ©peden futĂł Ă¶sszes tĂ¶bbi program is a lĂ©tezĹ‘ legnagyobb biztonsĂˇgban lesz.
