var GUI = cc.Layer.extend({
    player: null,
    screenSize: null,
    screenRatio: 0.25, // 25% of the screen real estate will be used for this
    distanceFromEdgesForHealth: 100,
    healthHeight: 25, 

    ctor:function() {
        
    },

    GetScreenRatio: function() {
        return screenRatio;
    },

    SetPlayer: function(player) {
        this.player = player;
    },

    SetScreenSize: function(screenSize) {
        this.screenSize = screenSize;
    },

    Initialize: function(player, screenSize) {
        this.SetPlayer(player);
        this.SetScreenSize(screenSize);

        // Get all the strings together so we don't overallocate
        // Health
        /*
        var healthLabel = cc.LabelTTF.create("Health", "Arial", 20);
        healthLabel.setPosition(cc.ccp(this.distanceFromEdgesForHealth + this.healthHeight + 30,
                                       this.screenSize.height * this.screenRatio + this.healthHeight - 10));
        healthLabel.setColor(cc.BLACK());
        this.addChild(healthLabel);

        // Mana
        var manaLabel = cc.LabelTTF.create("Mana", "Arial", 20);
        manaLabel.setPosition(cc.ccp(this.screenSize.width / 2 + 20,
                                     this.screenSize.height * this.screenRatio + this.healthHeight - 10));
        manaLabel.setColor(cc.BLACK());
        this.addChild(manaLabel);
        */
    },

    draw: function() {
        this._super();

        // Main section
        cc.renderContext.fillStyle = "rgba(150,150,150,1)";
        cc.renderContext.strokeStyle = "rgba(192,192,192,1)";

        this.DrawRect(0, 0, this.screenSize.width, this.screenSize.height * this.screenRatio, true);

        // Health bar section
        cc.renderContext.fillStyle = "rgba(192,192,192,1)";
        var vertices2 = [cc.PointMake(this.distanceFromEdgesForHealth, this.screenSize.height * this.screenRatio),
                         cc.PointMake(this.screenSize.width - this.distanceFromEdgesForHealth, this.screenSize.height * this.screenRatio),
                         cc.PointMake(this.screenSize.width - (this.distanceFromEdgesForHealth + this.healthHeight), this.screenSize.height * this.screenRatio + this.healthHeight),
                         cc.PointMake((this.distanceFromEdgesForHealth + this.healthHeight), this.screenSize.height * this.screenRatio + this.healthHeight)];

        cc.drawingUtil.drawPoly(vertices2, 4, true, true);

        // Border
        cc.renderContext.strokeStyle = "rgba(0,0,0,1)";
        cc.drawingUtil.drawLine(cc.ccp(0, this.screenSize.height * this.screenRatio),
                                cc.ccp(this.screenSize.width, this.screenSize.height * this.screenRatio));

        cc.drawingUtil.drawLine(cc.ccp(this.distanceFromEdgesForHealth, this.screenSize.height * this.screenRatio),
                                cc.ccp(this.distanceFromEdgesForHealth + this.healthHeight, this.screenSize.height * this.screenRatio + this.healthHeight));
        
        cc.drawingUtil.drawLine(cc.ccp(this.distanceFromEdgesForHealth + this.healthHeight, this.screenSize.height * this.screenRatio + this.healthHeight),
                                cc.ccp(this.screenSize.width - (this.distanceFromEdgesForHealth + this.healthHeight), this.screenSize.height * this.screenRatio + this.healthHeight));

        cc.drawingUtil.drawLine(cc.ccp(this.screenSize.width - (this.distanceFromEdgesForHealth + this.healthHeight), this.screenSize.height * this.screenRatio + this.healthHeight),
                                cc.ccp(this.screenSize.width - this.distanceFromEdgesForHealth, this.screenSize.height * this.screenRatio));

        // Health bar
        cc.renderContext.fillStyle = "rgba(0,0,0,1)";
        cc.renderContext.strokeStyle = "rgba(0,0,0,1)";

        this.DrawRect(this.distanceFromEdgesForHealth + this.healthHeight + 1,
                      this.screenSize.height * this.screenRatio + 2,
                      this.screenSize.width / 2 - (this.distanceFromEdgesForHealth + this.healthHeight + 1),
                      this.healthHeight - 4,
                      false);

        this.DrawRect(this.distanceFromEdgesForHealth + this.healthHeight + 3,
                      this.screenSize.height * this.screenRatio + 2,
                      this.screenSize.width / 2 - (this.distanceFromEdgesForHealth + this.healthHeight + 3),
                      this.healthHeight - 6,
                      false);

        // Mana bar
        this.DrawRect(this.screenSize.width / 2 + 1,
                      this.screenSize.height * this.screenRatio + 2,
                      this.screenSize.width / 2 - (this.distanceFromEdgesForHealth + this.healthHeight + 1),
                      this.healthHeight - 4,
                      false);

        this.DrawRect(this.screenSize.width / 2 + 3,
                      this.screenSize.height * this.screenRatio + 2,
                      this.screenSize.width / 2 - (this.distanceFromEdgesForHealth + this.healthHeight + 3),
                      this.healthHeight - 6,
                      false);
    },

    DrawRect: function(x, y, width, height, fill) {
        var bottomLeft = cc.ccp(x, y);
        var bottomRight = cc.ccp(x + width, y);
        var topLeft = cc.ccp(x, y + height);
        var topRight = cc.ccp(x + width, y + height);

        var verts = [ bottomLeft, bottomRight, topRight, topLeft ];

        cc.drawingUtil.drawPoly(verts, 4, true, fill);
    }
});
