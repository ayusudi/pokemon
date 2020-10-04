const fs = require('fs')

class Trainer {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
        this._pokemons = []
    }
    get pokemons(){
        return this._pokemons
    }
    caughtPokemon(pokemon) {
        pokemon.ownerName = this.name
        this._pokemons.push(pokemon)
        return this
    }
    pokeCenterHeal() {
        let poke = []
        console.log('We restored your Pokemon to full health!')
        for (let i = 0; i < this._pokemons.length; i++) {
            this._pokemons[i].heal()
            poke.push({
                name : this._pokemons[i].name,
                hp : this._pokemons[i]._hp
            })
        }
        console.table(poke)
        return this
    }
    trainPokemon(indexOfPokemon, moveName, damage) {
        this._pokemons[indexOfPokemon].train(moveName, damage)
        return this
    }
    save(){
        let txt = ''
        for (let i = 0; i < this._pokemons.length; i++) {
            txt += `Name : ${this._pokemons[i].name} (${this._pokemons[i].type}), Hp : ${this._pokemons[i].hp}\n`            
        }
        txt = txt.slice(0, txt.length-1)
        fs.writeFileSync('./listPokemon.txt', txt, 'utf-8')
        let json = []
        for (let i = 0; i < this._pokemons.length; i++) {
            let moves = this._pokemons[i].moves
            for (let j = 0; j < moves.length; j++) {
                json.push({
                    name : moves[j].name,
                    _damage : moves[j].damage,
                    pokemon : this._pokemons[i].name,
                    _ownerName : this._pokemons[i]._ownerName
                })
            }
        }
        let stringify = JSON.stringify(json, null, 2)
        fs.writeFileSync('pokemonMove.json', stringify, 'utf-8')
        return this
    }
}


module.exports = Trainer