export default class Follower extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, 'meteor');
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);

      this.speed = 40;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);

        this.play('follow', true);

        if(this.x > this.scene.player.x) this.body.setVelocityX(-this.speed);
        else if(this.x < this.scene.player.x) this.body.setVelocityX(this.speed);

        if(this.y > this.scene.player.y) this.body.setVelocityY(-this.speed);
        else if (this.y < this.scene.player.y) this.body.setVelocityY(this.speed);
    }
  }
