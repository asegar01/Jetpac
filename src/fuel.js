export default class Fuel extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, 'fuel');
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);

      this.stay = false;
    }
  
    preUpdate() {
        super.preUpdate();

        if (this.scene.physics.overlap(this.scene.player, this) && !this.stay) {
          this.pick = this.scene.sound.add('pick');
          this.pick.play();

          this.scene.fuelPick();
          this.body.stop();
          this.body.allowGravity = false;
          this.stay = true;
        }

        if(this.stay)
        {
            this.x = this.scene.player.x;
            this.y = this.scene.player.y - 50;
        }
    }
  }
  