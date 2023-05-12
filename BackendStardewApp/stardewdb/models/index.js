const conn = require('./conn')
const User = require("./User")
const Villager = require("./Villager")
const Item = require("./Item")
const VillagerItem = require("./VillagerItem")

Villager.hasMany(Item)
