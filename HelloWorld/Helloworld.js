/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
cc.loadjs('Map.js');//19
cc.loadjs('Classes/GameObjects/Player.js');

var Helloworld = cc.Layer.extend({
    isMouseDown:false,
    helloImg:null,
    helloLabel:null,
    circle:null,
    sprite:null,
    size:null,
    map:null,
    centerPos:null,

    init:function () {

        //////////////////////////////
        // 1. super init first
        this._super();
        this.setIsKeypadEnabled(true);

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask director the window size
        size = cc.Director.sharedDirector().getWinSize();
        centerPos = cc.ccp(size.width / 2, size.height / 2);

        // add a "close" icon to exit the progress. it's an autorelease object
        /*var closeItem = cc.MenuItemImage.create(
            "Resources/CloseNormal.png",
            "Resources/CloseSelected.png",
            this,
            function () {
                history.go(-1);
            });
        closeItem.setAnchorPoint(new cc.Point(0.5,0.5));

        var menu = cc.Menu.create(closeItem, null);
        menu.setPosition( cc.PointZero() );
        this.addChild(menu, 1);
        closeItem.setPosition(new cc.Point(size.width -20 , 20));
        */
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        /*        this.helloLabel = cc.LabelTTF.create("Hello World", "Arial", 38);
        // position the label on the center of the screen
        this.helloLabel.setPosition(cc.ccp(size.width / 2, size.height - 40));
        // add the label as a child to this layer
        this.addChild(this.helloLabel, 5);*/
        this.map = new cc.LazyLayer();
        this.addChild(this.map);
        Map.init(this.map);
        var explosion = cc.ParticleFire.create();
        this.addChild(explosion);

        Player.init("Resources/oryx_lofi/lofi_environment.png");
        Player.GetSprite().setPosition(cc.ccp(size.width / 2, size.height / 2));
        this.addChild(Player.GetSprite());

        this.setIsTouchEnabled(true);

        return true;
    },

    ccTouchesEnded:function(touches, event) {
        if (touches.length <= 0)
            return;

        var touch = touches[0];

        var location = touch.locationInView(touch.view());

        var moveDelta = cc.ccp((location.x - centerPos.x),
                               (location.y - centerPos.y));
        this.map.setPosition(cc.ccp(this.map.getPosition().x - moveDelta.x,
                                    this.map.getPosition().y - moveDelta.y));
    }

});

Helloworld.scene = function () {
    // 'scene' is an autorelease object
    var scene = cc.Scene.create();

    // 'layer' is an autorelease object
    var layer = this.node();
    scene.addChild(layer);
    return scene;
};
// implement the "static node()" method manually
Helloworld.node = function () {
    var ret = new Helloworld();

    // Init the helloworld display layer.
    if (ret && ret.init()) {
        return ret;
    }

    return null;
};



