import { Scene } from 'phaser'

export default class Win3Scene extends Scene {
	constructor() {
		super('Win3-Scene');
	}

    init() {
        this.startButton= undefined;
        this.homeButton = undefined;
        this.player = undefined;
        this.key = undefined
        this.bomb = undefined
    
      }
      preload() {
        //load backgraound/key/bomb
        this.load.image("key2" ,"images/Key 5 - GOLD - frame0012.png")
        this.load.image("bomb2" ,"images/icons-and-abulites-stuff_0001s_0000_Calque-12.png")
        this.load.image("ground", "images/graslv1.png");
        this.load.image("ground2", "images/Graslv2.png");
        this.load.image("ground3", "images/Graslv3.png");
        this.load.image("backgroundstart" ,"images/backgroun1new.png");
        this.load.image("tryButton" , "images/try.png");
        this.load.image("homeButton" , "images/home.png");
        this.load.image("tree" , "images/48x48 trees.png");
        this.load.image("miringkiri" , "images/miringkiri.png");
        this.load.image("miringkanan" , "images/miringkanan.png");
        this.load.image("youwin" , "images/you_win.png");
        this.load.image("congres" , "images/congres.png");
    
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
        this.add.image(940 ,230, 'youwin')
        this.add.image(910 ,130, 'congres')
        this.platforms=this.physics.add.staticGroup();
        //add dude
          this.player = this.physics.add.sprite(940, 420, "dude").setScale(4)
          this.player.setCollideWorldBounds(true);
          this.physics.add.collider(this.player, this.platforms);
    
            this.platforms.create(64, 1015, "ground3")
            this.platforms.create(192, 1015, "ground3")
            this.platforms.create(320, 1015, "ground3")
            this.platforms.create(448, 1015, "ground3")
            this.platforms.create(576, 1015, "ground3")
            this.platforms.create(704, 1015, "ground3")
            this.platforms.create(832, 1015, "ground3")
            this.platforms.create(960, 1015, "ground3")
            this.platforms.create(1088, 1015, "ground3")
            this.platforms.create(1216, 1015, "ground3")
            this.platforms.create(1344, 1015, "ground3")
            this.platforms.create(1472, 1015, "ground3")
            this.platforms.create(1600, 1015, "ground3")
            this.platforms.create(1728, 1015, "ground3")
            this.platforms.create(1856, 1015, "ground3")
            this.platforms.create(687, 615, "ground3")
            this.platforms.create(815, 615, "ground3")
            this.platforms.create(943, 615, "ground3")
            this.platforms.create(1071, 615, "ground3")
            this.platforms.create(1199, 615, "ground3")
            this.platforms.create(1599, 615, "ground")
            this.platforms.create(1699, 615, "ground")
            this.platforms.create(1799, 615, "ground")
            this.platforms.create(100, 615, "ground2")
            this.platforms.create(200, 615, "ground2")
            this.platforms.create(300, 615, "ground2")
            this.platforms.create(64, 891, "miringkanan").setScale(0.5)
            this.platforms.create(1856, 891, "miringkiri").setScale(0.5)
            
        
    
            this.startButton = this.add.image(1142, 810, "tryButton").setInteractive().setScale(0.5);
            this.startButton.once(
             "pointerup",
             () => {
               this.scene.start("Lv3-Scene")
             })
             this.homeButton=this.add.image(742, 810, "homeButton").setInteractive().setScale(1);
             this.homeButton.once(
              "pointerup",
              () => {
                this.scene.start("Main-Menu-Scene")
              }

        
        );
    
       //add key
            this.key = this.physics.add.group({
                key: "key2",
                repeat: 4,
                setXY: { x: 50, y: 230, stepX: 596 },
            });
            this.physics.add.collider(this.key, this.platforms);
            this.key.children.iterate(function (child) {
                
                child.setBounceY(0.5);
              });

               //add bomb
		  this.bomb = this.physics.add.group({
			key: "bomb2",
			repeat: 4,
			setXY: { x: 360, y: 250, stepX:400 },
		  });
		  this.physics.add.collider(this.bomb, this.platforms);
		  this.bomb.children.iterate(function ( child) {
			child.setBounceY(0.5)
		  })
        }
 
}