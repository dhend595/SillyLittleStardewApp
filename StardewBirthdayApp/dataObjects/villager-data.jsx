const allVillagers = [
    {
        name: 'Alex',
        birthSeason: `Summer`,
        birthDay: 13,
        gifts: [`Complete Breakfast`, `Salmon Dinner`],
        image: require(`../assets/villagers/Alex.png`)
    },
    {
        name: 'Elliott',
        birthSeason: `Fall`,
        birthDay: 5,
        gifts: [`Crab Cakes`, `Duck Feather`, `Lobster`, `Pomegranate`, `Squid Ink`, `Tom Kha Soup`],
        image: require(`../assets/villagers/Elliott.png`)
    },
    {
        name: 'Harvey',
        birthSeason: `Winter`,
        birthDay: 14,
        gifts: [`Coffee`, `Pickles`, `Super Meal`, `Truffle Oil`, `Wine`],
        image: require(`../assets/villagers/Harvey.png`)
    },
    {
        name: 'Sam',
        birthSeason: `Summer`,
        birthDay: 17,
        gifts: [`Cactus Fruit`, `Maple Bar`, `Pizza`, `Tigerseye`],
        image: require(`../assets/villagers/Sam.png`)
    },
    {
        name: 'Sebastian',
        birthSeason: `Winter`,
        birthDay: 10,
        gifts: [`Frozen Tear`, `Obsidian`, `Pumpkin Soup`, `Sashimi`, `Void Egg`],
        image: require(`../assets/villagers/Sebastian.png`)
    },
    {
        name: 'Shane',
        birthSeason: `Spring`,
        birthDay: 20,
        gifts: [`Beer`, `Hot Pepper`, `Pepper Poppers`, `Pizza`],
        image: require(`../assets/villagers/Shane.png`)
    },
    {
        name: 'Abigail',
        birthSeason: `Fall`,
        birthDay: 13,
        gifts: [`Amethyst`, `Banana Pudding`, `Blackberry Cobbler`, `Chocolate Cake`, `Pufferfish`, `Pumpkin`, `Spicy Eel`],
        image: require(`../assets/villagers/Abigail.png`)
    },
    {
        name: 'Emily',
        birthSeason: `Spring`,
        birthDay: 27,
        gifts: [`Amethyst`, `Aquamarine`, `Cloth`, `Emerald`, `Jade`, `Ruby`, `Survival Burger`, `Topaz`, `Wool`],
        image: require(`../assets/villagers/Emily.png`)
    },
    {
        name: 'Haley',
        birthSeason: `Spring`,
        birthDay: 14,
        gifts: [`Coconut`, `Fruit Salad`, `Pink Cake`, `Sunflower`],
        image: require(`../assets/villagers/Haley.png`)
    },
    {
        name: 'Leah',
        birthSeason: `Winter`,
        birthDay: 23,
        gifts: [`Goat Cheese`, `Poppyseed Muffin`, `Salad`, `Stir Fry`, `Truffle`, `Vegetable Medley`, `Wine`],
        image: require(`../assets/villagers/Leah.png`)
    },
    {
        name: 'Maru',
        birthSeason: `Summer`,
        birthDay: 10,
        gifts: [`Battery Pack`, `Cauliflower`, `Cheese Cauliflower`, `Diamond`, `Gold Bar`, `Iridium Bar`, `Miner's Treat`, `Pepper Poppers`, `Radioactive Bar`, `Rhubarb Pie`, `Strawberry`],
        image: require(`../assets/villagers/Maru.png`)
    },
    {
        name: 'Penny',
        birthSeason: `Fall`,
        birthDay: 2,
        gifts: [`Diamond`, `Emerald`, `Melon`, `Poppy`, `Poppyseed Muffin`, `Red Plate`, `Roots Platter`, `Sandfish`, `Tom Kha Soup`],
        image: require(`../assets/villagers/Penny.png`)
    },
    {
        name: 'Caroline',
        birthSeason: `Winter`,
        birthDay: 7,
        gifts: [`Fish Taco`, `Green Tea`, `Summer Spangle`, `Tropical Curry`],
        image: require(`../assets/villagers/Caroline.png`)
    },
    {
        name: 'Clint',
        birthSeason: `Winter`,
        birthDay: 26,
        gifts: [`Amethyst`, `Aquamarine`, `Artichoke Dip`, `Emerald`, `Fiddlehead Risotto`, `Gold Bar`, `Iridium Bar`, `Jade`, `Omni Geode`, `Ruby`, `Topaz`],
        image: require(`../assets/villagers/Clint.png`)
    },
    {
        name: 'Demetrius',
        birthSeason: `Summer`,
        birthDay: 19,
        gifts: [`Bean Hotpot`, `Ice Cream`, `Rice Pudding`, `Strawberry`],
        image: require(`../assets/villagers/Demetrius.png`)
    },
    {
        name: 'Dwarf',
        birthSeason: `Summer`,
        birthDay: 22,
        gifts: [`Amethyst`, `Aquamarine`, `Emerald`, `Jade`, `Lemon Stone`, `Omni Geode`, `Ruby`, `Topaz`],
        image: require(`../assets/villagers/Dwarf.png`)
    },
    {
        name: 'Evelyn',
        birthSeason: `Winter`,
        birthDay: 20,
        gifts: [`Beet`, `Chocolate Cake`, `Diamond`, `Fairy Rose`, `Stuffing`, `Tulip`],
        image: require(`../assets/villagers/Evelyn.png`)
    },
    {
        name: 'George',
        birthSeason: `Fall`,
        birthDay: 24,
        gifts: [`Fried Mushroom`, `Leek`],
        image: require(`../assets/villagers/George.png`)
    },
    {
        name: 'Gus',
        birthSeason: `Summer`,
        birthDay: 8,
        gifts: [`Diamond`, `Escargot`, `Fish Taco`, `Orange`, `Tropical Curry`],
        image: require(`../assets/villagers/Gus.png`)
    },
    {
        name: 'Jas',
        birthSeason: `Summer`,
        birthDay: 4,
        gifts: [`Fairy Rose`, `Pink Cake`, `Plum Pudding`],
        image: require(`../assets/villagers/Jas.png`)
    },
    {
        name: 'Jodi',
        birthSeason: `Fall`,
        birthDay: 11,
        gifts: [`Chocolate Cake`, `Crispy Bass`],
        image: require(`../assets/villagers/Jodi.png`)
    },
    {
        name: 'Kent',
        birthSeason: `Spring`,
        birthDay: 4,
        gifts: [`Fiddlehead Risotto`, `Roasted Hazelnuts`],
        image: require(`../assets/villagers/Kent.png`)
    },
    {
        name: 'Krobus',
        birthSeason: `Winter`,
        birthDay: 1,
        gifts: [`Diamond`, `Iridium Bar`, `Pumpkin`, `Void Egg`, `Void Mayonnaise`, `Wild Horseradish`],
        image: require(`../assets/villagers/Krobus.png`)
    },
    {
        name: 'Leo',
        birthSeason: `Summer`,
        birthDay: 26,
        gifts: [`Duck Feather`, `Mango`, `Ostrich Egg`, `Poi`],
        image: require(`../assets/villagers/Leo.png`)
    },
    {
        name: 'Lewis',
        birthSeason: `Spring`,
        birthDay: 7,
        gifts: [`Autumn's Bounty`, `Glazed Yams`, `Green Tea`, `Hot Pepper`, `Vegetable Medley`],
        image: require(`../assets/villagers/Lewis.png`)
    },
    {
        name: 'Linus',
        birthSeason: `Winter`,
        birthDay: 3,
        gifts: [`Blueberry Tart`, `Cactus Fruit`, `Coconut`, `Dish O' the Sea`, `Yam`],
        image: require(`../assets/villagers/Linus.png`)
    },
    {
        name: 'Marnie',
        birthSeason: `Fall`,
        birthDay: 18,
        gifts: [`Diamond`, `Farmer's Lunch`, `Pink Cake`, `Pumpkin Pie`],
        image: require(`../assets/villagers/Marnie.png`)
    },
    {
        name: 'Pam',
        birthSeason: `Spring`,
        birthDay: 25,
        gifts: [`Beer`, `Cactus Fruit`, `Glazed Yams`, `Mead`, `Pale Ale`, `Parsnip`, `Parsnip Soup`, `Pina Colada`],
        image: require(`../assets/villagers/Pam.png`)
    },
    {
        name: 'Pierre',
        birthSeason: `Spring`,
        birthDay: 26,
        gifts: [`Fried Calamari`],
        image: require(`../assets/villagers/Pierre.png`)
    },
    {
        name: 'Robin',
        birthSeason: `Fall`,
        birthDay: 21,
        gifts: [`Goat Cheese`, `Peach`, `Spaghetti`],
        image: require(`../assets/villagers/Robin.png`)
    },
    {
        name: 'Sandy',
        birthSeason: `Fall`,
        birthDay: 15,
        gifts: [`Crocus`, `Daffodil`, `Mango Sticky Rice`, `Sweet Pea`],
        image: require(`../assets/villagers/Sandy.png`)
    },
    {
        name: 'Vincent',
        birthSeason: `Spring`,
        birthDay: 10,
        gifts: [`Cranberry Candy`, `Ginger Ale`, `Grape`, `Pink Cake`, `Snail`],
        image: require(`../assets/villagers/Vincent.png`)
    },
    {
        name: 'Willy',
        birthSeason: `Summer`,
        birthDay: 24,
        gifts: [`Catfish`, `Diamond`, `Iridium Bar`, `Mead`, `Octopus`, `Pumpkin`, `Sea Cucumber`, `Sturgeon`],
        image: require(`../assets/villagers/Willy.png`)
    },
    {
        name: 'Wizard',
        birthSeason: `Winter`,
        birthDay: 17,
        gifts: [`Purple Mushroom`, `Solar Essence`, `Super Cucumber`, `Void Essence`],
        image: require(`../assets/villagers/Wizard.png`)
    },
]

export default allVillagers