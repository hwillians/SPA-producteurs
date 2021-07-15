import { Producteur } from "../models/producteur";
import { rendements } from "./Rendements";



export let producteurs: Producteur[] = [
    { Firstname: 'Pedro', Lastname: 'Lopez', Village: 'Montpellier', GPSLocation: [43.71369457095662, 3.74472683313546], Performance: 3, },
    { Firstname: "Audra", Lastname: "Hanson", Village: "Cholet", GPSLocation: [43.63994740517315, 3.7725359749265586], Performance: 3 },
    { Firstname: "Tanner", Lastname: "Meyer", Village: "Roccabruna", GPSLocation: [43.59868896578769, 3.7004381999126004], Performance: 4 },
    { Firstname: "Rae", Lastname: "Cunningham", Village: "Tuscaloosa", GPSLocation: [43.638456629446516, 3.7872988526675115], Performance: 2 },
    { Firstname: "Neville", Lastname: "Guerra", Village: "Rueglio", GPSLocation: [43.638456629446516, 3.7872988526675115], Performance: 1 },
    { Firstname: "Jakeem", Lastname: "Strong", Village: "Purral", GPSLocation: [43.64317729235674, 3.7141711094390684], Performance: 3 },
    { Firstname: "Risa", Lastname: "Ewing", Village: "Solingen", GPSLocation: [43.692101252274014, 3.7687594248067793], Performance: 1 },
    { Firstname: "Daniel", Lastname: "Knapp", Village: "Bozeman", GPSLocation: [43.63994740517315, 3.7907320800491284], Performance: 2 },
    { Firstname: "Jesse", Lastname: "Duran", Village: "Giugliano in Campania", GPSLocation: [43.67621154699371, 3.8302141949377244], Performance: 3 },
    { Firstname: "Colt", Lastname: "Aguilar", Village: "Snellegem", GPSLocation: [43.60390997114789, 3.7378603783722255], Performance: 4 },
    { Firstname: "Nolan", Lastname: "Payne", Village: "İzmit", GPSLocation: [43.652229024537974, 3.74770698278985], Performance: 1 },
    { Firstname: "Kadeem", Lastname: "Gomez", Village: "Saint-Servais", GPSLocation: [43.599793635270004, 3.7296874025734126], Performance: 3 },
    { Firstname: "Kirk", Lastname: "Benson", Village: "Whitehorse", GPSLocation: [59.40592, -81.97554], Performance: 1 },
    { Firstname: "Casey", Lastname: "Cherry", Village: "Marcinelle", GPSLocation: [-8.35595, 173.06271], Performance: 4 },
    { Firstname: "Amena", Lastname: "Guzman", Village: "Noragugume", GPSLocation: [20.5081, -118.87861], Performance: 2 },
    { Firstname: "Igor", Lastname: "Herrera", Village: "Eugene", GPSLocation: [8.40639, -82.96182], Performance: 2 },
    { Firstname: "Castor", Lastname: "Holmes", Village: "Bismil", GPSLocation: [-52.86488, -72.77033], Performance: 4 },
    { Firstname: "Palmer", Lastname: "Blanchard", Village: "Colomiers", GPSLocation: [57.63285, -120.82743], Performance: 1 },
    { Firstname: "Harper", Lastname: "Soto", Village: "Spijkenisse", GPSLocation: [38.10169, -152.35014], Performance: 4 },
    { Firstname: "Montana", Lastname: "Clemons", Village: "Bari", GPSLocation: [-25.43319, -19.92091], Performance: 1 },
    { Firstname: "Mechelle", Lastname: "Pate", Village: "Dunfermline", GPSLocation: [-70.74995, -8.80803], Performance: 5 },
    { Firstname: "Rafael", Lastname: "Alvarado", Village: "Honolulu", GPSLocation: [10.9693, 44.57468], Performance: 5 },
    { Firstname: "Francesca", Lastname: "Nunez", Village: "Helensburgh", GPSLocation: [56.4924, -44.41997], Performance: 5 },
    { Firstname: "Elliott", Lastname: "Atkinson", Village: "Lives-sur-Meuse", GPSLocation: [37.04193, 38.27229], Performance: 3 },
    { Firstname: "Brenna", Lastname: "Rosario", Village: "Karachi", GPSLocation: [43.12489, 71.85017], Performance: 3 },
    { Firstname: "Dahlia", Lastname: "Ross", Village: "Adria", GPSLocation: [63.99311, -62.76605], Performance: 4 },
    { Firstname: "Indira", Lastname: "Hammond", Village: "Clauzetto", GPSLocation: [-54.67969, 126.39882], Performance: 1 },
    { Firstname: "Brianna", Lastname: "Cleveland", Village: "Ganganagar", GPSLocation: [69.62969, -26.30864], Performance: 2 },
    { Firstname: "Akeem", Lastname: "Blake", Village: "Sijsele", GPSLocation: [-38.31683, 155.20611], Performance: 3 },
    { Firstname: "Robert", Lastname: "Alford", Village: "Apartadó", GPSLocation: [10.84628, 122.84947], Performance: 2 },
    { Firstname: "Sylvia", Lastname: "Singleton", Village: "Bellary", GPSLocation: [62.69593, -43.01209], Performance: 2 },
    { Firstname: "Michelle", Lastname: "Hunter", Village: "Gosnells", GPSLocation: [54.94845, 83.43453], Performance: 4 },
    { Firstname: "Thaddeus", Lastname: "Patrick", Village: "Traiskirchen", GPSLocation: [-40.44231, 35.71053], Performance: 3 },
    { Firstname: "Lilah", Lastname: "Wolfe", Village: "Dandenong", GPSLocation: [8.72018, -2.38315], Performance: 4 },
    { Firstname: "Jack", Lastname: "Charles", Village: "Gateshead", GPSLocation: [-70.80748, 150.35043], Performance: 4 },
    { Firstname: "Bell", Lastname: "Branch", Village: "Dehri", GPSLocation: [57.88129, 102.97534], Performance: 3 },
    { Firstname: "Kylan", Lastname: "Chan", Village: "Attimis", GPSLocation: [41.94496, 47.11436], Performance: 4 },
    { Firstname: "Dai", Lastname: "Hoffman", Village: "Lakki Marwat", GPSLocation: [66.4661, -21.9103], Performance: 4 },
    { Firstname: "Pascale", Lastname: "Mccormick", Village: "Petit-Hallet", GPSLocation: [51.1472, 103.00577], Performance: 4 },
    { Firstname: "Daria", Lastname: "Mccall", Village: "Eindhoven", GPSLocation: [59.81455, -88.5057], Performance: 3 },
    { Firstname: "Vanna", Lastname: "Whitfield", Village: "Heerlen", GPSLocation: [1.98299, 4.9394], Performance: 3 },
    { Firstname: "Kirk", Lastname: "Scott", Village: "Weyburn", GPSLocation: [70.14779, 176.99425], Performance: 2 },
    { Firstname: "Madison", Lastname: "Church", Village: "New Radnor", GPSLocation: [87.68546, 171.31124], Performance: 5 },
    { Firstname: "Ryder", Lastname: "Stuart", Village: "Neuwied", GPSLocation: [86.11342, 70.04322], Performance: 3 },
    { Firstname: "Erasmus", Lastname: "Pruitt", Village: "Carpignano Salentino", GPSLocation: [-67.58874, -64.4614], Performance: 1 },
    { Firstname: "Abigail", Lastname: "Clements", Village: "Heppignies", GPSLocation: [-17.21149, 128.98775], Performance: 3 },
    { Firstname: "Britanni", Lastname: "Carpenter", Village: "Oteppe", GPSLocation: [-88.25793, -79.08731], Performance: 1 },
    { Firstname: "Yolanda", Lastname: "Bartlett", Village: "Herstappe", GPSLocation: [-77.66706, -63.58991], Performance: 4 },
    { Firstname: "Allistair", Lastname: "Tate", Village: "Gilly", GPSLocation: [-60.32948, -51.59478], Performance: 2 },
    { Firstname: "Uriel", Lastname: "Holcomb", Village: "San Gregorio nelle Alpi", GPSLocation: [-78.31489, 56.2278], Performance: 3 },
    { Firstname: "Linus", Lastname: "Walsh", Village: "Cromer", GPSLocation: [70.85314, -59.89522], Performance: 4 },
    { Firstname: "Silas", Lastname: "Orr", Village: "Emden", GPSLocation: [80.33039, -103.38046], Performance: 4 },
    { Firstname: "Simon", Lastname: "Reilly", Village: "East Linton", GPSLocation: [-6.017, -174.39082], Performance: 3 },
    { Firstname: "Alec", Lastname: "Tyson", Village: "Wijnegem", GPSLocation: [-9.28726, 56.49232], Performance: 5 },
    { Firstname: "Rooney", Lastname: "Cook", Village: "Castelló", GPSLocation: [69.12585, 96.94294], Performance: 1 },
    { Firstname: "Idola", Lastname: "Wright", Village: "Archennes", GPSLocation: [-33.32229, 116.62306], Performance: 1 },
    { Firstname: "Evelyn", Lastname: "Mccormick", Village: "Folx-les-Caves", GPSLocation: [54.78918, 147.52398], Performance: 1 },
    { Firstname: "Allegra", Lastname: "Dunlap", Village: "Tofield", GPSLocation: [47.01065, -108.02121], Performance: 3 },
    { Firstname: "Mira", Lastname: "Bennett", Village: "Huacho", GPSLocation: [-73.87053, 57.27258], Performance: 4 },
    { Firstname: "Leo", Lastname: "Bolton", Village: "Bryansk", GPSLocation: [-15.11523, -12.18595], Performance: 3 },
    { Firstname: "Vladimir", Lastname: "Battle", Village: "Tirrases", GPSLocation: [-2.0091, 97.23053], Performance: 5 },
    { Firstname: "Odessa", Lastname: "Lane", Village: "Bonnyville", GPSLocation: [-65.15021, 58.84309], Performance: 2 },
    { Firstname: "Wylie", Lastname: "Atkins", Village: "Kapiti", GPSLocation: [89.24094, -56.06339], Performance: 5 },
    { Firstname: "Britanni", Lastname: "Salinas", Village: "Duncan", GPSLocation: [-20.99341, -116.70838], Performance: 2 },
    { Firstname: "Ina", Lastname: "Grant", Village: "Wiekevorst", GPSLocation: [-7.50549, -154.20543], Performance: 3 },
    { Firstname: "Cain", Lastname: "Harmon", Village: "Brandon", GPSLocation: [-46.98889, 60.31393], Performance: 3 },
    { Firstname: "Colby", Lastname: "Branch", Village: "Divinópolis", GPSLocation: [73.6548, -92.36235], Performance: 1 },
    { Firstname: "Lee", Lastname: "Navarro", Village: "Sijsele", GPSLocation: [52.17806, 144.31466], Performance: 4 },
    { Firstname: "Faith", Lastname: "Ellison", Village: "Wrocław", GPSLocation: [-47.16682, 175.94229], Performance: 3 },
    { Firstname: "Francis", Lastname: "Phillips", Village: "Fossato Serralta", GPSLocation: [21.51388, 85.6692], Performance: 1 },
    { Firstname: "Gil", Lastname: "Drake", Village: "Saint-Denis", GPSLocation: [0.06808, 98.09134], Performance: 5 },
    { Firstname: "Marvin", Lastname: "Deleon", Village: "Socchieve", GPSLocation: [64.98023, 92.03827], Performance: 2 },
    { Firstname: "Janna", Lastname: "Joyner", Village: "Mogi das Cruzes", GPSLocation: [70.66593, 167.07842], Performance: 2 },
    { Firstname: "Alec", Lastname: "Joyce", Village: "Oderzo", GPSLocation: [-69.18311, 103.68492], Performance: 1 },
    { Firstname: "Trevor", Lastname: "Colon", Village: "Tulita", GPSLocation: [32.10311, -83.86631], Performance: 1 },
    { Firstname: "Tatum", Lastname: "Holden", Village: "Lexington", GPSLocation: [-20.44931, -28.78144], Performance: 4 },
    { Firstname: "Alec", Lastname: "Rowland", Village: "Lörrach", GPSLocation: [45.10095, -87.96059], Performance: 5 },
    { Firstname: "Yardley", Lastname: "Whitley", Village: "Kelowna", GPSLocation: [75.28705, -119.62643], Performance: 3 },
    { Firstname: "Georgia", Lastname: "Larson", Village: "Chantemelle", GPSLocation: [49.97274, -36.77903], Performance: 2 },
    { Firstname: "Quon", Lastname: "Duran", Village: "Solvychegodsk", GPSLocation: [89.11746, 113.25244], Performance: 5 },
    { Firstname: "Leslie", Lastname: "Leon", Village: "Burg", GPSLocation: [3.05424, -105.93987], Performance: 1 },
    { Firstname: "Kevyn", Lastname: "Marquez", Village: "Banjarbaru", GPSLocation: [9.87958, -127.62985], Performance: 3 },
    { Firstname: "Vladimir", Lastname: "Larsen", Village: "Rapagnano", GPSLocation: [-23.66678, -74.54628], Performance: 1 },
    { Firstname: "Ginger", Lastname: "Glenn", Village: "Macklin", GPSLocation: [32.08266, -1.99644], Performance: 2 },
    { Firstname: "Jesse", Lastname: "Kim", Village: "Mercedes", GPSLocation: [46.27536, -32.00886], Performance: 5 },
    { Firstname: "Owen", Lastname: "Mueller", Village: "Rocca San Felice", GPSLocation: [80.51502, 124.3535], Performance: 5 },
    { Firstname: "Alana", Lastname: "Velez", Village: "Selva di Cadore", GPSLocation: [86.17273, 170.82727], Performance: 3 },
    { Firstname: "Julian", Lastname: "Greer", Village: "Klintsy", GPSLocation: [-80.56792, -119.66602], Performance: 1 },
    { Firstname: "Louis", Lastname: "Blankenship", Village: "Brampton", GPSLocation: [-21.1471, -5.29115], Performance: 4 },
    { Firstname: "Ezekiel", Lastname: "Roberts", Village: "Garaguso", GPSLocation: [-32.41778, -87.88765], Performance: 2 },
    { Firstname: "Jonas", Lastname: "Norris", Village: "Meldert", GPSLocation: [75.65964, 165.83469], Performance: 2 },
    { Firstname: "Kevin", Lastname: "Kramer", Village: "Tintigny", GPSLocation: [-82.96154, 80.0773], Performance: 3 },
    { Firstname: "Nolan", Lastname: "Dillard", Village: "Piedecuesta", GPSLocation: [80.13099, 59.81347], Performance: 1 },
    { Firstname: "Craig", Lastname: "Talley", Village: "Montluçon", GPSLocation: [76.47016, -75.45068], Performance: 3 },
    { Firstname: "Amanda", Lastname: "Hinton", Village: "Solvychegodsk", GPSLocation: [74.85648, -62.8726], Performance: 5 },
    { Firstname: "Xavier", Lastname: "Barnett", Village: "Keumiee", GPSLocation: [-14.62486, 167.4955], Performance: 2 },
    { Firstname: "Jack", Lastname: "Dunn", Village: "Shawinigan", GPSLocation: [-35.84666, 108.71355], Performance: 4 },
    { Firstname: "Robert", Lastname: "Guzman", Village: "Rastatt", GPSLocation: [-58.57759, 69.22006], Performance: 1 },
    { Firstname: "Walter", Lastname: "Knight", Village: "Roccamena", GPSLocation: [83.38346, -85.1752], Performance: 2 },
    { Firstname: "Jemima", Lastname: "Hood", Village: "Kempten", GPSLocation: [63.77322, -12.09622], Performance: 5 },
    { Firstname: "Moana", Lastname: "Greer", Village: "Vorst", GPSLocation: [-28.15286, -138.69805], Performance: 4 }
]

producteurs.sort((a, b) =>
      a.Lastname.localeCompare(b.Lastname) === 0 ? a.Firstname.localeCompare(b.Firstname) : a.Lastname.localeCompare(b.Lastname)
    ).forEach(producteur => {
      let index1 = Math.floor(Math.random() * 99),
        index2 = Math.floor(Math.random() * 99),
        index3 = Math.floor(Math.random() * 99)

      producteur.Rendements = [rendements[index1], rendements[index3], rendements[index2]]
      producteur.Rendements.filter(rendement =>
        producteur.Rendements?.every(e => rendement.Farming !== e.Farming)
      )
    });