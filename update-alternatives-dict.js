const fs = require('fs');
const path = require('path');

const data = {
  en: {
    template: {
      metaTitle: "Best {C} Alternative | Auto Fix Data",
      metaDesc: "Searching for a better {C} alternative? Stop overpaying. Auto Fix Data delivers superior coverage and repair data.",
      heroH1: "Stop Overpaying for {C}",
      heroDesc: "Why are you paying {P} a month for limited data? Auto Fix Data delivers OEM-verified repair data, wiring diagrams, DTC codes and TSBs for 150M+ vehicles at a fraction of the cost.",
      problemTitle: "The {C} Problem",
      problemDesc: "{C} relies on legacy databases and charges premium enterprise prices. Workshops constantly hit paywalls or find they completely lack {W}.",
      tryInstead: "Try Auto Fix Data Instead",
      costLabel: "{C} Cost",
      afdCostLabel: "Auto Fix Data Cost",
      month: "/mo",
      nobrainer: "NO BRAINER",
      allFeatures: "All features. Zero hidden fees.",
      headToHead: "Head-to-Head Comparison",
      seeMissing: "See exactly what you've been missing.",
      featureCol: "Feature Capability",
      afdCol: "Auto Fix Data",
      archHeading: "Our Architectural Advantage",
      archP1: "When comparing diagnostic platforms, traditional single-source databases like {C} are severely limited to their proprietary legacy OEM partnerships.",
      archP2: "Auto Fix Data's structural advantage lies in our unified intelligence aggregation. By merging vast European OEM procedures, cross-referenced TSBs, and real-world technician-verified fixes into a single search index, mechanics diagnose cars 40% faster.",
      switchHeading: "Switching is effortless.",
      step1Title: "01. Sign Up Free",
      step1Desc: "Start your 7-day free trial immediately. No credit card required, instant access to all 150M+ VINs.",
      step2Title: "02. Compare Us",
      step2Desc: "Run Auto Fix Data side-by-side with {C} in your bay for a week on real repairs.",
      step3Title: "03. Save Cash",
      step3Desc: "Cancel your massive legacy contract and save thousands of pounds per year without sacrificing data.",
      ctaButton: "Start Your Free Trial Now"
    },
    alldata: {
      weakness: "comprehensive European coverage, responsive colour wiring diagrams, and integrated real-world fixes",
      t1: { feature: "Full European Vehicle Coverage", missing: "Historically weak on EU specific models" },
      t2: { feature: "Integrated Real-World Fixes (Identifix)", missing: "Requires entirely separate subscription" },
      t3: { feature: "Interactive Colour Wiring Diagrams", missing: "Uses unedited, hard-to-read static PDFs" },
      t4: { feature: "Clean, Modern User Interface", missing: "Legacy platform structure" },
      t5: { feature: "Unedited OEM Repair Data" },
      t6: { feature: "Technical Service Bulletins (TSBs)" }
    },
    autodata: {
      weakness: "deep diagnostic flowcharts, specific US/Asian imports coverage, and verified technician fixes",
      t1: { feature: "OEM Diagnostic Flowcharts", missing: "Relies on generic testing values" },
      t2: { feature: "Identifix Real-World Fixes", missing: "No crowdsourced confirmed fixes" },
      t3: { feature: "US & Asian Import Coverage", missing: "Heavily focused on EU domestic market" },
      t4: { feature: "Interactive VESA Diagnostics", missing: "Requires higher tier or add-ons" },
      t5: { feature: "European Maintenance Schedules" },
      t6: { feature: "Interactive Component Locators" }
    },
    haynespro: {
      weakness: "direct unedited OEM manuals and a modernized, fast interface",
      t1: { feature: "Unedited OEM Repair Manuals", missing: "Data is re-drawn and summarized" },
      t2: { feature: "Direct Identifix Integration", missing: "Lacks technician-verified fix database" },
      t3: { feature: "Factory Wiring Diagrams", missing: "Provides only standardized VESA versions" },
      t4: { feature: "Modern Cloud Infrastructure", missing: "Can be slow on legacy shop hardware" },
      t5: { feature: "Smart Guided Diagnostics" },
      t6: { feature: "Interactive Colour Wiring" }
    },
    identifix: {
      weakness: "comprehensive European OEM manuals, global maintenance schedules, and full-colour wiring data",
      t1: { feature: "Deep European OEM Manuals", missing: "Primarily focused on US domestic/Asian" },
      t2: { feature: "Interactive Colour Wiring Maps", missing: "Relies heavily on original static diagrams" },
      t3: { feature: "European Maintenance Schedules", missing: "Lacks deep EU service intervals" },
      t4: { feature: "Unified Search Interface", missing: "Separated module architecture" },
      t5: { feature: "Real-World Confirmed Fixes" },
      t6: { feature: "Component & Ground Locators" }
    },
    mitchell1: {
      weakness: "modern, fast cloud architecture and coverage outside the North American core market",
      t1: { feature: "Comprehensive EU Coverage", missing: "Geared heavily toward NA market" },
      t2: { feature: "Fast, Modern Cloud Platform", missing: "Legacy infrastructure can be slow" },
      t3: { feature: "Identifix Integration", missing: "Uses separate SureTrack system" },
      t4: { feature: "Transparent Pricing Model", missing: "Complex add-ons and modules" },
      t5: { feature: "Interactive Colour Wiring" },
      t6: { feature: "Real-World Fix Data" }
    }
  },
  fr: {
    template: {
      metaTitle: "Meilleure Alternative à {C} | Auto Fix Data",
      metaDesc: "Vous cherchez une meilleure alternative à {C} ? Arrêtez de payer trop cher. Auto Fix Data offre une couverture supérieure et des données de réparation.",
      heroH1: "Arrêtez de Payer Trop Cher pour {C}",
      heroDesc: "Pourquoi payer {P} par mois pour des données limitées ? Auto Fix Data fournit des données de réparation OEM, des schémas électriques, des codes DTC et des TSB pour plus de 150M de véhicules à une fraction du coût.",
      problemTitle: "Le Problème avec {C}",
      problemDesc: "{C} s'appuie sur des bases de données d'ancienne génération et facture des prix d'entreprise. Les garages rencontrent constamment des péages ou constatent un manque total de {W}.",
      tryInstead: "Essayez Plutôt Auto Fix Data",
      costLabel: "Coût {C}",
      afdCostLabel: "Coût Auto Fix Data",
      month: "/mois",
      nobrainer: "SANS HÉSITATION",
      allFeatures: "Toutes les fonctionnalités. Zéro frais cachés.",
      headToHead: "Comparaison Directe",
      seeMissing: "Voyez exactement ce que vous avez manqué.",
      featureCol: "Fonctionnalité",
      afdCol: "Auto Fix Data",
      archHeading: "Notre Avantage Architectural",
      archP1: "En comparant les plateformes de diagnostic, les bases de données à source unique traditionnelles comme {C} sont sévèrement limitées à leurs partenariats OEM propriétaires d'ancienne génération.",
      archP2: "L'avantage structurel d'Auto Fix Data réside dans notre agrégation intelligente unifiée. En fusionnant de vastes procédures OEM européennes, des TSB croisés et des réparations réelles vérifiées par des techniciens dans un seul index de recherche, les mécaniciens diagnostiquent les voitures 40% plus rapidement.",
      switchHeading: "Changer est sans effort.",
      step1Title: "01. Inscription Gratuite",
      step1Desc: "Commencez immédiatement votre essai gratuit de 7 jours. Aucune carte de crédit requise, accès instantané à tous les >150M de VINs.",
      step2Title: "02. Comparez-nous",
      step2Desc: "Utilisez Auto Fix Data côte à côte avec {C} dans votre atelier pendant une semaine sur de vraies réparations.",
      step3Title: "03. Économisez",
      step3Desc: "Annulez votre lourd contrat hérité et économisez des milliers d'euros par an sans sacrifier les données.",
      ctaButton: "Commencer Mon Essai Gratuit Maintenant"
    },
    alldata: {
      weakness: "couverture européenne exhaustive, schémas électriques interactifs en couleur et réparations réelles intégrées",
      t1: { feature: "Couverture Européenne Complète", missing: "Historiquement faible sur les modèles de l'UE" },
      t2: { feature: "Réparations Réelles Intégrées (Identifix)", missing: "Nécessite un abonnement entièrement distinct" },
      t3: { feature: "Schémas Électriques Couleurs Interactifs", missing: "Utilise des PDF statiques non modifiés, difficiles à lire" },
      t4: { feature: "Interface Utilisateur Claire et Moderne", missing: "Structure de plateforme d'ancienne génération" },
      t5: { feature: "Données de Réparation OEM Originales" },
      t6: { feature: "Bulletins de Service Technique (TSB)" }
    },
    autodata: {
      weakness: "organigrammes de diagnostic approfondis, couverture d'importations US/Asiatiques spécifiques et réparations vérifiées de techniciens",
      t1: { feature: "Organigrammes de Diagnostic OEM", missing: "S'appuie sur des valeurs de test génériques" },
      t2: { feature: "Réparations Réelles Identifix", missing: "Pas de réparations confirmées communautaires" },
      t3: { feature: "Couverture Importations US & Asiatiques", missing: "Fortement ciblé sur le marché intérieur de l'UE" },
      t4: { feature: "Diagnostics VESA Interactifs", missing: "Nécessite un niveau supérieur ou des modules complémentaires" },
      t5: { feature: "Programmes d'Entretien Européens" },
      t6: { feature: "Localisation Interactive des Composants" }
    },
    haynespro: {
      weakness: "manuels OEM originaux non modifiés et une interface modernisée et rapide",
      t1: { feature: "Manuels de Réparation OEM Non Modifiés", missing: "Les données sont redessinées et résumées" },
      t2: { feature: "Intégration Directe Identifix", missing: "Manque une base de données de réparations vérifiées par des techniciens" },
      t3: { feature: "Schémas Électriques d'Usine", missing: "Fournit uniquement des versions VESA standardisées" },
      t4: { feature: "Infrastructure Cloud Moderne", missing: "Peut être lent sur du matériel d'atelier d'ancienne génération" },
      t5: { feature: "Diagnostics Guidés Intelligents" },
      t6: { feature: "Câblage Couleur Interactif" }
    },
    identifix: {
      weakness: "manuels OEM européens exhaustifs, programmes d'entretien mondiaux et données de câblage en couleur",
      t1: { feature: "Manuels OEM Européens Approfondis", missing: "Principalement axé sur le marché intérieur américain/asiatique" },
      t2: { feature: "Cartes de Câblage Couleurs Interactives", missing: "S'appuie fortement sur les schémas statiques d'origine" },
      t3: { feature: "Programmes d'Entretien Européens", missing: "Manque d'intervalles de service UE approfondis" },
      t4: { feature: "Interface de Recherche Unifiée", missing: "Architecture en modules séparés" },
      t5: { feature: "Réparations Confirmées du Monde Réel" },
      t6: { feature: "Localisation des Composants et Masses" }
    },
    mitchell1: {
      weakness: "architecture cloud moderne et rapide, et couverture en dehors du marché principal nord-américain",
      t1: { feature: "Couverture UE Exhaustive", missing: "Fortement orienté vers le marché nord-américain" },
      t2: { feature: "Plateforme Cloud Rapide et Moderne", missing: "L'infrastructure d'ancienne génération peut être lente" },
      t3: { feature: "Intégration Identifix", missing: "Utilise le système séparé SureTrack" },
      t4: { feature: "Modèle de Tarification Transparent", missing: "Modules complémentaires complexes" },
      t5: { feature: "Câblage Couleur Interactif" },
      t6: { feature: "Données de Réparation Réelles" }
    }
  },
  es: {
    template: {
      metaTitle: "La Mejor Alternativa a {C} | Auto Fix Data",
      metaDesc: "¿Busca una mejor alternativa a {C}? Deje de pagar de más. Auto Fix Data ofrece cobertura y datos de reparación superiores.",
      heroH1: "Deje de Pagar de Más por {C}",
      heroDesc: "¿Por qué paga {P} al mes por datos limitados? Auto Fix Data ofrece datos OEM, diagramas, códigos DTC y TSB para más de 150M de vehículos a una fracción del costo.",
      problemTitle: "El Problema de {C}",
      problemDesc: "{C} depende de bases de datos antiguas y cobra precios empresariales. Los talleres constantemente chocan con muros de pago o les falta por completo {W}.",
      tryInstead: "Pruebe Auto Fix Data en su lugar",
      costLabel: "Costo de {C}",
      afdCostLabel: "Costo de Auto Fix Data",
      month: "/mes",
      nobrainer: "SIN DUDA",
      allFeatures: "Todas las funciones. Cero tarifas ocultas.",
      headToHead: "Comparación Directa",
      seeMissing: "Vea exactamente lo que se ha estado perdiendo.",
      featureCol: "Funcionalidad",
      afdCol: "Auto Fix Data",
      archHeading: "Nuestra Ventaja Arquitectónica",
      archP1: "Al comparar plataformas, las bases de datos tradicionales de una sola fuente como {C} están severamente limitadas a sus antiguas alianzas propietarias OEM.",
      archP2: "La ventaja estructural de Auto Fix Data es la suma unificada de inteligencia. Al combinar procedimientos OEM, TSB cruzados y soluciones reales de técnicos, se diagnostica al 40% más rápido.",
      switchHeading: "Cambiar es fácil.",
      step1Title: "01. Registro Gratuito",
      step1Desc: "Comience su prueba de 7 días. Sin tarjeta, acceso instantáneo a más de 150M de VINs.",
      step2Title: "02. Compárenos",
      step2Desc: "Use Auto Fix Data junto a {C} en su taller por una semana en reparaciones reales.",
      step3Title: "03. Ahorre Efectivo",
      step3Desc: "Cancele su contrato antiguo y ahorre miles al año sin sacrificar datos.",
      ctaButton: "Inicie su Prueba Gratuita Ahora"
    },
    alldata: {
      weakness: "cobertura europea exhaustiva, diagramas interactivos en color y soluciones reales integradas",
      t1: { feature: "Cobertura Europea Completa", missing: "Históricamente débil en modelos de la UE" },
      t2: { feature: "Soluciones Reales Integradas (Identifix)", missing: "Requiere una suscripción separada" },
      t3: { feature: "Diagramas Eléctricos Interactivos en Color", missing: "Usa PDFs estáticos difíciles de leer" },
      t4: { feature: "Interfaz Moderna y Limpia", missing: "Estructura de plataforma antigua" },
      t5: { feature: "Datos de Reparación OEM Sin Editar" },
      t6: { feature: "Boletines de Servicio Técnico (TSBs)" }
    },
    autodata: {
      weakness: "diagramas de flujo de diagnóstico profundos, cobertura específica de importaciones de EE. UU. / Asia y soluciones mecánicas verificadas",
      t1: { feature: "Diagramas de Diagnóstico OEM", missing: "Se basa en valores de prueba genéricos" },
      t2: { feature: "Soluciones Reales Identifix", missing: "Sin soluciones comprobadas por la comunidad" },
      t3: { feature: "Cobertura de Importaciones EE. UU. y Asia", missing: "Enfocado fuertemente en la UE" },
      t4: { feature: "Diagnóstico Interactivo VESA", missing: "Requiere plan superior o complementos" },
      t5: { feature: "Programas de Mantenimiento Europeos" },
      t6: { feature: "Ubicación Interactiva de Componentes" }
    },
    haynespro: {
      weakness: "manuales OEM directos sin editar y una interfaz modernizada y rápida",
      t1: { feature: "Manuales OEM Sin Editar", missing: "Los datos son redibujados y resumidos" },
      t2: { feature: "Integración Directa Identifix", missing: "No tiene base de datos de soluciones de técnicos" },
      t3: { feature: "Diagramas Eléctricos de Fábrica", missing: "Proporciona solo versiones VESA estandarizadas" },
      t4: { feature: "Infraestructura Cloud Moderna", missing: "Puede ser lento en computadoras de taller antiguas" },
      t5: { feature: "Diagnóstico Inteligente Guiado" },
      t6: { feature: "Cableado Interactivo en Color" }
    },
    identifix: {
      weakness: "manuales OEM europeos completos, programas de mantenimiento globales y datos de cableado a color",
      t1: { feature: "Manuales OEM Europeos Profundos", missing: "Enfocado principalmente en el mercado de EE. UU. / Asia" },
      t2: { feature: "Mapas de Cableado a Color Interactivos", missing: "Depende mucho de diagramas estáticos originales" },
      t3: { feature: "Programas de Mantenimiento Europeos", missing: "Falta profundidad en intervalos de servicio de la UE" },
      t4: { feature: "Interfaz de Búsqueda Unificada", missing: "Arquitectura de módulos separados" },
      t5: { feature: "Soluciones Confirmadas Reales" },
      t6: { feature: "Ubicación de Componentes y Masas" }
    },
    mitchell1: {
      weakness: "arquitectura en la nube moderna y rápida y cobertura fuera del mercado norteamericano principal",
      t1: { feature: "Cobertura Exhaustiva de la UE", missing: "Orientado en gran medida al mercado norteamericano" },
      t2: { feature: "Plataforma Cloud Rápida", missing: "La infraestructura antigua puede ser lenta" },
      t3: { feature: "Integración Identifix", missing: "Usa sistema SureTrack separado" },
      t4: { feature: "Modelo de Precios Transparente", missing: "Complementos y módulos complejos" },
      t5: { feature: "Cableado a Color Interactivo" },
      t6: { feature: "Datos de Soluciones del Mundo Real" }
    }
  },
  de: {
    template: {
      metaTitle: "Die Bester {C} Alternative | Auto Fix Data",
      metaDesc: "Auf der Suche nach einer besseren {C} Alternative? Hören Sie auf zu viel zu bezahlen. Auto Fix Data liefert bessere Abdeckung und OEM Daten.",
      heroH1: "Zahlen Sie nicht mehr zu viel für {C}",
      heroDesc: "Warum zahlen Sie {P} pro Monat für eingeschränkte Daten? Auto Fix Data bietet OEM-verifizierte Reparaturdaten, Schaltpläne, DTCs und TSBs für über 150 Mio. Fahrzeuge zu einem Bruchteil der Kosten.",
      problemTitle: "Das {C} Problem",
      problemDesc: "{C} verlässt sich auf veraltete Datenbanken und verlangt Premium-Preise. Werkstätten stoßen ständig auf Paywalls oder vermissen völlig {W}.",
      tryInstead: "Probieren Sie stattdessen Auto Fix Data",
      costLabel: "{C} Kosten",
      afdCostLabel: "Auto Fix Data Kosten",
      month: "/Monat",
      nobrainer: "KLARER FALL",
      allFeatures: "Alle Funktionen. Keine versteckten Gebühren.",
      headToHead: "Direkter Vergleich",
      seeMissing: "Sehen Sie genau, was Ihnen gefehlt hat.",
      featureCol: "Funktion",
      afdCol: "Auto Fix Data",
      archHeading: "Unser technologischer Vorsprung",
      archP1: "Beim Vergleich von Diagnoseplattformen sind herkömmliche Single-Source-Datenbanken wie {C} stark auf ihre veralteten proprietären OEM-Partnerschaften beschränkt.",
      archP2: "Der strukturelle Vorteil von Auto Fix Data liegt in der Zusammenführung von intelligenten Daten. Wir aggregieren Verfahren, TSBs und Praxisreparaturen in einem Index, wodurch Mechaniker Autos 40 % schneller diagnostizieren.",
      switchHeading: "Der Wechsel geht mühelos.",
      step1Title: "01. Kostenlos Registrieren",
      step1Desc: "Starten Sie sofort die 7-Tage-Testversion. Keine Kreditkarte, sofortiger Zugriff auf alle >150 Mio. VINs.",
      step2Title: "02. Vergleichen Sie uns",
      step2Desc: "Testen Sie Auto Fix Data eine Woche lang neben {C} in der Werkstatt.",
      step3Title: "03. Geld Sparen",
      step3Desc: "Kündigen Sie teure Verträge und sparen Sie Tausende von Euro pro Jahr, ohne auf Daten zu verzichten.",
      ctaButton: "Starten Sie jetzt Ihre kostenlose Testversion"
    },
    alldata: {
      weakness: "umfassende europäische Abdeckung, interaktive farbige Schaltpläne und integrierte praxisbezogene Reparaturen",
      t1: { feature: "Vollständige EU Fahrzeugabdeckung", missing: "Historisch schwach bei EU spezifischen Modellen" },
      t2: { feature: "Integrierte Praxislösungen (Identifix)", missing: "Erfordert ein komplett separates Abonnement" },
      t3: { feature: "Interaktive farbige Schaltpläne", missing: "Verwendet unbearbeitete, schwer lesbare statische PDFs" },
      t4: { feature: "Moderne, klare Benutzeroberfläche", missing: "Veraltete Plattformstruktur" },
      t5: { feature: "Unbearbeitete OEM-Reparaturdaten" },
      t6: { feature: "Technische Service-Bulletins (TSBs)" }
    },
    autodata: {
      weakness: "tiefe Diagnoseflussdiagramme, spezielle Abdeckung von US/Asien-Importen und geprüfte Technikerreparaturen",
      t1: { feature: "OEM Diagnose-Ablaufdiagramme", missing: "Verlässt sich auf generische Prüfwerte" },
      t2: { feature: "Praxisreparaturen Identifix", missing: "Keine von Benutzern bestätigten Reparaturen" },
      t3: { feature: "Abdeckung US & Asien Importe", missing: "Stark auf den EU Binnenmarkt fokussiert" },
      t4: { feature: "Interaktive VESA-Diagnose", missing: "Erfordert höhere Stufe oder Add-ons" },
      t5: { feature: "Europäische Wartungspläne" },
      t6: { feature: "Interaktive Bauteilsuche" }
    },
    haynespro: {
      weakness: "direkte unbearbeitete OEM Handbücher und eine moderne, schnelle Schnittstelle",
      t1: { feature: "Unbearbeitete OEM Werkstatthandbücher", missing: "Daten sind nachgezeichnet und zusammengefasst" },
      t2: { feature: "Direkte Identifix Integration", missing: "Es fehlt die Datenbank für handwerkergeprüfte Reparaturen" },
      t3: { feature: "Originale Werksschaltpläne", missing: "Bietet nur standardisierte VESA Versionen" },
      t4: { feature: "Moderne Cloud Inbox", missing: "Kann auf veralteter Werkstatthardware langsam sein" },
      t5: { feature: "Intelligente geführte Diagnose" },
      t6: { feature: "Interaktive farbige Schaltpläne" }
    },
    identifix: {
      weakness: "umfassende europäische OEM Handbücher, globale Wartungspläne und farbige Schaltplandaten",
      t1: { feature: "Umfassende europäische OEM Handbücher", missing: "Hauptsächlich auf US Inlandsmarkt fokussiert" },
      t2: { feature: "Farbige interaktive Schaltpläne", missing: "Verlässt sich stark auf statische Originaldiagramme" },
      t3: { feature: "Europäische Wartungspläne", missing: "Weist Lücken bei EU Wartungsintervallen auf" },
      t4: { feature: "Einheitliche Suchoberfläche", missing: "Getrennte Modul-Architektur" },
      t5: { feature: "Bestätigte Reparaturen aus der Praxis" },
      t6: { feature: "Bauteil & Massepunkt Ortung" }
    },
    mitchell1: {
      weakness: "moderne, schnelle Cloud Architektur und Abdeckung außerhalb des nordamerikanischen Kernmarkts",
      t1: { feature: "Umfassende EU Abdeckung", missing: "Stark auf den nordamerikanischen Markt ausgerichtet" },
      t2: { feature: "Schnelle Cloud-Plattform", missing: "Alte Infrastruktur kann langsam sein" },
      t3: { feature: "Identifix Integration", missing: "Nutzt ein eigenes SureTrack System" },
      t4: { feature: "Transparentes Preismodell", missing: "Komplexe Zusatzmodule" },
      t5: { feature: "Farbige Schaltpläne" },
      t6: { feature: "Praxisdaten" }
    }
  },
  it: {
    template: {
      metaTitle: "Migliore Alternativa a {C} | Auto Fix Data",
      metaDesc: "Cerchi un'alternativa a {C}? Smetti di pagare troppo. Auto Fix Data offre la migliore copertura.",
      heroH1: "Smetti di Pagare Troppo per {C}",
      heroDesc: "Perché paghi {P} al mese per dati limitati? Auto Fix Data offre dati OEM, schemi elettrici, DTC e TSB per oltre 150 milioni di veicoli a una frazione del costo.",
      problemTitle: "Il Problema di {C}",
      problemDesc: "{C} si affida a database obsoleti e prezzi elevati. Le officine incontrano continuamente limiti o mancano completamente di {W}.",
      tryInstead: "Prova Invece Auto Fix Data",
      costLabel: "Costo {C}",
      afdCostLabel: "Costo Auto Fix Data",
      month: "/mese",
      nobrainer: "SENZA DUBBIO",
      allFeatures: "Tutte le funzioni. Nessun costo nascosto.",
      headToHead: "Confronto Diretto",
      seeMissing: "Scopri esattamente cosa ti stai perdendo.",
      featureCol: "Funzionalità",
      afdCol: "Auto Fix Data",
      archHeading: "Il Nostro Vantaggio Architetturale",
      archP1: "Mentre {C} è vincolato alle sue vecchie partnership OEM a singola fonte...",
      archP2: "Il vantaggio di Auto Fix Data è l'aggregazione intelligente. Unificando OEM europei, TSB e riparazioni verificate, i meccanici risolvono i problemi il 40% più velocemente.",
      switchHeading: "Passare è facilissimo.",
      step1Title: "01. Registrati Gratis",
      step1Desc: "Inizia la prova gratuita di 7 giorni. Senza carta di credito.",
      step2Title: "02. Confrontaci",
      step2Desc: "Prova Auto Fix Data in officina insieme a {C} per una settimana.",
      step3Title: "03. Risparmia",
      step3Desc: "Cancella il vecchio contratto e risparmia senza sacrificare dati.",
      ctaButton: "Inizia la Prova Gratuita"
    },
    alldata: {
      weakness: "copertura europea completa, schemi elettrici interattivi a colori e riparazioni reali integrate",
      t1: { feature: "Copertura Completa Europea", missing: "Storicamente debole sui modelli UE specifici" },
      t2: { feature: "Soluzioni Reali Integrate (Identifix)", missing: "Richiede un abbonamento separato a parte" },
      t3: { feature: "Schemi Elettrici Colori Interattivi", missing: "Usa vecchi PDF statici non elaborati" },
      t4: { feature: "Interfaccia Moderna e Pulita", missing: "Struttura antiquata" },
      t5: { feature: "Dati di Riparazione OEM Non Filtrati" },
      t6: { feature: "Bollettini Tecnici (TSB)" }
    },
    autodata: {
      weakness: "diagrammi di flusso diagnostici approfonditi, copertura import USA/Asia e riparazioni reali",
      t1: { feature: "Diagrammi Flusso OEM", missing: "Punta su valori generici" },
      t2: { feature: "Casi Reali Identifix", missing: "Nessuna soluzione comunitaria" },
      t3: { feature: "Copertura Veicoli Asiatici/USA", missing: "Fortemente orientata solo all'UE" },
      t4: { feature: "Diagnosi VESA Interattiva", missing: "Richiede piani superiori" },
      t5: { feature: "Piani di Manutenzione" },
      t6: { feature: "Ricerca Componenti Interattiva" }
    },
    haynespro: {
      weakness: "manuali OEM diretti e un'interfaccia molto più moderna",
      t1: { feature: "Manuali Riparazione OEM Intatti", missing: "I dati sono spesso ridesegnati" },
      t2: { feature: "Integrazione Identifix", missing: "Mancano i casi di riparazione verificati" },
      t3: { feature: "Schemi Elettrici di Fabbrica", missing: "Fornisce solo le versioni VESA" },
      t4: { feature: "Infrastruttura Cloud Moderna", missing: "Lenta su hardware di officina vecchio" },
      t5: { feature: "Diagnosi Guidata" },
      t6: { feature: "Schemi Interattivi a Colori" }
    },
    identifix: {
      weakness: "manuali completi europei OEM, manutenzione globale e schemi elettrici colorati",
      t1: { feature: "Manuali OEM Europei Approfonditi", missing: "Concentrato sul mercato USA" },
      t2: { feature: "Visualizzatore Schemi Colorati", missing: "Basato su scansioni in bianco e nero" },
      t3: { feature: "Programmi di Tagliando Europei", missing: "Carente sui modelli europei specifici" },
      t4: { feature: "Motore di Ricerca Unificato", missing: "Moduli frammentati" },
      t5: { feature: "Soluzioni Confermate Reali" },
      t6: { feature: "Localizzatore Componenti e Masse" }
    },
    mitchell1: {
      weakness: "copertura europea specifica e piattaforma ultraveloce",
      t1: { feature: "Copertura Completa Europea", missing: "Troppo orientato sul ramo USA" },
      t2: { feature: "Velocità dell'infrastruttura Cloud", missing: "I vecchi sistemi sono pesanti" },
      t3: { feature: "Integrazione Dati Reali", missing: "Usa moduli a pagamento SureTrack" },
      t4: { feature: "Prezzo Chiaro", missing: "Molti extra non inclusi" },
      t5: { feature: "Schemi Interattivi Colori" },
      t6: { feature: "Fix del mondo reale" }
    }
  },
  ar: {
    template: {
      metaTitle: "أفضل بديل لـ {C} للورش | Auto Fix Data",
      metaDesc: "هل تبحث عن بديل لـ {C}؟ توقف عن الدفع الباهظ. يوفر Auto Fix Data تغطية هائلة ومخططات كهربائية حديثة.",
      heroH1: "توقف عن الدفع الزائد لـ {C}",
      heroDesc: "لماذا تدفع {P} شهريًا مقابل بيانات محدودة؟ يوفر Auto Fix Data بيانات OEM أصلية، ومخططات كهربائية للتفاعلات، وأكواد DTC وTSB لأكثر من 150 مليون سيارة بأقل تكلفة.",
      problemTitle: "مشكلة {C}",
      problemDesc: "يعتمد {C} على بنية قديمة ويفرض أسعارًا ضخمة للشركات. تصطدم الورش غالبًا بجدران دفع إضافية أو تعاني من نقص في {W}.",
      tryInstead: "جرب Auto Fix Data بدلاً من ذلك",
      costLabel: "تكلفة {C}",
      afdCostLabel: "تكلفة Auto Fix Data",
      month: "/شهر",
      nobrainer: "لا مجال للتردد",
      allFeatures: "جميع المزايا. لا رسوم خفية.",
      headToHead: "مقارنة مباشرة",
      seeMissing: "تعرف على ما فقدته طوال هذا الوقت.",
      featureCol: "الميزة",
      afdCol: "Auto Fix Data",
      archHeading: "أفضليتنا التقنية الجذرية",
      archP1: "عند مقارنة منصات التشخيص، تظل الأنظمة الكلاسيكية مثل {C} مقيدة بشراكاتها المحدودة وتكنولوجيتها القديمة.",
      archP2: "يكمن التفوق الهيكلي لـ Auto Fix Data في دمج الذكاء الاصطناعي مع البيانات الفعلية. من خلال دمج إجراءات OEM الأوروبية ونشرات TSB وحلول الورش المؤكدة بذكاء، يستطيع الميكانيكي تشخيص الأعطال أسرع بـ 40%.",
      switchHeading: "الانتقال إلينا لا يتطلب جهدًا.",
      step1Title: "01. سجل مجانًا",
      step1Desc: "ابدأ التجربة المجانية لـ 7 أيام فورًا من دون بطاقة ائتمانية.",
      step2Title: "02. قارن بنفسك",
      step2Desc: "ضع Auto Fix Data و {C} جنبًا إلى جنب في ورشتك لمدة أسبوع بناءً على إصلاحات حقيقية.",
      step3Title: "03. وفر المال",
      step3Desc: "ألغِ عقودك الباهظة ووفر آلاف الدولارات سنويًا مع الاستمتاع ببيانات أفضل.",
      ctaButton: "ابدأ التجربة المجانية الآن"
    },
    alldata: {
      weakness: "تغطية كاملة للمركبات الأوروبية، مخططات كهربائية تفاعلية، وحلول مدعومة بالتجارب",
      t1: { feature: "تغطية شاملة للسيارات الأوروبية", missing: "تاريخياً ضعيف في الطرازات الأوروبية" },
      t2: { feature: "إصلاحات ميدانية مدمجة (Identifix)", missing: "تتطلب اشتراكًا إضافيًا منفصلاً" },
      t3: { feature: "مخططات كهربائية ملونة وتفاعلية", missing: "يعتمد على ملفات PDF ثابتة يصعب قراءتها" },
      t4: { feature: "واجهة حديثة وسهلة الاستخدام", missing: "هيكل المنصة قديم نوعاً ما" },
      t5: { feature: "بيانات الإرشادات الأصلية لـ OEM" },
      t6: { feature: "نشرات الخدمات الفنية (TSBs)" }
    },
    autodata: {
      weakness: "مخططات التشخيص العميقة وتغطية سيارات الاستيراد الآسيوية والأمريكية، بالإضافة للإصلاحات المؤكدة",
      t1: { feature: "مخططات سير خطوات التشخيص OEM", missing: "يعتمد على قيم فحص عامة" },
      t2: { feature: "حلول واقعية عبر Identifix", missing: "لا يحتوي على حلول مجربة مجتمعياً" },
      t3: { feature: "تغطية المركبات الأمريكية والآسيوية", missing: "التركيز بالكامل تقريبًا على السوق الأوروبي" },
      t4: { feature: "التشخيص التفاعلي VESA", missing: "يتطلب باقة أعلى أو إضافات" },
      t5: { feature: "جداول الصيانة الأوروبية" },
      t6: { feature: "محدد مواقع المكونات التفاعلي" }
    },
    haynespro: {
      weakness: "أدلة المصنع الأصلية غير المحررة وواجهة سريعة وحديثة كليًا",
      t1: { feature: "إرشادات المصنع الأصلية OEM", missing: "البيانات مرسومة أو ملخصة وليست مطابقة للمصنع" },
      t2: { feature: "دمج مباشر لـ Identifix", missing: "يفتقر لقاعدة بيانات أعطال واقعية مجربة" },
      t3: { feature: "مخططات المصنع الكهربائية", missing: "يوفر فقط إصدارات VESA القياسية" },
      t4: { feature: "بنية سحابية حديثة", missing: "قد يكون بطيئًا على كمبيوترات الورش القديمة" },
      t5: { feature: "تشخيص ذكي موجه" },
      t6: { feature: "مخططات كهربائية ملونة" }
    },
    identifix: {
      weakness: "الأدلة الأوروبية العميقة لبرامج الصيانة والمخططات التفاعلية الملونة",
      t1: { feature: "أدلة OEM الأوروبية الدقيقة", missing: "مستهدف نحو السوق الأمريكي/الآسيوي حصراً تقريباً" },
      t2: { feature: "مخططات التمديد الملونة التفاعلية", missing: "يعتمد بشكل كبير على المخططات الثابتة الأصلية" },
      t3: { feature: "جداول الصيانة الأوروبية", missing: "يفتقر لعمق فترات الصيانة للمركبات الأوروبية" },
      t4: { feature: "واجهة بحث ودمج ذكية", missing: "هيكلية مجزأة إلى وحدات" },
      t5: { feature: "حلول مؤكدة من خبراء ميكانيكا" },
      t6: { feature: "موقع المكونات ونقاط الأرضي التفاعلية" }
    },
    mitchell1: {
      weakness: "بنية السحابة الحديثة وتغطية كاملة للمركبات خارج السوق الأمريكية",
      t1: { feature: "تغطية واسعة للمركبات الأوروبية", missing: "موجه في الغالب للسيارات الأمريكية" },
      t2: { feature: "منصة سحابية متقدمة وسريعة", missing: "الأنظمة القديمة قد تتسبب بالبطء التام" },
      t3: { feature: "اندماج حقيقي لـ Identifix", missing: "يستخدم نظامًا فرعيًا منفصلاً SureTrack" },
      t4: { feature: "طراز تسعير شفاف", missing: "تعقيدات وإضافات مخفية عديدة" },
      t5: { feature: "مخططات تفاعلية كاملة" },
      t6: { feature: "حلول وتجارب العالم الحقيقي" }
    }
  },
  he: {
    template: {
      metaTitle: "החלופה הטובה ביותר ל-{C} | Auto Fix Data",
      metaDesc: "מחפשים תחליף ל-{C}? תפסיקו לשלם יותר מדי. Auto Fix Data מביאה כיסוי מתקדם ושרטוטים אירופאיים ואמריקאיים בסביבת ענן.",
      heroH1: "אל תשלמו יותר מדי על {C}",
      heroDesc: "למה אתם משלמים {P} לחודש עבור מידע מוגבל? אלטרנטיבה מעולה המביאה נתוני OEM, שרטוטי חשמל אינטרקטיביים מעל ל-150 מליון רכבים במחירי רצפה.",
      problemTitle: "ההזדמנות להשתדרג מעל {C}",
      problemDesc: "{C} מצריכה תשלום פרימיום ולוקה בחסר. מוסכים נתקלים בחסימות תשלום חוזרות בעוד שחסר להם {W} בשגרת היום יום.",
      tryInstead: "נסו את Auto Fix Data עכשיו",
      costLabel: "העלות של {C}",
      afdCostLabel: "העלות אצלנו ב-AFD",
      month: "/חודש",
      nobrainer: "חד משמעית",
      allFeatures: "כל התכונות, הכל פתוח. בלי אותיות קטנות.",
      headToHead: "השוואה מלאה פנים מול פנים",
      seeMissing: "תראו בעצמכם מה החסרתם עד עכשיו.",
      featureCol: "תכונה במערכת הדיאגנוסטיקה",
      afdCol: "Auto Fix Data",
      archHeading: "היתרון הטכנולוגי שלנו למוסך",
      archP1: "כשמדובר בפלטפורמות עתיקות המספקות מדריכי מוסך כגון {C}, הטכנאים מוגבלים בחוזים ותלות במסד נתונים סלקטיבי אחד בודד.",
      archP2: "היתרון העוצמתי של Auto Fix Data הוא האגרגטור. במקום לחפש מדריכי OEM ושגיאות בנפרד מול פתרונות Identifix, הכל מוגש יחדיו ומסונכרן דרך מנוע אלגוריתם המקצר את זמני התיקון ב-40%.",
      switchHeading: "תהליך המעבר הוא פשוט לגמרי.",
      step1Title: "01. פתחו חשבון בחינם",
      step1Desc: "7 ימי ניסיון נפתחים בזה הרגע ללא עמלות וללא כרטיס אשראי. גישה ל-150 מיליון רכבים מיד.",
      step2Title: "02. השוו ונסו",
      step2Desc: "פתחו במוסך את Auto Fix Data ליד המסך של {C} ובדקו אותנו בעבודה מול רכב נתון.",
      step3Title: "03. חסכו הון למוסך",
      step3Desc: "בטלו את החוזים המגבילים עם ספק יבואן עתיק וחסכו כסף עצום ללא פשרה על רמת הדיאגנוסטיקה.",
      ctaButton: "התחל במסלול מוסך ניסיון בחינם עכשיו"
    },
    alldata: {
      weakness: "כיסוי אירופאי מעמיק ושרטוטי חשמל מהשריג האירופאי עם פתרונות חיכוך ב-Identifix",
      t1: { feature: "כיסוי ייעודי לרכבי שוק אירופה והמזרח התיכון", missing: "חיסרון היסטורי במידע על רכבי ייבוא אירופה" },
      t2: { feature: "שילוב פתרונות תקלה מקצועיים (Identifix)", missing: "מצריך דמי מינוי של פלטפורמה מופרדת נוספת" },
      t3: { feature: "שרטוטי חשמל צבעוניים לאינטראקציה גבוהה בעבודה", missing: "מתבסס לרוב על קבצי PDF סרוקים לא עריכה" },
      t4: { feature: "ממשק מהיר ונקי בעיצוב עכשווי", missing: "סביבה ופלטפורמה ארגונית מיושנת איטית" },
      t5: { feature: "הנחיות ותהליכי תיקון מהיצרן פתוחים (OEM)" },
      t6: { feature: "קריאות שירות ויצרן מרובות ב-TSB" }
    },
    autodata: {
      weakness: "הנחיות ותרשימי זרימה מקוריים של OEM לניטור תקלות ברכבים מיובאים",
      t1: { feature: "תרשימי זרימה לדיאגנוזה (OEM Flowcharts)", missing: "מסתמך על בדיקות גנריות ולא מדריך יצרן מקורי" },
      t2: { feature: "תיקונים מוסבר על ידיי מוסכים - Identifix", missing: "ללא תמיכת דיווח המונים בתיקוני אמת מהארגון" },
      t3: { feature: "כיסוי אדיר ועדכני לרכבי אמריקה ואסיה/קוריאה", missing: "מכוון כמעט בנוקשות לשוק והתקן האיחוד האירופאי" },
      t4: { feature: "אבחוני VESA דינמיים", missing: "דמי גבייה על תוספים ואשכולות נוספים" },
      t5: { feature: "ספר רכבי תחזוקת רכב מעמיקה לשוק האיזור" },
      t6: { feature: "איתור מפות מיקום חיישנים לרכבים" }
    },
    haynespro: {
      weakness: "מדריכי OEM אורגינליים וזמינות פלטפורמה מהנה למשתמש במוסך סואן",
      t1: { feature: "הליכי תיקון יצרן OEM שקופים וללא עריכה", missing: "לפעמים המדריכים משוחזרים ומסוכמים טלגרפית" },
      t2: { feature: "אינטגרציה לתשתיות הדיאגנוסטיקה והקהילה", missing: "מחוסר שיתוף ופתרונות מלקטים מטכנאים (Fixes Database)" },
      t3: { feature: "שרטוטי מפעל מדויקים של חיווט החשמל לאפס תקלות", missing: "לרוב מציג את תרמישי קודי וצבעי VESA בלבד ולא מפעל" },
      t4: { feature: "תשתיות אירוח בענן להעלאות מהירות מכל מקום", missing: "חומרת המוסך מצריכה סביבת מחשوب נייחת חזקה לתפעול" },
      t5: { feature: "אבחון מונחה חכם ומעקב תקלות אוטומטי" },
      t6: { feature: "מפות חשמל אינטראקטיביות מעמיקות" }
    },
    identifix: {
      weakness: "מפרטי רכב ותחזוקה מכל העולם ולעומק הניתוח עם קודי מנוע מהיבואן לחשמלאות מתקדמת",
      t1: { feature: "מדריכי שירות ומרווחי טיפול מהשוק האירופאי והעולמי", missing: "משאיר חלק מהמיקוד של חברת האם בשוקים זרים" },
      t2: { feature: "סכימות אינטרקטיביות לצמות המחשבים והרתמות מלאים בצבע", missing: "התנגשות עם המבנה המסורתי בהליכים במקרים נדרשים להקלה מהירה" },
      t3: { feature: "עדכוני טבלת תחזוקה צמודה לתקני היצרן בגרמניה וצרפת", missing: "זמן עדכונים עדיף בפילוח השוק שלנו מעבר להפקדת הדאטה" },
      t4: { feature: "טופולוגיית חיפוש מאוחדת ומנהלת על מסך מקושר אחד", missing: "שיטת המודולים יוצרת לעיתים כפילויות בפלטפורמה הישנה" },
      t5: { feature: "חוות דעת של מתקנים במוסכים אמיתיים ופתרונות לבעיות מוכרות" },
      t6: { feature: "הנחיות נקודתיות של איתור מיקומי רכיבי המנוע והמרכב" }
    },
    mitchell1: {
      weakness: "עדכוני תוכנה כחווית מרחב מודרני מרובה שפות ומותאם לפלח האירופי בנוסף לארהב",
      t1: { feature: "פריסת מידע מעמיקה בהקשר של ארצות ייבוא מאירופה ופלח השוק המקומי", missing: "תשתית חזקה בדרך כלל בארה\"ב על פני מערכות היבואן כאן" },
      t2: { feature: "מוצר על גבי דפדפן מאובטח וקל משקל לעבודה מהטאבלט ישירות ברכב הנוסע", missing: "גמישות תפעולית מוטלת בספק לעומת ממשקי הרשת המתקדמים מגישת 2026" },
      t3: { feature: "חשיפה לספריות התקלות וה-FIX ברחבי אגן הפלטפורמות כולל זיהוי מלא של שורש הבעיה", missing: "חלוקה קשה והסתמכות מרובה על מודכים נפרד כגון אובייקטים פרימיומס" },
      t4: { feature: "משוא פנים צרכני, ללא הוספות שקריות ועלויות ענק עבור חבילות חיבור עתידיות למערכת", missing: "מנגנוני הרחבה מתוכננים לתשלומי נישה בנוספים כמעט דרך קבע" },
      t5: { feature: "שירטוטים למערכות צמות ומוליכים בסולם רב גווני במכשיר הדיגיטלי" },
      t6: { feature: "שליפת מידע היסטורי ממוסכים כפתרונות לצוות הדיאגנוסטיקה" }
    }
  }
};

Object.keys(data).forEach(lang => {
  const p = path.join(__dirname, 'src', 'dictionaries', `${lang}.json`);
  if(fs.existsSync(p)) {
    const dict = JSON.parse(fs.readFileSync(p, 'utf8'));
    dict.alternatives = data[lang];
    fs.writeFileSync(p, JSON.stringify(dict, null, 2));
    console.log(`Updated alternatives in ${lang}.json`);
  }
});
