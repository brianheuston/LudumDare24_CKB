function MeleeAttack(fileName, rect)
{
    Attack.call(this, "Resources/oryx_lofi/lofi_obj.png", new cc.Rect(40, 24, 8, 8));
}

MeleeAttack.prototype = Object.create(new Attack(), {
    clickTimestamp: { value: null },

    Launch: { value: function(target, playerLocation, layer) {
        var bulletData = this.CalculateData(target, playerLocation);

        this.SetStartPoint(bulletData["startPosition"]);

        // Add the child and set the delta. By setting the delta, we set
        // movement.
        layer.addChild(this.GetSprite());

        // Now, create a series of actions that do the following:
        // - Wait for half a second
        // - Delete the sword object

        /*
        var moveAction = cc.DelayTime.create(0.5);
        var deleteAction = cc.CallFunc.create(this, layer.removeChild(this.GetSprite()));
        var seq = cc.Sequence.create(moveAction, deleteAction);
        this.GetSprite().runAction(seq);
        */
    } },
})

