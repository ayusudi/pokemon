class Arena{
    static battle(fighter, fighterMove, receiver){
        receiver.decreaseHp(fighterMove.damage)
        if (receiver.hp < 50) {
            return `${receiver.name} lose from ${fighter.name}`
        } else {
            return 'continue fighting!'
        }
    }
}

module.exports = Arena