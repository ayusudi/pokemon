const fs = require('fs')
const PokemonFactory = require('./factory')

class Trainer {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
        this.pokemons = []
    }
    getPokemons(){
        let pokemons = []
        let data = fs.readFileSync('myPokemon.txt', 'utf-8').split('\n')
        let array = data.map(el => {
            return el.split(', ')
        })
        for (let i = 0; i < array.length; i++) {
            let hp = +array[i][1].slice(5)
            let nameType = array[i][0].slice(7).split(' ')
            let name = nameType[0]
            let type = nameType[1].slice(1, nameType[1].length-1)
            let instance = PokemonFactory.create(name, type, hp, this.name)
            pokemons.push(instance)            
        }
        return pokemons
    }
    caughtPokemon(pokemon) {
        pokemon.ownerName = this.name
        this.pokemons.push(pokemon)
        return this
    }
    healPokemons(num) {
        let poke = []
        for (let i = 0; i < this.pokemons.length; i++) {
            this.pokemons[i].heal(100)
            poke.push({
                name : this.pokemons[i].name,
                hp : this.pokemons[i]._hp
            })
        }
        console.table(poke)
        return this
    }
    trainPokemon(indexOfPokemon, moveName) {
        let damage = Math.floor(Math.random() * (80 - 1) + 1);
        this.pokemons[indexOfPokemon].train(moveName, damage)
        return this
    }
}


module.exports = Trainer