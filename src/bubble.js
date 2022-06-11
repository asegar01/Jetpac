export default class Bubble extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, dir, width) {
      super(scene, x, y, 'bubble');
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);

      this.dir = dir;
      this.screenWidth = width;

      this.dirX = 50;
      this.dirX *= this.dir;
      this.dirY = 50;

      this.alive = true;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);

        this.play('bounce', true);

        if(this.x < 0) this.x = this.screenWidth;
        else if(this.x > this.screenWidth) this.x = 0;

        this.body.setVelocityX(this.dirX);
        this.body.setVelocityY(this.dirY);
    }

    bounce()
    {
        this.dirY *= -1;
    }
  }
