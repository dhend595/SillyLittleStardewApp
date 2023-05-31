const allGifts = [
    {
        name: `Amethyst`,
        image: require(`../assets/gifts/Amethyst.png`)
    },
    {
        name: `Aquamarine`,
        image: require(`../assets/gifts/Aquamarine.png`)
    },
    {
        name: `Artichoke Dip`,
        image: require(`../assets/gifts/ArtichokeDip.png`)
    },
    {
        name: `Autumn's Bounty`,
        image: require(`../assets/gifts/Autumn'sBounty.png`)
    },
    {
        name: `Bean Hotpot`,
        image: require(`../assets/gifts/BeanHotpot.png`)
    },
    {
        name: `Banana Pudding`,
        image: require(`../assets/gifts/BananaPudding.png`)
    },
    {
        name: `Battery Pack`,
        image: require(`../assets/gifts/BatteryPack.png`)
    },
    {
        name: `Blackberry Cobbler`,
        image: require(`../assets/gifts/BlackberryCobbler.png`)
    },
    {
        name: `Blueberry Tart`,
        image: require(`../assets/gifts/BlueberryTart.png`)
    },
    {
        name: `Beer`,
        image: require(`../assets/gifts/Beer.png`)
    },
    {
        name: `Beet`,
        image: require(`../assets/gifts/Beet.png`)
    },
    {
        name: `Cactus Fruit`,
        image: require(`../assets/gifts/CactusFruit.png`)
    },
    {
        name: `Cauliflower`,
        image: require(`../assets/gifts/Cauliflower.png`)
    },
    {
        name: `Catfish`,
        image: require(`../assets/gifts/Catfish.png`)
    },
    {
        name: `Cheese Cauliflower`,
        image: require(`../assets/gifts/CheeseCauliflower.png`)
    },
    {
        name: `Chocolate Cake`,
        image: require(`../assets/gifts/ChocolateCake.png`)
    },
    {
        name: `Coconut`,
        image: require(`../assets/gifts/Coconut.png`)
    },
    {
        name: `Coffee`,
        image: require(`../assets/gifts/Coffee.png`)
    },
    {
        name: `Complete Breakfast`,
        image: require(`../assets/gifts/CompleteBreakfast.png`)
    },
    {
        name: 'Crab Cakes',
        image: require(`../assets/gifts/CrabCakes.png`)
    },
    {
        name: `Cranberry`,
        image: require(`../assets/gifts/Cranberry.png`)
    },
    {
        name: `Cranberry Candy`,
        image: require(`../assets/gifts/CranberryCandy.png`)
    },
    {
        name: `Crispy Bass`,
        image: require(`../assets/gifts/CrispyBass.png`)
    },
    {
        name: `Crocus`,
        image: require(`../assets/gifts/Crocus.png`)
    },
    {
        name: `Daffodil`,
        image: require(`../assets/gifts/Daffodil.png`)
    },
    {
        name: `Diamond`,
        image: require(`../assets/gifts/Diamond.png`)
    },
    {
        name: `Dish O' the Sea`,
        image: require(`../assets/gifts/DishOTheSea.png`)
    },
    {
        name: 'Duck Feather',
        image: require(`../assets/gifts/DuckFeather.png`)
    },
    {
        name: `Emerald`,
        image: require(`../assets/gifts/Emerald.png`)
    },
    {
        name: `Escargot`,
        image: require(`../assets/gifts/Escargot.png`)
    },
    {
        name: `Fairy Rose`,
        image: require(`../assets/gifts/FairyRose.png`)
    },
    {
        name: `Farmer's Lunch`,
        image: require(`../assets/gifts/Farmer'sLunch.png`)
    },
    {
        name: `Fiddlehead Risotto`,
        image: require(`../assets/gifts/FiddleheadRisotto.png`)
    },
    {
        name: `Fish Taco`,
        image: require(`../assets/gifts/FishTaco.png`)
    },
    {
        name: `Fried Calamari`,
        image: require(`../assets/gifts/FriedCalamari.png`)
    },
    {
        name: `Fried Mushroom`,
        image: require(`../assets/gifts/FriedMushroom.png`)
    },
    {
        name: `Frozen Tear`,
        image: require(`../assets/gifts/FrozenTear.png`)
    },
    {
        name: `Fruit Salad`,
        image: require(`../assets/gifts/FruitSalad.png`)
    },
    {
        name: `Ginger Ale`,
        image: require(`../assets/gifts/GingerAle.png`)
    },
    {
        name: `Glazed Yams`,
        image: require(`../assets/gifts/GlazedYams.png`)
    },
    {
        name: `Goat Cheese`,
        image: require(`../assets/gifts/GoatCheese.png`)
    },
    {
        name: `Gold Bar`,
        image: require(`../assets/gifts/GoldBar.png`)
    },
    {
        name: `Grape`,
        image: require(`../assets/gifts/Grape.png`)
    },
    {
        name: `Green Tea`,
        image: require(`../assets/gifts/GreenTea.png`)
    },
    {
        name: `Hot Pepper`,
        image: require(`../assets/gifts/HotPepper.png`)
    },
    {
        name: `Ice Cream`,
        image: require(`../assets/gifts/IceCream.png`)
    },
    {
        name: `Iridium Bar`,
        image: require(`../assets/gifts/IridiumBar.png`)
    },
    {
        name: `Jade`,
        image: require(`../assets/gifts/Jade.png`)
    },
    {
        name: `Lemon Stone`,
        image: require(`../assets/gifts/LemonStone.png`)
    },
    {
        name: `Leek`,
        image: require(`../assets/gifts/Leek.png`)
    },
    {
        name: 'Lobster',
        image: require(`../assets/gifts/Lobster.png`)
    },
    {
        name: `Mango`,
        image: require(`../assets/gifts/Mango.png`)
    },
    {
        name: `Mango Sticky Rice`,
        image: require(`../assets/gifts/MangoStickyRice.png`)
    },
    {
        name: `Maple Bar`,
        image: require(`../assets/gifts/MapleBar.png`)
    },
    {
        name: `Mead`,
        image: require(`../assets/gifts/Mead.png`)
    },
    {
        name: `Melon`,
        image: require(`../assets/gifts/Melon.png`)
    },
    {
        name: `Miner's Treat`,
        image: require(`../assets/gifts/Miner'sTreat.png`)
    },
    {
        name: `Obsidian`,
        image: require(`../assets/gifts/Obsidian.png`)
    },
    {
        name: `Octopus`,
        image: require(`../assets/gifts/Octopus.png`)
    },
    {
        name: `Omni Geode`,
        image: require(`../assets/gifts/OmniGeode.png`)
    },
    {
        name: `Orange`,
        image: require(`../assets/gifts/Orange.png`)
    },
    {
        name: `Ostrich Egg`,
        image: require(`../assets/gifts/OstrichEgg.png`)
    },
    {
        name: `Pale Ale`,
        image: require(`../assets/gifts/PaleAle.png`)
    },
    {
        name: `Parsnip`,
        image: require(`../assets/gifts/Parsnip.png`)
    },
    {
        name: `Parsnip Soup`,
        image: require(`../assets/gifts/ParsnipSoup.png`)
    },
    {
        name: `Peach`,
        image: require(`../assets/gifts/Peach.png`)
    },
    {
        name: `Pepper Poppers`,
        image: require(`../assets/gifts/PepperPoppers.png`)
    },
    {
        name: `Pickles`,
        image: require(`../assets/gifts/Pickles.png`)
    },
    {
        name: `Pina Colada`,
        image: require(`../assets/gifts/PinaColada.png`)
    },
    {
        name: `Pink Cake`,
        image: require(`../assets/gifts/PinkCake.png`)
    },
    {
        name: `Pizza`,
        image: require(`../assets/gifts/Pizza.png`)
    },
    {
        name: `Plum Pudding`,
        image: require(`../assets/gifts/PlumPudding.png`)
    },
    {
        name: `Poi`,
        image: require(`../assets/gifts/Poi.png`)
    },
    {
        name: 'Pomegranate',
        image: require(`../assets/gifts/Pomegranate.png`)
    },
    {
        name: `Poppy`,
        image: require(`../assets/gifts/Poppy.png`)
    },
    {
        name: `Poppyseed Muffin`,
        image: require(`../assets/gifts/PoppyseedMuffin.png`)
    },
    {
        name: `Pufferfish`,
        image: require(`../assets/gifts/Pufferfish.png`)
    },
    {
        name: `Pumpkin`,
        image: require(`../assets/gifts/Pumpkin.png`)
    },
    {
        name: `Pumpkin Pie`,
        image: require(`../assets/gifts/PumpkinPie.png`)
    },
    {
        name: `Pumpkin Soup`,
        image: require(`../assets/gifts/PumpkinSoup.png`)
    },
    {
        name: `Purple Mushroom`,
        image: require(`../assets/gifts/PurpleMushroom.png`)
    },
    {
        name: `Radioactive Bar`,
        image: require(`../assets/gifts/RadioactiveBar.png`)
    },
    {
        name: `Red Plate`,
        image: require(`../assets/gifts/RedPlate.png`)
    },
    {
        name: `Rhubarb Pie`,
        image: require(`../assets/gifts/RhubarbPie.png`)
    },
    {
        name: `Rice Pudding`,
        image: require(`../assets/gifts/RicePudding.png`)
    },
    {
        name: `Roasted Hazelnuts`,
        image: require(`../assets/gifts/RoastedHazelnuts.png`)
    },
    {
        name: `Roots Platter`,
        image: require(`../assets/gifts/RootsPlatter.png`)
    },
    {
        name: `Ruby`,
        image: require(`../assets/gifts/Ruby.png`)
    },
    {
        name: `Salmon Dinner`,
        image: require(`../assets/gifts/SalmonDinner.png`)
    },
    {
        name: `Salad`,
        image: require(`../assets/gifts/Salad.png`)
    },
    {
        name: `Sandfish`,
        image: require(`../assets/gifts/Sandfish.png`)
    },
    {
        name: `Sashimi`,
        image: require(`../assets/gifts/Sashimi.png`)
    },
    {
        name: `Sea Cucumber`,
        image: require(`../assets/gifts/SeaCucumber.png`)
    },
    {
        name: `Snail`,
        image: require(`../assets/gifts/Snail.png`)
    },
    {
        name: `Solar Essence`,
        image: require(`../assets/gifts/SolarEssence.png`)
    },
    {
        name: `Spaghetti`,
        image: require(`../assets/gifts/Spaghetti.png`)
    },
    {
        name: `Spicy Eel`,
        image: require(`../assets/gifts/SpicyEel.png`)
    },
    {
        name: `Squid Ink`,
        image: require(`../assets/gifts/SquidInk.png`)
    },
    {
        name: `Stir Fry`,
        image: require(`../assets/gifts/StirFry.png`)
    },
    {
        name: `Strawberry`,
        image: require(`../assets/gifts/Strawberry.png`)
    },
    {
        name: `Stuffing`,
        image: require(`../assets/gifts/Stuffing.png`)
    },
    {
        name: `Sturgeon`,
        image: require(`../assets/gifts/Sturgeon.png`)
    },
    {
        name: `Summer Spangle`,
        image: require(`../assets/gifts/SummerSpangle.png`)
    },
    {
        name: `Sunflower`,
        image: require(`../assets/gifts/Sunflower.png`)
    },
    {
        name: `Super Cucumber`,
        image: require(`../assets/gifts/SuperCucumber.png`)
    },
    {
        name: `Super Meal`,
        image: require(`../assets/gifts/SuperMeal.png`)
    },
    {
        name: `Survival Burger`,
        image: require(`../assets/gifts/SurvivalBurger.png`)
    },
    {
        name: `Sweet Pea`,
        image: require(`../assets/gifts/SweetPea.png`)
    },
    {
        name: `Tigerseye`,
        image: require(`../assets/gifts/Tigerseye.png`)
    },
    {
        name: `Tom Kha Soup`,
        image: require(`../assets/gifts/TomKhaSoup.png`)
    },
    {
        name: `Topaz`,
        image: require(`../assets/gifts/Topaz.png`)
    },
    {
        name: `Tropical Curry`,
        image: require(`../assets/gifts/TropicalCurry.png`)
    },
    {
        name: `Trout Soup`,
        image: require(`../assets/gifts/TroutSoup.png`)
    },
    {
        name: `Truffle`,
        image: require(`../assets/gifts/Truffle.png`)
    },
    {
        name: `Truffle Oil`,
        image: require(`../assets/gifts/TruffleOil.png`)
    },
    {
        name: `Tulip`,
        image: require(`../assets/gifts/Tulip.png`)
    },
    {
        name: `Vegetable Medley`,
        image: require(`../assets/gifts/VegetableMedley.png`)
    },
    {
        name: `Void Egg`,
        image: require(`../assets/gifts/VoidEgg.png`)
    },
    {
        name: `Void Essence`,
        image: require(`../assets/gifts/VoidEssence.png`)
    },
    {
        name: `Void Mayonnaise`,
        image: require(`../assets/gifts/VoidMayonnaise.png`)
    },
    {
        name: `Wild Horseradish`,
        image: require(`../assets/gifts/WildHorseradish.png`)
    },
    {
        name: `Wine`,
        image: require(`../assets/gifts/Wine.png`)
    },
    {
        name: `Wool`,
        image: require(`../assets/gifts/Wool.png`)
    },
    {
        name: `Yam`,
        image: require(`../assets/gifts/Yam.png`)
    },
]

export default allGifts