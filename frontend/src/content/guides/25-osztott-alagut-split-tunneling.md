---
title: "Osztott alagĂşt (Split Tunneling): Mi az Ă©s hogyan mĹ±kĂ¶dik a VPN-ekben?"
description: "Nem akarod, hogy a VPN lelassĂ­tsa a jĂˇtĂ©kaidat, de vĂ©deni akarod a letĂ¶ltĂ©seidet? A Split Tunneling a legokosabb VPN funkciĂł, amirĹ‘l talĂˇn mĂ©g sosem hallottĂˇl!"
date: "2026-07-27"
author: "The VPN Shield Team"
image: "/images/25-osztott-alagut-split-tunneling.png"
category: "Tips & Tricks"
---

# Osztott alagĂşt (Split Tunneling): Mi az Ă©s hogyan mĹ±kĂ¶dik a VPN-ekben?

KĂ©pzeld el, hogy van egy hatalmas, jĂłl vĂ©dett pĂˇncĂ©lautĂłd (a VPN), amivel a vĂˇrost jĂˇrod. TĂ¶kĂ©letes, ha a bankba mĂ©sz vagy Ă©rtĂ©kes csomagot (torrent fĂˇjlokat) szĂˇllĂ­tasz. De ha csak egy kĂˇvĂ©Ă©rt ugranĂˇl le a sarki boltba, a pĂˇncĂ©lautĂł lassĂş, nehĂ©zkes Ă©s feleslegesen sok ĂĽzemanyagot fogyaszt. Mennyivel jobb lenne, ha a garĂˇzsban tartott sportautĂłdat is tudnĂˇd hasznĂˇlni a gyors, veszĂ©lytelen utakra, igaz?

Pontosan ezt a rugalmassĂˇgot adja meg neked az **Osztott AlagĂşt**, azaz a **Split Tunneling** funkciĂł a modern VPN alkalmazĂˇsokban. 

Amikor elĹ‘szĂ¶r hasznĂˇlsz VPN-t, a szoftver ĂˇltalĂˇban "Mindent vagy Semmit" alapon mĹ±kĂ¶dik. Ha bekapcsolod, az egĂ©sz operĂˇciĂłs rendszered (minden egyes alkalmazĂˇsod) a titkosĂ­tott alagĂşton keresztĂĽl kezd el kommunikĂˇlni SvĂˇjccal vagy AmerikĂˇval. Ez biztonsĂˇgos, de gyakran frusztrĂˇlĂł problĂ©mĂˇkat okoz a mindennapokban. A Split Tunneling azonban megengedi, hogy te magad legyĂ©l a forgalomirĂˇnyĂ­tĂł! LĂˇssuk, hogyan oldja meg a funkciĂł a legidegesĂ­tĹ‘bb VPN-problĂ©mĂˇkat!

## A "Mindent vagy Semmit" VPN 3 legnagyobb problĂ©mĂˇja

Ha nincs (vagy nincs bekapcsolva) a Split Tunneling a gĂ©peden, valĂłszĂ­nĹ±leg te is belefutottĂˇl mĂˇr a kĂ¶vetkezĹ‘ falakba:

1. **"Nem tudok kajĂˇt rendelni!"** 
   Fent vagy egy amerikai VPN szerveren, hogy a Netflix amerikai kĂ­nĂˇlatĂˇt tudd nĂ©zni a laptopodon. KĂ¶zben megĂ©hezel, megnyitod a Wolt vagy a Foodpanda appot a telefonodon (ami ugyanarra a VPN-re van kĂ¶tve), a rendszer pedig kĂ¶zli veled, hogy New Yorkban nincsenek elĂ©rhetĹ‘ magyar Ă©ttermek.
2. **"KizĂˇrt a netbankom!"** 
   ElindĂ­tasz egy torrent letĂ¶ltĂ©st a hĂˇttĂ©rben, amihez kĂ¶telezĹ‘ a VPN vĂ©delme. EkĂ¶zben szeretnĂ©l belĂ©pni a magyar bankod applikĂˇciĂłjĂˇba, hogy elutalj egy szĂˇmlĂˇt. A bank biztonsĂˇgi rendszere lĂˇtja, hogy valaki HollandiĂˇbĂłl (a VPN szerveredrĹ‘l) prĂłbĂˇl belĂ©pni a szĂˇmlĂˇdra, Ă©s azonnal riaszt, majd biztonsĂˇgi okokbĂłl zĂˇrolja a hozzĂˇfĂ©rĂ©sedet.
3. **"Laggol a jĂˇtĂ©kom!"** 
   VĂ©deni akarod az e-mailezĂ©sedet, ezĂ©rt megy a VPN. De kĂ¶zben elindĂ­tasz egy Call of Duty vagy League of Legends meccset. A VPN titkosĂ­tĂˇsa miatt a ping-ed (vĂˇlaszidejĹ±d) felugrik 20 ms-rĹ‘l 80 ms-re, te pedig folyamatosan veszĂ­ted a reflex-pĂˇrbajokat. A jĂˇtĂ©khoz rĂˇadĂˇsul teljesen felesleges a VPN titkosĂ­tĂˇsa.

Ezekben a helyzetekben a felhasznĂˇlĂłk tĂ¶bbsĂ©ge idegesen kikapcsolja a VPN-t, elintĂ©zi, amit kell, majd elfelejti visszakapcsolni. A vĂ©delem megszĹ±nik. A Split Tunneling azonban elegĂˇns, vĂ©gleges megoldĂˇst kĂ­nĂˇl ezekre a helyzetekre.

## Hogyan mĹ±kĂ¶dik a Split Tunneling (Osztott AlagĂşt)?

A Split Tunneling funkciĂł aktivĂˇlĂˇsakor a VPN alkalmazĂˇs kettĂ©osztja az internetkapcsolatodat. A te dĂ¶ntĂ©sed alapjĂˇn lĂ©trejĂ¶n:
- **Egy TitkosĂ­tott AlagĂşt (VPN):** Azon alkalmazĂˇsok szĂˇmĂˇra, amiket el akarsz rejteni.
- **Egy NyĂ­lt SĂˇv (NormĂˇl Internet):** Azon alkalmazĂˇsok szĂˇmĂˇra, amik mehetnek az eredeti, helyi IP-cĂ­meddel Ă©s a maximĂˇlis sebessĂ©geddel.

Gyakorlatilag kivĂˇlaszthatod egy listĂˇbĂłl, hogy az eszkĂ¶zeid Ă©s a programjaid melyik sĂˇvot hasznĂˇljĂˇk!

### A Split Tunneling 3 leggyakoribb beĂˇllĂ­tĂˇsa

A prĂ©mium szolgĂˇltatĂłk (mint a Surfshark vagy az CyberGhost VPN) kĂĽlĂ¶nbĂ¶zĹ‘ mĂłdokon engedik a testreszabĂˇst.

1. **Az App-alapĂş kivĂ©tel (Bypass VPN):**
   Ebbe a listĂˇba azokat az alkalmazĂˇsokat teszed be, amiknek **NEM szabad** hasznĂˇlniuk a VPN-t. 
   *PĂ©lda:* Berakod a listĂˇba az OTP Smartbankot, a Woltot Ă©s a CS:GO jĂˇtĂ©kot. 
   *EredmĂ©ny:* A gĂ©peden minden (a torrent, a Netflix, a bĂ¶ngĂ©szĹ‘d) a VPN-en keresztĂĽl megy, Ă­gy biztonsĂˇgban van. De amikor rĂˇkattintasz az OTP appra, az "kikerĂĽli" a VPN alagutat, Ă©s a normĂˇl, magyar IP-cĂ­meddel megy ki a netre, Ă­gy a bank gond nĂ©lkĂĽl beenged.
2. **Az App-alapĂş kĂ©nyszerĂ­tĂ©s (Route via VPN):**
   Ez az elĹ‘zĹ‘nek a fordĂ­tottja. Itt megmondod a VPN-nek, hogy a gĂ©peden semmi ne hasznĂˇlja a titkosĂ­tĂˇst, **KIVĂ‰VE** azokat a programokat, amiket te kivĂˇlasztasz.
   *PĂ©lda:* Berakod a listĂˇba a qBittorrent-et (a letĂ¶ltĹ‘ programot).
   *EredmĂ©ny:* A neted 100%-os sebessĂ©ggel megy, jĂˇtszhatsz, bankolhatsz, bĂ¶ngĂ©szhetsz a normĂˇl IP-cĂ­meddel. De az a bizonyos torrent program, amit kivĂˇlasztottĂˇl, mindig egy betonbiztos VPN alagĂştban fut, Ă­gy a letĂ¶ltĂ©seidet senki sem lĂˇthatja.
3. **Az URL-alapĂş (Weboldal) kivĂ©tel:**
   Bizonyos szolgĂˇltatĂłk (mint a NordVPN bĂ¶ngĂ©szĹ‘bĹ‘vĂ­tmĂ©nye) engedik, hogy konkrĂ©t weboldalakat (URL-eket) vegyĂ©l ki a VPN alĂłl.
   *PĂ©lda:* HozzĂˇadod a `www.netflix.com` oldalt a kivĂ©telekhez.
   *EredmĂ©ny:* Amikor bĂ¶ngĂ©szel, minden oldalra amerikai IP-vel lĂ©psz be (Ă­gy lĂˇtod a geoblokkolt cikkeket), de amikor beĂ­rod a Netflix cĂ­mĂ©t, az a normĂˇl magyar IP-det hasznĂˇlja, Ă­gy visszakapod a magyar feliratokat.

## Minden eszkĂ¶zĂ¶n mĹ±kĂ¶dik a Split Tunneling?

Sajnos nem. Az operĂˇciĂłs rendszerek belsĹ‘ architektĂşrĂˇja miatt vannak korlĂˇtok:
- **Android Ă©s Windows:** Ez a technolĂłgia mennyorszĂˇga. Ezek a rendszerek hihetetlenĂĽl jĂłl tĂˇmogatjĂˇk a Split Tunneling-et. Az androidos telefonokon Ă©s a Windows PC-ken a fenti Ă¶sszes trĂĽkk hibĂˇtlanul, alkalmazĂˇs-szinten beĂˇllĂ­thatĂł.
- **iOS (iPhone/iPad):** Az Apple zĂˇrt rendszere (a "Sandboxing") miatt az iOS nagyon szigorĂşan fogja a VPN-eket. A legtĂ¶bb szolgĂˇltatĂł nem is tud igazi alkalmazĂˇsszintĹ± Split Tunneling-et kĂ­nĂˇlni iPhone-ra, mert az Apple nem engedi, hogy a VPN belenyĂşljon a tĂ¶bbi app hĂˇlĂłzati beĂˇllĂ­tĂˇsaiba.
- **macOS (Macbook):** Az Ăşjabb Apple szĂˇmĂ­tĂłgĂ©peken (fĹ‘leg az M1/M2 chipekkel) a Split Tunneling megoldhatĂł, a jobb VPN cĂ©gek mĂˇr tĂˇmogatjĂˇk is, bĂˇr nehĂ©zkesebb, mint Windowson.
- **Routerek:** Ha magĂˇra a Wi-Fi routerre telepĂ­ted a VPN-t, ott eszkĂ¶z-szintĹ± osztott alagutat csinĂˇlhatsz. PĂ©ldĂˇul megmondod a routernek, hogy az okostĂ©vĂ© forgalma menjen a VPN-en keresztĂĽl (az amerikai NetflixĂ©rt), de a pĂˇrod munkĂˇs laptopja a normĂˇl interneten maradjon, hogy elĂ©rje a helyi cĂ©ges szervereket.

## Ă–sszegzĂ©s

A Split Tunneling pontosan az a fajta "okos" kĂ©nyelmi funkciĂł, ami elvĂˇlasztja a prĂ©mium VPN szolgĂˇltatĂłkat az olcsĂł, tĂ¶meggyĂˇrtott alkalmazĂˇsoktĂłl. Ha unod mĂˇr, hogy a VPN bekapcsolĂˇsa utĂˇn nem tĂ¶lt be a helyi idĹ‘jĂˇrĂˇs alkalmazĂˇsod, vagy kizĂˇr a netbankod, keresd meg a beĂˇllĂ­tĂˇsokban az *Osztott AlagĂşt* (esetleg *Bypasser* vagy *Whitelister*) opciĂłt. SzĂˇnj rĂˇ 5 percet, hogy beĂˇllĂ­tsd a kivĂ©teleket, Ă©s onnantĂłl kezdve Ăşgy Ă©lvezheted a kiberbiztonsĂˇg minden elĹ‘nyĂ©t, hogy kĂ¶zben egyetlen millimĂ©tert sem kell feladnod az internet megszokott kĂ©nyelmĂ©bĹ‘l!
