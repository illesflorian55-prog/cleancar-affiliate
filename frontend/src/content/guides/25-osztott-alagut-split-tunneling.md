---
title: "Osztott alagút (Split Tunneling): Mi az és hogyan működik a VPN-ekben?"
description: "Nem akarod, hogy a VPN lelassítsa a játékaidat, de védeni akarod a letöltéseidet? A Split Tunneling a legokosabb VPN funkció, amiről talán még sosem hallottál!"
date: "2026-07-27"
author: "The VPN Shield Team"
image: "/images/25-osztott-alagut-split-tunneling.png"
category: "Tips & Tricks"
---

# Osztott alagút (Split Tunneling): Mi az és hogyan működik a VPN-ekben?

Képzeld el, hogy van egy hatalmas, jól védett páncélautód (a VPN), amivel a várost járod. Tökéletes, ha a bankba mész vagy értékes csomagot (torrent fájlokat) szállítasz. De ha csak egy kávéért ugranál le a sarki boltba, a páncélautó lassú, nehézkes és feleslegesen sok üzemanyagot fogyaszt. Mennyivel jobb lenne, ha a garázsban tartott sportautódat is tudnád használni a gyors, veszélytelen utakra, igaz?

Pontosan ezt a rugalmasságot adja meg neked az **Osztott Alagút**, azaz a **Split Tunneling** funkció a modern VPN alkalmazásokban. 

Amikor először használsz VPN-t, a szoftver általában "Mindent vagy Semmit" alapon működik. Ha bekapcsolod, az egész operációs rendszered (minden egyes alkalmazásod) a titkosított alagúton keresztül kezd el kommunikálni Svájccal vagy Amerikával. Ez biztonságos, de gyakran frusztráló problémákat okoz a mindennapokban. A Split Tunneling azonban megengedi, hogy te magad legyél a forgalomirányító! Lássuk, hogyan oldja meg a funkció a legidegesítőbb VPN-problémákat!

## A "Mindent vagy Semmit" VPN 3 legnagyobb problémája

Ha nincs (vagy nincs bekapcsolva) a Split Tunneling a gépeden, valószínűleg te is belefutottál már a következő falakba:

1. **"Nem tudok kaját rendelni!"** 
   Fent vagy egy amerikai VPN szerveren, hogy a Netflix amerikai kínálatát tudd nézni a laptopodon. Közben megéhezel, megnyitod a Wolt vagy a Foodpanda appot a telefonodon (ami ugyanarra a VPN-re van kötve), a rendszer pedig közli veled, hogy New Yorkban nincsenek elérhető magyar éttermek.
2. **"Kizárt a netbankom!"** 
   Elindítasz egy torrent letöltést a háttérben, amihez kötelező a VPN védelme. Eközben szeretnél belépni a magyar bankod applikációjába, hogy elutalj egy számlát. A bank biztonsági rendszere látja, hogy valaki Hollandiából (a VPN szerveredről) próbál belépni a számládra, és azonnal riaszt, majd biztonsági okokból zárolja a hozzáférésedet.
3. **"Laggol a játékom!"** 
   Védeni akarod az e-mailezésedet, ezért megy a VPN. De közben elindítasz egy Call of Duty vagy League of Legends meccset. A VPN titkosítása miatt a ping-ed (válaszidejűd) felugrik 20 ms-ről 80 ms-re, te pedig folyamatosan veszíted a reflex-párbajokat. A játékhoz ráadásul teljesen felesleges a VPN titkosítása.

Ezekben a helyzetekben a felhasználók többsége idegesen kikapcsolja a VPN-t, elintézi, amit kell, majd elfelejti visszakapcsolni. A védelem megszűnik. A Split Tunneling azonban elegáns, végleges megoldást kínál ezekre a helyzetekre.

## Hogyan működik a Split Tunneling (Osztott Alagút)?

A Split Tunneling funkció aktiválásakor a VPN alkalmazás kettéosztja az internetkapcsolatodat. A te döntésed alapján létrejön:
- **Egy Titkosított Alagút (VPN):** Azon alkalmazások számára, amiket el akarsz rejteni.
- **Egy Nyílt Sáv (Normál Internet):** Azon alkalmazások számára, amik mehetnek az eredeti, helyi IP-címeddel és a maximális sebességeddel.

Gyakorlatilag kiválaszthatod egy listából, hogy az eszközeid és a programjaid melyik sávot használják!

### A Split Tunneling 3 leggyakoribb beállítása

A prémium szolgáltatók (mint a Surfshark vagy az ExpressVPN) különböző módokon engedik a testreszabást.

1. **Az App-alapú kivétel (Bypass VPN):**
   Ebbe a listába azokat az alkalmazásokat teszed be, amiknek **NEM szabad** használniuk a VPN-t. 
   *Példa:* Berakod a listába az OTP Smartbankot, a Woltot és a CS:GO játékot. 
   *Eredmény:* A gépeden minden (a torrent, a Netflix, a böngésződ) a VPN-en keresztül megy, így biztonságban van. De amikor rákattintasz az OTP appra, az "kikerüli" a VPN alagutat, és a normál, magyar IP-címeddel megy ki a netre, így a bank gond nélkül beenged.
2. **Az App-alapú kényszerítés (Route via VPN):**
   Ez az előzőnek a fordítottja. Itt megmondod a VPN-nek, hogy a gépeden semmi ne használja a titkosítást, **KIVÉVE** azokat a programokat, amiket te kiválasztasz.
   *Példa:* Berakod a listába a qBittorrent-et (a letöltő programot).
   *Eredmény:* A neted 100%-os sebességgel megy, játszhatsz, bankolhatsz, böngészhetsz a normál IP-címeddel. De az a bizonyos torrent program, amit kiválasztottál, mindig egy betonbiztos VPN alagútban fut, így a letöltéseidet senki sem láthatja.
3. **Az URL-alapú (Weboldal) kivétel:**
   Bizonyos szolgáltatók (mint a NordVPN böngészőbővítménye) engedik, hogy konkrét weboldalakat (URL-eket) vegyél ki a VPN alól.
   *Példa:* Hozzáadod a `www.netflix.com` oldalt a kivételekhez.
   *Eredmény:* Amikor böngészel, minden oldalra amerikai IP-vel lépsz be (így látod a geoblokkolt cikkeket), de amikor beírod a Netflix címét, az a normál magyar IP-det használja, így visszakapod a magyar feliratokat.

## Minden eszközön működik a Split Tunneling?

Sajnos nem. Az operációs rendszerek belső architektúrája miatt vannak korlátok:
- **Android és Windows:** Ez a technológia mennyországa. Ezek a rendszerek hihetetlenül jól támogatják a Split Tunneling-et. Az androidos telefonokon és a Windows PC-ken a fenti összes trükk hibátlanul, alkalmazás-szinten beállítható.
- **iOS (iPhone/iPad):** Az Apple zárt rendszere (a "Sandboxing") miatt az iOS nagyon szigorúan fogja a VPN-eket. A legtöbb szolgáltató nem is tud igazi alkalmazásszintű Split Tunneling-et kínálni iPhone-ra, mert az Apple nem engedi, hogy a VPN belenyúljon a többi app hálózati beállításaiba.
- **macOS (Macbook):** Az újabb Apple számítógépeken (főleg az M1/M2 chipekkel) a Split Tunneling megoldható, a jobb VPN cégek már támogatják is, bár nehézkesebb, mint Windowson.
- **Routerek:** Ha magára a Wi-Fi routerre telepíted a VPN-t, ott eszköz-szintű osztott alagutat csinálhatsz. Például megmondod a routernek, hogy az okostévé forgalma menjen a VPN-en keresztül (az amerikai Netflixért), de a párod munkás laptopja a normál interneten maradjon, hogy elérje a helyi céges szervereket.

## Összegzés

A Split Tunneling pontosan az a fajta "okos" kényelmi funkció, ami elválasztja a prémium VPN szolgáltatókat az olcsó, tömeggyártott alkalmazásoktól. Ha unod már, hogy a VPN bekapcsolása után nem tölt be a helyi időjárás alkalmazásod, vagy kizár a netbankod, keresd meg a beállításokban az *Osztott Alagút* (esetleg *Bypasser* vagy *Whitelister*) opciót. Szánj rá 5 percet, hogy beállítsd a kivételeket, és onnantól kezdve úgy élvezheted a kiberbiztonság minden előnyét, hogy közben egyetlen millimétert sem kell feladnod az internet megszokott kényelméből!
