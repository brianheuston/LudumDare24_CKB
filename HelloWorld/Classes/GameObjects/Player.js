function Player(rect) {
    LivingObject.call(this, rect);
}

Player.prototype = Object.create(new LivingObject(), {
    inventory: { value: null },
    CalculatedStats: {value: {
        "MeleeAttack":      "0",
        "RangedAttack":     "0",
        "Defense":          "0",
        "Health":           "0",
        "Mana":             "0"
    } },
    
    // TODO: Determine ranged or melee attack. Right now, this assumes ranged.
    LaunchAttack: {value: function(target) {
        var attack = new RangedAttack();
        attack.init();

        attack.Launch(target, this.GetSprite().getPosition(), this.layer);
    } }
})
