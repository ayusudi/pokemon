const Pokemon = require('./pokemon.js')

class PokemonElectric extends Pokemon{
    constructor(name, hp, ownerName){
        super(name, 'ELectric', hp, ownerName)
    }
}

class PokemonWater extends Pokemon{
    constructor(name, hp, ownerName){
        super(name, 'Water', hp, ownerName)
    }
}

class PokemonGrass extends Pokemon{
    constructor(name, hp, ownerName){
        super(name, 'Grass', hp, ownerName)
    }
}

module.exports = {
    PokemonElectric,
    PokemonGrass,
    PokemonWater
}