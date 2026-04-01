const fs = require('fs');
const path = 'C:/Users/Ayoub/Desktop/Asset-Manager/artifacts/autofixdata-next/src/dictionaries/fr.json';
const dict = JSON.parse(fs.readFileSync(path, 'utf8'));

dict.alldata = {
  ...dict.alldata,
  statsBar: [
    { value: `44 000+`, label: `Véhicules couverts` },
    { value: `Direct-OEM`, label: `Données non éditées` },
    { value: `La plus grande`, label: `Base de BST` },
    { value: `Par AutoZone`, label: `Standard de l'industrie` }
  ],
  featuresHeading: `Ce que ALLDATA inclut dans votre abonnement`,
  featuresSubheading: `ALLDATA est la référence absolue pour les données de réparation OEM — utilisée par les techniciens professionnels et les concessionnaires agréés du monde entier. Chaque donnée provient directement des constructeurs automobiles, sans retouche ni résumé.`,
  features: [
    { title: `Procédures de réparation OEM non éditées`, desc: `Accédez aux procédures de réparation exactes provenant directement des constructeurs automobiles — rien n'est édité, résumé ou interprété. Les mêmes données que celles utilisées par les concessionnaires agréés.` },
    { title: `Bulletins de Service Technique (BST)`, desc: `La bibliothèque de BST la plus complète du secteur. Prenez connaissance des problèmes reconnus par les constructeurs et de leurs solutions officielles avant même de brancher un scanner.` },
    { title: `Schémas de câblage`, desc: `Schémas électriques complets pour chaque système de carrosserie. Tracez les circuits de gestion moteur, ABS, SRS, commandes de carrosserie et réseaux bus CAN avec des schémas fidèles à l'usine.` },
    { title: `Informations de rappel`, desc: `Accès immédiat à tous les rappels de sécurité et enquêtes NHTSA par véhicule, offrant à votre atelier une vue d'ensemble de tout problème de sécurité ou de qualité connu.` },
    { title: `Organigrammes de diagnostic`, desc: `Arbres de décision de diagnostic OEM étape par étape pour tous les principaux codes DTC. Suivez la séquence de test exacte utilisée par les techniciens des concessionnaires — aucune supposition, aucune pièce gaspillée.` },
    { title: `Temps de main-d'œuvre et devis`, desc: `Temps de main-d'œuvre OEM forfaitaires pour chaque procédure de réparation, permettant des devis précis et une planification réaliste pour votre atelier.` }
  ],
  whyHeading: `La norme de l'industrie pour les données OEM`,
  whyBody: `ALLDATA est utilisé par plus de 400 000 techniciens professionnels dans le monde et couvre plus de 44 000 applications de véhicules. Contrairement aux fournisseurs de données tiers qui interprètent et résument les informations du fabricant, ALLDATA publie les documents d'usine exacts — procédures de réparation, spécifications, schémas et bulletins — exactement tels que le fabricant les a rédigés.`,
  whyList: [
    `Données OEM directement de l'usine — jamais éditées ou résumées`,
    `La plus grande base de données de BST dans le marché secondaire de l'automobile`,
    `Données complètes de rappel NHTSA et d'enquêtes de sécurité`,
    `Organigrammes de diagnostic OEM correspondant aux arbres de décision des outils de diagnostic des concessionnaires`,
    `Guides complets des temps de main-d'œuvre pour des devis précis`
  ],
  keyStatsHeading: `Statistiques clés d'ALLDATA`,
  keyStats: [
    { label: `Applications de véhicules`, value: `44 000+` },
    { label: `BST OEM dans la base`, value: `6M+` },
    { label: `Utilisateurs professionnels`, value: `400 000+` },
    { label: `Mises à jour des données`, value: `En continu` },
    { label: `Années de couverture`, value: `1982–2026` }
  ],
  faqHeading: `Foire aux questions ALLDATA`,
  faqs: [
    { q: `Qu'est-ce qu'ALLDATA ?`, a: `ALLDATA est la principale source d'informations de réparation OEM non éditées de l'industrie automobile, publiée par AutoZone. Elle permet d'accéder aux procédures de réparation d'usine, aux BST, aux schémas de câblage et aux données de diagnostic pour plus de 44 000 applications de véhicules.` },
    { q: `ALLDATA est-il inclus dans tous les abonnements Auto Fix Data ?`, a: `Oui. Tous les plans Auto Fix Data incluent un accès complet à ALLDATA, ainsi qu'à AutoData, Haynes Pro, Mitchell1 et Identifix — cinq bases de données premium sous un seul abonnement.` },
    { q: `ALLDATA a-t-il une bonne couverture des véhicules européens ?`, a: `ALLDATA a une forte couverture des véhicules nord-américains et des grandes marques d'importation. Pour une couverture européenne spécialisée approfondie, AutoData, inclus dans votre abonnement, offre une excellente profondeur complémentaire.` },
    { q: `ALLDATA peut-il aider au diagnostic des codes de défaut (DTC) ?`, a: `Oui. ALLDATA fournit des organigrammes de diagnostic OEM complets pour tous les principaux codes DTC — les arbres de décision exacts utilisés par les techniciens des concessionnaires, complétés par les solutions réelles d'Identifix.` },
    { q: `À quelle fréquence ALLDATA est-il mis à jour ?`, a: `ALLDATA est mis à jour en continu à mesure que les constructeurs publient de nouveaux BST, rappels et procédures de service. Les données des nouveaux modèles sont ajoutées dès qu'elles sont rendues disponibles par les équipementiers.` }
  ],
  ctaHeading: `Accédez à ALLDATA via Auto Fix Data`,
  ctaBody: `Auto Fix Data est un revendeur autorisé ALLDATA. Votre abonnement vous donne un accès complet à ALLDATA, ainsi qu'à AutoData, Haynes Pro, Mitchell1 et Identifix. Un seul abonnement, cinq bases de données premium.`,
  ctaCompare: `Comparez avec les alternatives`
};

dict.autodata = {
  ...dict.autodata,
  statsBar: [
    { value: `35+ ans`, label: `Données de service européen` },
    { value: `150M+`, label: `Véhicules couverts` },
    { value: `OEM`, label: `Spécifications d'origine` },
    { value: `Standard`, label: `Plateforme d'atelier` }
  ],
  featuresHeading: `Ce que AutoData inclut dans votre abonnement`,
  featuresSubheading: `AutoData est la référence des données techniques pour les ateliers européens depuis plus de 35 ans. Des capacités d'huile aux intervalles de remplacement de courroie de distribution, AutoData fournit les spécifications précises dont les professionnels ont besoin.`,
  features: [
    { title: `Programmes d'entretien`, desc: `Intervalles d'entretien complets spécifiés par l'OEM, y compris les types d'huile, les capacités de liquide et les calendriers de remplacement pour les filtres et les courroies.` },
    { title: `Procédures de maintenance`, desc: `Guides détaillés étape par étape pour les tâches courantes, y compris le remplacement des courroies/chaînes de distribution avec références d'outils et couples de serrage.` },
    { title: `Spécifications techniques`, desc: `Accès rapide aux données de géométrie des roues, aux pressions des pneus, aux spécifications de batterie, aux écartements des bougies et aux réfrigérants de climatisation.` },
    { title: `Schémas de câblage`, desc: `Schémas électriques clairs et standardisés couvrant la gestion moteur, l'ABS, la climatisation et les principaux systèmes électriques de carrosserie.` },
    { title: `Emplacements des composants`, desc: `Diagrammes interactifs montrant les emplacements exacts des capteurs, fusibles, relais et modules de commande pour accélérer les diagnostics.` },
    { title: `Recherche de DTC`, desc: `Définitions complètes des codes de défaut avec des causes probables, aidant à orienter les techniciens dans la bonne direction initiale.` }
  ],
  whyHeading: `Le standard de l'atelier européen`,
  whyBody: `AutoData est particulièrement performant pour les ateliers indépendants gérant des marques européennes. Sa base de spécifications techniques couvre Vauxhall, Renault, Peugeot, Citroën, Fiat, Alfa Romeo, SEAT, Skoda et tous les grands constructeurs à un niveau approfondi.`,
  whyList: [
    `Spécialiste des marques européennes — profondeur OEM totale sur toutes les marques de l'UE`,
    `Référence au Royaume-Uni pour les intervalles d'entretien et les spécifications d'huile`,
    `Données de remplacement de courroie et chaîne de distribution avec outils requis`,
    `Données d'entretien de la climatisation et spécifications des réfrigérants`,
    `Compatible avec les plateformes AutoData Cardesk et WorkshopData`
  ],
  keyStatsHeading: `Statistiques clés AutoData`,
  keyStats: [
    { label: `Années de données`, value: `35+` },
    { label: `Marques européennes`, value: `Toutes` },
    { label: `Points de données par véhicule`, value: `10 000+` },
    { label: `Mises à jour`, value: `Hebdomadaires` },
    { label: `Pays pris en charge`, value: `50+` }
  ],
  ctaHeading: `Accédez à AutoData via Auto Fix Data`,
  ctaBody: `Auto Fix Data est un revendeur autorisé AutoData. Votre abonnement vous donne un accès complet à AutoData, ainsi qu'à ALLDATA, Haynes Pro, Mitchell1 et Identifix.`,
  ctaCompare: `Comparez avec les alternatives`
};

dict.haynesPro = {
  ...dict.haynesPro,
  statsBar: [
    { value: `80+ ans`, label: `Héritage Haynes` },
    { value: `Professionnel`, label: `Données de qualité` },
    { value: `Illustrées`, label: `Procédures` },
    { value: `OEM`, label: `Contenu d'origine` }
  ],
  featuresHeading: `Haynes Pro — Au-delà du manuel grand public`,
  featuresSubheading: `Haynes Pro est la plateforme professionnelle conçue pour les ateliers, combinant la clarté et l'accessibilité des manuels Haynes avec la profondeur et l'exhaustivité requises par les techniciens professionnels.`,
  features: [
    { title: `Manuels d'atelier`, desc: `Manuels de qualité professionnelle dérivés de la documentation OEM, couvrant des procédures étape par étape pour toutes les tâches de réparation majeures.` },
    { title: `Spécifications techniques`, desc: `Données techniques complètes, y compris couples de serrage, jeux, capacités de fluide et dimensions des pièces pour tous les véhicules pris en charge.` },
    { title: `Schémas de câblage`, desc: `Schémas de circuits et électriques avec code couleur, identification des composants et informations de brochage.` },
    { title: `Programmes d'entretien`, desc: `Intervalles d'entretien en usine avec listes de pièces, spécifications de fluides et notes techniques pour une prestation précise.` },
    { title: `Procédures illustrées`, desc: `Illustrations techniques de haute qualité et vues éclatées accompagnant chaque grande procédure de réparation.` },
    { title: `Données de révision moteur`, desc: `Spécifications détaillées, y compris jeux aux roulements, de segments de piston et calage des soupapes.` }
  ],
  whyHeading: `Qui tire le plus de bénéfices de Haynes Pro ?`,
  whyBody: `Haynes Pro est particulièrement apprécié par les ateliers indépendants qui ont besoin de procédures clairement structurées et illustrées, ainsi que de données techniques. Son format étape par étape réduit le temps de formation des jeunes techniciens.`,
  whyList: [
    `Ateliers indépendants et mécaniciens artisans`,
    `Ateliers formant des apprentis et des techniciens débutants`,
    `Centres de contrôle technique et d'entretien`,
    `Collèges en mécanique et centres de formation`,
    `Techniciens intervenant sur une flotte mixte nationale et européenne`
  ],
  keyStatsHeading: `Données Haynes Pro`,
  keyStats: [
    { label: `Héritage de la marque`, value: `80+ ans` },
    { label: `Modèles de véhicules`, value: `150M+` },
    { label: `Procédures illustrées`, value: `100%` },
    { label: `Source des données`, value: `OEM` },
    { label: `Accès plateforme`, value: `Web & Mobile` }
  ],
  faqHeading: `Foire aux questions Haynes Pro`,
  faqs: [
    { q: `Haynes Pro est-il identique au manuel grand public ?`, a: `Non. Haynes Pro est la plateforme de qualité professionnelle conçue pour les ateliers, accédant à des données OEM non disponibles dans les manuels grand public.` },
    { q: `Haynes Pro inclut-il des schémas de câblage ?`, a: `Oui. Haynes Pro comprend des schémas de câblage couleur complets et électriques avec l'identification des composants.` },
    { q: `Quels véhicules Haynes Pro couvre-t-il ?`, a: `Il couvre plus de 150 millions de véhicules de 1990 à aujourd'hui, en particulier les modèles européens et britanniques.` },
    { q: `Haynes Pro est-il inclus dans tous les forfaits ?`, a: `Oui, un accès complet est inclus avec AutoData, ALLDATA, Mitchell1 et Identifix.` },
    { q: `Puis-je l'utiliser sur mobile dans l'atelier ?`, a: `Oui, il est entièrement basé sur le cloud et fonctionne sur n'importe quel appareil.` }
  ],
  ctaHeading: `Accédez à Haynes Pro via Auto Fix Data`,
  ctaBody: `Auto Fix Data est un revendeur autorisé Haynes Pro. Accédez à la plateforme complète Haynes Pro avec ALLDATA, AutoData, Mitchell1 et Identifix avec un seul abonnement.`,
  ctaCompare: `Comparez avec les alternatives`
};

dict.mitchell1 = {
  ...dict.mitchell1,
  statsBar: [
    { value: `ProDemand`, label: `Plateforme` },
    { value: `SureTrack`, label: `Cas réels` },
    { value: `1983–2026`, label: `Couverture` },
    { value: `Snap-on`, label: `Outils pro` }
  ],
  featuresHeading: `Mitchell1 ProDemand — Ce qui est inclus`,
  featuresSubheading: `ProDemand combine des données de réparation avec la fonction exclusive SureTrack de Mitchell1, qui s'appuie sur des millions de dossiers de réparation réels de techniciens professionnels.`,
  features: [
    { title: `Données de réparation ProDemand`, desc: `Procédures de réparation OEM pour véhicules nationaux et d'importation de 1983 à aujourd'hui.` },
    { title: `Informations d'expert SureTrack`, desc: `Données de réparation réelles, pannes spécifiques et réparations confirmées pour accélérer votre processus de diagnostic.` },
    { title: `Schémas de câblage`, desc: `Schémas interactifs en couleur avec localisateurs de composants, vues de connecteurs et descriptions de circuits.` },
    { title: `BST et Rappels`, desc: `Bibliothèque complète avec les données de rappel NHTSA, mise à jour en temps réel.` },
    { title: `Temps de main-d'œuvre`, desc: `Guides de temps de main-d'œuvre forfaitaires pour des devis et une planification précis.` },
    { title: `Recherche de pièces`, desc: `Catalogue de pièces intégré avec références OEM et conseils tarifaires.` }
  ],
  whyHeading: `SureTrack : L'avantage qu'aucune autre plateforme n'a`,
  whyBody: `La fonction SureTrack de Mitchell1 regroupe des données de réparation réelles de millions de techniciens professionnels, identifiant les défaillances fréquentes et réparations confirmées.`,
  whyList: [
    `Données de réparation de plus de 70 millions de cas professionnels`,
    `Des schémas de causes probables pour les combinaisons de DTC courantes`,
    `Des réparations confirmées avec données de pièces`,
    `Conseils professionnels et notes de techniciens spécialisés`,
    `Mise à jour en continu`
  ],
  keyStatsHeading: `Statistiques Mitchell1`,
  keyStats: [
    { label: `Années couvertes`, value: `1983–2026` },
    { label: `Réparations SureTrack`, value: `70M+` },
    { label: `Marques de véhicules`, value: `100+` },
    { label: `BST indexés`, value: `1.5M+` },
    { label: `Plateforme`, value: `ProDemand` }
  ],
  ctaHeading: `Accédez à Mitchell1 via Auto Fix Data`,
  ctaBody: `Auto Fix Data est un revendeur autorisé Mitchell1. Accédez à la plateforme complète ProDemand avec nos autres bases de données.`,
  ctaCompare: `Comparez avec les alternatives`
};

dict.identifix = {
  ...dict.identifix,
  statsBar: [
    { value: `Direct-Hit`, label: `Système de diag` },
    { value: `70M+`, label: `Réparations réelles` },
    { value: `Symptômes`, label: `Détection des pannes` },
    { value: `Par Solera`, label: `Intelligence de diag` }
  ],
  featuresHeading: `Identifix Direct-Hit — Ce qui est inclus`,
  featuresSubheading: `Identifix combine les informations de réparation OEM avec une base de données de diagnostics réels inégalée.`,
  features: [
    { title: `Données de diagnostic Direct-Hit`, desc: `Fournit des solutions confirmées aux combinaisons de DTC et de véhicules d'après des réparations réelles de techniciens.` },
    { title: `Recherche axée sur les symptômes`, desc: `Recherche par symptôme, code DTC ou système de véhicule pour trouver la cause la plus probable rapidement.` },
    { title: `Informations de réparation OEM`, desc: `Procédures de réparation en usine complètes, schémas de câblage et spécifications.` },
    { title: `Pannes fréquentes`, desc: `Identification connue des pannes fréquentes pour les défauts intermittents courants.` },
    { title: `Accès à une hotline technique`, desc: `Réseau de réparateurs maîtres pour obtenir de l'aide sur des défis diagnostiques complexes.` },
    { title: `BST et campagnes`, desc: `Bulletins techniques de service liés directement aux procédures de réparation.` }
  ],
  whyHeading: `Pourquoi les spécialistes du diagnostic choisissent Identifix`,
  whyBody: `Pour les ateliers spécialisés dans le diagnostic ou les pannes intermittentes complexes, Identifix offre un avantage indéniable que les pures données OEM ne sauraient égaler.`,
  whyList: [
    `Chemin le plus rapide vers la solution pour les réparations spécifiques aux défauts`,
    `Réduit considérablement le temps passé sur les défauts intermittents`,
    `La base de données capte instantanément les problèmes connus`,
    `Complète les informations OEM avec l'expérience réelle des techniciens`,
    `Particulièrement fort pour les véhicules après l'an 2000`
  ],
  keyStatsHeading: `Statistiques Identifix`,
  keyStats: [
    { label: `Réparations indexées`, value: `70M+` },
    { label: `Cas diagnostiques`, value: `Des millions` },
    { label: `Pannes récurrentes`, value: `300K+` },
    { label: `Plateforme`, value: `Direct-Hit` },
    { label: `Éditeur`, value: `Solera` }
  ],
  ctaHeading: `Accédez à Identifix via Auto Fix Data`,
  ctaBody: `Auto Fix Data est un revendeur autorisé Identifix. Accédez à la plateforme complète Direct-Hit avec ALLDATA, Mitchell1, etc.`,
  ctaCompare: `Comparez avec les alternatives`
};

fs.writeFileSync(path, JSON.stringify(dict, null, 2));
