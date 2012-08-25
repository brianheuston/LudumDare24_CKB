/*w/Users/chris/LudumDare24_CKB//****************************************************************************
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

Map = new Object({
    world:[],
    WIDTH:20,
    HEIGHT:20,
    loadWorld: function(layer){
    	var worldInNumbers =   [[0,0,0,0,0,0,0,0,0,0],
    							[0,1,1,1,1,1,1,1,1,1],
    							[0,1,0,0,0,0,0,0,0,0],
    							[0,1,0,0,0,0,0,0,0,0],
    							[0,1,0,0,0,0,0,0,0,0],
    							[0,1,0,0,0,0,0,0,0,0],
    							[0,1,0,0,0,0,0,0,0,0],
    							[0,1,0,0,0,0,0,0,0,0],
    							[0,1,0,0,0,0,0,0,0,0],
    							[0,1,0,0,0,0,0,0,0,0],
    							[0,1,0,0,0,0,0,0,0,0]
    	]
		var spriteFiles = ["Resources/Dirt_forest.png","Resources/Wall_forest.png"];
		var i = 0;
		var j = 0;
		this.world = [];
		for(i = 0; i < 10; i++){
			this.world[i] = [];
			for(j = 0; j < 10; j++){
				this.world[i][j] = cc.Sprite.create(spriteFiles[worldInNumbers[i][j]]);
		        this.world[i][j].setAnchorPoint(cc.ccp(0.5, 0.5));
		        this.world[i][j].setPosition(cc.ccp(this.WIDTH*j,this.HEIGHT*10- this.HEIGHT*i));
		
		        layer.addChild(this.world[i][j], 0);
			}
		}
	    
    },

    init:function (layer) {

        //////////////////////////////
        // 1. super init first
        this.loadWorld(layer);
    }

});




