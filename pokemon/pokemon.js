const Move = require('./move')

class Pokemon {
    constructor(name, type, hp, ownerName) {
        this.name = name
        this.type = type
        this._hp = hp || 100
        this._moves = []
        this._ownerName = ownerName || null
    }
    set ownerName(name) {
        this._ownerName = name
    }
    get hp (){
        return this._hp
    }

    get moves(){
        return this._moves
    }

    learnMove(moveName, dmg){
        let instance = new Move(moveName, dmg)
        this._moves.push(instance)
        return this
    }

    train(moveName, point) {
        let move = this._moves.filter(el => el.name === moveName)[0]
        if(move){
            let tenPersen = point / 10
            let update = move.damage + tenPersen
            move.damage = update
            return this
        } else {
            this.learnMove(moveName, point)
        }
        return this
    }
    heal() {
        this._hp = 100
        return this
    }
    decreaseHp(damage){
        this._hp -= damage
        console.log(`Pokemon ${this.name}, Hp decrease to ${this._hp}.`)
        return this
    }
    bestMove(){
        let bestMoves =  this._moves.map(el => el).sort((a,b) => b.damage - a.damage)[0]
        return bestMoves
    }
}


module.exports = Pokemon
