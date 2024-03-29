import { Scene } from "phaser";

export default class Lv3Scene extends Scene {
  constructor() {
    super("Lv3-Scene");
  }
  init() {
    //add player key platform
    this.platforms = [];
    this.player = undefined;
    this.key = undefined;
    this.bomb = undefined;
    this.bomb2=undefined
    this.cursor = undefined;
    this.power = 0;
    //add score
    this.scoreText = undefined;
    this.score = 0;
  }
    preload() { 
        //bacgroundgambar/key/ground
        this.load.image("key5", "images/Key 15 - BRONZE - frame0047.png");
        this.load.image("bomb5", "images/bomblv3.png");
        this.load.image("ground3", "images/graslv3.png");
        this.load.image("background3", "images/lv3.png");
        this.load.image("platform", "images/platfrom.png");
        this.load.image("score2", "images/3-3.png");
    
        //add spriteseed
        this.load.spritesheet("dude", "images/adventurer-Sheet.png", {
          frameWidth: 50,
          frameHeight: 37,
        });}
       
        create() {
            //bacground/gambar
            this.add.image(958, 542, "background3").setScale(4);
            this.add.image(130, 120, "score2").setScale(3);
            this.platforms = this.physics.add.staticGroup();
        
            //add platform
            this.platforms.create(65, 1015, "ground3");
            this.platforms.create(193, 1015, "ground3");
            this.platforms.create(321, 1015, "ground3");
            this.platforms.create(449, 1015, "ground3");
            this.platforms.create(577, 1015, "ground3");
            this.platforms.create(705, 1015, "ground3");
            this.platforms.create(833, 1015, "ground3");
            this.platforms.create(961, 1015, "ground3");
            this.platforms.create(1089, 1015, "ground3");
            this.platforms.create(1217, 1015, "ground3");
            this.platforms.create(1345, 1015, "ground3");
            this.platforms.create(1473, 1015, "ground3");
            this.platforms.create(1601, 1015, "ground3");
            this.platforms.create(1729, 1015, "ground3");
            this.platforms.create(1857, 1015, "ground3");
            this.platforms.create(1865, 790, "platform");
            this.platforms.create(1275, 620, "platform");
            this.platforms.create(235, 670, "platform");
            this.platforms.create(778, 430, "platform");
            this.platforms.create(1478, 330, "platform");
        
            //add key
            this.key = this.physics.add.group({
              key: "key5",
              repeat: 8,
              setXY: { x: 30, y: 110, stepX: 234 },
            });
            this.physics.add.collider(this.key, this.platforms);
            this.key.children.iterate(function (child) {
              child.setBounceY(0.2);
            });
        
            //add bomb
            this.bomb5 = this.physics.add.group({
                key: "bomb5",
                repeat: 6,
                setXY: { x: 340, y: 110, stepX:480 },
              });
              this.physics.add.collider(this.bomb5, this.platforms);
              this.bomb5.children.iterate(function ( child) {
                child.setBounceY(0.5)
              })
            this.bomb = this.physics.add.group({
              key: "bomb5",
              repeat: 10,
              setXY: { x: 100, y: 140, stepX:180 },
            });
            this.physics.add.collider(this.bomb, this.platforms);
            this.bomb.children.iterate(function ( child) {
              child.setBounceY(1)
            })
        
            //add dude
            this.player = this.physics.add.sprite(100, 890, "dude").setScale(2);
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
        
            this.physics.add.overlap(
              this.player,
              this.key,
              this.keyScene,
              null,
              this
            );
            this.physics.add.overlap(
              this.player,
              this.bomb5,
              this.bombScene,
              null,
              this
            );
            this.physics.add.overlap(
              this.player,
              this.bomb,
              this.bombScene,
              null,
              this
            );
           
        
            // add score
            this.scoreText = this.add.text(16, 16, "Score : 0", {
              fontSize: "54px",
              fill: "white",
            });
           // this.platforms.setCollisionByExclusion(-1,true)
            
          }

          update() {
            if (this.cursor.left.isDown) {
              this.player.setVelocityX(-200);
              this.player.anims.play("left", true);
              this.player.setFlipX(true);
            } else if (this.cursor.right.isDown) {
              this.player.setVelocityX(200);
              this.player.anims.play("right", true);
              this.player.setFlipX(false);
            } else {
              this.player.setVelocity(0, 0);
              this.player.anims.play("turn");
            }
        
            //agar melompat
            if (this.cursor.up.isDown) {
              this.player.anims.play("turn");
              this.startJump();
            }
            if (this.cursor.up.isUp) {
              this.endJump();
            }
            //add kunci di ambil semua dan pindah scene
            if (this.score >= 9) {
              this.scene.start("Win3-Scene");
            }
          }
        
          keyScene(player, key) {
            key.destroy();
            this.score += 1;
            this.scoreText.setText("Score : " + this.score);
          }
          bombScene(bomb,playerdie) {
            playerdie.destroy();
            this.scene.start("Lose3-Scene")
          }
        
          startJump() {
            this.timer = this.time.addEvent({
              delay: 100,
              callback: this.tick,
              callbackScope: this,
              loop: true,
            });
            this.player.setVelocityY(this.power*-200);
          }
          endJump() {
            this.time.removeEvent(this.timer);
            this.player.setVelocityY(this.power * 200);
            this.power = 0;
          }
        
          tick() {
            if (this.power < 3) {
              this.power += 1;
              console.log(this.power);
            }
          }
    
    
}