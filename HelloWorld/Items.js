var items = function items() {
  var bonuses = {
    damage:"damage",
    attackSpeed:"attackSpeed",
    moveSpeed:"moveSpeed",
    health:"health",
    mana:"mana",
    regen:"regen",
    focus:"focus",
    defense:"defense",
    spirit:"spirit",
  };

  var slots = {
    weapon: "weapon",
    torso: "torso",
    offhand: "offhand",
    hands: "hands",
    head: "head"
  };

  var types = {
    sword: {
      name: "sword",
      slot: slots.weapon,
      basePowerTypes: [bonuses.damage, bonuses.attackSpeed, bonuses.defense],
      basePowerWeights: [4, 3, 3],
      extraPowerTypes: [bonuses.moveSpeed, bonuses.health, bonuses.mana, bonuses.regen, bonuses.focus, bonuses.spirit],
      extraPowerWeights: [2, 1, 1, 2, 1, 1]
    },
    bow: {
      name: "bow",
      slot: slots.weapon,
      basePowerTypes: [bonuses.damage, bonuses.attackSpeed],
      basePowerWeights: [3, 3],
      extraPowerTypes: [bonuses.moveSpeed, bonuses.health, bonuses.mana, bonuses.regen, bonuses.focus, bonuses.defense, bonuses.spirit],
      extraPowerWeights: [3, 1, 1, 1, 2, 1, 1]
    },
    staff: {
      name: "staff",
      slot: slots.weapon,
      basePowerTypes: [bonuses.damage, bonuses.attackSpeed, bonuses.focus],
      basePowerWeights: [3, 2, 3],
      extraPowerTypes: [bonuses.moveSpeed, bonuses.health, bonuses.mana, bonuses.regen, bonuses.defense, bonuses.spirit],
      extraPowerWeights: [1, 1, 3, 1, 1, 3]
    },
    armor: {
      name: "armor",
      slot: slots.torso,
      basePowerTypes: [bonuses.defense, bonuses.spirit],
      basePowerWeights: [3, 2],
      extraPowerTypes: [bonuses.damage, bonuses.attackSpeed, bonuses.moveSpeed, bonuses.health, bonuses.mana, bonuses.regen, bonuses.focus],
      extraPowerWeights: [1, 1, 1, 3, 1, 2, 1]
    },
    robe: {
      name: "robe",
      slot: slots.torso,
      basePowerTypes: [bonuses.defense, bonuses.spirit],
      basePowerWeights: [2, 3],
      extraPowerTypes: [bonuses.damage, bonuses.attackSpeed, bonuses.moveSpeed, bonuses.health, bonuses.mana, bonuses.regen, bonuses.focus],
      extraPowerWeights: [1, 1, 1, 2, 2, 2, 2]
    },
    shield: {
      name: "shield",
      slot: slots.offhand,
      basePowerTypes: [bonuses.defense],
      basePowerWeights: [4],
      extraPowerTypes: [bonuses.damage, bonuses.attackSpeed, bonuses.moveSpeed, bonuses.health, bonuses.mana, bonuses.regen, bonuses.focus, bonuses.spirit],
      extraPowerWeights: [2, 1, 1, 2, 1, 2, 1, 1]
    },
    idol: {
      name: "idol",
      slot: slots.offhand,
      basePowerTypes: [bonuses.mana],
      basePowerWeights: [4],
      extraPowerTypes: [bonuses.damage, bonuses.attackSpeed, bonuses.moveSpeed, bonuses.health, bonuses.regen, bonuses.focus, bonuses.defense, bonuses.spirit],
      extraPowerWeights: [2, 1, 1, 1, 2, 1, 1, 2]
    },
    book: {
      name: "book",
      slot: slots.offhand,
      basePowerTypes: [bonuses.focus],
      basePowerWeights: [3],
      extraPowerTypes: [bonuses.damage, bonuses.attackSpeed, bonuses.moveSpeed, bonuses.health, bonuses.mana, bonuses.regen, bonuses.defense, bonuses.spirit],
      extraPowerWeights: [2, 1, 1, 1, 2, 1, 1, 2]
    },
    quiver: {
      name: "quiver",
      slot: slots.offhand,
      basePowerTypes: [bonuses.attackSpeed],
      basePowerWeights: [4],
      extraPowerTypes: [bonuses.damage, bonuses.moveSpeed, bonuses.health, bonuses.mana, bonuses.regen, bonuses.focus, bonuses.defense, bonuses.spirit],
      extraPowerWeights: [2, 3, 1, 1, 1, 1, 1, 1]
    },
    gloves: {
      name: "gloves",
      slot: slots.hands,
      basePowerTypes: [bonuses.damage],
      basePowerWeights: [3],
      extraPowerTypes: [bonuses.attackSpeed, bonuses.moveSpeed, bonuses.health, bonuses.mana, bonuses.regen, bonuses.focus, bonuses.defense, bonuses.spirit],
      extraPowerWeights: [3, 1, 1, 1, 1, 1, 1, 1]
    },
    ring: {
      name: "ring",
      slot: slots.hands,
      basePowerTypes: [bonuses.focus],
      basePowerWeights: [3],
      extraPowerTypes: [bonuses.damage, bonuses.attackSpeed, bonuses.moveSpeed, bonuses.health, bonuses.mana, bonuses.regen, bonuses.defense, bonuses.spirit],
      extraPowerWeights: [1, 1, 1, 2, 2, 2, 2, 2]
    },
    helmet: {
      name: "helmet",
      slot: slots.head,
      basePowerTypes: [bonuses.defense],
      basePowerWeights: [3],
      extraPowerTypes: [bonuses.damage, bonuses.attackSpeed, bonuses.moveSpeed, bonuses.health, bonuses.mana, bonuses.regen, bonuses.focus, bonuses.spirit],
      extraPowerWeights: [1, 1, 1, 2, 1, 2, 1, 1]
    },
    hood: {
      name: "hood",
      slot: slots.head,
      basePowerTypes: [bonuses.spirit],
      basePowerWeights: [3],
      extraPowerTypes: [bonuses.damage, bonuses.attackSpeed, bonuses.moveSpeed, bonuses.health, bonuses.mana, bonuses.regen, bonuses.focus, bonuses.defense],
      extraPowerWeights: [1, 1, 1, 2, 2, 2, 2, 1]
    }
  };
  var names = ["sword", "bow", "staff", "armor", "robe", "shield", "idol", "book", "quiver", "gloves", "ring", "helmet", "hood"];
  var probabilities = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  var choose = function choose(probabilities) {
    var total = 0;
    var length = probabilities.length;
    for (var i = 0; i < length; i++) {
      total += probabilities[i]
    }
    var choice = total * Math.random();
    for (var i = 0; i < length; i++) {
      if (choice < probabilities[i]) {
        return i;
      }
      choice -= probabilities[i];
    }
    return length - 1;
  };
  
  var createBasePowers = function createBasePowers(itemType) {
    var powerNames = [];
    var powerLevels = [];
    
    for (var i = 0; i < itemType.basePowerTypes.length; i++) {
      powerNames.push(itemType.basePowerTypes[i]);
      powerLevels.push(1);
    }
    
    return {powerNames: powerNames, powerLevels: powerLevels};
  };
  
  var createRandom = function createRandom(power) {
    var itemType = types[names[choose(probabilities)]];
    var basePowers = createBasePowers(itemType);
    var powerNames = basePowers.powerNames;
    var powerLevels = basePowers.powerLevels;
    
    var powerWeights = itemType.basePowerWeights.slice(0);
    var newPowers = itemType.extraPowerTypes.slice(0);
    var newPowersWeight = itemType.extraPowerWeights.slice(0);
    
    for (var i = 0; i < power; i++) {
      if (powerWeights.length <= 8) {
        if (Math.random() < 1 / (powerWeights.length * powerWeights.length + 1)) {
          var newPower = choose(newPowersWeight);
          powerNames.push(newPowers[newPower]);
          powerLevels.push(1);
          powerWeights.push(newPowersWeight[newPower]);
          newPowers.splice(newPower, 1);
          newPowersWeight.splice(newPower, 1);
          continue;
        }
      }
      
      var powerPlus = choose(powerWeights);
      powerLevels[powerPlus] = powerLevels[powerPlus] + 1;
    }
    
    return {name: itemType.name, type: itemType.name, power: power, powerNames: powerNames, powerLevels: powerLevels};
  };
  
  var mix = function mixItems(item1, item2) {
    var itemType, newType;
    
    if (item1.type === item2.type) {
      newType = item1.type;
    } else {
      newType = [item1.type, item2.type][choose([item1.power, item2.power])];
    }
    itemType = types[newType];
    var power = Math.floor(Math.sqrt(item1.power * item1.power +
                                        item2.power * item2.power +
                                        item1.power * item2.power *
                                        (Math.random() - 0.5)) / Math.sqrt(2));
    
    var basePowers = createBasePowers(itemType);
    var powerNames = basePowers.powerNames;
    var powerLevels = basePowers.powerLevels;
    
    var powerWeights = []
    var newPowers = [];
    var newPowersWeight = [];
    
    var items = [item1, item2];
    for (var j = 0; j < items.length; j++) {
      var currentItem = items[j];
    
      for (var i = 0; i < currentItem.powerNames.length; i++) {
        var indexOfPower = powerNames.indexOf(currentItem.powerNames[i]);
        if (indexOfPower === -1) {
          newPowers.push(currentItem.powerNames[i]);
          newPowersWeight.push(currentItem.powerLevels[i]);
        } else {
          powerWeights[indexOfPower] = (powerWeights[indexOfPower] || 0) + currentItem.powerLevels[i];
        }
      }
    }
    
    for (var i = 0; i < power; i++) {
      if (powerWeights.length <= 8 && newPowers.length > 0) {
        if (Math.random() < 1 / (powerWeights.length * powerWeights.length + 1)) {
          var newPower = choose(newPowersWeight);
          powerNames.push(newPowers[newPower]);
          powerLevels.push(1);
          powerWeights.push(newPowersWeight[newPower]);
          newPowers.splice(newPower, 1);
          newPowersWeight.splice(newPower, 1);
          continue;
        }
      }
      
      var powerPlus = choose(powerWeights);
      powerLevels[powerPlus] = powerLevels[powerPlus] + 1;
    }
    
    return {name: itemType.name, type: itemType.name, power: power, powerNames: powerNames, powerLevels: powerLevels};
  };
  
  return {
    bonuses: bonuses,
    slots: slots,
    types: types,
    names: names,
    probabilities: probabilities,
    createRandom: createRandom,
    mix: mix
  }
}();