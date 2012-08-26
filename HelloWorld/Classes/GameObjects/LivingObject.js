function LivingObject(rect)
{
    this.rect = rect;
}
LivingObjectSpriteBatch = null;
LivingObject.prototype = {	
    fileName: null,
    rect: null,
    sprite: null,
    currentHealth:0,
    currentMana:0,
    maxHealth:0,
    maxMana:0,
    baseStats: {},
    equipped:{},
    inventory:[],
    physicsBody:null,
    
    layer: null, // The layer, so we can add attack animations

    // Variables to make attacking more realistic
    attackTimeout:null,
    lastAttackTimestamp:null,

    init:function(layer)
    {
        this.sprite = cc.Sprite.createWithBatchNode(LivingObjectSpriteBatch, this.rect);
        this.layer = layer;

        // TODO: Make these set based off of stats?
        this.SetMaxHealth(100);
        this.SetMaxMana(100);
        
        this.ChangeHealth(100, true);
        this.ChangeMana(100, true);
    },

    // To change the facing direction, you should call this. It will flip the sprite accordingly. 
    checkDirection:function(movePoint, screenSize)
    {
        var isMovePointLeft = (movePoint.x > screenSize.x / 2) ? false : true;
        !isMovePointLeft ? setFlipX(true) : setFlipX(false);
    },

    ChangeHealth:function(value, isIncrease) {
        this.currentHealth += isIncrease ? value : -value;   
        this.currentHealth = this.currentHealth > this.maxHealth ? this.maxHealth : this.currentHealth;
    },

    ChangeMana:function(value, isIncrease) {
        this.currentMana += isIncrease ? value : -value;
        this.currentMana = this.currentMana > this.maxMana ? this.maxMana : this.currentMana;
    },

    GetHealth:function() {
        return this.currentHealth;
    },

    GetMana:function() {
        return this.currentMana;
    },

    SetMaxHealth: function(maxHealth) {
        this.maxHealth = maxHealth;
    },

    SetMaxMana: function(maxMana) {
        this.maxMana = maxMana;
    },

    GetSprite:function() {
        return this.sprite;
    },

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
    },

    playerLocation: { value: null },

    /* Returns the center point of the object in pixels */
    SetLocation: { value: function(playerLocation) {
        this.playerLocation = playerLocation;
    } },

    GetLocation: { value: function() {
        return this.playerLocation;
    } },
}
