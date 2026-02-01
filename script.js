/* ----------------------------------------------------
   BASE DE DONNÉES DES PLANTES
   (Tu peux ajouter autant de plantes que tu veux)
---------------------------------------------------- */

const plants = [
  {
    id: 1,
    nomFr: "Lierre",
    nomSci: "Hedera helix",
    nomEn: "Common ivy",
    nomLatin: "Hedera helix",
    famille: "Araliaceae",
    genre: "Hedera",
    espece: "helix",
    besoins: "ombre, mi-ombre, sol drainé, arrosage modéré",
    avantages: "couvre-sol, persistant, dépolluant, mellifère",
    origine: "Europe",
    saison: "persistante",
    idTaxon: "3034823",
    type: "plante",
    usages: ["ornementale", "dépolluante"],
    environnements: ["extérieur", "ombragé"],
    populaire: true,
    saisonniere: false,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "hedera-helix.jpg"
  },
  {
    id: 2,
    nomFr: "Laiteron épineux",
    nomSci: "Sonchus asper",
    nomEn: "Spiny sow-thistle",
    nomLatin: "Sonchus asper",
    famille: "Asteraceae",
    genre: "Sonchus",
    espece: "asper",
    besoins: "soleil, sol pauvre, peu d’eau",
    avantages: "comestible, mellifère, médicinale",
    origine: "Europe",
    saison: "printemps/été",
    idTaxon: "3117424",
    type: "plante",
    usages: ["ornementale", "comestible", "médicinale"],
    environnements: ["extérieur"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "sonchus-asper.jpg"
  },
  {
    id: 3,
    nomFr: "Cousteline",
    nomSci: "Reichardia picroides",
    nomEn: "False sow-thistle",
    nomLatin: "Reichardia picroides",
    famille: "Asteraceae",
    genre: "Reichardia",
    espece: "picroides",
    besoins: "soleil, sol sec, drainé",
    avantages: "comestible, rustique",
    origine: "Méditerranée",
    saison: "printemps/été",
    idTaxon: "3117420",
    type: "plante",
    usages: ["ornementale", "comestible"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: false,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Méditerranéennes"],
    image: "reichardia-picroides.jpg"
  },
  {
    id: 4,
    nomFr: "Urosperme de Daléchamps",
    nomSci: "Urospermum dalechampii",
    nomEn: "Mediterranean urospermum",
    nomLatin: "Urospermum dalechampii",
    famille: "Asteraceae",
    genre: "Urospermum",
    espece: "dalechampii",
    besoins: "soleil, sol sec, drainé",
    avantages: "floraison décorative, rustique",
    origine: "Méditerranée",
    saison: "printemps/été",
    idTaxon: "3117426",
    type: "plante",
    usages: ["ornementale"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: false,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Fleurs"],
    image: "urospermum-dalechampii.jpg"
  },
  {
    id: 5,
    nomFr: "Centaurée rude",
    nomSci: "Centaurea aspera",
    nomEn: "Rough knapweed",
    nomLatin: "Centaurea aspera",
    famille: "Asteraceae",
    genre: "Centaurea",
    espece: "asper",
    besoins: "soleil, sol pauvre, sec",
    avantages: "mellifère, résistante",
    origine: "Méditerranée",
    saison: "été",
    idTaxon: "3128166",
    type: "plante",
    usages: ["ornementale", "mellifère"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Fleurs"],
    image: "centaurea-aspera.jpg"
  },
  {
    id: 6,
    nomFr: "Crépide de Nîmes",
    nomSci: "Crepis sancta",
    nomEn: "Holy hawksbeard",
    nomLatin: "Crepis sancta",
    famille: "Asteraceae",
    genre: "Crepis",
    espece: "sancta",
    besoins: "soleil, sol sec",
    avantages: "spontanée, mellifère",
    origine: "Méditerranée",
    saison: "printemps",
    idTaxon: "3117422",
    type: "plante",
    usages: ["ornementale", "mellifère"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: false,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "crepis-sancta.jpg"
  },
  {
    id: 7,
    nomFr: "Micocoulier de Provence",
    nomSci: "Celtis australis",
    nomEn: "European nettle tree",
    nomLatin: "Celtis australis",
    famille: "Cannabaceae",
    genre: "Celtis",
    espece: "australis",
    besoins: "soleil, sol drainé, peu d’eau",
    avantages: "ombrage, très résistant, longévité",
    origine: "Méditerranée",
    saison: "printemps/été",
    idTaxon: "2984827",
    type: "plante",
    usages: ["ornementale", "ombrage"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "celtis-australis.jpg"
  },
  {
    id: 8,
    nomFr: "Abélia à grandes fleurs",
    nomSci: "Abelia grandiflora",
    nomEn: "Glossy abelia",
    nomLatin: "Abelia grandiflora",
    famille: "Caprifoliaceae",
    genre: "Abelia",
    espece: "grandiflora",
    besoins: "soleil, sol drainé, arrosage modéré",
    avantages: "floraison longue, mellifère",
    origine: "Asie",
    saison: "été/automne",
    idTaxon: "3034827",
    type: "plante",
    usages: ["ornementale", "mellifère"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Fleurs"],
    image: "abelia-grandiflora.jpg"
  },
  {
    id: 9,
    nomFr: "Silène dioïque",
    nomSci: "Silene dioica",
    nomEn: "Red campion",
    nomLatin: "Silene dioica",
    famille: "Caryophyllaceae",
    genre: "Silene",
    espece: "dioica",
    besoins: "mi-ombre, sol frais, drainé",
    avantages: "floraison colorée, mellifère",
    origine: "Europe",
    saison: "printemps/été",
    idTaxon: "3080217",
    type: "plante",
    usages: ["ornementale", "mellifère"],
    environnements: ["extérieur", "tempéré"],
    populaire: false,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Fleurs"],
    image: "silene-dioica.jpg"
  },
  {
    id: 10,
    nomFr: "Cyprès d’Arizona",
    nomSci: "Cupressus arizonica",
    nomEn: "Arizona cypress",
    nomLatin: "Cupressus arizonica",
    famille: "Cupressaceae",
    genre: "Cupressus",
    espece: "arizonica",
    besoins: "soleil, sol sec, drainé",
    avantages: "persistant, résistant sécheresse",
    origine: "Amérique du Nord",
    saison: "persistante",
    idTaxon: "5285778",
    type: "plante",
    usages: ["ornementale"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: false,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "cupressus-arizonica.jpg"
  },
  {
    id: 11,
    nomFr: "Cyprès d’Italie",
    nomSci: "Cupressus sempervirens",
    nomEn: "Italian cypress",
    nomLatin: "Cupressus sempervirens",
    famille: "Cupressaceae",
    genre: "Cupressus",
    espece: "sempervirens",
    besoins: "soleil, sol sec, drainé",
    avantages: "brise-vent, persistant",
    origine: "Méditerranée",
    saison: "persistante",
    idTaxon: "5285781",
    type: "plante",
    usages: ["ornementale"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: false,
    dateAjout: "2026-01-31",
    categories: ["Méditerranéennes"],
    image: "cupressus-sempervirens.jpg"
  },
  {
    id: 12,
    nomFr: "Chalef de Ebbing",
    nomSci: "Elaeagnus ebbingei",
    nomEn: "Ebbing's silverberry",
    nomLatin: "Elaeagnus ebbingei",
    famille: "Elaeagnaceae",
    genre: "Elaeagnus",
    espece: "ebbingei",
    besoins: "soleil, sol drainé, tolère sel",
    avantages: "persistant, haie, fixateur d’azote",
    origine: "Asie",
    saison: "automne/hiver",
    idTaxon: "3034826",
    type: "plante",
    usages: ["ornementale", "haie"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: false,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "elaeagnus-ebbingei.jpg"
  },
  {
    id: 13,
    nomFr: "Luzerne orbiculaire",
    nomSci: "Medicago orbicularis",
    nomEn: "Button clover",
    nomLatin: "Medicago orbicularis",
    famille: "Fabaceae",
    genre: "Medicago",
    espece: "orbicularis",
    besoins: "soleil, sol sec",
    avantages: "fixatrice d’azote, fourragère",
    origine: "Méditerranée",
    saison: "printemps",
    idTaxon: "5343734",
    type: "plante",
    usages: ["fourragère", "ornementale"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: false,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "medicago-orbicularis.jpg"
  },
  {
    id: 14,
    nomFr: "Chêne vert",
    nomSci: "Quercus ilex",
    nomEn: "Holm oak",
    nomLatin: "Quercus ilex",
    famille: "Fagaceae",
    genre: "Quercus",
    espece: "ilex",
    besoins: "soleil, sol drainé",
    avantages: "persistant, longévité, ombrage",
    origine: "Méditerranée",
    saison: "persistante",
    idTaxon: "2877598",
    type: "plante",
    usages: ["ornementale", "ombrage"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: false,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "quercus-ilex.jpg"
  },
  {
    id: 15,
    nomFr: "Iris d’Allemagne",
    nomSci: "Iris germanica",
    nomEn: "Bearded iris",
    nomLatin: "Iris germanica",
    famille: "Iridaceae",
    genre: "Iris",
    espece: "germanica",
    besoins: "soleil, sol drainé",
    avantages: "floraison décorative",
    origine: "Europe",
    saison: "printemps",
    idTaxon: "5288816",
    type: "plante",
    usages: ["ornementale"],
    environnements: ["extérieur", "tempéré"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Fleurs"],
    image: "iris-germanica.jpg"
  },
  {
    id: 16,
    nomFr: "Calament",
    nomSci: "Clinopodium nepeta",
    nomEn: "Lesser calamint",
    nomLatin: "Clinopodium nepeta",
    famille: "Lamiaceae",
    genre: "Clinopodium",
    espece: "nepeta",
    besoins: "soleil, sol sec",
    avantages: "aromatique, mellifère",
    origine: "Méditerranée",
    saison: "été",
    idTaxon: "2923838",
    type: "plante",
    usages: ["aromatique", "mellifère"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Aromatiques"],
    image: "clinopodium-nepeta.jpg"
  },
  {
    id: 17,
    nomFr: "Germandrée arbustive",
    nomSci: "Teucrium fruticans",
    nomEn: "Bush germander",
    nomLatin: "Teucrium fruticans",
    famille: "Lamiaceae",
    genre: "Teucrium",
    espece: "fruticans",
    besoins: "soleil, sol sec",
    avantages: "persistant, décoratif",
    origine: "Méditerranée",
    saison: "printemps/été",
    idTaxon: "2923834",
    type: "plante",
    usages: ["ornementale"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Méditerranéennes"],
    image: "teucrium-fruticans.jpg"
  },
  {
    id: 18,
    nomFr: "Tilleul commun",
    nomSci: "Tilia × europaea",
    nomEn: "Common lime tree",
    nomLatin: "Tilia europaea",
    famille: "Malvaceae",
    genre: "Tilia",
    espece: "europaea",
    besoins: "soleil, sol frais",
    avantages: "mellifère, ombrage",
    origine: "Europe",
    saison: "été",
    idTaxon: "5410045",
    type: "plante",
    usages: ["ornementale", "mellifère"],
    environnements: ["extérieur", "tempéré"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "tilia-europaea.jpg"
  },
  {
    id: 19,
    nomFr: "Figuier commun",
    nomSci: "Ficus carica",
    nomEn: "Common fig",
    nomLatin: "Ficus carica",
    famille: "Moraceae",
    genre: "Ficus",
    espece: "carica",
    besoins: "soleil, sol drainé, arrosage modéré",
    avantages: "fruit comestible, persistant",
    origine: "Méditerranée",
    saison: "été",
    idTaxon: "2984829",
    type: "plante",
    usages: ["ornementale", "fruitière"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "ficus-carica.jpg"
  },
  {
    id: 20,
    nomFr: "Myrte commun",
    nomSci: "Myrtus communis",
    nomEn: "Common myrtle",
    nomLatin: "Myrtus communis",
    famille: "Myrtaceae",
    genre: "Myrtus",
    espece: "communis",
    besoins: "soleil, sol drainé",
    avantages: "aromatique, persistant",
    origine: "Méditerranée",
    saison: "été",
    idTaxon: "5410060",
    type: "plante",
    usages: ["aromatique", "ornementale"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Méditerranéennes"],
    image: "myrtus-communis.jpg"
  },
  {
    id: 21,
    nomFr: "Olivier",
    nomSci: "Olea europaea",
    nomEn: "Olive tree",
    nomLatin: "Olea europaea",
    famille: "Oleaceae",
    genre: "Olea",
    espece: "europaea",
    besoins: "soleil, sol sec, drainé",
    avantages: "fruit comestible, persistant",
    origine: "Méditerranée",
    saison: "été",
    idTaxon: "3170645",
    type: "plante",
    usages: ["ornementale", "fruitière", "aromatique"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Méditerranéennes", "Jardin"],
    image: "olea-europaea.jpg"
  },
  {
    id: 22,
    nomFr: "Cèdre du Liban",
    nomSci: "Cedrus libani",
    nomEn: "Cedar of Lebanon",
    nomLatin: "Cedrus libani",
    famille: "Pinaceae",
    genre: "Cedrus",
    espece: "libani",
    besoins: "soleil, sol drainé",
    avantages: "majestueux, longévité",
    origine: "Moyen-Orient",
    saison: "persistante",
    idTaxon: "5284682",
    type: "plante",
    usages: ["ornementale", "ombrage"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: false,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "cedrus-libani.jpg"
  },
  {
    id: 23,
    nomFr: "Pin d’Alep",
    nomSci: "Pinus halepensis",
    nomEn: "Aleppo pine",
    nomLatin: "Pinus halepensis",
    famille: "Pinaceae",
    genre: "Pinus",
    espece: "halepensis",
    besoins: "soleil, sol sec",
    avantages: "résistant sécheresse",
    origine: "Méditerranée",
    saison: "persistante",
    idTaxon: "5284814",
    type: "plante",
    usages: ["ornementale", "bois"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: false,
    dateAjout: "2026-01-31",
    categories: ["Méditerranéennes", "Jardin"],
    image: "pinus-halepensis.jpg"
  },
  {
    id: 24,
    nomFr: "Pin rouge",
    nomSci: "Pinus resinosa",
    nomEn: "Red pine",
    nomLatin: "Pinus resinosa",
    famille: "Pinaceae",
    genre: "Pinus",
    espece: "resinosa",
    besoins: "soleil, sol drainé",
    avantages: "bois, longévité",
    origine: "Amérique du Nord",
    saison: "persistante",
    idTaxon: "5284819",
    type: "plante",
    usages: ["ornementale", "bois"],
    environnements: ["extérieur", "tempéré"],
    populaire: true,
    saisonniere: false,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "pinus-resinosa.jpg"
  },
  {
    id: 25,
    nomFr: "Arbre des Hottentots",
    nomSci: "Pittosporum tobira",
    nomEn: "Japanese pittosporum",
    nomLatin: "Pittosporum tobira",
    famille: "Pittosporaceae",
    genre: "Pittosporum",
    espece: "tobira",
    besoins: "soleil, sol drainé",
    avantages: "persistant, haie",
    origine: "Asie",
    saison: "printemps",
    idTaxon: "5410064",
    type: "plante",
    usages: ["ornementale", "haie"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "pittosporum-tobira.jpg"
  },
  {
    id: 26,
    nomFr: "Plantain lancéolé",
    nomSci: "Plantago lanceolata",
    nomEn: "Ribwort plantain",
    nomLatin: "Plantago lanceolata",
    famille: "Plantaginaceae",
    genre: "Plantago",
    espece: "lanceolata",
    besoins: "soleil, sol pauvre",
    avantages: "médicinale, rustique",
    origine: "Europe",
    saison: "printemps/été",
    idTaxon: "3189487",
    type: "plante",
    usages: ["médicinale", "ornementale"],
    environnements: ["extérieur", "tempéré"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "plantago-lanceolata.jpg"
  },
  {
    id: 27,
    nomFr: "Platane commun",
    nomSci: "Platanus hispanica",
    nomEn: "London plane",
    nomLatin: "Platanus hispanica",
    famille: "Platanaceae",
    genre: "Platanus",
    espece: "hispanica",
    besoins: "soleil, sol profond",
    avantages: "ombrage, urbain",
    origine: "Europe",
    saison: "printemps/été",
    idTaxon: "5410066",
    type: "plante",
    usages: ["ornementale", "ombrage"],
    environnements: ["extérieur", "urbain"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "platanus-hispanica.jpg"
  },
  {
    id: 28,
    nomFr: "Orge des rats",
    nomSci: "Hordeum murinum",
    nomEn: "Wall barley",
    nomLatin: "Hordeum murinum",
    famille: "Poaceae",
    genre: "Hordeum",
    espece: "murinum",
    besoins: "soleil, sol pauvre, sec",
    avantages: "rustique, couvre-sol",
    origine: "Europe",
    saison: "printemps/été",
    idTaxon: "2705047",
    type: "plante",
    usages: ["ornementale", "rustique"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: false,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "hordeum-murinum.jpg"
  },
  {
    id: 29,
    nomFr: "Houlque laineuse",
    nomSci: "Holcus lanatus",
    nomEn: "Yorkshire fog",
    nomLatin: "Holcus lanatus",
    famille: "Poaceae",
    genre: "Holcus",
    espece: "lanatus",
    besoins: "mi-ombre, sol frais",
    avantages: "fourragère, couvre-sol",
    origine: "Europe",
    saison: "printemps/été",
    idTaxon: "2705049",
    type: "plante",
    usages: ["fourragère", "ornementale"],
    environnements: ["extérieur", "tempéré"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "holcus-lanatus.jpg"
  },
  {
    id: 30,
    nomFr: "Dactyle",
    nomSci: "Dactylis glomerata",
    nomEn: "Orchard grass",
    nomLatin: "Dactylis glomerata",
    famille: "Poaceae",
    genre: "Dactylis",
    espece: "glomerata",
    besoins: "soleil, sol fertile",
    avantages: "fourragère, rustique",
    origine: "Europe",
    saison: "printemps/été",
    idTaxon: "2705043",
    type: "plante",
    usages: ["fourragère", "ornementale"],
    environnements: ["extérieur", "tempéré"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "dactylis-glomerata.jpg"
  },
  {
    id: 31,
    nomFr: "Brachypode rameux",
    nomSci: "Brachypodium retusum",
    nomEn: "Hard grass",
    nomLatin: "Brachypodium retusum",
    famille: "Poaceae",
    genre: "Brachypodium",
    espece: "retusum",
    besoins: "soleil, sol sec",
    avantages: "rustique, couvre-sol",
    origine: "Méditerranée",
    saison: "printemps/été",
    idTaxon: "2705037",
    type: "plante",
    usages: ["ornementale", "rustique"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: false,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "brachypodium-retusum.jpg"
  },
  {
    id: 32,
    nomFr: "Brome des toits",
    nomSci: "Bromus tectorum",
    nomEn: "Cheatgrass",
    nomLatin: "Bromus tectorum",
    famille: "Poaceae",
    genre: "Bromus",
    espece: "tectorum",
    besoins: "soleil, sol sec",
    avantages: "rustique, couvre-sol",
    origine: "Europe",
    saison: "printemps/été",
    idTaxon: "2705051",
    type: "plante",
    usages: ["ornementale", "rustique"],
    environnements: ["extérieur", "tempéré"],
    populaire: false,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "bromus-tectorum.jpg"
  },
  {
    id: 33,
    nomFr: "Cotoneaster",
    nomSci: "Cotoneaster coriaceus",
    nomEn: "Cotoneaster",
    nomLatin: "Cotoneaster coriaceus",
    famille: "Rosaceae",
    genre: "Cotoneaster",
    espece: "coriaceus",
    besoins: "soleil, sol drainé",
    avantages: "persistant, ornemental",
    origine: "Asie",
    saison: "printemps/été",
    idTaxon: "3024454",
    type: "plante",
    usages: ["ornementale", "haie"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Fleurs", "Jardin"],
    image: "cotoneaster-coriaceus.jpg"
  },
  {
    id: 34,
    nomFr: "Rosier des chiens",
    nomSci: "Rosa canina",
    nomEn: "Dog rose",
    nomLatin: "Rosa canina",
    famille: "Rosaceae",
    genre: "Rosa",
    espece: "canina",
    besoins: "soleil, sol drainé",
    avantages: "mellifère, ornementale",
    origine: "Europe",
    saison: "printemps/été",
    idTaxon: "2997681",
    type: "plante",
    usages: ["ornementale", "médicinale"],
    environnements: ["extérieur", "tempéré"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Fleurs", "Jardin"],
    image: "rosa-canina.jpg"
  },
  {
    id: 35,
    nomFr: "Petite pimprenelle",
    nomSci: "Sanguisorba minor",
    nomEn: "Salad burnet",
    nomLatin: "Sanguisorba minor",
    famille: "Rosaceae",
    genre: "Sanguisorba",
    espece: "minor",
    besoins: "soleil, sol bien drainé",
    avantages: "culinaire, médicinale",
    origine: "Europe",
    saison: "printemps/été",
    idTaxon: "2997685",
    type: "plante",
    usages: ["culinaire", "médicinale", "ornementale"],
    environnements: ["extérieur", "tempéré"],
    populaire: false,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Aromatiques", "Jardin"],
    image: "sanguisorba-minor.jpg"
  },
  {
    id: 36,
    nomFr: "Potentille rampante",
    nomSci: "Potentilla reptans",
    nomEn: "Creeping cinquefoil",
    nomLatin: "Potentilla reptans",
    famille: "Rosaceae",
    genre: "Potentilla",
    espece: "reptans",
    besoins: "soleil, sol bien drainé",
    avantages: "couvre-sol, rustique",
    origine: "Europe",
    saison: "printemps/été",
    idTaxon: "2997679",
    type: "plante",
    usages: ["ornementale", "couvre-sol"],
    environnements: ["extérieur", "tempéré"],
    populaire: false,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "potentilla-reptans.jpg"
  },
  {
    id: 37,
    nomFr: "Spirée du Japon",
    nomSci: "Spiraea japonica",
    nomEn: "Japanese spirea",
    nomLatin: "Spiraea japonica",
    famille: "Rosaceae",
    genre: "Spiraea",
    espece: "japonica",
    besoins: "soleil, sol drainé",
    avantages: "floraison décorative, rustique",
    origine: "Asie",
    saison: "printemps/été",
    idTaxon: "3024458",
    type: "plante",
    usages: ["ornementale", "haie"],
    environnements: ["extérieur", "tempéré"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Fleurs", "Jardin"],
    image: "spiraea-japonica.jpg"
  },
  {
    id: 38,
    nomFr: "Gaillet accrochant",
    nomSci: "Galium aparine",
    nomEn: "Cleavers",
    nomLatin: "Galium aparine",
    famille: "Rubiaceae",
    genre: "Galium",
    espece: "aparine",
    besoins: "soleil/mi-ombre, sol frais",
    avantages: "médicinale, couvre-sol",
    origine: "Europe",
    saison: "printemps/été",
    idTaxon: "2923830",
    type: "plante",
    usages: ["médicinale", "ornementale"],
    environnements: ["extérieur", "tempéré"],
    populaire: false,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "galium-aparine.jpg"
  },
  {
    id: 39,
    nomFr: "Garance voyageuse",
    nomSci: "Rubia peregrina",
    nomEn: "Wild madder",
    nomLatin: "Rubia peregrina",
    famille: "Rubiaceae",
    genre: "Rubia",
    espece: "peregrina",
    besoins: "soleil, sol sec, bien drainé",
    avantages: "persistant, colorant naturel",
    origine: "Méditerranée",
    saison: "printemps/été",
    idTaxon: "2923832",
    type: "plante",
    usages: ["ornementale", "colorant naturel"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: false,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Méditerranéennes", "Jardin"],
    image: "rubia-peregrina.jpg"
  },
  {
    id: 40,
    nomFr: "Molène à feuilles sinuées",
    nomSci: "Verbascum sinuatum",
    nomEn: "Wavy-leaved mullein",
    nomLatin: "Verbascum sinuatum",
    famille: "Scrophulariaceae",
    genre: "Verbascum",
    espece: "sinuatum",
    besoins: "soleil, sol sec, bien drainé",
    avantages: "mellifère, rustique",
    origine: "Méditerranée",
    saison: "été",
    idTaxon: "3170649",
    type: "plante",
    usages: ["ornementale", "mellifère"],
    environnements: ["extérieur", "méditerranéen"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Fleurs", "Jardin"],
    image: "verbascum-sinuatum.jpg"
  },
  {
    id: 41,
    nomFr: "Molène bouillon-blanc",
    nomSci: "Verbascum thapsus",
    nomEn: "Common mullein",
    nomLatin: "Verbascum thapsus",
    famille: "Scrophulariaceae",
    genre: "Verbascum",
    espece: "thapsus",
    besoins: "soleil, sol sec, bien drainé",
    avantages: "mellifère, médicinale, rustique",
    origine: "Europe",
    saison: "été",
    idTaxon: "3170650",
    type: "plante",
    usages: ["médicinale", "ornementale", "mellifère"],
    environnements: ["extérieur", "tempéré"],
    populaire: true,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Fleurs", "Jardin"],
    image: "verbascum-thapsus.jpg"
  },
  {
    id: 42,
    nomFr: "Avoine élevée",
    nomSci: "Arrhenatherum elatius",
    nomEn: "Tall oat grass",
    nomLatin: "Arrhenatherum elatius",
    famille: "Poaceae",
    genre: "Arrhenatherum",
    espece: "elatius",
    besoins: "soleil, sol drainé",
    avantages: "fourragère",
    origine: "Europe",
    saison: "été",
    idTaxon: "2705039",
    type: "plante",
    usages: ["ornementale", "fourragère"],
    environnements: ["extérieur", "tempéré"],
    populaire: false,
    saisonniere: true,
    dateAjout: "2026-01-31",
    categories: ["Jardin"],
    image: "arrhenatherum-elatius.jpg"
  },
  {
     id: 43,
     nomFr: "Viorne tin",
     nomSci: "Viburnum tinus",
     nomEn: "Laurustinus",
     nomLatin: "Viburnum tinus",
     famille: "Adoxaceae",
     genre: "Viburnum",
     espece: "tinus",
     besoins: "soleil, mi-ombre, sol drainé",
     avantages: "persistant, floraison hivernale, mellifère",
     origine: "Bassin méditerranéen",
     saison: "hiver/printemps",
     idTaxon: "GIDF",
     type: "arbuste",
     usages: ["ornementale", "haie"],
     environnements: ["extérieur", "méditerranéen"],
     populaire: true,
     saisonniere: false,
     dateAjout: "2026-02-01",
     categories: ["Méditerranéennes", "Jardin"],
     image: "viburnum-tinus.jpg"
  },
  {
     id: 44,
     nomFr: "Arbre à perruques",
     nomSci: "Cotinus coggygria",
     nomEn: "Smoke tree",
     nomLatin: "Cotinus coggygria",
     famille: "Anacardiaceae",
     genre: "Cotinus",
     espece: "coggygria",
     besoins: "soleil, sol drainé, sec",
     avantages: "feuillage décoratif, floraison originale",
     origine: "Europe du Sud, Asie",
     saison: "été",
     idTaxon: "GIDF",
     type: "arbuste",
     usages: ["ornementale"],
     environnements: ["extérieur", "tempéré"],
     populaire: true,
     saisonniere: true,
     dateAjout: "2026-02-01",
     categories: ["Fleurs", "Jardin"],
     image: "cotinus-coggygria.jpg"
  },
  {
     id: 45,
     nomFr: "Sumac amarante",
     nomSci: "Rhus typhina",
     nomEn: "Staghorn sumac",
     nomLatin: "Rhus typhina",
     famille: "Anacardiaceae",
     genre: "Rhus",
     espece: "typhina",
     besoins: "soleil, sol drainé, pauvre",
     avantages: "couleurs automnales, très rustique",
     origine: "Amérique du Nord",
     saison: "été/automne",
     idTaxon: "GIDF",
     type: "arbuste",
     usages: ["ornementale"],
     environnements: ["extérieur", "tempéré"],
     populaire: false,
     saisonniere: true,
     dateAjout: "2026-02-01",
     categories: ["Jardin"],
     image: "rhus-typhina.jpg"
  },
  {
     id: 46,
     nomFr: "Fenouil",
     nomSci: "Foeniculum vulgare",
     nomEn: "Fennel",
     nomLatin: "Foeniculum vulgare",
     famille: "Apiaceae",
     genre: "Foeniculum",
     espece: "vulgare",
     besoins: "soleil, sol léger, arrosage modéré",
     avantages: "aromatique, médicinale, mellifère",
     origine: "Bassin méditerranéen",
     saison: "été",
     idTaxon: "GIDF",
     type: "plante",
     usages: ["culinaire", "médicinale", "aromatique"],
     environnements: ["extérieur", "méditerranéen"],
     populaire: true,
     saisonniere: true,
     dateAjout: "2026-02-01",
     categories: ["Aromatiques", "Méditerranéennes", "Jardin"],
     image: "foeniculum-vulgare.jpg"
  },
];

/* ----------------------------------------------------
   OUTILS
---------------------------------------------------- */

// Récupère un paramètre dans l’URL (ex: ?id=2)
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// Crée une carte plante
function createPlantCard(plant) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-img-wrapper">
      <img src="${plant.image}" alt="${plant.nomFr}" class="card-img">
    </div>
    <div class="card-title">${plant.nomFr}</div>
    <div class="card-sub">${plant.nomSci}</div>
    <div>
      <span class="card-tag">${plant.type}</span>
      ${plant.usages.map(u => `<span class="card-tag">${u}</span>`).join("")}
    </div>
  `;

  card.addEventListener("click", () => {
    window.location.href = `fiche.html?id=${plant.id}`;
  });

  return card;
}

/* ----------------------------------------------------
   PAGE : CATEGORIES
---------------------------------------------------- */

function loadCategoriesPage() {
  const categoriesContainer = document.getElementById("categories-container");
  if (!categoriesContainer) return;

  const recentContainer = document.getElementById("recent-container");
  const popularContainer = document.getElementById("popular-container");
  const seasonContainer = document.getElementById("season-container");

  // Catégories uniques
  const categories = [...new Set(plants.flatMap(p => p.categories))];

  categories.forEach(cat => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = cat;
    div.addEventListener("click", () => {
      window.location.href = `liste.html?categorie=${cat}`;
    });
    categoriesContainer.appendChild(div);
  });

  // Récemment ajouté
  [...plants]
    .sort((a, b) => new Date(b.dateAjout) - new Date(a.dateAjout))
    .slice(0, 7)
    .forEach(p => recentContainer.appendChild(createPlantCard(p)));

  // Populaires
  plants
    .filter(p => p.populaire)
    .slice(0, 7)
    .forEach(p => popularContainer.appendChild(createPlantCard(p)));

  // Saison
  plants
    .filter(p => p.saisonniere)
    .slice(0, 7)
    .forEach(p => seasonContainer.appendChild(createPlantCard(p)));
}

/* ----------------------------------------------------
   PAGE : LISTE + FILTRES
---------------------------------------------------- */

function loadListPage() {
  const container = document.getElementById("plants-container");
  if (!container) return;

  const selectedCategory = getParam("categorie");

  const typeFilters = document.querySelectorAll(".filter-type");
  const usageFilters = document.querySelectorAll(".filter-usage");
  const envFilters = document.querySelectorAll(".filter-env");

  function updateList() {
    container.innerHTML = "";

    const types = [...typeFilters].filter(f => f.checked).map(f => f.value);
    const usages = [...usageFilters].filter(f => f.checked).map(f => f.value);
    const envs = [...envFilters].filter(f => f.checked).map(f => f.value);

    plants
      .filter(p => {
        if (selectedCategory && !p.categories.includes(selectedCategory)) return false;
        if (types.length && !types.includes(p.type)) return false;
        if (usages.length && !usages.some(u => p.usages.includes(u))) return false;
        if (envs.length && !envs.some(e => p.environnements.includes(e))) return false;
        return true;
      })
      .forEach(p => container.appendChild(createPlantCard(p)));

    if (!container.children.length) {
      container.innerHTML = "<p>Aucune plante trouvée.</p>";
    }
  }

  [...typeFilters, ...usageFilters, ...envFilters].forEach(f =>
    f.addEventListener("change", updateList)
  );

  updateList();
}

/* ----------------------------------------------------
   PAGE : FICHE DÉTAILLÉE
---------------------------------------------------- */

function loadFichePage() {
  const id = getParam("id");
  if (!id) return;

  const plant = plants.find(p => p.id == id);
  if (!plant) return;

  document.getElementById("fiche-title").textContent = plant.nomFr;

  document.getElementById("f-image").src = plant.image;
  document.getElementById("f-image").alt = plant.nomFr;

  document.getElementById("f-nomFr").textContent = plant.nomFr;
  document.getElementById("f-nomSci").textContent = plant.nomSci;
  document.getElementById("f-nomEn").textContent = plant.nomEn;
  document.getElementById("f-nomLatin").textContent = plant.nomLatin;

  document.getElementById("f-famille").textContent = plant.famille;
  document.getElementById("f-genre").textContent = plant.genre;
  document.getElementById("f-espece").textContent = plant.espece;
  document.getElementById("f-idTaxon").textContent = plant.idTaxon;

  document.getElementById("f-besoins").textContent = plant.besoins;
  document.getElementById("f-avantages").textContent = plant.avantages;
  document.getElementById("f-origine").textContent = plant.origine;
  document.getElementById("f-saison").textContent = plant.saison;
}

/* ----------------------------------------------------
   INITIALISATION
---------------------------------------------------- */

window.addEventListener("DOMContentLoaded", () => {
  loadCategoriesPage();
  loadListPage();
  loadFichePage();
});

/* ----------------------------------------------------
   RECHERCHE GLOBALE (CARTES PLANTES)
---------------------------------------------------- */

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    // On cible uniquement les cartes plantes (avec image)
    const plantCards = document.querySelectorAll(".card-img-wrapper");

    plantCards.forEach(wrapper => {
      const card = wrapper.closest(".card");

      const name =
        card.querySelector(".card-title")?.innerText.toLowerCase() || "";

      const sci =
        card.querySelector(".card-sub")?.innerText.toLowerCase() || "";

      const tags =
        [...card.querySelectorAll(".card-tag")]
          .map(t => t.innerText.toLowerCase())
          .join(" ");

      const match =
        name.includes(query) ||
        sci.includes(query) ||
        tags.includes(query);

      card.style.display = match ? "" : "none";
    });
  });
}
