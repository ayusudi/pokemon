const Trainer = require('./trainer')
const PokemonFactory = require('./factory')
const Arena = require('./arena')

let pikachu = PokemonFactory.create('Pikachu', 'Electric')
let squirtle = PokemonFactory.create('Squirtle', 'Water')
let raichu = PokemonFactory.create('Raichu', 'Electric')

let trainerAsh = new Trainer('Ash', 'Male')
trainerAsh.caughtPokemon(pikachu)
trainerAsh.caughtPokemon(squirtle)

trainerAsh.trainPokemon(3, 'Thunderbolt')
trainerAsh.trainPokemon(3, 'Thunderbolt')
trainerAsh.trainPokemon(4, 'Dive')
trainerAsh.trainPokemon(4, 'Fishious')


let choseMove = squirtle.bestMove()
let attack1 = Arena.battle(squirtle, choseMove, raichu)
console.log(attack1)

