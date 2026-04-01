const fs = require('fs');
const path = 'C:/Users/Ayoub/Desktop/Asset-Manager/artifacts/autofixdata-next/src/dictionaries/en.json';
const dict = JSON.parse(fs.readFileSync(path, 'utf8'));

dict.alldata = {
  ...dict.alldata,
  statsBar: [
    { value: `44,000+`, label: `Vehicle Applications` },
    { value: `OEM-Direct`, label: `Unedited Data` },
    { value: `Largest`, label: `TSB Library` },
    { value: `By AutoZone`, label: `Industry Standard` }
  ],
  features: [
    { title: `Unedited OEM Repair Procedures`, desc: `Access the exact repair procedures sourced directly from vehicle manufacturers — nothing edited, summarised or interpreted. The same data authorised dealers use.` },
    { title: `Technical Service Bulletins (TSBs)`, desc: `The most comprehensive TSB library in the industry. Know about manufacturer-acknowledged issues and their official fixes before you even plug in a scanner.` },
    { title: `Wiring Diagrams`, desc: `Complete electrical schematics for every body system. Trace circuits for engine management, ABS, SRS, body controls, and CAN bus networks with factory-accurate diagrams.` },
    { title: `Recall Information`, desc: `Immediate access to all NHTSA safety recalls and investigations by vehicle, giving your workshop a complete picture of any known safety or quality issues.` },
    { title: `Diagnostic Flowcharts`, desc: `Step-by-step OEM diagnostic decision trees for every major DTC. Follow the exact test sequence dealer technicians use — no guesswork, no wasted parts.` },
    { title: `Labour Times & Estimating`, desc: `OEM flat-rate labour times for every repair procedure, allowing accurate job quotations and realistic scheduling for your workshop.` }
  ],
  whyList: [
    `Factory-direct OEM data — never edited or summarised`,
    `Largest TSB database in the automotive aftermarket`,
    `Complete NHTSA recall and safety investigation data`,
    `OEM diagnostic flowcharts matching dealer scan tool decision trees`,
    `Comprehensive labour time guides for accurate quoting`
  ],
  keyStatsHeading: `ALLDATA Key Statistics`,
  keyStats: [
    { label: `Vehicle Applications`, value: `44,000+` },
    { label: `OEM TSBs in Database`, value: `6M+` },
    { label: `Professional Users`, value: `400,000+` },
    { label: `Data Updates`, value: `Continuous` },
    { label: `Years of Coverage`, value: `1982–2026` }
  ],
  faqHeading: `ALLDATA Frequently Asked Questions`,
  faqs: [
    { q: `What is ALLDATA?`, a: `ALLDATA is the automotive industry's leading source of unedited OEM repair information, published by AutoZone. It provides access to factory repair procedures, TSBs, wiring diagrams, and diagnostic data for over 44,000 vehicle applications.` },
    { q: `Is ALLDATA included in all Auto Fix Data subscriptions?`, a: `Yes. All Auto Fix Data plans include full ALLDATA access alongside AutoData, Haynes Pro, Mitchell1, and Identifix — five premium databases under one subscription.` },
    { q: `Does ALLDATA have good European vehicle coverage?`, a: `ALLDATA has strong coverage of US domestic vehicles and major import brands. For deep specialist European coverage, AutoData in your subscription provides excellent complementary depth.` },
    { q: `Can ALLDATA help with DTC fault code diagnosis?`, a: `Yes. ALLDATA provides complete OEM diagnostic flowcharts for all major DTCs — the exact decision trees that dealer technicians use, complemented by Identifix real-world fixes.` },
    { q: `How often is ALLDATA updated?`, a: `ALLDATA is updated continuously as manufacturers release new TSBs, recalls, and service procedures. New model year data is added as soon as it is available from the OEMs.` }
  ],
  ctaCompare: `Compare with alternatives`
};

dict.autodata = {
  ...dict.autodata,
  statsBar: [
    { value: `35+ Years`, label: `European Service Data` },
    { value: `150M+`, label: `Vehicles Covered` },
    { value: `OEM`, label: `Sourced Specifications` },
    { value: `Industry Standard`, label: `Workshop Platform` }
  ],
  features: [
    { title: `Service Schedules`, desc: `Complete OEM-specified service intervals, including oil types, fluid capacities and comprehensive replacement schedules for filters and belts.` },
    { title: `Maintenance Procedures`, desc: `Detailed step-by-step guides for routine tasks, including timing belt/chain replacement with critical tool references and torque settings.` },
    { title: `Technical Specifications`, desc: `Rapid access to wheel alignment data, tyre pressures, battery specifications, spark plug gaps and air conditioning system refrigerants.` },
    { title: `Wiring Diagrams`, desc: `Clear, standardised wiring schematics covering engine management, ABS, air conditioning and core body electrical systems.` },
    { title: `Component Locations`, desc: `Interactive diagrams showing exact locations for sensors, fuses, relays and control modules to speed up diagnostics.` },
    { title: `DTC Lookups`, desc: `Comprehensive diagnostic trouble code definitions with probable causes, helping point technicians in the right initial direction.` }
  ],
  whyHeading: `The European Workshop Standard`,
  whyBody: `AutoData is particularly strong for independent workshops handling European marques. Its technical specifications database covers Vauxhall, Renault, Peugeot, Citroen, Fiat, Alfa Romeo, SEAT, Skoda and all major European manufacturers at OEM depth. The platform is also widely used by UK MOT stations, service centres and independent technicians as a daily reference tool.`,
  whyList: [
    `European make specialist — full OEM depth on all EU brands`,
    `UK workshop standard for service intervals and oil specs`,
    `Timing belt and chain replacement data with tool references`,
    `Air conditioning service data and refrigerant specifications`,
    `Compatible with AutoData Cardesk and WorkshopData platforms`
  ],
  keyStatsHeading: `AutoData Key Statistics`,
  keyStats: [
    { label: `Years of Data`, value: `35+` },
    { label: `European Makes Covered`, value: `All` },
    { label: `Data Points per Vehicle`, value: `10,000+` },
    { label: `Annual Updates`, value: `Weekly` },
    { label: `Countries Supported`, value: `50+` }
  ],
  ctaCompare: `Compare with alternatives`
};

dict.haynesPro = {
  ...dict.haynesPro,
  statsBar: [
    { value: `80+ Years`, label: `Haynes Heritage` },
    { value: `Professional`, label: `Grade Data` },
    { value: `Illustrated`, label: `Procedures` },
    { value: `OEM`, label: `Sourced Content` }
  ],
  features: [
    { title: `Workshop Manuals`, desc: `Professional-grade workshop manuals derived from OEM documentation, covering step-by-step procedures for all major repair tasks.` },
    { title: `Technical Specifications`, desc: `Complete technical data including torque settings, clearances, fluid capacities and component dimensions for all supported vehicles.` },
    { title: `Wiring Diagrams`, desc: `Circuit diagrams and electrical schematics with colour coding, component identification and pinout information.` },
    { title: `Service Schedules`, desc: `Factory service intervals with parts lists, fluid specifications and technician notes for accurate service delivery.` },
    { title: `Illustrated Procedures`, desc: `High-quality technical illustrations and exploded diagrams supporting every major repair procedure.` },
    { title: `Engine Overhaul Data`, desc: `Detailed engine rebuild specifications including bearing clearances, piston ring gaps and valve timing data.` }
  ],
  whyHeading: `Who Benefits Most from Haynes Pro?`,
  whyBody: `Haynes Pro is particularly valued by independent workshops that require clearly structured, illustrated procedures alongside technical data. Its step-by-step format reduces training time for junior technicians and provides a reliable reference point for experienced professionals tackling unfamiliar vehicle systems.`,
  whyList: [
    `Independent workshops and sole-trader mechanics`,
    `Workshops training apprentice and junior technicians`,
    `MOT test stations and service centres`,
    `Automotive colleges and training centres`,
    `Technicians working across mixed domestic and European fleets`
  ],
  keyStatsHeading: `Haynes Pro Key Facts`,
  keyStats: [
    { label: `Brand Heritage`, value: `80+ Years` },
    { label: `Vehicle Models`, value: `150M+` },
    { label: `Procedures Illustrated`, value: `100%` },
    { label: `Data Source`, value: `OEM` },
    { label: `Platform Access`, value: `Web & Mobile` }
  ],
  faqHeading: `Haynes Pro Frequently Asked Questions`,
  faqs: [
    { q: `Is Haynes Pro the same as the consumer Haynes manual?`, a: `No. Haynes Pro is the professional-grade platform built for workshops. It uses the Haynes methodology but accesses OEM-level data not available in the consumer manuals, with deeper technical specifications and illustrated procedures.` },
    { q: `Does Haynes Pro include wiring diagrams?`, a: `Yes. Haynes Pro includes full-colour wiring diagrams and electrical schematics with component identification and connector pinout information.` },
    { q: `What vehicles does Haynes Pro cover?`, a: `Haynes Pro covers 150M+ vehicles from 1990 to present, including all major UK, European, Asian and American makes. It is particularly strong for the most common European and UK domestic vehicles.` },
    { q: `Is Haynes Pro included in all Auto Fix Data plans?`, a: `Yes. Full access to Haynes Pro is included in every Auto Fix Data subscription alongside the four other databases — ALLDATA, AutoData, Mitchell1 and Identifix.` },
    { q: `Can I use it on a mobile device in the workshop?`, a: `Yes. Auto Fix Data is fully cloud-based and works on any device — PC, Mac, tablet or smartphone. No special hardware or software installation is required.` }
  ],
  ctaCompare: `Compare with alternatives`
};

dict.mitchell1 = {
  ...dict.mitchell1,
  statsBar: [
    { value: `ProDemand`, label: `Platform` },
    { value: `SureTrack`, label: `Real-World Fixes` },
    { value: `1983–2026`, label: `Coverage` },
    { value: `By Snap-on`, label: `Professional Tools` }
  ],
  features: [
    { title: `ProDemand Repair Data`, desc: `OEM-sourced repair procedures from Mitchell1's industry-leading ProDemand platform, covering domestic and import vehicles from 1983 to present.` },
    { title: `SureTrack Expert Info`, desc: `Real-world fix data from professional technicians, pattern failures, and confirmed repairs to accelerate your diagnostic process.` },
    { title: `Wiring Diagrams`, desc: `Interactive colour wiring diagrams with component locators, connector views and integrated circuit descriptions.` },
    { title: `TSBs & Recalls`, desc: `Complete Technical Service Bulletin library with NHTSA recall data, updated in real time as manufacturers issue new bulletins.` },
    { title: `Labor Times`, desc: `Flat-rate labour time guides for accurate estimating and job scheduling across all vehicle types and repair categories.` },
    { title: `Parts Lookup`, desc: `Integrated parts catalogue with OEM part numbers, aftermarket cross-references and current pricing guidance.` }
  ],
  whyHeading: `SureTrack: The Advantage No Other Platform Has`,
  whyBody: `Mitchell1's SureTrack feature aggregates real repair data from millions of professional technician submissions, identifying common pattern failures, most-likely parts and proven fixes for specific vehicle/symptom combinations. This dramatically reduces diagnostic time, particularly for intermittent faults and elusive ECU-related issues.`,
  whyList: [
    `Real-world fix data from 70M+ professional repairs`,
    `Most-likely-cause patterns for common DTC combinations`,
    `Confirmed fixes with parts and labour time data`,
    `Pro tips and technician notes from experienced specialists`,
    `Updated continuously as new repair data is submitted`
  ],
  keyStatsHeading: `Mitchell1 Key Statistics`,
  keyStats: [
    { label: `Coverage Range`, value: `1983–2026` },
    { label: `SureTrack Repairs`, value: `70M+` },
    { label: `Vehicle Makes`, value: `100+` },
    { label: `TSBs Indexed`, value: `1.5M+` },
    { label: `Platform`, value: `ProDemand` }
  ],
  faqHeading: `Mitchell1 Frequently Asked Questions`,
  faqs: [
    { q: `What is Mitchell1 ProDemand?`, a: `ProDemand is Mitchell1's professional repair information platform combining OEM-sourced data with SureTrack real-world fix information from millions of technician repairs.` },
    { q: `What is SureTrack?`, a: `SureTrack aggregates confirmed repair data from 70M+ professional technician submissions, identifying the most likely fix for specific vehicle and DTC combinations — dramatically speeding up difficult diagnostics.` },
    { q: `Does Mitchell1 include wiring diagrams?`, a: `Yes. Mitchell1 includes full-colour interactive wiring diagrams with component locators, connector views and circuit descriptions.` },
    { q: `Is Mitchell1 particularly strong for North American vehicles?`, a: `Yes. Mitchell1 originated in North America and has exceptional coverage of US domestic and import vehicles from 1983 to present, though it also covers major European and global makes.` },
    { q: `Is Mitchell1 included in all Auto Fix Data plans?`, a: `Yes. Full access to Mitchell1 ProDemand and SureTrack is included in every Auto Fix Data subscription alongside ALLDATA, AutoData, Haynes Pro and Identifix.` }
  ],
  ctaCompare: `Compare with alternatives`
};

dict.identifix = {
  ...dict.identifix,
  statsBar: [
    { value: `Direct-Hit`, label: `Diagnostic System` },
    { value: `70M+`, label: `Real Repairs` },
    { value: `Pattern`, label: `Failure Detection` },
    { value: `By Solera`, label: `Diagnostic Intelligence` }
  ],
  features: [
    { title: `Direct-Hit Diagnostic Data`, desc: `Identifix's signature Direct-Hit feature delivers confirmed fixes for specific vehicle/DTC combinations from real technician repair data.` },
    { title: `Symptom-Based Search`, desc: `Search by symptom, DTC code, or vehicle system to find the most probable cause and confirmed repair action rapidly.` },
    { title: `OEM Repair Information`, desc: `Complete factory repair procedures, wiring diagrams and technical specifications integrated with real-world diagnostic intelligence.` },
    { title: `Pattern Failures`, desc: `Known pattern failure identification for common intermittent faults, saving hours of diagnostic time on difficult-to-reproduce issues.` },
    { title: `Technical Hotline Access`, desc: `Access to Identifix's network of master technicians for assistance with complex, unusual or multi-system diagnostic challenges.` },
    { title: `TSBs & Service Campaigns`, desc: `Technical Service Bulletins and manufacturer service campaigns linked directly to relevant repair procedures and OEM documentation.` }
  ],
  whyHeading: `Why Diagnostic Specialists Choose Identifix`,
  whyBody: `For workshops specialising in diagnostics or dealing with complex intermittent faults, Identifix provides a competitive advantage that pure OEM data cannot match. The Direct-Hit database aggregates outcomes from real technician repairs, giving you access to collective diagnostic intelligence that has been field-tested and confirmed on actual vehicles.`,
  whyList: [
    `Fastest route to confirmed fix for DTC-specific repairs`,
    `Dramatically reduces time spent on intermittent faults`,
    `Pattern failure database catches known issues instantly`,
    `Supplements OEM procedures with real-world technician insight`,
    `Particularly strong for post-2000 electronic-heavy vehicles`
  ],
  keyStatsHeading: `Identifix Key Statistics`,
  keyStats: [
    { label: `Real Repairs Indexed`, value: `70M+` },
    { label: `Diagnostic Cases`, value: `Millions` },
    { label: `Pattern Failures`, value: `300K+` },
    { label: `Platform`, value: `Direct-Hit` },
    { label: `By`, value: `Solera` }
  ],
  faqHeading: `Identifix Frequently Asked Questions`,
  faqs: [
    { q: `What is Identifix Direct-Hit?`, a: `Direct-Hit is Identifix's core feature — a database of confirmed repair fixes sourced from real technician submissions, covering millions of vehicle/DTC combinations ranked by success rate.` },
    { q: `How does Identifix differ from ALLDATA or AutoData?`, a: `While ALLDATA and AutoData provide OEM-sourced procedures, Identifix adds real-world diagnostic intelligence. It tells you what technicians actually fixed, not just what the OEM recommends — making it uniquely powerful for complex or intermittent faults.` },
    { q: `Does Identifix include wiring diagrams?`, a: `Identifix includes OEM repair information and some wiring data, but the platform is primarily focused on diagnostic intelligence and real-world fix data. For full wiring schematics, the ALLDATA, AutoData, Haynes Pro or Mitchell1 components of your subscription provide comprehensive coverage.` },
    { q: `What vehicles does Identifix cover?`, a: `Identifix has particularly strong coverage of post-2000 vehicles where electronic systems are most complex. It covers all major US domestic and import makes, with growing European coverage.` },
    { q: `Is Identifix included in all Auto Fix Data plans?`, a: `Yes. Access to Identifix Direct-Hit is included in every Auto Fix Data subscription alongside ALLDATA, AutoData, Haynes Pro and Mitchell1 at no extra cost.` }
  ],
  ctaCompare: `Compare with alternatives`
};

fs.writeFileSync(path, JSON.stringify(dict, null, 2));
