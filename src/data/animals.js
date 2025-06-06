import Mammals from "../pages/Animals/Mammals";

 export const pages= ["Home", "Mammals", "Reptiles", "Birds"];

function Animals(groupName, name, lifeSpan, food, description, length, weight, place, src, group, groupLink, image, icon) {
    this.groupName = groupName,
        this.name = name,
        this.lifeSpan = lifeSpan,
        this.food = food,
        this.description = description,
        this.length = length,
        this.weight = weight,
        this.place = place,
        this.src = src,
        this.group = group,
        this.groupLink = groupLink,
        this.image = image,
        this.icon = icon
}

let mammalEchidna = new Animals("Mammals", "Echidna", 50, ["insects such as ants and termites", "beetle larvae", "worms"],
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    76, 10, "Throughout Austalia", "./images/Echidna.jpg", 'Mammals', './Mammals/index.jsx','echidna.jpg','echidna.png');


let mammalTasmanianDevil  = new Animals("Mammals", "Tasmanian Devil", 5, ["A predator", "eat meat from other animals such as wallabies and wombats"],
    "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
    70, 10, "Tasmania",  "./images/tasmaniandevil.jpg", 'Mammals', './Mammals/index.jsx', 'tasmanian-devil.jpg', 'tasdevil.png');


let mammalquokka  = new Animals("Mammals", "Quokka", 10, ["Plant eaters", " shrubs", "grasses"],
    "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
    50, 3, "Rottnest Island,few places on mainland Western Australia",  "./images/quokka.jpg", 'Mammals', './Mammals/index.jsx', 'quokka.jpg', 'quokka.png');

let reptileFrillNeckedLizard = new Animals("Reptiles","Frill-necked lizard", 20,["small insects", "spiders"], 
        "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
        90,1,"Northern  Austalia",  "./images/Frill necked lizard.jpg", 'Reptiles', './Reptiles/index.jsx', 'Frill-necked-lizard.jpg', 'frill-lizard.png');
   
let reptileHawksbillTurtle = new Animals("Reptiles","Hawksbill Turtle", 50,["sponges", "jellyfish","seaplants"], 
    "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length",
    80,50,"Tropical coasts of Queensland, Northern Territory and Western Australia",  "./images/Hawksbill-Turtle.jpg", 'Reptiles', './Reptiles/index.jsx', 'Hawksbill-Turtle.jpg', 'hawksbill-turtle.png');

    
let reptilePerentie  = new Animals("Reptiles","Perentie", 20,["Carnivore", "animals like kangaroos", "rabbits", "lizards and birds"], 
    ": The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
    250,20,"Desert",  "./images/perentie.jpg", 'Reptiles', './Reptiles/index.jsx', 'perentie.jpg', 'perentie.png');
    
let birdCassowary = new Animals("Birds","Cassowary", 20,["Plants matter like fruit", "insects and small animals like mice amd lizards"], 
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
    117,44,"Queensland",  "./images/Cassowary.jpg", 'Birds', './Birds/index.jsx', 'cassowary.jpg', 'cassowary.png');
    
let birdKookaburra = new Animals("Birds","Kookaburra", 20,["Insects and smalll animals including snakes", "frogs","lizards"], 
    "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
    43,0.003,"Throughout Austalia",  "./images/Kookaburra.jpg", 'Birds', './Birds/index.jsx', 'kookaburra.jpg', 'kookaburra.png');
    
let birdYellowTailedBlackCockatoo = new Animals("Birds","Yellow Tailed Black Cockatoo", 41,["Fruit", "seeds","plant"], 
    "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
    65,0.9,"SE Austalia",  "./images/Yellow-tailedBlackCockatoos.jpg", 'Birds', './Birds/index.jsx', 'yellow-tailed-black-cockatoo.jpg', 'yellowtailed.png');




let mammalArray = [mammalEchidna,mammalTasmanianDevil,mammalquokka];
let reptileArray = [reptileFrillNeckedLizard,reptileHawksbillTurtle,reptilePerentie];
let birdArray = [birdCassowary,birdKookaburra,birdYellowTailedBlackCockatoo];

//add the animals into an array
let animalArray = [...mammalArray, ...reptileArray, ...birdArray];

 export {animalArray, mammalArray, reptileArray, birdArray};


 export const slideshowImages = {
  Birds: [
    { src: "bird1.jpg", label: "Bird1" },
    { src: "bird2.jpg", label: "Bird2" },
    { src: "bird3.jpg", label: "Bird3" },
    { src: "bird4.jpg", label: "Bird4" },
    { src: "bird5.jpg", label: "Bird5" },
    { src: "bird6.jpg", label: "Bird6" },
    { src: "bird7.jpg", label: "Bird7" },
    { src: "bird8.jpg", label: "Bird8" },
    { src: "bird9.jpg", label: "Bird9" },
    { src: "bird10.jpg", label: "Bird10" }, 
  ],

   Mammals:[
    { src: "mammal1.jpg", label:"Mammal1"},
     { src: "mammal2.jpg", label: "Mammal2"},
    { src: "mammal3.jpg", label: "Mammal3"},
    { src: "mammal4.jpg", label: "Mammal4"},
    { src: "mammal5.jpg",label: "Mammal5"},
    { src: "mammal6.jpg", label: "Mammal6"},
    { src: "mammal7.jpg", label:"Mammal7"},
    { src: "mammal8.jpg", label:"Mammal8"},
    { src: "mammal9.jpg", label:"Mammal9"},
  ],
  
   Reptiles:[
    { src: "reptile1.jpg", label: "Reptile1"},
     { src: "reptile2.jpg", label: "Reptile2"},
     { src: "reptile3.jpg", label: "Reptile3"},
     { src: "reptile4.jpg", label: "Reptile4"},
     { src: "reptile5.jpg", label: "Reptile5"},
     { src: "reptile6.jpg", label: "Reptile6"},
     { src: "reptile7.jpg", label: "Reptile7"},
     { src: "reptile8.jpg", label: "Reptile8"},
    { src: "reptile9.jpg", label: "Reptile9"},
  ]
   
};
