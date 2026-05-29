---
title: "A No-Log (naplĂłzĂˇsmentes) irĂˇnyelv jelentĹ‘sĂ©ge: MĂ­tosz vagy valĂłsĂˇg?"
description: "Minden VPN azt hirdeti, hogy naplĂłzĂˇsmentes. De vajon mindannyian igazat mondanak? Tudd meg, miĂ©rt a No-Log irĂˇnyelv a VPN-ek legfontosabb (Ă©s leggyakrabban hazudott) tulajdonsĂˇga!"
date: "2026-07-01"
author: "The VPN Shield Team"
image: "/images/14-no-log-iranyelv-jelentosege.png"
category: "Security"
---

# A No-Log (naplĂłzĂˇsmentes) irĂˇnyelv jelentĹ‘sĂ©ge: MĂ­tosz vagy valĂłsĂˇg?

Ha valaha is meglĂˇtogattad egy VPN (VirtuĂˇlis MagĂˇnhĂˇlĂłzat) szolgĂˇltatĂł weboldalĂˇt, garantĂˇltan ez volt az elsĹ‘ nagybetĹ±s mondat, ami szembejĂ¶tt veled a fĹ‘oldalon: *"SzigorĂş No-Log irĂˇnyelv!"* vagy *"Mi soha nem naplĂłzzuk az adataidat!"*

Ez a hangzatos Ă­gĂ©ret a VPN marketing alfĂˇja Ă©s ĂłmegĂˇja. Ă‰s jĂł okkal! A felhasznĂˇlĂłk azĂ©rt fizetnek a VPN-ekĂ©rt, hogy elrejtsĂ©k a digitĂˇlis lĂˇbnyomukat a kĂ­vĂˇncsi internetszolgĂˇltatĂłk (ISP-k), a tech-ĂłriĂˇsok Ă©s a kormĂˇnyzati megfigyelĹ‘k elĹ‘l. De gondolj csak bele a logikĂˇba: amikor bekapcsolod a VPN-t, elveszed az adataid feletti kontrollt a sajĂˇt internetszolgĂˇltatĂłdtĂłl, Ă©s... **odaadod azt a VPN szolgĂˇltatĂłnak.** 

Hiszen a VPN szerverein folyik keresztĂĽl a teljes forgalmad. Ĺk technikailag mindent lĂˇtnak. A kĂ©rdĂ©s mĂˇr csak az: elhihetjĂĽk-e egy cĂ©gnek bemondĂˇsra, hogy valĂłban egyetlen bitnyi adatot sem tĂˇrolnak el rĂłlunk? LĂˇssuk, mi a No-Log irĂˇnyelv valĂłdi jelentĹ‘sĂ©ge, Ă©s hogyan buknak le azok a cĂ©gek, akik csak a marketing kedvĂ©Ă©rt hasznĂˇljĂˇk a kifejezĂ©st!

## Mi az a "Log", Ă©s mit jelent a naplĂłzĂˇs?

A szĂˇmĂ­tĂˇstechnikĂˇban a "Log" (naplĂłfĂˇjl) egy olyan rejtett szĂ¶veges dokumentum, amit a szerverek Ă­rnak minden egyes tĂ¶rtĂ©nĂ©srĹ‘l. Ahogy egy portĂˇs felĂ­rja a fĂĽzetĂ©be, hogy ki mikor lĂ©pett be Ă©s ki az Ă©pĂĽletbĹ‘l, Ăşgy a szerverek is rĂ¶gzĂ­thetik a hĂˇlĂłzaton ĂˇthaladĂł forgalmat.

Egy VPN szolgĂˇltatĂł (ha akarja) hĂˇromfĂ©le naplĂłt vezethet rĂłlad:

1. **A legrosszabb: A TevĂ©kenysĂ©gi NaplĂł (Activity Logs):** Ez a Szent GrĂˇl a megfigyelĹ‘k szĂˇmĂˇra. Ez a naplĂł tartalmazza pontosan, hogy milyen weboldalakat lĂˇtogattĂˇl meg, mit kerestĂ©l a Google-ben, milyen fĂˇjlokat tĂ¶ltĂ¶ttĂ©l le torrenten. Ez az a kategĂłria, amivel a VPN cĂ©gek az ingyenes verziĂłikban kereskednek a hirdetĹ‘kkel. Ezt a tĂ­pusĂş naplĂłzĂˇst minden magĂˇra valamit is adĂł VPN cĂ©g tiltja.
2. **A veszĂ©lyes kĂ¶zĂ©pĂşt: CsatlakozĂˇsi NaplĂłk (Connection Logs):** Itt nem lĂˇtjĂˇk, hogy mit csinĂˇlsz, csak azt rĂ¶gzĂ­tik, hogy a te eredeti (IP) cĂ­med mikor Ă©s pontosan melyik VPN szerverhez kapcsolĂłdott, Ă©s mennyi adatot forgalmazott. Ez Ăˇrtalmatlannak tĹ±nik, igaz? TĂ©vedĂ©s. Ha a rendĹ‘rsĂ©g tudja, hogy valaki egy adott VPN IP-cĂ­mrĹ‘l kĂ¶vetett el egy bĹ±ncselekmĂ©nyt hĂ©tfĹ‘ dĂ©lutĂˇn 14:00-kor, akkor a csatlakozĂˇsi naplĂłk (timestamp) alapjĂˇn pontosan Ă¶ssze tudjĂˇk kĂ¶tni az idĹ‘pontot a te eredeti szemĂ©lyazonossĂˇgoddal.
3. **Az Ăˇrtalmatlan technikai naplĂłk:** Ezt a legtĂ¶bb VPN vezeti. Ide tartozik a szerverek ĂˇltalĂˇnos terheltsĂ©gĂ©nek figyelĂ©se, vagy az a statisztika, hogy hĂˇnyszor omlott Ă¶ssze a szoftver. Mivel ezek nem kĂ¶thetĹ‘k Ă¶ssze az egyĂ©ni felhasznĂˇlĂłkkal (csak Ă¶sszesĂ­tett adatok), ez a szint megengedett.

A valĂłdi, "SzigorĂş No-Log" irĂˇnyelv azt jelenti, hogy a cĂ©g sem az elsĹ‘, sem a mĂˇsodik tĂ­pusĂş naplĂłt nem vezeti. Semmit. Nulla adatot Ĺ‘riznek arrĂłl, hogy ki vagy, Ă©s mit csinĂˇlsz a hĂˇlĂłzatukon.

## MiĂ©rt Ă©letfontossĂˇgĂş a No-Log politika? (A bĂ­rĂłsĂˇgi teszt)

A VPN cĂ©gek (akĂˇrmilyen menĹ‘ hackereknek is ĂˇllĂ­tjĂˇk be magukat) bejegyzett, legĂˇlis vĂˇllalatok. Ha egy bĹ±nĂĽgyi nyomozĂˇs, a szerzĹ‘i jogvĂ©dĹ‘k, vagy egy elnyomĂł kormĂˇny hatĂłsĂˇgai bekopognak az ajtajukon egy bĂ­rĂłsĂˇgi vĂ©gzĂ©ssel, Ă©s kĂ¶vetelik egy adott IP-cĂ­m felhasznĂˇlĂłjĂˇnak az adatait, a cĂ©gnek engedelmeskednie kell a tĂ¶rvĂ©nynek. 

Itt dĹ‘l el, hogy a No-Log Ă­gĂ©ret valĂłs-e vagy sem.

Ha a cĂ©g hazudott, Ă©s titokban vezetett naplĂłkat, kĂ©nytelen lesz Ăˇtadni azokat a hatĂłsĂˇgoknak, te pedig lebuksz. SzĂˇmos ilyen "botrĂˇny" rĂˇzta mĂˇr meg a kiberbiztonsĂˇgi vilĂˇgot (pĂ©ldĂˇul a PureVPN vagy az IPVanish hĂ­rhedt esetei az elmĂşlt Ă©vtizedben, amikor a "naplĂłzĂˇsmentes" Ă­gĂ©reteik ellenĂ©re adatokat szolgĂˇltattak ki az FBI-nak).

Ha azonban a cĂ©g **valĂłban** No-Log irĂˇnyelvet kĂ¶vet, akkor a nyomozĂłk hiĂˇba lobogtatjĂˇk a bĂ­rĂłsĂˇgi papĂ­rt. A VPN szolgĂˇltatĂł egyszerĹ±en szĂ©ttĂˇrja a karjĂˇt, Ă©s azt mondja: *"Nagyon sajnĂˇljuk, tiszteljĂĽk a tĂ¶rvĂ©nyt, de nincs mit Ăˇtadnunk. Nem rĂ¶gzĂ­tettĂĽk az adatokat, Ă­gy nincs meg nekĂĽnk."* Ă‰s mivel olyan adatot nem lehet Ăˇtadni, ami nem lĂ©tezik, a felhasznĂˇlĂł anonimitĂˇsa sĂ©rtetlen marad.

## Honnan tudod, hogy egy VPN nem hazudik? (Az auditĂˇlĂˇs)

OkĂ©, de hogyan bizonyĂ­thatja be egy cĂ©g a felhasznĂˇlĂłinak, hogy valami **nincs** ott a szerverein? Itt jĂ¶n kĂ©pbe a kiberbiztonsĂˇg legmagasabb szintje: a **FĂĽggetlen Audit**.

A modern, megbĂ­zhatĂł VPN szolgĂˇltatĂłk (mint az CyberGhost VPN, a NordVPN vagy a Surfshark) nem vĂˇrjĂˇk el, hogy vakon higgy a marketingeseiknek. Ehelyett felbĂ©rlik a vilĂˇg legnagyobb, fĂĽggetlen kĂ¶nyvvizsgĂˇlĂł Ă©s kiberbiztonsĂˇgi cĂ©geit (mint a PwC, a Deloitte vagy a Cure53), Ă©s beengedik Ĺ‘ket a sajĂˇt szerverkĂ¶zpontjaikba.

Az auditorok heteken Ăˇt forgatjĂˇk fel a VPN cĂ©g forrĂˇskĂłdjĂˇt, ĂˇtvizsgĂˇljĂˇk a szerverek beĂˇllĂ­tĂˇsait, Ă©s megprĂłbĂˇlnak adatokat kinyerni belĹ‘lĂĽk. Amikor a folyamat lezĂˇrul, az auditor cĂ©g kiĂˇllĂ­t egy hivatalos, nyilvĂˇnos jelentĂ©st arrĂłl, hogy a VPN valĂłban naplĂłzĂˇsmentes-e. Ha egy VPN cĂ©g rendszeresen (Ă©vente) Ăˇtmegy egy ilyen fĂĽggetlen auditon, arra mĂˇr rĂˇ merheted bĂ­zni a magĂˇnĂ©letedet.

## A RAM-alapĂş szerverek: A fizikai garancia

A technolĂłgia ma mĂˇr egy lĂ©pĂ©ssel tovĂˇbb ment az Ă­gĂ©reteknĂ©l Ă©s az auditoknĂˇl. A prĂ©mium VPN-ek ĂˇttĂ©rtek a **No-Spy (KizĂˇrĂłlag RAM alapĂş) szerverek** hasznĂˇlatĂˇra.

HagyomĂˇnyosan a szerverek merevlemezeken (HDD/SSD) tĂˇroljĂˇk az adatokat, ahonnan az informĂˇciĂłt tĂ¶rĂ¶lni kell. A RAM (ideiglenes memĂłria) azonban mĂˇskĂ©pp mĹ±kĂ¶dik. A RAM-hoz folyamatos ĂˇramellĂˇtĂˇs kell az adatok megtartĂˇsĂˇhoz. 

A VPN szervereknĂ©l ez azt jelenti, hogy az egĂ©sz operĂˇciĂłs rendszer Ă©s minden forgalom a RAM-ban fut. Ha a szervert valaha is ĂşjraindĂ­tjĂˇk (vagy ha egy hatĂłsĂˇg fizikailag lefoglalja a szervert Ă©s kihĂşzza a konnektorbĂłl), a memĂłriĂˇban lĂ©vĹ‘ **minden egyes adat azonnal Ă©s vĂ©gĂ©rvĂ©nyesen megsemmisĂĽl**. MĂ©g ha a VPN cĂ©g akarna sem tudna adatokat rĂ¶gzĂ­teni Ă©s Ăˇtadni. Ez a fizikai lehetetlensĂ©g a No-Log irĂˇnyelv legbiztosabb garanciĂˇja.

## Ă–sszegzĂ©s

Soha ne hasznĂˇld egy VPN szolgĂˇltatĂˇsĂˇt pusztĂˇn azĂ©rt, mert a weboldalĂˇn nagy, szĂ­nes betĹ±kkel hirdeti a No-Log politikĂˇt. KĂĽlĂ¶nĂ¶sen az ingyenes VPN-ek esetĂ©ben ez az Ă­gĂ©ret sokszor pofĂˇtlan hazugsĂˇg, hiszen Ĺ‘k pont a te adataid eladĂˇsĂˇbĂłl (naplĂłzĂˇsĂˇbĂłl) Ă©lnek.

MielĹ‘tt elĹ‘fizetsz egy szolgĂˇltatĂˇsra, vĂ©gezz el egy gyors, 2 perces kutatĂˇst. Keress rĂˇ a szolgĂˇltatĂł nevĂ©re, Ă©s tedd mellĂ© az "auditĂˇlt" (audited) vagy "No-Spy" szavakat. Ha a cĂ©g bizonyĂ­thatĂłan Ăˇtment kĂĽlsĹ‘ fĂĽggetlen vizsgĂˇlatokon, Ă©s merevlemezek nĂ©lkĂĽli szervereket hasznĂˇl, akkor tudhatod, hogy a digitĂˇlis lĂˇbnyomod valĂłban azonnal Ă©s Ă¶rĂ¶kre eltĹ±nik a semmiben, amint bezĂˇrod a bĂ¶ngĂ©szĹ‘det.
