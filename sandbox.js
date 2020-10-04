const Game = require('./pokemon/game')
let lastGame = Game.memory("Ash", "Male", "./pokemon/listPokemon.txt", "./pokemon/pokemonMove.json")

console.log(lastGame)
/*
Trainer {
  name: 'Ash',
  gender: 'Male',
  _pokemons: [
    PokemonElectric {
      name: 'Pikachu',
      type: 'ELectric',
      _hp: 100,
      _moves: [Array],
      _ownerName: 'Ash'
    },
    PokemonWater {
      name: 'Mudkip',
      type: 'Water',
      _hp: 100,
      _moves: [Array],
      _ownerName: 'Ash'
    },
    PokemonGrass {
      name: 'Celebi',
      type: 'Grass',
      _hp: 100,
      _moves: [Array],
      _ownerName: 'Ash'
    }
  ]
}
*/