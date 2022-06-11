export default class Bullet extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, dir) {
      super(scene, x, y, 'bullet');
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.dir = dir;

      this.speed = 500;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        this.body.setVelocityX(this.speed * this.dir);
        this.body.setVelocityY(0);
        if(this.scene.physics.overlap(this.scene.enemies, this, (o1, o2) => { o1.destroy(); o2.destroy(); }));

        if(this.x < 0 || this.x > 640) this.destroy();
    }
  }
