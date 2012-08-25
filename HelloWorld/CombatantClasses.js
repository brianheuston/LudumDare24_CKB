var combatantClasses = function combatantClasses() {
  var baseStats = [
    stats.names.health,
    stats.names.mana,
    stats.names.damage,
    stats.names.attackSpeed,
    stats.names.moveSpeed,
    stats.names.regen,
    stats.names.focus,
    stats.names.defense,
    stats.names.spirit,
  ];

  var types = {
    warrior: {
      name: "warrior",
      baseStatLevels: [10, 5, 10, 0, 0, 10, 5, 10, 10],
      statWeights: [2, 1, 2, 0, 0, 2, 1, 2, 2],
      statsPerLevel: 12
    },
    archer: {
      name: "archer",
      baseStatLevels: [8, 8, 15, 5, 0, 5, 5, 7, 7],
      statWeights: [1, 1, 2, 1, 0, 1, 1, 1, 1],
      statsPerLevel: 10
    },
    mage: {
      name: "mage",
      baseStatLevels: [7, 10, 10, 0, 0, 5, 10, 5, 10],
      statWeights: [1, 2, 2, 0, 0, 1, 2, 1, 2],
      statsPerLevel: 10
    },
  };
  var typeNames = ["warrior", "archer", "mage"];
  
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
  
  var levelStats = function levelStats(type) {
    var stats = {};
    for (var i = 0; i < types[type].statsPerLevel; i++) {
      var statName = baseStats[choose(types[type].statWeights)];
      stats[statName] = (stats[statName] || 0) + 1;
    }
    return stats;
  };
  
  var generateStats = function generateStats(type, level) {
    var stats = {};
    
    for (var i = 0; i < baseStats.length; i++) {
      stats[baseStats[i]] = types[type].baseStatLevels[i];
    }
    
    for (var i = 0; i < level; i++) {
      var newLevelStats = levelStats(type);
      for (var j in newLevelStats) {
        stats[j] = stats[j] + newLevelStats[j];
      }
    }
    
    return stats;
  };

  return {
    baseStats: baseStats,
    types: types,
    typesNames: typeNames,
    levelStats: levelStats,
    generateStats: generateStats
  };
}();