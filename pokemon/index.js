const Pokemon = require('./pokemon')
const Trainer = require('./trainer')
const Game = require('./game')
const PokemonFactory =  require('./factory')

let pikachu = new Pokemon('Pikachu', 'Electric')
pikachu.learnMove('Thunderbolt', 20)
console.log(pikachu)

let ashTrainer = new Trainer('Ash', 'Male')
ashTrainer.caughtPokemon(pikachu)
console.log(ashTrainer)

ashTrainer.trainPokemon(0, 'Thunder Shock', 30)
ashTrainer.trainPokemon(0, 'Thunderbolt', 20)
console.log(ashTrainer.pokemons[0])


ashTrainer.pokeCenterHeal()

pikachu.decreaseHp(40)
// Pokemon Pikachu, Hp decrease to 60.
console.log(pikachu)

console.log(pikachu.bestMove())
// Move { name: 'Thunder Shock', _damage: 30 }


let mudkip = new Pokemon('Mudkip', 'Water')
Game.arenaBattle(pikachu, mudkip)
/*
Pikachu attack Mudkip with Thunder Shock!
Pokemon Mudkip, Hp decrease to 70.
continue fighting!
*/

Game.arenaBattle(mudkip, pikachu)
/*
Mudkip don't have any move. Oh wait! Mudkip just run away.
Mudkip lose from Pikachu.
*/

mudkip.learnMove('Whirlpool', 60)
Game.arenaBattle(mudkip, pikachu)
/*
Mudkip attack Pikachu with Whirlpool!
Pokemon Pikachu, Hp decrease to 40.
Pikachu lose from Mudkip.
*/

let raichu = PokemonFactory.create('Raichu', 'Electric', 80)
let celebi = PokemonFactory.create('Celebi', 'Grass', 50)
let squirtle = PokemonFactory.create('Squirtle', 'Water', 40)

let list = [raichu, celebi, squirtle]
console.log(list)
/*
[
  PokemonElectric {
    name: 'Raichu',
    type: 'ELectric',
    _hp: 80,
    _moves: [],
    _ownerName: null
  },
  PokemonGrass {
    name: 'Celebi',
    type: 'Grass',
    _hp: 50,
    _moves: [],
    _ownerName: null
  },
  PokemonWater {
    name: 'Squirtle',
    type: 'Water',
    _hp: 40,
    _moves: [],
    _ownerName: null
  }
]
*/


ashTrainer.caughtPokemon(mudkip)
ashTrainer.caughtPokemon(PokemonFactory.create('Celebi', 'Grass', 0))
ashTrainer.save() // saving to listPokemons.txt

ashTrainer.pokeCenterHeal()
ashTrainer.save() 

ashTrainer.trainPokemon(2, 'Leaf Tornado' , 90) 
ashTrainer.save()

console.log(JSON.stringify(ashTrainer, null, 2))