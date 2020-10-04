const fs = require('fs')
const PokemonFactory = require('./factory')

let data = fs.readFileSync('demo.txt', 'utf-8').split('\n')
let array = []
for (let i = 0; i < data.length; i++) {
    let splitter = data[i].split(', ')
    let nameType = splitter[0].slice(7).split(' ')
    let name = nameType[0]
    let type = nameType[1].slice(1, nameType[1].length-1)
    let hp = Number(splitter[1].slice(5))
    let instance = PokemonFactory.create(name, type, hp)
    array.push(instance)
}

console.log(array)
