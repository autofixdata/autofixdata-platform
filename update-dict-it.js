const fs = require('fs');
const path = 'C:/Users/Ayoub/Desktop/Asset-Manager/artifacts/autofixdata-next/src/dictionaries/it.json';
const dict = JSON.parse(fs.readFileSync(path, 'utf8'));

dict.alldata = {
  ...dict.alldata,
  statsBar: [
    { value: `44.000+`, label: `Veicoli Coperti` },
    { value: `Diretto-OEM`, label: `Dati Intatti` },
    { value: `Il più ampio`, label: `Archivio TSB` },
    { value: `Da AutoZone`, label: `Standard di settore` }
  ],
  featuresHeading: `Cosa include ALLDATA nel tuo abbonamento`,
  featuresSubheading: `ALLDATA è il gold standard mondiale per i dati di riparazione originali (OEM), utilizzato da meccanici professionisti e centri autorizzati: tutte le schede provengono direttamente dalle case madri senza omissioni.`,
  features: [
    { title: `Procedure OEM originali al 100%`, desc: `Riparate con gli stessi schemi di cui dispongono in concessionaria. Niente è stato omesso, riassunto o ricreato artificialmente.` },
    { title: `Archivio TSB e richiami completi`, desc: `Controlla difetti noti dal produttore ufficiale prima ancora di collegare lo scanner diagnostico per evitare inutili perdite di tempo.` },
    { title: `Schemi Elettrici Ufficiali`, desc: `Tracciate circuiti integrati del veicolo, rete CAN, moduli ABS, airbag (SRS) e pin della centralina motore con una chiarezza eccezionale e schema originale.` },
    { title: `Alert di sicurezza (NHTSA e richiami)`, desc: `Accesso ai dati sui richiami di sicurezza per una visione chiara dei problemi costruttivi emersi nel corso degli anni sui singoli telai.` },
    { title: `Diagrammi di flusso per diagnosi (DTC)`, desc: `Le sequenze esatte per isolare un codice errore utilizzate dai meccanici della casa madre: mai più componenti cambiati a caso.` },
    { title: `Tempi e Temparari della Casa`, desc: `Tariffari ufficiali per preventivi perfetti per ogni singola lavorazione, rispettando con estrema precisione le ore fatturabili in officina.` }
  ],
  whyHeading: `Lo standard per l'informazione di base originale OEM`,
  whyBody: `Quasi 400.000 autofficine non possono sbagliare. ALLDATA offre i migliori portafogli originali in commercio per quasi ogni vettura moderna dalla fine degli anni sessanta fino al nuovo secolo senza limitazioni nei manuali PDF forniti.`,
  whyList: [
    `Dati OEM scaricati dai portali della concessionaria`,
    `Database immenso dei Bollettini Tecnici di Servizio`,
    `Database ufficiale e avvisi di sicurezza del governo americano`,
    `L'approccio logico esatto step-by-step alle vetture recenti per ogni errore`,
    `Gestione temparari garantendo fatturazioni coerenti e sicure al minuto`
  ],
  keyStatsHeading: `Statistiche ALLDATA`,
  keyStats: [
    { label: `Varianti Coperte`, value: `44.000` },
    { label: `Documenti e PDF (TSB)`, value: `Oltre 6 Milioni` },
    { label: `Meccanici aderenti`, value: `400.000` },
    { label: `Aggiornamento base`, value: `Costante (Cloud)` },
    { label: `Range Anni Auto`, value: `1982–2026` }
  ],
  faqHeading: `Domande Frequenti su ALLDATA`,
  faqs: [
    { q: `Cosa è ALLDATA ed è l'ufficiale?`, a: `Sì. Viene edito dall'americana AutoZone ed è composto dai medesimi dati reperibili in concessionario OEM.` },
    { q: `È compreso nell'abbonamento unico?`, a: `Incluso senza limiti massimi nel piano auto, insieme a Mitchell1, Haynes, Identifix e AutoData per completarsi a vicenda.` },
    { q: `Ci sono veicoli del mercato europeo e nord americano?`, a: `Fornisce un'ampia visione sui prodotti europei d'esportazione ma per i veicoli esclusivi in Europa AutoData colmerà il resto.` },
    { q: `Aiuta concretamente l'installatore a cancellare le spie di guasto (DTC)?`, a: `Certo, per tutti i principali guasti vi illustra la struttura ad albero sequenziale diagnostica.` },
    { q: `ALLDATA si aggiorna?`, a: `I nuovi manuali dei veicoli 2025/2026 vengono resi pubblici appena passano nei database OEM.` }
  ],
  ctaHeading: `Abbonati ad ALLDATA ed alle altre Banche Dati`,
  ctaBody: `Acquistando un solo piano potrai avviare 5 differenti prodotti leader a livello globale dalla prima schermata, tra cui ALLDATA.`,
  ctaCompare: `Valuta le alternative ed i prezzi`
};

dict.autodata = {
  ...dict.autodata,
  statsBar: [
    { value: `35+ Anni`, label: `Specialista Europeo` },
    { value: `150M+`, label: `Veicoli nel DB` },
    { value: `OEM`, label: `Specifiche Ufficiali` },
    { value: `Standard`, label: `Supporto Globale` }
  ],
  featuresHeading: `Scopri le capacità fornite da AutoData`,
  featuresSubheading: `Per risolvere problemi, localizzare moduli fusi sottoscocca o fasare il motore prima della cinghia: AutoData è la banca dati ufficiale di meccanica che non può mancare dal cruscotto informatico.`,
  features: [
    { title: `Schede di Manutenzione programmata`, desc: `Riepiloga accuratamente gli step indicati dai brand (BMW, Fiat, Renault, etc) per i tagliandi dei principali veicoli, compresi i liquidi raccomandati.` },
    { title: `Riparazione e Timing Belt`, desc: `Processi operativi passo per passo durante l'intervento sulle cinghie interne o catene motore per una fasatura millimetrica.` },
    { title: `Specifiche, Geometrie e Sensori`, desc: `Informazione tecnica al top su calibrazione di angoli sterzo (assetto ruote), A/C, coppie bulloni o sensori.` },
    { title: `Schemi Elettrici Chiari e Uniformi`, desc: `Modello super accessibile e tradotto al meglio per rintracciare senza ostacoli una massa scollegata sul telaio e sui principali moduli dell'auto.` },
    { title: `Localizzazione Centraline A/C`, desc: `Individua facilmente i teleruttori e le porte connettori dietro il cruscotto riducendo del 90% i tempi di smontaggio plastiche.` },
    { title: `Traduzione Codice Difetto DTC`, desc: `Converte decine di migliaia di DTC grezzi in guasti di facile sintesi per agevolare il controllo dei sistemi attivi per l'officina.` }
  ],
  whyHeading: `L'eccellenza per la zona Euro e non solo`,
  whyBody: `AutoData domina l'informazione del mercato Fiat, PSA, gruppo VAG (VW, Audi, Seat), Ford. Tutte le informazioni chiave ed i bollettini del gruppo motore/telaio passano da quest'infrastruttura fondamentale in Europa ed America.`,
  whyList: [
    `Un leader tra le auto europee — livello concessionario OEM per tutti i brand`,
    `Standard approvato in UK, Germania ed Italia per il corretto iter d'officina e tagliando`,
    `Riepilogo attrezzaggio speciale fasature cinghie originali della casa`,
    `Banca dati completa R134A / R1234 YF per climatizzatori estivi`,
    `Incluso al 100% all'interno di Auto Fix Data per arricchire Mitchell1 e ALLDATA`
  ],
  keyStatsHeading: `Informazioni di AutoData`,
  keyStats: [
    { label: `Decenni di successi`, value: `35 anni` },
    { label: `Copertura veicoli UE`, value: `100% Top Brands` },
    { label: `Valori e parametri tecnici`, value: `Decine di migliaia` },
    { label: `Database`, value: `AutoData Cardesk` },
    { label: `Nazioni che lo adottano`, value: `Più di 50` }
  ],
  ctaHeading: `Fornitura di AutoData da parte nostra`,
  ctaBody: `Auto Fix Data porta comodamente sui vostri tablet AutoData, unito senza limitazioni agli altri leader meccanici.`,
  ctaCompare: `Esplora alternative sul mercato`
};

dict.haynesPro = {
  ...dict.haynesPro,
  statsBar: [
    { value: `80+ Anni`, label: `Marchio Storico` },
    { value: `Professionale`, label: `Per autofficina` },
    { value: `Illustrato`, label: `Ogni Spaccato` },
    { value: `Origine`, label: `Database Costruttore` }
  ],
  featuresHeading: `Haynes Pro WorkshopData — Per professionisti ed apprendisti`,
  featuresSubheading: `Haynes Pro non è la controparte "fai-da-te" del libro al supermercato, ma il massimo dell'evoluzione software adatta al riparatore professionista basato unicamente su disegni interattivi formidabili.`,
  features: [
    { title: `Linee guida per l'officina`, desc: `Smontaggio, rimontaggio per telai, differenziali, cambio manuale / automatico e motori.` },
    { title: `Dati di regolazioni veicolo`, desc: `Luce candele, tolleranza alberi a camme, pressioni iniettori per i veicoli benzina, diesel (Comon Rail) ed ibridi.` },
    { title: `Schemi VESA (elettrici)`, desc: `Ricercate facilmente le architetture complicate sfruttando la forza eccezionale di VESA sui pin di comando ed avariati.` },
    { title: `Tempi stimati (Schedules)`, desc: `Previsione di riparazione sulle automobili per garantire i margini operativi ad ogni officina aperta al pubblico.` },
    { title: `Viste Esplose Formidabili`, desc: `Le viste isometriche illustrano lo scorporamento degli apparati complessi (A/C, freno a disco) rivelandone ogni vite nascosta.` },
    { title: `Smontaggio del blocco motore`, desc: `Prevede tutti i piani di chiusura o rettifica della guarnizione di testa e gli accoppiamenti dell'imbiellaggio.` }
  ],
  whyHeading: `Benefici chiari di usare Haynes Pro`,
  whyBody: `Un grande vantaggio offerto dallo stile "grafico" di Haynes Pro per supportare ed accompagnare in modo agevolato anche i nuovi collaboratori di officina alle procedure lunghe di disconnessione dei componenti ostici o moderni su auto di lusso e standard europee.`,
  whyList: [
    `Meccanici provati, e neo diplomati`,
    `Ideale per chi sta iniziando nella professione e cerca sicurezza illustrativa`,
    `Revisioni stradali per garantire stabilità statali del veicolo europeo`,
    `Elettrauto di nuova modernità ed autoibrida multimarca`
  ],
  keyStatsHeading: `Panoramica di Haynes Pro`,
  keyStats: [
    { label: `Storia e Affidabilità`, value: `Oltre 80 Anni` },
    { label: `In Archivio`, value: `Milioni di record` },
    { label: `Documenti e Disegni`, value: `Tutti i veicoli in sede` },
    { label: `Sostegno Tecnico`, value: `Esodo dal PDF, in formato digitale Mobile/PC` }
  ],
  faqHeading: `Domande Frequenti relative ad Haynes Pro`,
  faqs: [
    { q: `Posso scaricarlo o vederlo da cellulare al ponte auto?`, a: `Sì. Le sue chiavi sono ottimizzate ed Auto Fix Data è integralmente digitale 24/7.` },
    { q: `Ha gli Schemi ad Albero di Ricerca Diagnostica?`, a: `Per questioni estreme su questo fattore consigliamo ALLDATA ed Identifix o Mitchell, che integrano con potenza enorme questo vuoto.` },
    { q: `Si possono gestire le revisioni dei cambi?`, a: `Certamente, le revisioni meccaniche hardware del motore e della trasmissione manuale sono ben protette.` },
    { q: `Devo pagare per abilitarlo nell'offerta di Auto Fix Data?`, a: `Verrà immediatamente caricato senza alcuna aggiunte nei pacchetti offerti da noi.` }
  ],
  ctaHeading: `Usa Haynes Pro Senza Intoppi`,
  ctaBody: `Attiva a soli pochissimi click questo mostro di grafica ed assistenza con auto-riparazioni, insieme alle 4 principali reti di competenza.`,
  ctaCompare: `Guardare Moduli e Alternative`
};

dict.mitchell1 = {
  ...dict.mitchell1,
  statsBar: [
    { value: `ProDemand`, label: `Sistema Base` },
    { value: `SureTrack`, label: `Sinergia Esterna` },
    { value: `1983–2026`, label: `Aree temporali auto` },
    { value: `Snap-on®`, label: `Azienda Madre` }
  ],
  featuresHeading: `Mitchell1 ProDemand — Caratteristiche dell'Abonamento`,
  featuresSubheading: `ProDemand (di Mitchell1) implementa la formula magica dell'unificazione tecnica OEM all'archivio storico impressionante dei fallimenti reali, riducendo esponenzialmente la ricerca su veicoli complessi tramite "SureTrack".`,
  features: [
    { title: `Meccanica ProDemand Originaria`, desc: `Le vere metodiche per cambiare freni, testata o mozzi senza inventare e causando rotture. Procedure OEM di decenni.` },
    { title: `SureTrack e Casi Veri (Community)`, desc: `Identificazione dei problemi basata su oltre decine di milioni di veicoli reali che hanno lamentato e risolto il difetto nella pratica d'officina.` },
    { title: `Wire Diagrams Interconnessi`, desc: `Zoom fluidi nel colore ed intercettazione dinamica delle alimentazioni sensori in scala ridotta ed intuitiva.` },
    { title: `Sistema Bollettini NHTSA`, desc: `Integrazione della libreria richiami americana per intercettare i componenti del veicolo che presentano problemi conosciuti del brand automobilistico.` },
    { title: `Bolla e Lista Tempi`, desc: `Guida alle ore forfettarie richieste per evitare di rimetterci tempo non quantificato durante le transazioni commerciali post-intervento.` },
    { title: `Consultazione dei Numeri Originali Parte`, desc: `Accesso facilitato al magazzino di codici d'espediente del mercato dell'aftermarket / OEM dei costruttori originali.` }
  ],
  whyHeading: `SureTrack dà una marcia in più ai Diagnostici moderni`,
  whyBody: `Quanti tecnici hanno mai letto 2 errori differenti ma imparentati a causa di un cavo di massa spezzato in segreto? SureTrack ha registrato tutte queste avarie assurde rivelando a Mitchell1 probabilità chiare invece di un albero di ipotesi a vuoto.`,
  whyList: [
    `Raccolta di Oltre 70 milioni di conferme pratiche ("Fisso!") proveniente da tecnici globali lavorando per Mitchell1.`,
    `Spiegazioni delle cause innescanti con le associazioni DTC imparentate.`,
    `Aiuto immenso in diagnosi avanzate non logiche.`,
    `Aggiunta costante e frequente di migliaia di riparazioni corrette a settimana in server.`
  ],
  keyStatsHeading: `I Parametri Mitchell1 SureTrack`,
  keyStats: [
    { label: `Auto di ogni era e classe`, value: `Annate 1983–2026` },
    { label: `Casistica Analizzata`, value: `70M+ Interventi Veri` },
    { label: `Brands Automobilistici`, value: `Più di 100 Case` },
    { label: `Bollettini Letti dal Modulo`, value: `1.5M+ Archivi` },
    { label: `Ecosistema di Base Integrante`, value: `ProDemand` }
  ],
  ctaHeading: `Raggiungi Mitchell1 ProDemand Velocemente`,
  ctaBody: `Auto Fix Data fa il passo in avanti rendendo agilmente e simultaneamente disponibili per l'Europa Mitchell1, assieme ai classici noti Europei.`,
  ctaCompare: `Scopri le offerte e le Comparazioni Mitchell`
};

dict.identifix = {
  ...dict.identifix,
  statsBar: [
    { value: `Direct-Hit`, label: `Servizio di Top Diagnosi` },
    { value: `70M+`, label: `Casi di Fix Verificati` },
    { value: `Sintomi Visivi`, label: `Senza Obbligo DTC` },
    { value: `Da Solera`, label: `Mente Tecnologica` }
  ],
  featuresHeading: `Identifix Direct-Hit — Informazione Analitica Totale`,
  featuresSubheading: `Identifix capovolge la visuale: Se la spia è accesa cerca direttamente in milioni di schede "GIA' risolte" offrendovi le parti "più quotate da cambiare" dai tecnici di Solera che vi garantiscono un tasso del +90% di precisione d'intervento risolutore.`,
  features: [
    { title: `Analisi dei Guasti e Componenti Danneggiati`, desc: `Vi restituisce i grafici ed il report statistico della comunità per il medesimo problema presente dinanzi a voi. Viene evitato di controllare inutilmente parti sane.` },
    { title: `Risoluzione tramite Sintomatologia`, desc: `Usa Identifix per veicoli che semplicemente: vibrano in sterzata, perdono potenza a regime o singhiozzano, pur con scanner OBD vuoto e senza spie!` },
    { title: `Appoggio ai Manuali Tipici`, desc: `Raccoglie in ogni caso tutti i manuali, gli strumenti, gli spaccati della vettura se il riparatore preferisce lavorare seguendo l'ABC delle procedure classiche.` },
    { title: `Anomalie Segrete (Intermittenze)`, desc: `Le falle elettroniche "fantasma" che colpiscono i moduli BCM per un giorno, riempiendo liste di TSB note ai master-diagnostici, sono qui ampiamente recensite.` },
    { title: `Consiglio degli Assi e Master-Tech`, desc: `Una solida base che conserva indicazioni e prove specifiche di super-ingegneri e formatori su veicoli moderni del ramo diagnostico post 2000 per agevolare il rientro e l'analisi sul campo del tecnico che si sente smarrito da difetti logici e software di rete introvabili.` },
    { title: `Risolutore Campagne Auto e Garanzie`, desc: `Fissa un piano d’arresto unendo l’intervento OEM prescritto a specifici DTC di campagna (Technical Service Board statunitensi) integrati con una facile barra di consultazione testuale diretta in modo unanime al difetto descritto nell’area di problema che avete rilevato.` }
  ],
  whyHeading: `L'Esclusiva della pura diagnosi intelligente`,
  whyBody: `Gli elettrauti moderni faticano contro componenti senza una vera diagnostica di base ma che impattano una catena intera; un quadro della rete multiplex fuso può creare 20 errori irreali ma Identifix identificherà le frequenze passate che correlano tutti e 20 direttamente al quadro elettrico reale facendovi cambiare il quadro con uno nuovo non alterando tutto il resto senza logica apparente.`,
  whyList: [
    `Risoluzione dei malfunzionamenti intermittenziali per abbattere le perdite temporali esose a banco fisso in officina che rubano margini ed attenzione e risorse ad altri veicoli facili e redditizi.`,
    `Troverete i guasti noti istantaneamente e con 0 sforzo mentale conoscitivo dei veicoli.`,
    `Ottimo ed eccezionale strumento per veicoli "moderni e gravidi d'elettronica post-duemila".`
  ],
  keyStatsHeading: `Panoramica Assieme su Identifix`,
  keyStats: [
    { label: `Archiviazione Successi Veri`, value: `70 Milioni confermati` },
    { label: `Archivio Consultabile per sintomatologia auto`, value: `Vasto archivio milionario` },
    { label: `Tipologia del Prodotto Standard`, value: `Identifix Direct Hit System` }
  ],
  ctaHeading: `Prova a navigare su Identifix Identifix via Auto Fix Data`,
  ctaBody: `Vi permette assieme al nostro server di sbloccare l'ultima chiave magistrale con Auto Fix Data, il reseller che sblocca ai tecnici moderni Direct Hit e altri marchi blasonati ad un unico livello accessibile ai liberi professionisti.`,
  ctaCompare: `Confronto rapido fra Solera ed Altri prodotti nel settore e alternative ad esso correlato per aiutarvi facilmente.`
};

fs.writeFileSync(path, JSON.stringify(dict, null, 2));
