function RangedAttack(fileName, rect)
{
    var scale = 5;
    Attack.call(this, "Resources/oryx_lofi/lofi_obj.png", new cc.Rect(0, 72 * scale, 8 * scale, 8 * scale));
}

RangedAttack.prototype = Object.create(new Attack(), {
    delta: { value: null },

    Launch: { value: function(target, playerLocation, layer) {
        var bulletData = this.CalculateData(target, playerLocation);

        this.SetStartPoint(bulletData["startPosition"]);

        // Add the child and set the delta. By setting the delta, we set
        // movement.
        layer.addChild(this.GetSprite());
        this.SetDelta(cc.ccp(bulletData["normalized"].x * 5, bulletData["normalized"].y * 5));
    } },

    SetDelta: { value: function(delta) {
        this.delta = delta;
        this.sprite.schedule(function() {
            this.setPosition(cc.ccp(this.getPosition().x + delta.x,
                                    this.getPosition().y + delta.y));
        });
    } }
})
