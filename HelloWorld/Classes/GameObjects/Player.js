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
    } },

    playerLocation: { value: null },

    /* Returns the center point of the object in pixels */
    SetLocation: { value: function(playerLocation) {
        this.playerLocation = playerLocation;
    } },

    GetLocation: { value: function() {
        return this.playerLocation;
    } },
    
    // TODO: Determine ranged or melee attack. Right now, this assumes ranged.
    LaunchAttack: {value: function(target) {
        var attack = new MeleeAttack();
        attack.init();

        attack.Launch(target, this.GetSprite().getPosition(), this.layer);
    } }
})
