export default class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, n) {
      super(scene, x, y, 'spaceship');
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this, true);

      this.label = this.scene.add.text(this.x, this.y - 80, '0 / 3', 
      { fill: '#FFFFFF', fontFamily: 'Pixeled', fontSize: 20 })
      .setOrigin(0.5, 0.5)
      .setAlign('center');

      this.fuel = 0;
      this.neededFuels = n;
      this.updateHUD();
    }

    updateFuel()
    {
      this.fuel++;
      this.updateHUD();
    }

    updateHUD()
    {
      this.label.text = this.fuel + ' / ' + this.neededFuels;
    }

    hide()
    {
      this.label.setVisible(false);
    }
  }
  