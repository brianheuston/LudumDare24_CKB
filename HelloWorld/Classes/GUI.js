var GUI = cc.Layer.extend({
    player: null,
    screenSize: null,
    screenRatio: 0.3, // 30% of the screen real estate will be used for this

    ctor:function() {
    },

    SetPlayer: function(player) {
        this.player = player;
    },

    SetScreenSize: function(screenSize) {
        this.screenSize = screenSize;
    },

    draw: function() {
        this._super();

        cc.renderContext.fillStyle = "rgba(255,255,255,1)";
        cc.renderContext.strokeStyle = "rgba(255,255,255,1)";

        cc.drawingUtil.drawLine(cc.PointMake(0, this.screenSize.height * this.screenRatio), cc.PointMake(this.screenSize.width, this.screenSize.height * this.screenRatio));
    }
});
