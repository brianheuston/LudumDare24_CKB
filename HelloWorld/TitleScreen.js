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

cc.loadjs('Helloworld.js');

var TitleScreen = cc.Layer.extend({
    isMouseDown:false,
    helloLabel:null,
    size:null,
    centerPos:null,

    init:function () { 

        //////////////////////////////
        // 1. super init first
        this._super();
        this.setIsTouchEnabled(true);

        this.size = cc.Director.sharedDirector().getWinSize();
        centerPos = cc.ccp(this.size.width / 2, this.size.height / 2);

        this.helloLabel = cc.LabelTTF.create("Evolution of Gaming", "Arial", 38);
        // position the label on the center of the screen
        this.helloLabel.setPosition(cc.ccp(centerPos.x, this.size.height - 40));
        // add the label as a child to this layer
        this.addChild(this.helloLabel, 5);

        var newGameLabel = cc.LabelTTF.create("New Game", "Arial", 20);
        var menuItem = cc.MenuItemLabel.create(newGameLabel, this, this.changeScene);
        menuItem.setPosition(cc.ccp(centerPos.x, this.size.height - 100));

        var menu = cc.Menu.create();
        menu.addChild(menuItem);

        menu.alignItemsVertically();

        this.addChild(menu);

        return true;
    },

    changeScene: function() {
        cc.Director.sharedDirector().pushScene(Helloworld.scene());
    },

    ccTouchesEnded:function(touches, event) {
        if (touches.length <= 0)
            return;

        var touch = touches[0];

        var touchLoc = touch.locationInView(touch.view());

        cc.Director.sharedDirector().pushScene(Helloworld.scene());
    }
});

TitleScreen.scene = function () {
    // 'scene' is an autorelease object
    var scene = cc.Scene.create();

    // 'layer' is an autorelease object
    var layer = this.node();
    scene.addChild(layer);
    return scene;
};
// implement the "static node()" method manually
TitleScreen.node = function () {
    var ret = new TitleScreen();

    // Init the helloworld display layer.
    if (ret && ret.init()) {
        return ret;
    }

    return null;
};



