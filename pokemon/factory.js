const { PokemonElectric, PokemonGrass, PokemonWater } = require("./inheritance");

class PokemonFactory{
    static create(name, type, hp, ownerName){
        // factory method conditional on type
        if (type.toLowerCase() == 'electric') {
            return new PokemonElectric(name, hp, ownerName)
        } else if (type.toLowerCase() == 'grass'){
            return new PokemonGrass(name, hp, ownerName)
        } else if (type.toLowerCase() == 'water') {
            return new PokemonWater(name, hp, ownerName)
        }
    }
}

module.exports = PokemonFactory