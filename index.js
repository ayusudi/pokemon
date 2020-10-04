const Trainer = require('./trainer')
const PokemonFactory = require('./factory')
const Arena = require('./arena')
const { PokemonElectric } = require('./inheritance')

let pikachu = PokemonFactory.create('Pikachu', 'Electric')
// let squirtle = PokemonFactory.create('Squirtle', 'Water')
// let raichu = PokemonFactory.create('Raichu', 'Electric')

let trainerAsh = new Trainer('Ash', 'Male')
trainerAsh.caughtPokemon(pikachu)
// trainerAsh.caughtPokemon(squirtle)

trainerAsh.trainPokemon(0, 'Thunder Shock', 30)
trainerAsh.trainPokemon(0, 'Thunderbolt', 20)
// trainerAsh.trainPokemon(3, 'Thunderbolt')
// trainerAsh.trainPokemon(4, 'Dive')
// trainerAsh.trainPokemon(4, 'Fishious')

trainerAsh.healPokemons()
// let choseMove = squirtle.bestMove()
// let attack1 = Arena.battle(squirtle, choseMove, raichu)
// console.log(attack1)
console.log(trainerAsh.pokemons[0])

let raichu = PokemonFactory.create('Raichu', 'Electric', 80)
let celebi = PokemonFactory.create('Celebi', 'Grass', 50)
let squirtle = PokemonFactory.create('Squirtle', 'Water', 40)

console.log([raichu, celebi, squirtle])
