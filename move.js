class Move {
    constructor(name, damage) {
        this.name = name
        this._damage = damage || 0
    }

    get damage(){
        return this._damage
    }

    increaseDamage(number){
        this._damage += number
    }
}

module.exports = Move