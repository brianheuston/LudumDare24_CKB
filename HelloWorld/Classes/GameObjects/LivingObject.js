function LivingObject(fileName, rect)
{
    this.fileName = fileName;
    this.rect = rect;
}

LivingObject.prototype = {
    fileName: null,
    rect: null,
    sprite: null,
    baseStats: {},
    currentHealth:0,
    currentMana:0,
    manaRegenRate:null, // TODO: Base mana regen rate on will or will + this?
    
    equipped:{},
    inventory:[],
    
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
    },
    
    CalculateStats:function() {
      var ret = {};
      for (var statName in baseStats) {
        ret[statName] = baseStats[statName];
      }
      
      for (var slot in this.equipped) {
        var length = this.equipped[slot].statNames.length;
        for (var i = 0; i < length; i++) {
          var oldStat = ret[this.equipped[slot].statNames[i]] || 0;
          ret[this.equipped[slot].statNames[i]] = oldStat + this.equipped[slot].statLevels[i];
        }
      }
      
      return ret;
    },
    
    Equip:function(item) {
      var oldItem = null;
      if (this.equipped[item.slot]) {
        oldItem = this.equipped[item.slot];
      }
      this.equipped[item.slot] = item
      
      return oldItem;
    }
}
