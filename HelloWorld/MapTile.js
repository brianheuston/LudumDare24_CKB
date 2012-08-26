//overlay:
//if no overlay -1
//if > -1 this tile will be drawn after another tile
var MapTile = [ 
	new Object({
		X:2,
		Y:4,
		block:false,
		overlay:-1,
		enemu:0
	}), 
	new Object({
		X:9,
		Y:4,
		block:true,
		overlay:0,
		enemy:0
		
	}), 
	new Object({
		X:2,
		Y:4,
		block:false,
		overlay:-1,
		enemy:1
		
	})
]