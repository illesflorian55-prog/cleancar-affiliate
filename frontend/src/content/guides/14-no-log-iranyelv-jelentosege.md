---
title: "A No-Log (naplózásmentes) irányelv jelentősége: Mítosz vagy valóság?"
description: "Minden VPN azt hirdeti, hogy naplózásmentes. De vajon mindannyian igazat mondanak? Tudd meg, miért a No-Log irányelv a VPN-ek legfontosabb (és leggyakrabban hazudott) tulajdonsága!"
date: "2026-07-01"
author: "The VPN Shield Team"
image: "/images/14-no-log-iranyelv-jelentosege.png"
category: "Security"
---

# A No-Log (naplózásmentes) irányelv jelentősége: Mítosz vagy valóság?

Ha valaha is meglátogattad egy VPN (Virtuális Magánhálózat) szolgáltató weboldalát, garantáltan ez volt az első nagybetűs mondat, ami szembejött veled a főoldalon: *"Szigorú No-Log irányelv!"* vagy *"Mi soha nem naplózzuk az adataidat!"*

Ez a hangzatos ígéret a VPN marketing alfája és ómegája. És jó okkal! A felhasználók azért fizetnek a VPN-ekért, hogy elrejtsék a digitális lábnyomukat a kíváncsi internetszolgáltatók (ISP-k), a tech-óriások és a kormányzati megfigyelők elől. De gondolj csak bele a logikába: amikor bekapcsolod a VPN-t, elveszed az adataid feletti kontrollt a saját internetszolgáltatódtól, és... **odaadod azt a VPN szolgáltatónak.** 

Hiszen a VPN szerverein folyik keresztül a teljes forgalmad. Ők technikailag mindent látnak. A kérdés már csak az: elhihetjük-e egy cégnek bemondásra, hogy valóban egyetlen bitnyi adatot sem tárolnak el rólunk? Lássuk, mi a No-Log irányelv valódi jelentősége, és hogyan buknak le azok a cégek, akik csak a marketing kedvéért használják a kifejezést!

## Mi az a "Log", és mit jelent a naplózás?

A számítástechnikában a "Log" (naplófájl) egy olyan rejtett szöveges dokumentum, amit a szerverek írnak minden egyes történésről. Ahogy egy portás felírja a füzetébe, hogy ki mikor lépett be és ki az épületből, úgy a szerverek is rögzíthetik a hálózaton áthaladó forgalmat.

Egy VPN szolgáltató (ha akarja) háromféle naplót vezethet rólad:

1. **A legrosszabb: A Tevékenységi Napló (Activity Logs):** Ez a Szent Grál a megfigyelők számára. Ez a napló tartalmazza pontosan, hogy milyen weboldalakat látogattál meg, mit kerestél a Google-ben, milyen fájlokat töltöttél le torrenten. Ez az a kategória, amivel a VPN cégek az ingyenes verzióikban kereskednek a hirdetőkkel. Ezt a típusú naplózást minden magára valamit is adó VPN cég tiltja.
2. **A veszélyes középút: Csatlakozási Naplók (Connection Logs):** Itt nem látják, hogy mit csinálsz, csak azt rögzítik, hogy a te eredeti (IP) címed mikor és pontosan melyik VPN szerverhez kapcsolódott, és mennyi adatot forgalmazott. Ez ártalmatlannak tűnik, igaz? Tévedés. Ha a rendőrség tudja, hogy valaki egy adott VPN IP-címről követett el egy bűncselekményt hétfő délután 14:00-kor, akkor a csatlakozási naplók (timestamp) alapján pontosan össze tudják kötni az időpontot a te eredeti személyazonosságoddal.
3. **Az ártalmatlan technikai naplók:** Ezt a legtöbb VPN vezeti. Ide tartozik a szerverek általános terheltségének figyelése, vagy az a statisztika, hogy hányszor omlott össze a szoftver. Mivel ezek nem köthetők össze az egyéni felhasználókkal (csak összesített adatok), ez a szint megengedett.

A valódi, "Szigorú No-Log" irányelv azt jelenti, hogy a cég sem az első, sem a második típusú naplót nem vezeti. Semmit. Nulla adatot őriznek arról, hogy ki vagy, és mit csinálsz a hálózatukon.

## Miért életfontosságú a No-Log politika? (A bírósági teszt)

A VPN cégek (akármilyen menő hackereknek is állítják be magukat) bejegyzett, legális vállalatok. Ha egy bűnügyi nyomozás, a szerzői jogvédők, vagy egy elnyomó kormány hatóságai bekopognak az ajtajukon egy bírósági végzéssel, és követelik egy adott IP-cím felhasználójának az adatait, a cégnek engedelmeskednie kell a törvénynek. 

Itt dől el, hogy a No-Log ígéret valós-e vagy sem.

Ha a cég hazudott, és titokban vezetett naplókat, kénytelen lesz átadni azokat a hatóságoknak, te pedig lebuksz. Számos ilyen "botrány" rázta már meg a kiberbiztonsági világot (például a PureVPN vagy az IPVanish hírhedt esetei az elmúlt évtizedben, amikor a "naplózásmentes" ígéreteik ellenére adatokat szolgáltattak ki az FBI-nak).

Ha azonban a cég **valóban** No-Log irányelvet követ, akkor a nyomozók hiába lobogtatják a bírósági papírt. A VPN szolgáltató egyszerűen széttárja a karját, és azt mondja: *"Nagyon sajnáljuk, tiszteljük a törvényt, de nincs mit átadnunk. Nem rögzítettük az adatokat, így nincs meg nekünk."* És mivel olyan adatot nem lehet átadni, ami nem létezik, a felhasználó anonimitása sértetlen marad.

## Honnan tudod, hogy egy VPN nem hazudik? (Az auditálás)

Oké, de hogyan bizonyíthatja be egy cég a felhasználóinak, hogy valami **nincs** ott a szerverein? Itt jön képbe a kiberbiztonság legmagasabb szintje: a **Független Audit**.

A modern, megbízható VPN szolgáltatók (mint az ExpressVPN, a NordVPN vagy a Surfshark) nem várják el, hogy vakon higgy a marketingeseiknek. Ehelyett felbérlik a világ legnagyobb, független könyvvizsgáló és kiberbiztonsági cégeit (mint a PwC, a Deloitte vagy a Cure53), és beengedik őket a saját szerverközpontjaikba.

Az auditorok heteken át forgatják fel a VPN cég forráskódját, átvizsgálják a szerverek beállításait, és megpróbálnak adatokat kinyerni belőlük. Amikor a folyamat lezárul, az auditor cég kiállít egy hivatalos, nyilvános jelentést arról, hogy a VPN valóban naplózásmentes-e. Ha egy VPN cég rendszeresen (évente) átmegy egy ilyen független auditon, arra már rá merheted bízni a magánéletedet.

## A RAM-alapú szerverek: A fizikai garancia

A technológia ma már egy lépéssel tovább ment az ígéreteknél és az auditoknál. A prémium VPN-ek áttértek a **RAM-Only (Kizárólag RAM alapú) szerverek** használatára.

Hagyományosan a szerverek merevlemezeken (HDD/SSD) tárolják az adatokat, ahonnan az információt törölni kell. A RAM (ideiglenes memória) azonban másképp működik. A RAM-hoz folyamatos áramellátás kell az adatok megtartásához. 

A VPN szervereknél ez azt jelenti, hogy az egész operációs rendszer és minden forgalom a RAM-ban fut. Ha a szervert valaha is újraindítják (vagy ha egy hatóság fizikailag lefoglalja a szervert és kihúzza a konnektorból), a memóriában lévő **minden egyes adat azonnal és végérvényesen megsemmisül**. Még ha a VPN cég akarna sem tudna adatokat rögzíteni és átadni. Ez a fizikai lehetetlenség a No-Log irányelv legbiztosabb garanciája.

## Összegzés

Soha ne használd egy VPN szolgáltatását pusztán azért, mert a weboldalán nagy, színes betűkkel hirdeti a No-Log politikát. Különösen az ingyenes VPN-ek esetében ez az ígéret sokszor pofátlan hazugság, hiszen ők pont a te adataid eladásából (naplózásából) élnek.

Mielőtt előfizetsz egy szolgáltatásra, végezz el egy gyors, 2 perces kutatást. Keress rá a szolgáltató nevére, és tedd mellé az "auditált" (audited) vagy "RAM-only" szavakat. Ha a cég bizonyíthatóan átment külső független vizsgálatokon, és merevlemezek nélküli szervereket használ, akkor tudhatod, hogy a digitális lábnyomod valóban azonnal és örökre eltűnik a semmiben, amint bezárod a böngésződet.
