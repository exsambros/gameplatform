import { Scene } from "phaser";

export default class Lv2Scene extends Scene {
  constructor() {
    super("Lv2-scene");
  }
  init() {
    //add player key platform
    this.platforms = [];
    this.player = undefined;
    this.key = undefined;
    this.bomb = undefined;
    this.cursor = undefined;
    this.power = 0;
    //add score
    this.scoreText = undefined;
    this.score = 0;
   
    
    
  }

  preload() {
    //bacgroundgambar/key/ground
    this.load.image("key3", "images/Key 5 - GOLD - frame0012.png");
    this.load.image("bomb3", "images/icons-and-abulites-stuff_0001s_0000_Calque-12.png");
    this.load.image("ground2", "images/graslv2.png");
    this.load.image("background2", "images/1lv2.png");
    this.load.image("platform", "images/platfrom.png");
    this.load.image("score3", "images/2-3.png");

    //add spriteseed
    this.load.spritesheet("dude", "images/adventurer-Sheet.png", {
      frameWidth: 50,
      frameHeight: 37,
    });
  }

  create() {
    //bacground/gambar
    this.add.image(958, 542, "background2").setScale(4);
    this.add.image(130, 120, "score3").setScale(3);
    this.platforms = this.physics.add.staticGroup();

    //add platform
    this.platforms.create(65, 1015, "ground2");
    this.platforms.create(193, 1015, "ground2");
    this.platforms.create(321, 1015, "ground2");
    this.platforms.create(449, 1015, "ground2");
    this.platforms.create(577, 1015, "ground2");
    this.platforms.create(705, 1015, "ground2");
    this.platforms.create(833, 1015, "ground2");
    this.platforms.create(961, 1015, "ground2");
    this.platforms.create(1089, 1015, "ground2");
    this.platforms.create(1217, 1015, "ground2");
    this.platforms.create(1345, 1015, "ground2");
    this.platforms.create(1473, 1015, "ground2");
    this.platforms.create(1601, 1015, "ground2");
    this.platforms.create(1729, 1015, "ground2");
    this.platforms.create(1857, 1015, "ground2");
    this.platforms.create(65, 1, "ground");
    this.platforms.create(193, 1, "ground");
    this.platforms.create(321, 1, "ground");
    this.platforms.create(449, 1, "ground");
    this.platforms.create(577, 1, "ground");
    this.platforms.create(705, 1, "ground");
    this.platforms.create(833, 1, "ground");
    this.platforms.create(961, 1, "ground");
    this.platforms.create(1089, 1, "ground");
    this.platforms.create(1217, 1, "ground");
    this.platforms.create(1345, 1, "ground");
    this.platforms.create(1473, 1, "ground");
    this.platforms.create(1601, 1, "ground");
    this.platforms.create(1729, 1, "ground");
    this.platforms.create(1857, 1, "ground");
    this.platforms.create(1865, 790, "platform");
    this.platforms.create(1275, 620, "platform");
    this.platforms.create(235, 670, "platform");
    this.platforms.create(778, 430, "platform");
    this.platforms.create(1478, 330, "platform");

    //add key
    this.key3 = this.physics.add.group({
      key: "key3",
      repeat: 5,
      setXY: { x: 60, y: 100, stepX: 370 },
    });
    this.physics.add.collider(this.key3, this.platforms);
    this.key3.children.iterate(function (child) {
      child.setBounceY(0.2);
    });

    //add bomb
    this.bomb3 = this.physics.add.group({
      key: "bomb3",
      repeat: 6,
      setXY: { x: 210, y: 100, stepX:250 },
    });
    this.physics.add.collider(this.bomb3, this.platforms);
    this.bomb3.children.iterate(function ( child) {
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
      this.key3,
      this.keyScene,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.bomb3,
      this.bombScene,
      null,
      this
    );

    // add score
    this.scoreText = this.add.text(16, 16, "Score : 0", {
      fontSize: "54px",
      fill: "white",
    });

    
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
    if (this.score >= 6) {
      this.scene.start("win2-Scene");
    }
  }

  keyScene(player, key) {
    key.destroy();
    this.score += 1;
    this.scoreText.setText("Score : " + this.score);
  }
  bombScene(bomb,playerdie) {
    playerdie.destroy();
    this.scene.start("Lose2-Scene")
  }

  startJump() {
    this.timer = this.time.addEvent({
      delay: 100,
      callback: this.tick,
      callbackScope: this,
      loop: true,
    });
    this.player.setVelocityY(this.power *-100);
  }
  endJump() {
    this.time.removeEvent(this.timer);
    this.player.setVelocityY(this.power * 200);
    this.power = 0;
  }

  tick() {
    if (this.power < 5) {
      this.power += 1;
      console.log(this.power);
    }
  }
}
