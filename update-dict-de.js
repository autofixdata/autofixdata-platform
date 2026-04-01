const fs = require('fs');
const path = 'C:/Users/Ayoub/Desktop/Asset-Manager/artifacts/autofixdata-next/src/dictionaries/de.json';
const dict = JSON.parse(fs.readFileSync(path, 'utf8'));

dict.alldata = {
  ...dict.alldata,
  statsBar: [
    { value: `44.000+`, label: `Fahrzeuge` },
    { value: `Direkt-OEM`, label: `Originaldaten` },
    { value: `Größte`, label: `TSB-Datenbank` },
    { value: `Von AutoZone`, label: `Industriestandard` }
  ],
  featuresHeading: `Was ALLDATA in Ihrem Abonnement beinhaltet`,
  featuresSubheading: `ALLDATA ist der Goldstandard für OEM-Reparaturdaten – weltweit von professionellen Technikern und Vertragshändlern genutzt. Jeder Datenpunkt stammt direkt von den Fahrzeugherstellern; unbearbeitet und unverkürzt.`,
  features: [
    { title: `Unbearbeitete OEM-Reparaturverfahren`, desc: `Greifen Sie auf exakte Reparaturverfahren direkt von den Herstellern zu – nichts wird bearbeitet, zusammengefasst oder interpretiert. Es sind die gleichen Daten, die von Vertragshändlern verwendet werden.` },
    { title: `Technische Service-Bulletins (TSBs)`, desc: `Die umfassendste TSB-Bibliothek der Branche. Erkennen Sie vom Hersteller anerkannte Probleme und deren offizielle Lösungen, bevor Sie überhaupt einen Scanner anschließen.` },
    { title: `Schaltpläne`, desc: `Vollständige elektrische Schaltpläne für jedes Karosseriesystem. Verfolgen Sie Motormanagement-, ABS-, SRS-, Karosseriesteuerungs- und CAN-Bus-Netzwerke mit werksgetreuen Diagrammen.` },
    { title: `Rückrufinformationen`, desc: `Sofortiger Zugriff auf alle NHTSA-Sicherheitsrückrufe pro Fahrzeug, so dass Ihre Werkstatt ein vollständiges Bild bekannter Sicherheits- oder Qualitätsprobleme erhält.` },
    { title: `Diagnoseflussdiagramme`, desc: `Schritt-für-Schritt-OEM-Diagnose-Entscheidungsbäume für alle wichtigen Fehlercodes (DTCs). Folgen Sie der exakten Testsequenz, die von Händlertechnikern verwendet wird.` },
    { title: `Arbeitszeiten & Kostenvoranschläge`, desc: `Pauschale OEM-Arbeitszeiten für jedes Reparaturverfahren, was genaue Kostenvoranschläge und eine realistische Terminplanung für Ihre Werkstatt ermöglicht.` }
  ],
  whyHeading: `Der Industriestandard für OEM-Daten`,
  whyBody: `ALLDATA wird von über 400.000 professionellen Technikern weltweit genutzt und deckt mehr als 44.000 Fahrzeuganwendungen ab. Im Gegensatz zu Drittanbietern, die Herstellerinformationen interpretieren und zusammenfassen, veröffentlicht ALLDATA die exakten Werksdokumente.`,
  whyList: [
    `Erhalten Sie OEM-Daten direkt aus dem Werk – unverkürzt`,
    `Umfassendste TSB-Datenbank des Zweitmarktes für Automobile`,
    `Vollständige NHTSA-Rückruf- und Sicherheitsdatenbank`,
    `OEM-Flussdiagramme zur schnellen Diagnose (DTCs)`,
    `Umfassende Richtlinien für Arbeitszeiten zur genauen Kalkulation`
  ],
  keyStatsHeading: `ALLDATA Wichtige Kennzahlen`,
  keyStats: [
    { label: `Fahrzeugabdeckung`, value: `44.000+ Modelle` },
    { label: `OEM TSBs in Datenbank`, value: `6 Mio.+` },
    { label: `Professionelle Nutzer`, value: `400.000+` },
    { label: `Datenaktualisierungen`, value: `Kontinuierlich` },
    { label: `Abgedeckte Jahrgänge`, value: `1982–2026` }
  ],
  faqHeading: `Häufig gestellte Fragen zu ALLDATA`,
  faqs: [
    { q: `Was ist ALLDATA?`, a: `ALLDATA ist die führende Quelle für unbearbeitete OEM-Reparaturinformationen in der Automobilindustrie, veröffentlicht von AutoZone.` },
    { q: `Ist ALLDATA in allen Abonnements von Auto Fix Data enthalten?`, a: `Ja. Alle Auto Fix Data Pläne beinhalten den vollen Zugriff auf ALLDATA sowie AutoData, Haynes Pro, Mitchell1 und Identifix – fünf Premium-Datenbanken unter einem Abonnement.` },
    { q: `Hat ALLDATA eine gute Abdeckung für europäische Fahrzeuge?`, a: `ALLDATA bietet eine starke Abdeckung für nordamerikanische und große Importmarken. Für eine sehr tiefe europäische Abdeckung bietet das in Ihrem Abo enthaltene AutoData die perfekte Ergänzung.` },
    { q: `Kann ALLDATA bei der Fehlercode-Diagnose (DTC) helfen?`, a: `Ja. ALLDATA bietet umfassende OEM-Diagnoseflussdiagramme für alle Hauptfehlercodes – exakt die gleichen Entscheidungsbäume, die von Händlertechnikern verwendet werden.` },
    { q: `Wie oft wird ALLDATA aktualisiert?`, a: `ALLDATA wird kontinuierlich aktualisiert, wenn Hersteller neue TSBs, Rückrufe und Serviceverfahren veröffentlichen.` }
  ],
  ctaHeading: `Greifen Sie über Auto Fix Data auf ALLDATA zu`,
  ctaBody: `Auto Fix Data ist ein autorisierter ALLDATA-Wiederverkäufer. Ihr Abonnement gewährt Ihnen neben ALLDATA auch vollen Zugang zu AutoData, Haynes Pro, Mitchell1 und Identifix.`,
  ctaCompare: `Vergleiche mit Alternativen ansehen`
};

dict.autodata = {
  ...dict.autodata,
  statsBar: [
    { value: `35+ Jahre`, label: `Europäische Daten` },
    { value: `150M+`, label: `Fahrzeuge abgedeckt` },
    { value: `OEM`, label: `Originalspezifikationen` },
    { value: `Standard`, label: `Werkstatt-Plattform` }
  ],
  featuresHeading: `Was AutoData in Ihrem Abonnement beinhaltet`,
  featuresSubheading: `AutoData ist seit über 35 Jahren der Maßstab für technische Daten in europäischen Werkstätten. Von Ölfüllmengen bis hin zu Zahnriemen-Wechselintervallen liefert AutoData die präzisen Spezifikationen.`,
  features: [
    { title: `Wartungspläne`, desc: `Umfassende vom OEM vorgeschriebene Wartungsintervalle, einschließlich Ölsorten, Flüssigkeitsfüllmengen. und Austauschplänen für Filter und Riemen.` },
    { title: `Wartungsverfahren`, desc: `Detaillierte Schritt-für-Schritt-Anleitungen für Routinewartungsarbeiten, einschließlich des Austauschs von Zahnriemen und Antriebsriemen, mit Werkzeugreferenzen und Anzugsdrehmomenten.` },
    { title: `Technische Spezifikationen`, desc: `Schneller Zugriff auf Radeinstellungen, Reifendrücke, Batteriespezifikationen, Zündkerzeneinstellungen sowie Spezifikationen der Klimaanlage.` },
    { title: `Schaltpläne`, desc: `Klare und standardisierte Schaltpläne, die das Motormanagement, ABS, Klimaanlagen und wichtige Karosserie-Elektriksysteme abdecken.` },
    { title: `Bauteilorte`, desc: `Interaktive Diagramme, die die genauen Positionen von Sicherungen, Sensoren, Relais und Steuergeräten zeigen, um eine schnellere Diagnose zu ermöglichen.` },
    { title: `DTC-Suche`, desc: `Umfassende Fehlercodedefinitionen mit OBD2- und herstellerspezifischen Codes, einschließlich wahrscheinlicher Ursachen.` }
  ],
  whyHeading: `Der Standard in europäischen Werkstätten`,
  whyBody: `AutoData ist besonders stark für unabhängige Werkstätten, die sich auf europäische Marken konzentrieren. Es ist der Standard bei Servicestationen für Renault, VW, Audi, SEAT und Alfa Romeo.`,
  whyList: [
    `Spezialist für europäische Marken in OEM-Tiefe`,
    `Standard für Inspektions-, Service- und Ölwechselintervalle`,
    `Daten für Zahn- und Steuerketten sowie Werkzeuglisten`,
    `Wartungsdaten für die Klimaanlage und Kältemittelspezifikationen`,
    `Detaillierte Motormanagement-Testsequenzen für alle Fahrzeuge`
  ],
  keyStatsHeading: `AutoData - Die wichtigsten Zahlen`,
  keyStats: [
    { label: `Pionier seit`, value: `35+ Jahren` },
    { label: `Europa-Marken`, value: `Alle` },
    { label: `Datenpunkte/Auto`, value: `10.000+` },
    { label: `Frequenz`, value: `Wöchentliches Update` },
    { label: `Support`, value: `50+ Länder` }
  ],
  ctaHeading: `Beziehen Sie AutoData jetzt über Auto Fix Data`,
  ctaBody: `Auto Fix Data ist autorisierter Reseller. Mit nur einer Anmeldung erhalten Sie AutoData sowie ALLDATA, Haynes Pro, Mitchell1 und Identifix in einer einzigen Suite.`,
  ctaCompare: `Jetzt Alternativen vergleichen`
};

dict.haynesPro = {
  ...dict.haynesPro,
  statsBar: [
    { value: `80+ Jahre`, label: `Haynes Erbe` },
    { value: `Professionell`, label: `Datenqualität` },
    { value: `Illustriert`, label: `Verfahren` },
    { value: `OEM`, label: `Bezugsquelle` }
  ],
  featuresHeading: `Haynes Pro — Weit mehr als das Verbraucher-Handbuch`,
  featuresSubheading: `Haynes Pro ist die professionelle Plattform, die speziell für Werkstätten entwickelt wurde. Sie kombiniert die Klarheit und leichte Verständlichkeit der Haynes-Handbücher.`,
  features: [
    { title: `Werkstatthandbücher`, desc: `Professionelle Werkstatthandbücher auf Basis der OEM-Dokumentation für alle gängigen Reparaturaufgaben.` },
    { title: `Technische Spezifikationen`, desc: `Vollständige technische Fahrzeuginformationen, darunter Anzugsdrehmomente, Abmessungen, Füllmengen.` },
    { title: `Interaktive Schaltpläne`, desc: `Farbcodierte VESA-Schaltpläne und Diagramme des Motormanagements mit Pinbelegungen der Steuergeräte.` },
    { title: `Servicezeitpläne`, desc: `Genaues Abbild der Hersteller-Wartungsintervalle und Checklisten für einen exakten Service.` },
    { title: `Komponenten-Explosionszeichnungen`, desc: `Hochauflösende Skizzen und Explosionszeichnungen zu absolut jeder Hauptreparatur für sofortiges Verständnis.` },
    { title: `Motorenüberholung`, desc: `Detaillierte Herstellervorgaben wie Lagermaße, Ventilsteuerzeiten und vieles mehr für Motorüberholungen.` }
  ],
  whyHeading: `Wer profitiert am meisten von Haynes Pro?`,
  whyBody: `Haynes Pro wird besonders von unabhängigen Werkstätten geschätzt, die klar strukturierte, bebilderte Abläufe in Kombination mit soliden technischen Daten benötigen.`,
  whyList: [
    `Unabhängige Werkstätten und Solo-Mechaniker`,
    `Ausbildungsstätten für Lehrlinge in der Kfz-Mechanik`,
    `TÜV/MOT Prüfstellen und allgemeine Inspektionscenter`,
    `Techniker bei Wartung von sehr gemischten markenunabhängigen Fuhrparks`
  ],
  keyStatsHeading: `Haynes Pro Statistiken`,
  keyStats: [
    { label: `Erbe der Marke`, value: `80+ Jahre` },
    { label: `In der Datenbank`, value: `150M+ Autos` },
    { label: `Illustriert`, value: `100% visuell` },
    { label: `Nutzung`, value: `Web oder App` }
  ],
  faqHeading: `Häufig gestellte Fragen zu Haynes Pro`,
  faqs: [
    { q: `Ist Haynes Pro identisch mit den gedruckten Heimwerker-Büchern?`, a: `Nein. Haynes Pro ist ausschließlich für professionelle Werkstätten gedacht und nutzt originale OEM Daten der Werkshersteller.` },
    { q: `Verfügt Haynes Pro über gute europäische Schaltpläne?`, a: `Ja. Haynes Pro ist bekannt für exzellente farbige Verdrahtungspläne (VESA System) mit interaktiven Komponenten für alle Systeme.` },
    { q: `Welche Fahrzeuge werden abgedeckt?`, a: `Es deckt über 150 Millionen Fahrzeuge ab (ab ca. 1990 bis heute), mit Fokus auf den stark wachsenden europäischen Markt.` },
    { q: `Ist Haynes Pro in meinem Jahresabo enthalten?`, a: `Ja, es fallen keine Extrakosten an; Sie erhalten bei uns vollen Zugang.` }
  ],
  ctaHeading: `Fordern Sie Haynes Pro über uns an`,
  ctaBody: `Starten Sie noch heute und profitieren Sie vom unbegrenzten Zugriff auf die wichtigsten Reparaturseiten inklusive Haynes Pro.`,
  ctaCompare: `Andere Optionen vergleichen`
};

dict.mitchell1 = {
  ...dict.mitchell1,
  statsBar: [
    { value: `ProDemand`, label: `Plattform-Name` },
    { value: `SureTrack`, label: `Echte Fälle` },
    { value: `1983–2026`, label: `Fahrzeuge` },
    { value: `Snap-on®`, label: `Hintergrund` }
  ],
  featuresHeading: `Mitchell1 ProDemand — Das ist alles mit dabei`,
  featuresSubheading: `ProDemand verknüpft erstklassige OEM-Reparaturinformationen mit der Mitchell1 SureTrack-Funktion. Letzteres stützt sich auf Millionen tatsächlichen und dokumentierten Reparaturen aus dem Alltag echter Mechaniker.`,
  features: [
    { title: `ProDemand Original-Reparaturdaten`, desc: `Branchenführende Systemabdeckung der Import- und Inlandsfahrzeuge (USA) basierend auf ungeschönten OEM Handbüchern seit 1983.` },
    { title: `SureTrack Experteninformationen`, desc: `Echte Fix-Daten und bekannte Musterfehler zur rasend schnellen Verkürzung des Diagnoseprozesses bei unklaren Defekten.` },
    { title: `Digitale Schaltpläne`, desc: `Farblich codierte, interaktive Verkabelungsdiagramme mit Suchfunktion und Pinning-Spezifikationen der Steckverbindungen.` },
    { title: `TSB & Rückrufdaten (NHTSA)`, desc: `Umfassende Zusammenstellung aller offiziell ausgesprochenen Recalls inklusive Anweisungen.` },
    { title: `Labor Times (Arbeitswerte)`, desc: `Vorgabezeiten der Hersteller für absolut akkurate Kostenvoranschläge für unzählige Reparaturen.` },
    { title: `OEM-Teile und Nummern`, desc: `Katalogsystem, um exakt die Herstellernummern von Original-Ersatzteilen des Wagen abzufragen.` }
  ],
  whyHeading: `SureTrack: Der Vorteil, den keine andere Plattform hat`,
  whyBody: `Die größte Stärke von Mitchell1 ist SureTrack. Es erfasst fehlerhafte Komponenten aus über 70 Mio. Reparaturaufzeichnungen. Es grenzt Fehler basierend auf Fahrzeugsymptomen und DTC-Codes drastisch ein und gibt eine Wahrscheinlichkeit auf das am häufigsten defekte Teil an.`,
  whyList: [
    `Echte Falldaten aus über 70 Millionen professionellen Werkstatt-Aufträgen`,
    `Vorprogrammierte Wahrscheinlichkeits-Muster bei kombinierten Fehlercodes`,
    `Bestätigte „Fixed!“-Lösungen, damit nicht einfach nur raten müssen`,
    `Enthält wertvolle Profi-Tipps und Randnotizen von echten Werkstattspezialisten`
  ],
  keyStatsHeading: `Mitchell1 Kennzahlen`,
  keyStats: [
    { label: `Deckung seit`, value: `1983–2026` },
    { label: `SureTrack Reparaturen`, value: `70 Mio.+` },
    { label: `Unterstützte Fahrzeugmarken`, value: `100+` },
    { label: `Indexierte OEM TSBs`, value: `1.5M+` },
    { label: `Marke von`, value: `Snap-on / Mitchell1` }
  ],
  ctaHeading: `Sichern Sie sich Mitchell1 via Auto Fix Data`,
  ctaBody: `Auto Fix Data ist Ihr zertifizierter Partner im Bereich Werkstattdaten. Mitchell1 ProDemand ist vollständig im Komplettpaket inkludiert.`,
  ctaCompare: `Plattform-Vergleiche aufrufen`
};

dict.identifix = {
  ...dict.identifix,
  statsBar: [
    { value: `Direct-Hit`, label: `Diagnosesystem` },
    { value: `70M+`, label: `Lösungen aus der Praxis` },
    { value: `Muster`, label: `Fehlererkennung` },
    { value: `Von Solera`, label: `Intelligente Plattform` }
  ],
  featuresHeading: `Identifix Direct-Hit — Vollständige Übersicht`,
  featuresSubheading: `Identifix verwebt echte OEM-Werkstattanleitungen mit beispielloser Intelligenz von Mechanikern aus dem wirklichen Leben. Wenn Sie einen Fehlercode eintragen, erhalten Sie nicht nur das OEM-Dokument, sondern direkt das am höchsten bewertete Teil, das diesen Fehler am wahrscheinlichsten auslöst.`,
  features: [
    { title: `Direct-Hit Diagnose Fixes`, desc: `Stellt für spezifische DTCs an exakten Fahrzeugmodellen bestätigte und häufigste Lösungen bereit.` },
    { title: `Suche via Fahrzeug-Symptom`, desc: `Finden Sie die Reparatur anhand eines Symptoms wie "Motor ruckelt", auch wenn kein Fehlercode gespeichert ist.` },
    { title: `Original OEM-Werkstattdaten`, desc: `Sämtliches Basiswissen - von Schaltplänen bis hin zu Service-Bulletins - im Original abrufbar.` },
    { title: `Identifizierung von Musterfehlern`, desc: `Mustererkennung für sporadisch auftretende Phantomfehler oder defekte elektronische Relais.` },
    { title: `Technischer Spezialisten-Support`, desc: `Ein gigantisches Archiv, in dem Meistertechniker komplizierte Netzwerkschaltfehler protokollieren.` },
    { title: `Kampagnen und Service Manuals`, desc: `Direkte Links zu veröffentlichten OEM-Aktionen von bestimmten Autobauern.` }
  ],
  whyHeading: `Geheimwaffe von Top-Diagnosezentren`,
  whyBody: `Identifix spart Unmengen an Diagnose-Stunden. Es beseitigt das Rätselraten bei schwer ausfindig zu machenden elektronischen Problemen, in dem bestätigt wird, welches von vier potenziell defekten Netzwerksystemen in 80% der identischen realen Fälle schuld war.`,
  whyList: [
    `Die schnellste Route zur Problembehebung bei Fehlercodes`,
    `Verringert den Frust bei CAN-Bus Netzwerkproblemen erheblich`,
    `Mustererkennung erspart tagelanges Suchen und Ausmessen mit Multimeter`,
    `Perfekt geeignet für die elektronischen Systeme der Baujahre 2005 - 2024`
  ],
  keyStatsHeading: `Die Identifix Bilanz`,
  keyStats: [
    { label: `Erfasste Lösungen`, value: `70 Millionen+` },
    { label: `Fehlersuchalgorithmus`, value: `Direktes Treffersystem` },
    { label: `Plattform`, value: `Direct-Hit` },
    { label: `Mutterkonzern`, value: `Solera Holdings` }
  ],
  ctaHeading: `Starten Sie mit Identifix und Auto Fix Data`,
  ctaBody: `Verbannen Sie das Raten auf eigene Faust. Durch unser All-in-One-Softwarepaket greifen Sie neben Identifix auch auf ALLDATA zu.`,
  ctaCompare: `Weitere Alternativen prüfen`
};

fs.writeFileSync(path, JSON.stringify(dict, null, 2));
