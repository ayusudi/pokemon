# Pokemon

[pokemoncard](https://cdn.bulbagarden.net/upload/f/f9/PikachuWizardsPromo4.jpg)

## Composition 
Suatu hubungan 2 class yang menyatakan bagian dari class utama (part of).<br>
Tidak akan ada dirinya (sub class) tanpa class utama (parent class).
**Example** : Mango - MangoTree, tidak akan ada buah jika tidak ada pohonnya.

- Buatlah **class Pokemon** dengan property name, type, hp, ownerName, moves (empty Array <u>hardcode</u>). 
- Buatlah **class Move** dengan propety name dan damage.

```js
let pikachu = new Pokemon('Pikachu', 'Electric')
pikachu.learnMove('Thunderbolt', 20)
console.log(pikach
/*
Pokemon {
    name : 'Pikachu',
    type : 'Electric',
    _hp : 100,
    _ownerName : null,
    _moves : [
        Move {
            name : 'Thunderbolt'
            _damage : 20
        }
    ]
}
*/
```

## Agregation 
Suatu hubungan 2 class yang ada, karena di gabungkan. Namun 2 class tersebut independent!
**Example** : Bag - Item, dalam bag terdapat items namun tanpa adanya bag, item tersebut tetap ada.

- Buatlah class Trainer dengan property name, gender, pokemons (empty Array <u>hardcode</u>).

```js
let ashTrainer = new Trainer('Ash', 'Male')
ashTrainer.caughtPokemon(pikachu)
/*
Trainer {
  name: 'Ash',
  gender: 'Male',
  _pokemons: [
    Pokemon {
      name: 'Pikachu',
      type: 'Electric',
      _hp: 90,
      _ownerName: 'Ash',
      _moves: [Array]
    }
  ]
}
*/
```

## Method
### Instance Method 
- Trainer dapat mengajarkan move ke salah satu pokemonnya, apabila pokemon tersebut telah memiliki move tersebut maka damage dari move bertambah 10% dari input damage (number). jika tidak maka pokemon mendapatkan move baru.
```js
//params method trainPokemon : indexOfPokemon, moveName, damagePoint
ashTrainer.trainPokemon(0, 'Thunder Shock', 30)
ashTrainer.trainPokemon(0, 'Thunderbolt', 20)
console.log(ashTrainer.pokemons[0])
/*
Pokemon {
  name: 'Pikachu',
  type: 'ELectric',
  _hp: 100,
  _moves: [
    Move { name: 'Thunderbolt', _damage: 22 },
    Move { name: 'Thunder Shock', _damage: 30 }
  ],
  _ownerName: 'Ash'
}
*/
```

- Trainer bisa heal semua pokemonnya dengan membawa ke Pokemon Center 
```js
ashTrainer.pokeCenterHeal()
/*
We restored your Pokemon to full health!
┌─────────┬───────────┬─────┐
│ (index) │   name    │ hp  │
├─────────┼───────────┼─────┤
│    0    │ 'Pikachu' │ 100 │
└─────────┴───────────┴─────┘
*/
// gunakan console.table untuk tampilkan table seperti diatas 
```

- Pokemon decrease (mengurangi) hp sebanyak inputnya (number)
```js
pikachu.decreaseHp(40)
// Pokemon Pikachu, Hp decrease to 60.
console.log(pikachu)
/*
Pokemon {
  name: 'Pikachu',
  type: 'ELectric',
  _hp: 60,
  _moves: [
    Move { name: 'Thunderbolt', _damage: 22 },
    Move { name: 'Thunder Shock', _damage: 30 }
  ],
  _ownerName: 'Ash'
}
*/
```

- Pokemon menunjukkan move terbaiknya (damage tertinggi)
```js
console.log(pikachu.bestMove())
// Move { name: 'Thunder Shock', _damage: 30 }
```

### Static Method
buatlah class Game yang memiliki static method **arenaBattle** akan memiliki 2 parameter: 
- Parameter 1 Instance Pokemon sebagai fighter 
- Parameter 2 Instance Pokemon sebagai receiver damage dari fighter 
Prosesnya adalah Pokemon receiver akan mendapatkan damage dari Move terbaik dari Pokemon fighter,
apabila Pokemon receiver menerima damage sehingga hp < 50 maka akan di nyatakan kalah. 
**apabila tidak memiliki moves sama sekali saat menjadi fighter dia akan kalah karena kabur**
```js 
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
```

## Factory Method Design Pattern
seperti namanya "Factory" maka dia berkerja sebagai pabrik, yang membuat sesuatu sesuai perintah.<br>
Dengan static method, ***kok bukan instance method??*** 

karena akan digunakan berkali-kali namun tidak mungkin perlu untuk instansiate berkali-kali juga. lagi pula kita tidak perlu constrcutor dari factory melainkan semua permintaan boss/customer didapat dari parameter.

- Buatlah **class PokemonWater**, **PokemonElectric** dan **PokemonGrass** dengan inheritance ke Pokemon.

```js
let raichu = PokemonFactory.create('Raichu', 'Electric', 80)
let celebi = PokemonFactory.create('Celebi', 'Grass', 50)
let squirtle = PokemonFactory.create('Squirtle', 'Water', 40)
let list = [raichu, celebi, squirtle]
console.log(list)
/*
[
  PokemonElectric {
    name: 'Raichu',
    _type: 'ELectric',
    _hp: 80,
    _moves: [],
    _ownerName: null
  },
  PokemonGrass {
    name: 'Celebi',
    _type: 'Grass',
    _hp: 50,
    _moves: [],
    _ownerName: null
  },
  PokemonWater {
    name: 'Squirtle',
    _type: 'Water',
    _hp: 40,
    _moves: [],
    _ownerName: null
  }
]
*/
```

## Last 
create **demo.txt** :arrow_down:
```txt
Name : Mudkip (Water), Hp : 60
Name : Celebi (Grass), Hp : 0
Name : Luxray (Electric), Hp : 90
```
try to create Array of Instance from demo.txt dengan factory method


# Use fs readFileSync & writeFileSync 
listPokemons.txt before is Empty 
## I fs.writeFileSync 
### Case 1
Test Case 1 (index.js inside folder pokemon)
```js
ashTrainer.caughtPokemon(mudkip)
ashTrainer.caughtPokemon(PokemonFactory('Celebi', 'Grass', 0))
ashTrainer.save() // saving to listPokemons.txt
```
After running terminal :arrow_up:
listPokemon.txt update to :arrow_down:
```txt
Name : Pikachu (Electric), Hp : 40
Name : Mudkip (Water), Hp : 70
Name : Celebi (Grass), Hp : 0
```
### Case 2 (make listPokemon.txt auto-save )
Test Case 2 (index.js inside folder pokemon)
```js
ashTrainer.pokeCenterHeal()
```
After running terminal :arrow_up:
listPokemon.txt update to :arrow_down:
```txt
Name : Pikachu (Electric), Hp : 100
Name : Mudkip (Water), Hp : 100
Name : Celebi (Grass), Hp : 100
```
### Case 3 File JSON (auto-save pokemonMove.json)
Test Case 3 (index.js inside folder pokemon)
```js
ashTrainer.trainPokemon(2, 'Leaf Tornado' , 90) // auto-save to pokemonMove.json
```
After running terminal :arrow_up:
pokemonMove.json update to :arrow_down:
```json
[
    { "name": "Thunder Shock", "_damage": 30, "pokemon" : "Pikachu", "_ownerName" : "Ash" },
    { "name": "Thunderbolt", "_damage": 22, "pokemon" : "Pikachu", "_ownerName" : "Ash" },
    { "name": "Whirlpool", "_damage": 60, "pokemon" : "Mudkip", "_ownerName" : "Ash" },
    { "name": "Leaf Tornado", "_damage": 90, "pokemon" : "Celebi", "_ownerName" : "Ash" }
]
```
## II fs.readFileSync
Buatlah pada **class Game** static method **memory** yang memiliki params : 
parameter 1  : Trainer name
parameter 2  : Trainer gender 
parameter 3  : Trainer Pokemons (file path)
parameter 4  : Pokemon Moves (file path)
(pastikan pada file game.js sudah require Trainer, PokemonFactory dan Move)

Method memory ini akan membuild instance Trainer, Pokemon dan Move sesuai dengan file pathnya.

coba ini di file sandbox.js (letakkan diluar folder pokemon)
```js
const Game = require('./pokemon/game')
let lastGame = Game.memory("Ash", "Male", "./pokemon/listPokemon.txt", "./pokemon/pokemonMove.json")
console.log(lastGame)
/*
Trainer {
    name : "Ash"
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
[Goodbye](https://3.bp.blogspot.com/-5b_QQCrDwV0/WSYyVxGwflI/AAAAAAAHrVk/tQszPMjDmRsoyIK8Ei98SomPTSxG_4dnQCLcB/s1600/AS002652_03.gif)