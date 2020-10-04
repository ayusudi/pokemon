# Use fs readFileSync & writeFileSync

:warning: listPokemons.txt before is Empty



## I. fs.writeFileSync

:spiral_notepad: all code in case 1 - 3 are in file **index.js** inside of folder pokemon.

### Case 1

Test Case 1 )

```jsx
ashTrainer.caughtPokemon(mudkip)
ashTrainer.caughtPokemon(PokemonFactory.create('Celebi', 'Grass', 0))
ashTrainer.save() // saving to listPokemon.txt
```

After running terminal ⤴️ listPokemon.txt update to ⤵️

```
Name : Pikachu (Electric), Hp : 40
Name : Mudkip (Water), Hp : 70
Name : Celebi (Grass), Hp : 0
```



---

### Case 2 (make listPokemon.txt auto-save)

Test Case 2

```jsx
ashTrainer.pokeCenterHeal()
ashTrainer.save()
```

After running terminal ⤴️ listPokemon.txt update to ⤵️

```
Name : Pikachu (Electric), Hp : 100
Name : Mudkip (Water), Hp : 100
Name : Celebi (Grass), Hp : 100
```





---

### Case 3 File JSON (auto-save pokemonMove.json)

Test Case 3

```jsx
ashTrainer.trainPokemon(2, 'Leaf Tornado' , 90) 
ashTrainer.save()
```

After running terminal ⤴️ pokemonMove.json update to ⤵️

```
[    
    { "name": "Thunder Shock", "_damage": 30, "pokemon" : "Pikachu", "_ownerName" : "Ash" },    
    { "name": "Thunderbolt", "_damage": 22, "pokemon" : "Pikachu", "_ownerName" : "Ash" },    
    { "name": "Whirlpool", "_damage": 60, "pokemon" : "Mudkip", "_ownerName" : "Ash" },    
    { "name": "Leaf Tornado", "_damage": 90, "pokemon" : "Celebi", "_ownerName" : "Ash" }]
```





---



## II. fs.readFileSync

Buatlah pada **class Game** static method **memory** yang memiliki params : 

- parameter 1 : Trainer name 

- parameter 2 : Trainer gender 

- parameter 3 : Trainer Pokemons (file path) 

- parameter 4 : Pokemon Moves (file path) 
  (pastikan pada file game.js sudah require Trainer, PokemonFactory dan Move)

  

**Method memory** ini akan membuild instance Trainer, Pokemon dan Move sesuai dengan file pathnya.



:warning: coba ini di file sandbox.js (letakkan diluar folder pokemon)

```jsx
const Game = require('./pokemon/game')
let lastGame = Game.memory("Ash", "Male", "./pokemon/listPokemon.txt", "./pokemon/pokemonMove.json")
console.log(lastGame)
/*
Trainer {
    name : "Ash",
    gender : "Male",
    _pokemons : [
        PokemonElectric {
            name : "Pikachu",
            type : "Electric",
            _hp : 100,
            _moves : [[Array], [Array]]
        },
        PokemonWater {
            name : "Mudkip",
            type : "Water",
            _hp : 100,
            _moves : [[Array]]
        },
        PokemonGrass {
            name : "Celebi",
            type : "Grass",
            _hp : 100,
            _moves : [[Array]]
        }
    ]
}
*/
```
