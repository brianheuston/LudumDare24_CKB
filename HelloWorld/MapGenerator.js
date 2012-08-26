var mapGenerator = function mapGenerator() {
  var generateWithBorder = function generateWithBorder(width, height) {
    var ret = [];
    var mapInfo = generate(width-2, height-2);
    var map = mapInfo.grid;
    
    for (var i = 0; i < width; i++) {
      ret[i] = [];
      ret[i][0] = 1;
      ret[i][height - 1] = 1;
    }
    
    for (var j = 0; j < height; j++) {
      ret[0][j] = 1;
      ret[width - 1][j] = 1;
    }
    
    for (var i = 1; i < width - 1; i++) {
      for (var j = 1; j < height - 1; j++) {
        ret[i][j] = map[i-1][j-1]
      }
    }
    
    return  {
      grid: ret,
      x: height,
      y: width,
      start: mapInfo.start,
      end: mapInfo.end
    };
  }

  var generate = function generate(width, height) {
    var ret = [];
    for (var i = 0; i < width; i++) {
      ret[i] = [];
      for (var j = 0; j < height; j++) {
        ret[i][j] = 1
      }
    }
    
    var points = [];
    var groups = [];
    var connections = [];
    for (var i = 0; i < Math.max(width * height / 40, 2); i++) {
      points.push([Math.floor(Math.random() * (width - 1)), Math.floor(Math.random() * (height - 1))]);
      groups.push([points[i]]);
    }
    
    while(groups.length !== 1) {
      var first = Math.floor(Math.random() * groups.length);
      var second = first === 0 ? 1 : 0;
      
      var minDistance = width + height;
      var newConnection = [groups[first][0], groups[second][0]];
      for (var i = 0; i < groups[first].length - 1; i++) {
        for (var k = 0; k < groups.length; k++) {
          if (k !== first) {
            for (var j = i + 1; j < groups[k].length; j++) {
              if (minDistance > distance(groups[first][i], groups[k][j])) {
                minDistance = distance(groups[first][i], groups[k][j]);
                newConnection = [groups[first][i], groups[k][j]];
                second = k;
              }
            }
          }
        }
      }
      
      connections.push([newConnection[0], newConnection[1]]);
      for (var i = 0; i < groups[second].length; i++) {
        groups[first].push(groups[second][i]);
      }
      groups.splice(second, 1);
    }
    
    for (var k = 0; k < connections.length; k++) {
      var newLine = line(connections[k][0], connections[k][1])
    
      for (var i = 0; i < newLine.length; i++) {
        var newLine2 = square(newLine[i], 2);
      
        for (var j = 0; j < newLine2.length; j++) {
          if (newLine2[j][0] >= 0 && newLine2[j][0] < width && newLine2[j][1] >= 0 && newLine2[j][1] < height) {
            ret[newLine2[j][0]][newLine2[j][1]] = 0;
          }
        }
      }
    }
    
    var maxDistance = 0;
    var first = 0;
    var second = 0;
    for (var i = 0; i < points.length - 1; i++) {
      for (var j = 1; j <points.length; j++) {
        if (distance(points[i],points[j]) > maxDistance) {
          maxDistance = distance(points[i],points[j]);
          first = i;
          second = j;
        }
      }
    }
    
    return  {
      grid: ret,
      x: height,
      y: width,
      start: points[first],
      end: points[second]
    };
  }

  var line = function line(point0, point1) {
    if (point0[0] === point1[0] && point0[1] === point1[1]) {
      return [];
    }
  
    var ret = [point0];
    var longerCoord = Math.abs(point0[0] - point1[0]) >= Math.abs(point0[1] - point1[1]) ? 0 : 1;
    var otherCoord = 1 - longerCoord;
    var delta = point0[longerCoord] - point1[longerCoord] < 0 ? 1 : -1;
    var slope = (point1[otherCoord] - point0[otherCoord])/(point1[longerCoord] - point0[longerCoord]);
    for (var i = point0[longerCoord] + delta; i !== point1[longerCoord]; i += delta) {
      var newCoord = [];
      newCoord[longerCoord] = i;
      newCoord[otherCoord] = Math.round(slope * (i - point0[longerCoord]) + point0[otherCoord]);
      ret.push(newCoord);
    }
    ret.push(point1);
    return ret;
  }

  var square = function square(point, size) {
    var ret = [];

    for (var i = point[0]; i < point[0] + size; i++) {
      for (var j = point[1]; j < point[1] + size; j++) {
          ret.push([i,j]);
      }
    }
    
    return ret;
  }

  var circle = function circle(point, radius) {
    var ret = [];

    for (var i = point[0] - radius; i <= point[0] + radius; i++) {
      for (var j = point[1] - radius; j <= point[1] + radius; j++) {
        if ((point[0] - i) * (point[0] - i) + (point[1] - j) * (point[1] - j) < (radius - 0.5) * (radius - 0.5)) {
          ret.push([i,j]);
        }
      }
    }
    
    return ret;
  }

  var distance = function distance(point0, point1) {
    return Math.abs(point0[0] - point1[0]) + Math.abs(point0[1] - point1[1]);
  }

  var mapToString = function mapToString(map) {
    var ret = [];
    for (var i = 0; i < map.length; i++) {
      ret[i] = "";
      for (var j = 0; j < map[i].length; j++) {
        ret[i] = ret[i] + map[i][j];
      }
    }  
    return ret.join("\n");
  };
  
  return {
    generate: generateWithBorder,
    mapToString: mapToString
  }
}();