export default class Meteor extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, dir, width) {
      super(scene, x, y, 'meteor');
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);

      this.dir = dir;
      this.screenWidth = width;

      this.dirX = Phaser.Math.FloatBetween(50, 100);
      this.dirX *= this.dir;
      this.dirY = Phaser.Math.FloatBetween(30, 100);

      this.alive = true;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);

        if(this.alive)
        {
            if(this.x < 0) this.x = this.screenWidth;
            else if(this.x > this.screenWidth) this.x = 0;
    
            if(this.dir === -1) this.setFlipX(1);
            this.play('move', true);
    
            this.body.setVelocityX(this.dirX);
            this.body.setVelocityY(this.dirY);
        }
    }

    explode()
    {
        this.body.stop();
        this.body.allowGravity = false;

        this.explosion = this.scene.sound.add('explosion');
        this.explosion.play();

        this.alive = false;
        this.play('explode', true);

        this.on('animationcomplete', () => {
            this.destroy();
        });
    }
  }
