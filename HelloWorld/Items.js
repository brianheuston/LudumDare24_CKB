var items = function items() {
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
      baseStatTypes: [stats.names.damage, stats.names.attackSpeed, stats.names.defense],
      baseStatWeights: [4, 3, 3],
      extraStatTypes: [stats.names.moveSpeed, stats.names.health, stats.names.mana, stats.names.regen, stats.names.focus, stats.names.spirit],
      extraStatWeights: [2, 1, 1, 2, 1, 1],
      imageLocation: "lofi_obj.png",
      iconLocations: [[5,3], [6,3], [7,3], [8,3]]
    },
    bow: {
      name: "bow",
      slot: slots.weapon,
      baseStatTypes: [stats.names.damage, stats.names.attackSpeed],
      baseStatWeights: [3, 3],
      extraStatTypes: [stats.names.moveSpeed, stats.names.health, stats.names.mana, stats.names.regen, stats.names.focus, stats.names.defense, stats.names.spirit],
      extraStatWeights: [3, 1, 1, 1, 2, 1, 1],
      imageLocation: "lofi_obj.png",
      iconLocations: [[0,4],[1,4],[2,4],[3,4]]
    },
    staff: {
      name: "staff",
      slot: slots.weapon,
      baseStatTypes: [stats.names.damage, stats.names.attackSpeed, stats.names.focus],
      baseStatWeights: [3, 2, 3],
      extraStatTypes: [stats.names.moveSpeed, stats.names.health, stats.names.mana, stats.names.regen, stats.names.defense, stats.names.spirit],
      extraStatWeights: [1, 1, 3, 1, 1, 3],
      imageLocation: "lofi_obj.png",
      iconLocations: [[12,3],[13,3],[14,3],[15,3]]
    },
    armor: {
      name: "armor",
      slot: slots.torso,
      baseStatTypes: [stats.names.defense, stats.names.spirit],
      baseStatWeights: [3, 2],
      extraStatTypes: [stats.names.damage, stats.names.attackSpeed, stats.names.moveSpeed, stats.names.health, stats.names.mana, stats.names.regen, stats.names.focus],
      extraStatWeights: [1, 1, 1, 3, 1, 2, 1],
      imageLocation: "lofi_obj.png",
      iconLocations: [[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4]]
    },
    robe: {
      name: "robe",
      slot: slots.torso,
      baseStatTypes: [stats.names.defense, stats.names.spirit],
      baseStatWeights: [2, 3],
      extraStatTypes: [stats.names.damage, stats.names.attackSpeed, stats.names.moveSpeed, stats.names.health, stats.names.mana, stats.names.regen, stats.names.focus],
      extraStatWeights: [1, 1, 1, 2, 2, 2, 2],
      imageLocation: "lofi_obj_packA.png",
      iconLocations: [[0,8],[1,8],[2,8],[3,8],[4,8]]
    },
    shield: {
      name: "shield",
      slot: slots.offhand,
      baseStatTypes: [stats.names.defense],
      baseStatWeights: [4],
      extraStatTypes: [stats.names.damage, stats.names.attackSpeed, stats.names.moveSpeed, stats.names.health, stats.names.mana, stats.names.regen, stats.names.focus, stats.names.spirit],
      extraStatWeights: [2, 1, 1, 2, 1, 2, 1, 1],
      imageLocation: "lofi_obj.png",
      iconLocations: [[0,3],[1,3],[2,3],[3,3],[4,3]]
    },
    idol: {
      name: "idol",
      slot: slots.offhand,
      baseStatTypes: [stats.names.mana],
      baseStatWeights: [4],
      extraStatTypes: [stats.names.damage, stats.names.attackSpeed, stats.names.moveSpeed, stats.names.health, stats.names.regen, stats.names.focus, stats.names.defense, stats.names.spirit],
      extraStatWeights: [2, 1, 1, 1, 2, 1, 1, 2],
      imageLocation: "lofi_obj.png",
      iconLocations: [[9,3], [10,3]]
    },
    book: {
      name: "book",
      slot: slots.offhand,
      baseStatTypes: [stats.names.focus],
      baseStatWeights: [3],
      extraStatTypes: [stats.names.damage, stats.names.attackSpeed, stats.names.moveSpeed, stats.names.health, stats.names.mana, stats.names.regen, stats.names.defense, stats.names.spirit],
      extraStatWeights: [2, 1, 1, 1, 2, 1, 1, 2],
      imageLocation: "lofi_obj_packA.png",
      iconLocations: [[0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2]]
    },
    quiver: {
      name: "quiver",
      slot: slots.offhand,
      baseStatTypes: [stats.names.attackSpeed],
      baseStatWeights: [4],
      extraStatTypes: [stats.names.damage, stats.names.moveSpeed, stats.names.health, stats.names.mana, stats.names.regen, stats.names.focus, stats.names.defense, stats.names.spirit],
      extraStatWeights: [2, 3, 1, 1, 1, 1, 1, 1],
      imageLocation: "lofi_obj_packA.png",
      iconLocations: [[0,4],[1,4],[2,4],[3,4],[4,4]]
    },
    gloves: {
      name: "gloves",
      slot: slots.hands,
      baseStatTypes: [stats.names.damage],
      baseStatWeights: [3],
      extraStatTypes: [stats.names.attackSpeed, stats.names.moveSpeed, stats.names.health, stats.names.mana, stats.names.regen, stats.names.focus, stats.names.defense, stats.names.spirit],
      extraStatWeights: [3, 1, 1, 1, 1, 1, 1, 1],
      imageLocation: "lofi_obj_packA.png",
      iconLocations: [[0,5],[1,5],[2,5],[3,5],[4,5]]
    },
    ring: {
      name: "ring",
      slot: slots.hands,
      baseStatTypes: [stats.names.focus],
      baseStatWeights: [3],
      extraStatTypes: [stats.names.damage, stats.names.attackSpeed, stats.names.moveSpeed, stats.names.health, stats.names.mana, stats.names.regen, stats.names.defense, stats.names.spirit],
      extraStatWeights: [1, 1, 1, 2, 2, 2, 2, 2],
      imageLocation: "lofi_obj.png",
      iconLocations: [[6,2],[7,2],[8,2],[9,2],[10,2]]
    },
    helmet: {
      name: "helmet",
      slot: slots.head,
      baseStatTypes: [stats.names.defense],
      baseStatWeights: [3],
      extraStatTypes: [stats.names.damage, stats.names.attackSpeed, stats.names.moveSpeed, stats.names.health, stats.names.mana, stats.names.regen, stats.names.focus, stats.names.spirit],
      extraStatWeights: [1, 1, 1, 2, 1, 2, 1, 1],
      imageLocation: "lofi_obj_packA.png",
      iconLocations: [[0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4]]
    },
    hood: {
      name: "hood",
      slot: slots.head,
      baseStatTypes: [stats.names.spirit],
      baseStatWeights: [3],
      extraStatTypes: [stats.names.damage, stats.names.attackSpeed, stats.names.moveSpeed, stats.names.health, stats.names.mana, stats.names.regen, stats.names.focus, stats.names.defense],
      extraStatWeights: [1, 1, 1, 2, 2, 2, 2, 1],
      imageLocation: "lofi_obj_packA.png",
      iconLocations: [[0,6],[1,6],[2,6],[3,6],[4,6]]
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
    var statNames = [];
    var statLevels = [];
    
    for (var i = 0; i < itemType.baseStatTypes.length; i++) {
      statNames.push(itemType.baseStatTypes[i]);
      statLevels.push(1);
    }
    
    return {statNames: statNames, statLevels: statLevels};
  };
  
  var createRandom = function createRandom(power, type) {
    var itemType
    if (!type) {
      itemType = types[names[choose(probabilities)]];
    } else {
      itemType = types[type];
    }
    var basePowers = createBasePowers(itemType);
    var statNames = basePowers.statNames;
    var statLevels = basePowers.statLevels;
    
    var StatWeights = itemType.baseStatWeights.slice(0);
    var newStats = itemType.extraStatTypes.slice(0);
    var newStatsWeight = itemType.extraStatWeights.slice(0);
    
    for (var i = 0; i < power; i++) {
      if (StatWeights.length <= 8) {
        if (Math.random() < 1 / (StatWeights.length * StatWeights.length + 1)) {
          var newStat = choose(newStatsWeight);
          statNames.push(newStats[newStat]);
          statLevels.push(1);
          StatWeights.push(newStatsWeight[newStat]);
          newStats.splice(newStat, 1);
          newStatsWeight.splice(newStat, 1);
          continue;
        }
      }
      
      var powerPlus = choose(StatWeights);
      statLevels[powerPlus] = statLevels[powerPlus] + 1;
    }
    
    var icon = {image: itemType.imageLocation, location: itemType.iconLocations[Math.floor(Math.random() * itemType.iconLocations.length)]};
    
    return {
      name: itemType.name,
      type: itemType.name,
      power: power,
      statNames: statNames,
      statLevels: statLevels,
      icon: icon,
      slot: itemType.slot
    };
  };
  
  var mix = function mix(item1, item2) {
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
    var statNames = basePowers.statNames;
    var statLevels = basePowers.statLevels;
    
    var StatWeights = []
    var newStats = [];
    var newStatsWeight = [];
    
    var items = [item1, item2];
    for (var j = 0; j < items.length; j++) {
      var currentItem = items[j];
    
      for (var i = 0; i < currentItem.statNames.length; i++) {
        var indexOfPower = statNames.indexOf(currentItem.statNames[i]);
        if (indexOfPower === -1) {
          newStats.push(currentItem.statNames[i]);
          newStatsWeight.push(currentItem.statLevels[i]);
        } else {
          StatWeights[indexOfPower] = (StatWeights[indexOfPower] || 0) + currentItem.statLevels[i];
        }
      }
    }
    
    for (var i = 0; i < power; i++) {
      if (StatWeights.length <= 8 && newStats.length > 0) {
        if (Math.random() < 1 / (StatWeights.length * StatWeights.length + 1)) {
          var newStat = choose(newStatsWeight);
          statNames.push(newStats[newStat]);
          statLevels.push(1);
          StatWeights.push(newStatsWeight[newStat]);
          newStats.splice(newStat, 1);
          newStatsWeight.splice(newStat, 1);
          continue;
        }
      }
      
      var powerPlus = choose(StatWeights);
      statLevels[powerPlus] = statLevels[powerPlus] + 1;
    }

    var icon = {image: itemType.imageLocation, location: itemType.iconLocations[Math.floor(Math.random() * itemType.iconLocations.length)]};
    
    return {
      name: itemType.name,
      type: itemType.name,
      power: power,
      statNames: statNames,
      statLevels: statLevels,
      icon: icon,
      slot: itemType.slot
    };
  };
  
  return {
    slots: slots,
    types: types,
    names: names,
    probabilities: probabilities,
    createRandom: createRandom,
    mix: mix
  }
}();