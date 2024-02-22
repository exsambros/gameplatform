import { Scene } from 'phaser'

export default class Lv1Scene extends Scene {
	constructor() {
		super('Lv1-scene');
	}
	init () {
	 //add player key platform
	 this.platforms = [];
	 this.player = undefined;
	 this.key = undefined
	 this.cursor = undefined
	 //add score
	 this.scoreText = undefined;
     this.score = 0;
	

	}

	preload() {
		//bacgroundgambar/key/ground
		this.load.image("key" ,"images/Key 4 - SILVER - 0000.png")
		this.load.image("ground", "images/graslv1.png");
		this.load.image("background" ,"images/1.png");
		this.load.image("platform" ,"images/platfrom.png");
		//add spriteseed
		this.load.spritesheet('dude', 'images/adventurer-Sheet.png', {
			frameWidth: 50,
			frameHeight: 37
		 });
		
		
	


		
	}

	create() {
		
		//bacground/gambar
		this.add.image(958,542 ,"background").setScale(4);
		this.platforms=this.physics.add.staticGroup();
		
		//add platform
		this.platforms.create(65, 1015, "ground")
		this.platforms.create(193, 1015, "ground")
		this.platforms.create(322, 1015, "ground")
		this.platforms.create(455, 1015, "ground")
		this.platforms.create(578, 1015, "ground")
		this.platforms.create(706, 1015, "ground")
		this.platforms.create(834, 1015, "ground")
		this.platforms.create(962, 1015, "ground")
		this.platforms.create(1090, 1015, "ground")
		this.platforms.create(1218, 1015, "ground")
		this.platforms.create(1346, 1015, "ground")
		this.platforms.create(1474, 1015, "ground")
		this.platforms.create(1602, 1015, "ground")
		this.platforms.create(1730, 1015, "ground")
		this.platforms.create(1858, 1015, "ground")
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
	  this.player = this.physics.add.sprite(100, 750, "dude").setScale(2)
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

		// add score
		this.scoreText = this.add.text(16, 16, "Score : 0", {
			fontSize: "54px",
			fill: "white",
		});




		
	}




	update(){
	 if (this.cursor.left.isDown) { 
	
	  this.player.setVelocity(-200, 200);
	  this.player.anims.play("left", true);
	  this.player.setFlipX(true)
	 } else if (this.cursor.right.isDown) {
	  this.player.setVelocity(200, 200);
	  this.player.anims.play("right", true);
	  this.player.setFlipX(false)
	 } else {
	  this.player.setVelocity(0, 0);
	  this.player.anims.play("turn");
		}

		//agar melompat
	 if (this.cursor.up.isDown) {
		this.player.setVelocity(0, -200);  
		this.player.anims.play("turn");
		}
	 if (this.cursor.up.isUp) {
		this.player.setVelocityY(200)
	 }
	 //add kunci di ambil semua dan pindah scene
	 if (this.score >= 4) {
		this.scene.start("");
	 
	  }
	  
	  

	}

	platformScene(player, key) {
		key.destroy()
		this.score += 1; 
        this.scoreText.setText('Score : '+this.score);
	}
	


	
  







}	
