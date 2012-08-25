function LivingObject(fileName, rect)
{
    this.fileName = fileName;
    this.rect = rect;
}

LivingObject.prototype = {
    fileName: null,
    rect: null,
    sprite: null,
    Stats: {
        "Strength": "0",
        "Agility":  "0",
        "Will":     "0",
        "Luck":     "0"
    },

    CalculatedStats: {
        "Health":   "0",
        "Mana":     "0"
    },
    manaRegenRate:null, // TODO: Base mana regen rate on will or will + this?

    // Variables to make attacking more realistic
    attackTimeout:null,
    lastAttackTimestamp:null,

    init:function(fileName, rect)
    {
        this.sprite = cc.Sprite.create(this.fileName, this.rect);
    },

    // To change the facing direction, you should call this. It will flip the sprite accordingly. 
    checkDirection:function(movePoint, screenSize)
    {
        var isMovePointLeft = (movePoint.x > screenSize.x / 2) ? false : true;
        !isMovePointLeft ? setFlipX(true) : setFlipX(false);
    },

    ChangeHealth:function(value, isIncrease) {
        this.CalculatedStats["Health"] += isIncrease ? value : -value;   
    },

    ChangeMana:function(value, isIncrease) {
        this.CalculatedStats["Mana"] += isIncrease ? value : -value;
    },

    Attack:function() {
    },
    
    GetHealth:function() {
        return CalculatedStats.Health;
    },

    GetSprite:function() {
        return this.sprite;
    }
}
