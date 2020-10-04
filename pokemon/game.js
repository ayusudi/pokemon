const fs = require('fs')
const PokemonFactory = require('./factory')
const Trainer = require('./trainer')

class Game { // example static method
    static arenaBattle(fighter, receiver) {
        let move = fighter.bestMove()
        if (move) {
            console.log(`${fighter.name} attack ${receiver.name} with Thunder Shock!`)
            receiver.decreaseHp(move.damage)
            if (receiver.hp < 50) {
                console.log(`${receiver.name} lose from ${fighter.name}.`)
                return false
            } else {
                console.log('continue fighting!')
                return true
            }
        } else {
            console.log(`${fighter.name} don't have any move. Oh wait! ${fighter.name} just run away.`)
            console.log(`${fighter.name} lose from ${receiver.name}.`)
            return false
        }
    }
    static memory(name, gender, pathPokemon, pathMove) {
        let data = fs.readFileSync(pathPokemon, 'utf-8').split('\n')
        let trainer = new Trainer(name, gender)
        for (let i = 0; i < data.length; i++) {
            let splitter = data[i].split(', ')
            let nameType = splitter[0].slice(7).split(' ')
            let name = nameType[0]
            let type = nameType[1].slice(1, nameType[1].length - 1)
            let hp = Number(splitter[1].slice(5))
            let instance = PokemonFactory.create(name, type, hp)
            trainer.caughtPokemon(instance)
        }
        let moves =  fs.readFileSync(pathMove, 'utf-8')
        let jsonData = JSON.parse(moves).filter(el => el._ownerName == name)
        for (let i = 0; i < jsonData.length; i++) {
            for (let j = 0; j < trainer.pokemons.length; j++) {
            let pokemonName = jsonData[i].pokemon
                if (trainer.pokemons[j].name == pokemonName) {
                    trainer.trainPokemon(j, jsonData[i].name, jsonData[i]._damage)
                }
            }
        }
        return trainer
    }
}

module.exports = Game