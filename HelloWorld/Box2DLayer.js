var TAG_SPRITE_MANAGER = 1;
var PTM_RATIO = 40;

var Box2DLayer = cc.Layer.extend({

    world:null,
    screen:null,
    uiYPercentage:null,
    size:null,
    left:false,
    right:false,
    up:false,
    down:false,

    //GLESDebugDraw *m_debugDraw;


    ctor:function () {
        this.setIsTouchEnabled(true);
        //setIsAccelerometerEnabled( true );

        var b2Vec2 = Box2D.Common.Math.b2Vec2
            , b2BodyDef = Box2D.Dynamics.b2BodyDef
            , b2Body = Box2D.Dynamics.b2Body
            , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
            , b2World = Box2D.Dynamics.b2World
            , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;

        var screenSize = cc.Director.sharedDirector().getWinSize();
        //UXLog(L"Screen width %0.2f screen height %0.2f",screenSize.width,screenSize.height);


        // Construct a world object, which will hold and simulate the rigid bodies.
        this.world = new b2World(new b2Vec2(0, 0), false);
//        this.world.SetContinuousPhysics(true);

        // Define the ground body.
        //var groundBodyDef = new b2BodyDef(); // TODO
        //groundBodyDef.position.Set(screenSize.width / 2 / PTM_RATIO, screenSize.height / 2 / PTM_RATIO); // bottom-left corner

        // Call the body factory which allocates memory for the ground body
        // from a pool and creates the ground box shape (also from a pool).
        // The body is also added to the world.
        //var groundBody = this.world.CreateBody(groundBodyDef);
        
        this.scheduleUpdate();


    },

    addUpdatableSprite:function(sprite,x,y,z,dynamic,person,living){
    	return this.realAddSprite(sprite,x,y,z,dynamic,person,living,true);
    },
    addSprite:function(sprite,x,y,z,dynamic,person){	
    	return this.realAddSprite(sprite,x,y,z,dynamic,person,null,false);
    },
    realAddSprite:function(sprite,x,y,z,bodyType,person,living,update){	    
        var b2BodyDef = Box2D.Dynamics.b2BodyDef
            , b2Body = Box2D.Dynamics.b2Body
            , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
            , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
        
        var bodyDef = new b2BodyDef();

        switch (bodyType)
        {
            case "dynamic":
                bodyDef.type = b2Body.b2_dynamicBody;
                break;
            case "static":
                bodyDef.type = b2Body.b2_staticBody;
                break;
            case "kinematic":
                bodyDef.type = b2Body.b2_kinematicBody;
                break;
            default:
                bodyDef.type = b2Body.b2_staticBody;
                break;
        }

        bodyDef.position.Set(x / PTM_RATIO, y / PTM_RATIO);
        bodyDef.userData = new Object({
	        	sprite:sprite,
	        	person:person,
	        	update:update,
	        	living:living
	        })
        bodyDef.fixedRotation = true;
        var body = this.world.CreateBody(bodyDef);
//        body.SetLinearVelocity(1,1);
        // Define another box shape for our dynamic body.
        var dynamicBox = new b2PolygonShape();
        dynamicBox.SetAsBox(35/PTM_RATIO/2, 35/PTM_RATIO/2);//These are mid points for our 1m box

        // Define the dynamic body fixture.
        var fixtureDef = new b2FixtureDef();        
        fixtureDef.shape = dynamicBox;
        fixtureDef.density = 1.0;
        fixtureDef.sensor = true;
        body.CreateFixture(fixtureDef);
//        body.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(1, 0));
        this.addChild(sprite,z);
        return body;
 
    },
    moveMap:function(sprite){
	    this.setPosition(cc.ccp(this.screen.width/2-sprite.GetPosition().x*PTM_RATIO,
	    	this.screen.height*(1+this.uiYPercentage)/2-sprite.GetPosition().y*PTM_RATIO));
    },
    keys:function(player){
    	var vel = player.GetLinearVelocity();
    	var x = 0,y=0,VELX = 5,VELY=5;
    	if(this.right){x += VELX;}
    	if(this.down){y+=-VELY;}    	
    	if(this.left){x += -VELX;}
    	if(this.up){y += VELY;}    	
        player.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(x, y));
    },
    update:function (dt) {
        //It is recommended that a fixed time step is used with Box2D for stability
        //of the simulation, however, we are using a variable time step here.
        //You need to make an informed choice, the following URL is useful
        //http://gafferongames.com/game-physics/fix-your-timestep/

        var velocityIterations = dt/.01;
        var positionIterations = dt/.01;

        // Instruct the world to perform a single step of simulation. It is
        // generally best to keep the time step and iterations fixed.
        this.world.Step(dt, velocityIterations, positionIterations);

        //Iterate over the bodies in the physics world
        var userData;
        var sprite;
        
        for (var b = this.world.GetBodyList(); b; b = b.GetNext()) {
            if (b.GetUserData() != null) {
                //Synchronize the AtlasSprites position and rotation with the corresponding body
                var userData = b.GetUserData();
                if(userData.person){
	                this.keys(b);
	                this.moveMap(b);
                }
                if(userData.update){
	                userData.living.Update(dt);
                }
                userData.sprite.setPosition(cc.PointMake(b.GetPosition().x * PTM_RATIO, b.GetPosition().y * PTM_RATIO));
                userData.sprite.setRotation(-1 * cc.RADIANS_TO_DEGREES(b.GetAngle()));
                //console.log(b.GetAngle());
            }
        }

<<<<<<< HEAD
    },

});
=======
    }
});
>>>>>>> Changing logic to add bodies to map through string
