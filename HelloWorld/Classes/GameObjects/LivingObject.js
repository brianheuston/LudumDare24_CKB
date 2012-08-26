function LivingObject(fileName, rect)
{
    this.fileName = fileName;
    this.rect = rect;
}

LivingObject.prototype = {
    fileName: null,
    rect: null,
    sprite: null,
    currentHealth:0,
    currentMana:0,
    baseStats: {},
    equipped:{},
    inventory:[],
    
    layer: null, // The layer, so we can add attack animations

    // Variables to make attacking more realistic
    attackTimeout:null,
    lastAttackTimestamp:null,

    init:function(layer)
    {
        this.sprite = cc.Sprite.create(this.fileName, this.rect);
        this.layer = layer;
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

    GetHealth:function() {
        return CalculatedStats.Health;
    },

    GetSprite:function() {
        return this.sprite;
    },
    physicsBody:null,
    SetBody:function(body){
	    this.physicsBody = body;
    },
    GetBody:function(){
	    return this.physicsBody;
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
