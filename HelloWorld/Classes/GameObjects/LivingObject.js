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
    currentLevel:0,
    characterClass:"warrior",
    baseStats: {},
    calculatedStats: {},
    equipped:{},
    inventory:[],
    time:0,
    update:1,
    physicsBody:null,
    
    layer: null, // The layer, so we can add attack animations

    // Variables to make attacking more realistic
    attackTimeout:null,
    lastAttackTimestamp:null,

    init:function(layer)
    {
        this.sprite = cc.Sprite.createWithBatchNode(LivingObjectSpriteBatch, this.rect);
        this.layer = layer;

        this.baseStats = combatantClasses.generateStats(this.characterClass, this.currentLevel);
        this.CalculateStats();
        
        this.currentHealth = this.MaxHealth();
        this.currentMana = this.MaxMana();
        
        this.Equip(items.createRandom(0));
    },

    // To change the facing direction, you should call this. It will flip the sprite accordingly. 
    checkDirection:function(movePoint, screenSize)
    {
        var isMovePointLeft = (movePoint.x > screenSize.x / 2) ? false : true;
        !isMovePointLeft ? setFlipX(true) : setFlipX(false);
    },

    MaxHealth:function() {
      return this.baseStats.health * 10;
    },
    
    MaxMana:function() {
      return this.baseStats.mana * 10;
    },
    
    ChangeHealth:function(value) {
        this.currentHealth = Math.max(Math.min(this.currentHealth + value, this.MaxHealth()),0);
    },

    ChangeMana:function(value) {
        this.currentMana = Math.max(Math.min(this.currentMana + value, this.MaxMana()),0);
    },

    GetHealth:function() {
        return this.currentHealth;
    },

    GetMana:function() {
        return this.currentMana;
    },
    Damage:function(damage, isMagic) {
      this.ChangeHealth(Math.min(0, -damage + (isMagic ? this.calculatedStats.spirit : this.calculatedStats.defense)));
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
      for (var statName in this.baseStats) {
        ret[statName] = this.baseStats[statName];
      }
      
      for (var slot in this.equipped) {
        var length = this.equipped[slot].statNames.length;
        for (var i = 0; i < length; i++) {
          var oldStat = ret[this.equipped[slot].statNames[i]] || 0;
          ret[this.equipped[slot].statNames[i]] = oldStat + this.equipped[slot].statLevels[i];
        }
      }
      
      this.calculatedStats = ret;
    },
    
    Equip:function(item) {
      var oldItem = null;
      if (this.equipped[item.slot]) {
        oldItem = this.equipped[item.slot];
      }
      this.equipped[item.slot] = item;
      this.CalculateStats();
      
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
    Update: function(dt){
	    this.time += dt;
	    if(this.time > this.update){
		    this.GetBody().SetLinearVelocity(cc.ccp(10*Math.random()-5,10*Math.random()-5));
		    this.time = 0;
	    }
      
      this.ChangeHealth(this.baseStats.regen / 5);
      this.ChangeMana(this.baseStats.focus / 5);
    }
}
