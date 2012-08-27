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
cc.loadjs('MapGenerator.js');
cc.loadjs('MapPieces.js');
cc.loadjs('MapTile.js');
Map = new Object({
    world:[],
    pieces:[],
    player:null,
    WIDTH:8,
    HEIGHT:8,
    sprites:null,
    scale:40,
    start:null,
    layer:null,
    size:null,
    enemyChance:.02,
    loadWorld: function(layer,mapPiece,x, y,pieceX,pieceY ) {
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
			var enemies;
			for(j = 0; j < mapPiece.x; j++){
//				console.log("y:"+pieceY+" x:"+pieceX+" i:"+i+" j:"+j+" world:"+worldInNumbers[i][j]);
// 				console.log("x:"+MapTile[worldInNumbers[i][j]].X*40+" y:"+MapTile[worldInNumbers[i][j]].Y*HEIGHT+" num:"+worldInNumbers[i][j]); 
				tile = MapTile[worldInNumbers[i][j]];
				this.pieces[pieceY+i][pieceX+j] = worldInNumbers[i][j];
				if(tile.overlay > -1){
			        this.addToScreen(MapTile[tile.overlay].X,MapTile[tile.overlay].Y,x,y,i,j,mapPiece,layer,MapTile[tile.overlay].block&&tile.block);					
				}
				else{
			        if(Math.random() < this.enemyChance){						        
				        enemies = new Enemy(new cc.Rect(0, 9*8*this.scale, 8 * this.scale, 8 * this.scale));
				        enemies.init(layer);
				        enemies.GetSprite().setPosition(cc.ccp(x+this.WIDTH*j,y+this.HEIGHT*mapPiece.y-this.HEIGHT*i ));
				        enemies.SetBody(layer.addUpdatableSprite(enemies.GetSprite(),x+this.WIDTH*j,y+this.HEIGHT*mapPiece.y-this.HEIGHT*i,2,true,false, enemies));
				        enemies.Update(1);
			        }
					
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
	         1,
	         false,
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
        this.WIDTH *= scale;
        layer.addChild(this.sprites,0,99);
        
        var map = mapGenerator.generate(30, 40);
        this.start = map.start;
        this.loadWorld(layer, map, 0, 0, 0, 0);
        this.layer = layer;	        
	 /*
   this.enemies = new Enemy(new cc.Rect(0, 9*8*this.scale, 8 * this.scale, 8 * this.scale));
	    this.enemies.init(layer);
	    this.enemies.GetSprite().setPosition(cc.ccp(this.WIDTH/2,this.HEIGHT/2));
	    this.enemies.SetBody(layer.addUpdatableSprite(this.WIDTH/2,this.HEIGHT/2,2,true,false, this.enemies));
*/

    },
    addPlayer:function(play,layer){
    	this.player = play;
        this.player.SetBody(this.layer.addSprite(
        				this.player.GetSprite(),
        				(this.start[1] + 2)*PTM_RATIO,
        				(this.world.length -  (this.start[0] + 1))*PTM_RATIO,
        				4,
        				true,
        				true
        				));
		this.layer.moveMap(this.player.GetBody());
    },
    update:function(){
	    
    },
    move:function(x,y){
	    
    },
    keyUp:function(e){

    },
    keyDown:function(e){
    }

    

});




