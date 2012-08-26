function Attack(fileName, rect)
{
    this.fileName = fileName;
    this.rect = rect;
}

Attack.prototype = {
    fileName: null,
    rect: null,
    sprite: null,
    Stats: {
        "Power": "0",
        "Speed": "0",
    },
    
    startPoint: null,

    init:function()
    {
        this.sprite = cc.Sprite.create(this.fileName, this.rect);
    },

    GetSprite:function() {
        return this.sprite;
    },

    CalculateData: function(target, playerLocation) {
        // Figure out the start position for the bullet.
        // Normalize the distance
        var absValue = Math.sqrt( Math.pow(target.x - playerLocation.x, 2) + Math.pow(target.y - playerLocation.y, 2) );
        var normalized = cc.ccp((target.x - playerLocation.x) / absValue, (target.y - playerLocation.y) / absValue);

        var bulletStartPosition = cc.ccp(playerLocation.x, playerLocation.y);
        var oppOverAdj = normalized.y / normalized.x;
        var angle = Math.atan( oppOverAdj );
        angle *= 180 / 3.14;
        angle = (angle < 0) ? 360 - angle : angle;
        if (angle <= 45 && angle >= 315) {
            bulletStartPosition.x += 20;
        }
        else if (angle >= 135 && angle <= 225) {
            bulletStartPosition.x -= 20;
        }
        if (angle >= 45 && angle <= 135) {
            bulletStartPosition.y += 20;
        }
        else if (angle >= 225 && angle <= 315) {
            bulletStartPosition.y -= 20;
        }

        return {
            "startPosition": bulletStartPosition,
            "normalized": normalized,
            "angle": angle
        };
    }, 

    SetPower: function(power) {
        this.Stats["Power"] = power;
    },

    SetSpeed: function(speed) {
        this.Stats["Speed"] = speed;
    },

    SetStats: function(power, speed) {
        this.SetPower(power);
        this.SetSpeed(speed);
    },

    SetStartPoint: function(startPoint) {
        this.startPoint = startPoint;
        this.sprite.setPosition(startPoint);
    }
}
