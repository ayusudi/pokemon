const Move = require('./move')

class Pokemon {
    constructor(name, type, hp, ownerName) {
        this.name = name
        this._type = type
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
    train(moveName, point) {
        let move = this._moves.filter(el => el.name == moveName)[0]
        if(move){
            move.increaseDamage(point)
        } else {
            let instance = new Move(moveName, point)
            this._moves.push(instance)
        }
        return this
    }
    heal() {
        if (this._hp == 100) {
            console.log(`hp is ${this._hp}, maximum hp 100`)
        } else {
            console.log(`hp increase to 100`)
        }
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