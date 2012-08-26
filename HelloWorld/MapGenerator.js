var mapGenerator = function mapGenerator() {
  var generate = function generate(width, height) {
    var ret = [];
    for (var i = 0; i < width; i++) {
      ret[i] = [];
      for (var j = 0; j < height; j++) {
        ret[i][j] = 1
      }
    }
    
    var startPoint = [Math.floor(Math.random() * width), Math.floor(Math.random() * height)];
    ret[startPoint[0]][startPoint[1]] = 0;
    
    var endPoint;
    do {
      endPoint = [Math.floor(Math.random() * width), Math.floor(Math.random() * height)];
    } while(distance(startPoint, endPoint) < Math.max(width, height) / 2);
    ret[endPoint[0]][endPoint[1]] = 0;
     
    var newLine = line(startPoint, endPoint);
    
    for (var i = 0; i < newLine.length; i++) {
      var newLine2 = square(newLine[i], 2);
    
      for (var j = 0; j < newLine2.length; j++) {
        if (newLine2[j][0] >= 0 && newLine2[j][0] < width && newLine2[j][1] >= 0 && newLine2[j][1] < height) {
          ret[newLine2[j][0]][newLine2[j][1]] = 0;
        }
      }
    }
    
    /*for (var i = 0; i < newLine.length; i++) {
      if (newLine[i][0] >= 0 && newLine[i][0] < width && newLine[i][1] >= 0 && newLine[i][1] < height) {
        ret[newLine[i][0]][newLine[i][1]] = 0;
      }
    }*/
    
    return ret;
  }

  var line = function line(point0, point1) {
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
        if ((point[0] - i) * (point[0] - i) + (point[1] - j) * (point[1] - j) < radius * radius) {
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
    generate: generate
  }
}();