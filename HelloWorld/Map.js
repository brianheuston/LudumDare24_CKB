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
cc.loadjs('MapPieces.js');//19/
Map = new Object({
    world:[],
    WIDTH:40,
    HEIGHT:40,
    sprites:null,
    loadWorld: function(layer,mapPiece,x, y){
    	var worldInNumbers =   mapPiece.grid;
		var i = 0;
		var j = 0;
		this.world = [];
		for(i = 0; i < mapPiece.y; i++){
			this.world[i] = [];
			for(j = 0; j < mapPiece.x; j++){
				this.world[i][j] = cc.Sprite.createWithBatchNode(this.sprites,new cc.Rect(16*5,32*5,8*5,8*5));
		        this.world[i][j].setAnchorPoint(cc.ccp(0.5, 0.5));
//		        this.world[i][j].setScale(2);
		        this.world[i][j].setPosition(cc.ccp(x+this.WIDTH*j,y+this.HEIGHT*mapPiece.y-this.HEIGHT*i));		
		        layer.addChild(this.world[i][j], 0);
		        if(worldInNumbers[i][j] == 1){
					this.world[i][j] = cc.Sprite.createWithBatchNode(this.sprites,new cc.Rect(9*40,40*4,40,40));
			        this.world[i][j].setAnchorPoint(cc.ccp(0.5, 0.5));
	//		        this.world[i][j].setScale(2);
			        this.world[i][j].setPosition(cc.ccp(x+this.WIDTH*j,y+this.HEIGHT*mapPiece.y-this.HEIGHT*i));		
			        layer.addChild(this.world[i][j], 1);			        
		        }
		        
		        
		        
		        
			}
		}
	    
    },

    init:function (layer) {
        //////////////////////////////
        // 1. super init first
        this.sprites = new cc.SpriteBatchNode.create("Resources/oryx_lofi/lofi_environment.png",200);
        layer.addChild(this.sprites,0,99);
        
        this.loadWorld(layer,MapPieces[1],0,0);
        this.loadWorld(layer,MapPieces[7],10*this.WIDTH,0);
        this.loadWorld(layer,MapPieces[7],20*this.WIDTH,0);
        this.loadWorld(layer,MapPieces[3],30*this.WIDTH,0);
        this.loadWorld(layer,MapPieces[5],0,10*this.HEIGHT);
        this.loadWorld(layer,MapPieces[8],10*this.WIDTH,10*this.HEIGHT);
        this.loadWorld(layer,MapPieces[8],20*this.WIDTH,10*this.HEIGHT);
        this.loadWorld(layer,MapPieces[6],30*this.WIDTH,10*this.HEIGHT);
        this.loadWorld(layer,MapPieces[0],0,20*this.HEIGHT);
        this.loadWorld(layer,MapPieces[4],10*this.WIDTH,20*this.HEIGHT);
        this.loadWorld(layer,MapPieces[4],20*this.WIDTH,20*this.HEIGHT);
        this.loadWorld(layer,MapPieces[2],30*this.WIDTH,20*this.HEIGHT);
    }

});




