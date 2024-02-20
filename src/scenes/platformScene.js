import { Scene } from 'phaser'

export default class platformScene extends Scene {
	constructor() {
		super('platform-scene');
	}
	init () {
	 //add player key platform
	 this.platforms = [];
	 this.player = undefined;
	 this.key = undefined
	 this.cursor = undefined

	}

	preload() {
		//bacgroundgambar/key/ground
		this.load.image("key" ,"images/Key 4 - SILVER - 0000.png")
		this.load.image("ground", "images/Grass.png");
		this.load.image("background" ,"images/1.png");
		this.load.image("platform" ,"images/platfrom.png");
		//add spriteseed
		this.load.spritesheet('dude', 'images/adventurer-Sheet.png', {
			frameWidth: 31,
			frameHeight: 31
		 });
		
		
	


		
	}

	create() {
		
		//bacground/gambar
		this.add.image(958,542 ,"background").setScale(4);
		this.platforms=this.physics.add.staticGroup();
		
		//add platform
		this.platforms.create(65, 1015, "ground")
		this.platforms.create(194, 1015, "ground")
		this.platforms.create(323, 1015, "ground")
		this.platforms.create(450, 1015, "ground")
		this.platforms.create(578, 1015, "ground")
		this.platforms.create(707, 1015, "ground")
		this.platforms.create(836, 1015, "ground")
		this.platforms.create(964, 1015, "ground")
		this.platforms.create(1093, 1015, "ground")
		this.platforms.create(1222, 1015, "ground")
		this.platforms.create(1351, 1015, "ground")
		this.platforms.create(1479, 1015, "ground")
		this.platforms.create(1608, 1015, "ground")
		this.platforms.create(1737, 1015, "ground")
		this.platforms.create(1865, 1015, "ground")
		this.platforms.create(1865, 790, "platform")
		this.platforms.create(1275, 620, "platform")
		this.platforms.create(235, 670, "platform")
		this.platforms.create(778, 430, "platform")
		
		
		//add key
		this.key = this.physics.add.group({
			key: "key",
			repeat: 3,
			setXY: { x: 50, y: 0, stepX: 600 },
		});
		this.physics.add.collider(this.key, this.platforms);
		this.key.children.iterate(function (child) {
			
			child.setBounceY(0.2);
		  });

	  //add dude
	  this.player = this.physics.add.sprite(100, 750, "dude");
	  this.player.setCollideWorldBounds(true);
	  this.physics.add.collider(this.player, this.platforms);
	  //add cursor
	  this.cursor = this.input.keyboard.createCursorKeys();
	  //add anims kiri,idle,dan kanan

	  this.anims.create({
		key: "left", 
		frames: this.anims.generateFrameNumbers("dude", { start: 8, end: 12 }), 
		frameRate: 10, 
		repeat: -1, 
	  });
       this.anims.create({
	    key: "turn",
		frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }), 
		frameRate: 10, 
		repeat: -1, 
	     
      });    
        this.anims.create({
	    key: "right",
	    frames: this.anims.generateFrameNumbers("dude", { start: 8, end: 12 }),
	    frameRate: 10,
	    repeat: -1,
    
	    });

		this.physics.add.overlap(this.player, this.key, this.platformScene, null, this);


	}




	update(){
	 if (this.cursor.left.isDown) { 
	
	  this.player.setVelocity(-200, 200);
	  this.player.anims.play("left", true);
	 } else if (this.cursor.right.isDown) {
	  this.player.setVelocity(200, 200);
	  this.player.anims.play("right", true);
	 } else {
	  this.player.setVelocity(0, 0);
	  this.player.anims.play("turn");
		}

		//agar melompat
	 if (this.cursor.up.isDown) {
		this.player.setVelocity(0, -200);  
		this.player.anims.play("turn");
		}

	}

	platformScene(player, key) {
		key.destroy()
	}
	
		
		
		

}	
