import { Scene } from 'phaser'

export default class platformScene extends Scene {
	constructor() {
		super('platform-scene');
	}
	init () {
	 this.platforms = [];
	 this.player = undefined;
	 this.key = undefined
	 this.cursor = undefined
	 this.scoreText = undefined;
     this.score = 0;
	 this.cursor = undefined
	}

	preload() {
		//bacgroundgambar/key/ground
		this.load.image("key" ,"images/Key 4 - SILVER - 0000.png")
		this.load.image("ground", "images/Grass.png");
		this.load.image("background" ,"images/1.png");
		//load spritesheed
		//idle
		this.load.spritesheet('run', 'images/DinoSprites - vita.png',{
			frameWidth: 200,
			frameHeight: 200
		});
		//run
		this.load.spritesheet('idle', 'images/DinoSprites - vita.png',{
			frameWidth: 200,
			frameHeight: 200
		});
		this.load.spritesheet('jump', 'images/DinoSprites - vita.png',{
			frameWidth: 200,
			frameHeight: 200
		});

		//jump
		this.load.spritesheet('fall', 'images/DinoSprites - vita.png',{
			frameWidth: 200,
			frameHeight: 200
		});
		//fall
		

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
		
		
		

		//add player
		this.player = this.physics.add.sprite(100, 900, "run").setScale(3);
		this.player = this.physics.add.sprite(100, 900, "run").setScale(3);
		this.player = this.physics.add.sprite(100, 900, "run").setScale(3);
		this.player.setCollideWorldBounds(true);
		this.physics.add.collider(this.player, this.platforms);


		//add key
		this.key = this.physics.add.group({
			key: "key",
			repeat: 4,
			setXY: { x: 40, y: 0, stepX: 800 },
	   });

		//tidk tembus
	   this.physics.add.collider(this.key, this.platforms);
	   //pantul
	   this.stars.children.iterate(function (child) {
		child.setBounceY(0.5);
	  });

		//add cursor
		this.cursor = this.input.keyboard.createCursorKeys();

		//add anims

		//animasi ke kiri
		this.anims.create({
			key: "left", 
			frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 5 }), 
			frameRate: 10, 
			repeat: -1, 
		  });
		
	}

	
	
	  
	  
}
