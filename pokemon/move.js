class Move {
    constructor(name, damage) {
        this.name = name
        this._damage = damage || 0
    }

    get damage(){
        return this._damage
    }

    set damage(num){
        this._damage = num
    }
}

module.exports = Move