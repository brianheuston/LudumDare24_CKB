var Player = new Object({
    PlayerStats: {
        "Strength": "0",
        "Agility":  "0",
        "Will":     "0",
        "Luck":     "0"
    },

    CalculatedStats: {
        "MeleeAttack":      "0",
        "RangedAttack":     "0",
        "Defense":          "0",
        "Health":           "0",
        "Mana":             "0"
    },

    manaRegenRate:null,
    sprite:null,
    isFacingLeft:false,
    inventory:null,

    // Variables to make attacking more realistic
    attackTimeout:null,
    lastAttackTimestamp:null,

    currentPosition:null,

    checkDirection:function(movePoint, screenSize)
    {
        isFacingLeft = (movePoint.x > screenSize.x / 2) ? false : true;
    },

    init:function(fileName, rect) {
        sprite = cc.Sprite.create(fileName, rect);
    },

    ChangeHealth:function(value, isIncrease) {
        this.CalculatedStats["Health"] += isIncrease ? value : -value;   
    },

    ChangeMana:function(value, isIncrease) {
        this.CalculatedStats["Mana"] += isIncrease ? value : -value;
    },

    CalculateStats:function() {
    },

    Attack:function() {
    },
    
    GetHealth:function() {
        return CalculatedStats.Health;
    },

    GetSprite:function() {
        return sprite;
    }
});
