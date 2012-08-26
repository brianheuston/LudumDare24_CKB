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
cc.loadjs('MapPieces.js');
cc.loadjs('MapTile.js');
Map = new Object({
    world:[],
    pieces:[],
    WIDTH:8,
    HEIGHT:8,
    sprites:null,
    scale:1,
    loadWorld: function(layer,mapPiece,x, y,pieceX,pieceY ){
    	var worldInNumbers =   mapPiece.grid;
		var i = 0;
		var j = 0;
		this.world = [];
		var tile;
		for(i = 0; i < mapPiece.y; i++){
			this.world[i] = [];
			if(pieceX == 0){
				this.pieces[pieceY+i] = [];
			}
			for(j = 0; j < mapPiece.x; j++){
//				console.log("y:"+pieceY+" x:"+pieceX+" i:"+i+" j:"+j+" world:"+worldInNumbers[i][j]);
// 				console.log("x:"+MapTile[worldInNumbers[i][j]].X*40+" y:"+MapTile[worldInNumbers[i][j]].Y*HEIGHT+" num:"+worldInNumbers[i][j]); 
				tile = MapTile[worldInNumbers[i][j]];
				this.pieces[pieceY+i][pieceX+j] = worldInNumbers[i][j];
				if(tile.overlay > -1){
			        this.addToScreen(MapTile[tile.overlay].X,MapTile[tile.overlay].Y,x,y,i,j,mapPiece,layer,MapTile[tile.overlay].block&&tile.block);					
				}
		        this.addToScreen(tile.X,tile.Y,x,y,i,j,mapPiece,layer,tile.block);
		        
		        
		        
			}
		}
	    
    },
    addToScreen:function(X,Y,x,y,i,j,mapPiece,layer,opaque){
		this.world[i][j] = cc.Sprite.createWithBatchNode(this.sprites,new cc.Rect(X*this.WIDTH,Y*this.HEIGHT,this.WIDTH,this.HEIGHT));
        this.world[i][j].setAnchorPoint(cc.ccp(0.5, 0.5));
//		        this.world[i][j].setScale(2);
        this.world[i][j].setPosition(cc.ccp(x+this.WIDTH*j,y+this.HEIGHT*mapPiece.y-this.HEIGHT*i));		
        if(opaque == 1){
	        layer.addSprite(this.world[i][j],
	        x+this.WIDTH*j+this.WIDTH/2,
	        y+this.HEIGHT*mapPiece.y-this.HEIGHT*i+this.HEIGHT/2,
	         0,
	         false);
	    }
	    else{
	        layer.addChild(this.world[i][j], 0);
        }
	    
    },

    handleKey:function(e){
	    
        alert('key'+e);
    },
    init:function (layer,scale) {
        //////////////////////////////
        // 1. super init first
        this.sprites = new cc.SpriteBatchNode.create("Resources/oryx_lofi/lofi_environment.png",200);
//        this.setKeyboardEnabled(true);
        this.scale = scale;
        this.HEIGHT *= scale;
        this.WIDTH *=scale;
        layer.addChild(this.sprites,0,99);
        var largePieces = [[1,7,7,3],
        			[5,8,8,6],
        			[0,4,4,2]];
        			
		for(i = 0; i < 3;i++){					
			for(j = 0; j <4; j++){
				this.loadWorld(layer,MapPieces[largePieces[i][j]],10*j*this.WIDTH,10*i*this.HEIGHT,i*10,j*10);
			}
		}        			        
        
    },
    move:function(x,y){
	    
    },
    keyUp:function(e){

    },
    keyDown:function(e){
    }

    

});




