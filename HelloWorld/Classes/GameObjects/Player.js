function Player(fileName, rect) {
    LivingObject.call(this, fileName, rect);
}

Player.prototype = Object.create(new LivingObject(), {
    inventory: { value: null },
    CalculatedStats: {value: {
        "MeleeAttack":      "0",
        "RangedAttack":     "0",
        "Defense":          "0",
        "Health":           "0",
        "Mana":             "0"
    } }
})
