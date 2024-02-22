import { Scene } from 'phaser'

export default class MainMenuScene extends Scene {
	constructor() {
		super('Main-Menu-Scene');
	}

  init() {
    this.startButton= undefined;
    this.player = undefined;
    this.key = undefined

  }
  preload() {
    //load backgraound
    this.load.image("key" ,"images/Key 4 - SILVER - 0000.png")
    this.load.image("ground", "images/graslv1.png");
    this.load.image("ground2", "images/Graslv2.png");
    this.load.image("ground3", "images/Graslv3.png");
    this.load.image("backgroundstart" ,"images/backgroun1new.png");
    this.load.image("startButton" , "images/play.png");
    this.load.image("tree" , "images/48x48 trees.png");
    this.load.image("miringkiri" , "images/miringkiri.png");
    this.load.image("miringkanan" , "images/miringkanan.png");

    //add spriteseed
		this.load.spritesheet('dude', 'images/adventurer-Sheet.png', {
			frameWidth: 50,
			frameHeight: 37
		 });
    
  }
  create() {

    this.add.image(958,540 ,'backgroundstart')
    this.add.image(558,854 ,'tree').setScale(4)
    this.add.image(1350,854 ,'tree').setScale(4)
    this.platforms=this.physics.add.staticGroup();
    //add dude
	  this.player = this.physics.add.sprite(940, 0, "dude").setScale(4)
	  this.player.setCollideWorldBounds(true);
	  this.physics.add.collider(this.player, this.platforms);

    this.platforms.create(64, 1015, "ground")
		this.platforms.create(192, 1015, "ground")
		this.platforms.create(320, 1015, "ground")
		this.platforms.create(448, 1015, "ground")
		this.platforms.create(576, 1015, "ground")
		this.platforms.create(704, 1015, "ground")
		this.platforms.create(832, 1015, "ground")
		this.platforms.create(960, 1015, "ground")
		this.platforms.create(1088, 1015, "ground")
		this.platforms.create(1216, 1015, "ground")
		this.platforms.create(1344, 1015, "ground")
		this.platforms.create(1472, 1015, "ground")
		this.platforms.create(1600, 1015, "ground")
		this.platforms.create(1728, 1015, "ground")
		this.platforms.create(1856, 1015, "ground")
		this.platforms.create(687, 615, "ground")
		this.platforms.create(815, 615, "ground")
		this.platforms.create(943, 615, "ground")
		this.platforms.create(1071, 615, "ground")
		this.platforms.create(1199, 615, "ground")
		this.platforms.create(1599, 615, "ground2")
		this.platforms.create(1699, 615, "ground2")
		this.platforms.create(1799, 615, "ground2")
		this.platforms.create(100, 615, "ground3")
		this.platforms.create(200, 615, "ground3")
		this.platforms.create(300, 615, "ground3")
		this.platforms.create(64, 891, "miringkanan").setScale(0.5)
		this.platforms.create(1856, 891, "miringkiri").setScale(0.5)
		
    

     this.startButton = this.add.image(942, 810, "startButton").setInteractive().setScale(0.5);
     this.startButton.once(
      "pointerup",
      () => {
        this.scene.start("Lv1-scene")
      },
      this
    );

    //add key
		this.key = this.physics.add.group({
			key: "key",
			repeat: 4,
			setXY: { x: 50, y: 0, stepX: 596 },
		});
		this.physics.add.collider(this.key, this.platforms);
		this.key.children.iterate(function (child) {
			
			child.setBounceY(0.5);
		  });
    
  
  }


  





}

























































// import Phaser from "phaser";
// export default class startgameScene extends Phaser.Scene {
//   constructor() {
//     super("startgame-scene");
//   }
//   init(){
//     this.startButton = undefined;
//   }
//   preload() {
//     //load backgraound
//     this.load.image("backgroundstart" ,"images/1start.png");
//   }
//   create() {
//     this.add.image(958,542 ,'bacgroundstart')

//     

// }
