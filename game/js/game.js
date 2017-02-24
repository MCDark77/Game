var game = null;
//var s = Phaser.ScaleManager.SHOW_ALL;

function init()
{
    game = new Phaser.Game(768, 432, Phaser.CANVAS, '', null, false, false);

	game.state.add("MainGame", MainGame);
	game.state.start("MainGame");
}

		var layer;
		var map;
		
var MainGame = function()
{

}

MainGame.prototype = 
{
	init: function(argument) 
	{

	},

	preload: function() 
	{
		//game.load.image("Player", "Game/img/Player.png");
		game.load.tilemap('test', 'Map/Map.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('tiles', 'Map/Textures/Tiles.png');
		game.load.spritesheet('spl', 'img/spritesheet/Player.png.png', 64, 64, 20);
	},
	
		
	create: function() 
	{
		map = game.add.tilemap('test');
		map.addTilesetImage('Tiles', 'tiles');
		map.setCollisionBetween(3,3,true);
    	layer = map.createLayer('Kachelebene 1');
		layer.resizeWorld();
		
		
		//map.setCollisionBetween(3, 3, true);
		//map.setCollision(2, true);
    	
    	//layer.debug = true;
    	
		//this.scale.scaleMode = s;
		console.log("Loaded v1.1 of Game by MCDark77");
		this.btnUP = game.input.keyboard.addKey(Phaser.Keyboard.W);
		this.btnDOWN = game.input.keyboard.addKey(Phaser.Keyboard.S);
		this.btnLEFT = game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.btnRIGHT = game.input.keyboard.addKey(Phaser.Keyboard.D);
		this.RIGHTbtn = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.LEFTbtn = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.UPbtn = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		this.DOWNbtn = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

		//game.physics.startSystem(Phaser.Physics.ARCADE);



		game.stage.backgroundColor = '#787878';



    	game.world.setBounds(0, 0, 3200, 3200);

    	this.player =  game.add.sprite(5, 2000, 'spl');
    	game.camera.follow(this.player);
    	game.physics.enable(this.player, Phaser.Physics.ARCADE);
		this.player.body.collideWorldBounds = true;
		this.forward = this.player.animations.add('forward', [10,11,12,13]);
		this.backward = this.player.animations.add('backward', [0,1,2,3]);
		this.walkdown = this.player.animations.add('walkdown', [4,5,6,7,8,9]);
		this.walkup = this.player.animations.add('walkup', [14,15,16,17,18,19]);
		this.idle_forward = this.player.animations.add('idle_forward', [4]);
		this.idle_backward = this.player.animations.add('idle_backward' [0]);
		this.player.animations.play("idle_backward");

		
		



		
	}, 


	update: function() 
	{
		
		this.physics.arcade.collide(this.player, layer);
		//console.log(game.physics.arcade.collide(this.player, layer));
		this.player.body.velocity.set(0);

		if(this.btnUP.isDown || this.UPbtn.isDown)	this.player.y = this.player.y -2,5;
		if(this.btnDOWN.isDown || this.DOWNbtn.isDown)	this.player.y = this.player.y +2,5;
	 	if(this.btnLEFT.isDown || this.LEFTbtn.isDown) this.player.x = this.player.x - 2,5;  
		if(this.btnRIGHT.isDown || this.RIGHTbtn.isDown) this.player.x = this.player.x + 2,5; 
		if(this.btnRIGHT.isUp && this.RIGHTbtn.isUp && this.LEFTbtn.isUp && this.btnLEFT.isUp && this.btnUP.isUp && this.btnDOWN.isUp && this.UPbtn.isUp && this.DOWNbtn.isUp) this.player.animations.play("idle_forward"); 
		if(this.btnRIGHT.isDown || this.RIGHTbtn.isDown) this.player.animations.play("forward", 12, true);
		if(this.LEFTbtn.isDown || this.btnLEFT.isDown) this.player.animations.play("backward", 12, true);
		if(this.btnUP.isDown || this.UPbtn.isDown)	this.player.animations.play("walkup", 12, true);
		if(this.btnDOWN.isDown || this.DOWNbtn.isDown)	this.player.animations.play("walkdown", 12, true);

	},



	render: function() 
	{

    //game.debug.cameraInfo(game.camera, 32, 32);
    //game.debug.spriteCoords(this.player, 32, 500);
    //game.debug.body(this.player);

	},
	


}
