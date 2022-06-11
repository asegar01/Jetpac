import Bullet from './bullet.js';

export default class Player extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, width) {
    super(scene, x, y, 'player');
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.screenWidth = width;

    //this.body.setCollideWorldBounds();

    this.speed = 150;
    this.jumpSpeed = -150;

    this.cursors = this.scene.input.keyboard.createCursorKeys();

    this.bulletTime = 0;
    this.dir = 1;
  }

  preUpdate(t,dt) {
    super.preUpdate(t,dt);
    
    if(this.x < 0) this.x = this.screenWidth;
    else if(this.x > this.screenWidth) this.x = 0;

    if (this.cursors.up.isDown) {
      this.play('fly', true);
      this.body.setVelocityY(this.jumpSpeed);
    }
    if (this.cursors.left.isDown) {
      if(this.cursors.up.isUp && this.body.onFloor()) this.play('walk', true);
      this.body.setVelocityX(-this.speed);
      this.setFlipX(1);
      this.dir = -1;
    }
    else if (this.cursors.right.isDown) {
      if(this.cursors.up.isUp && this.body.onFloor()) this.play('walk', true);
      this.body.setVelocityX(this.speed);
      this.setFlipX(0);
      this.dir = 1;
    }
    else {
      if(this.cursors.up.isUp) this.play('stop', true);
      this.body.setVelocityX(0);
    }
    
    if(t > this.bulletTime){
      if(this.cursors.space.isDown){ 
        this.shoot = this.scene.sound.add('shoot');
        this.shoot.play();
        this.bullet = new Bullet(this.scene, this.x + 60 * this.dir, this.y, this.dir, this.screenWidth); 
        this.bulletTime = t + 300; 
      }
    }
  }
}
