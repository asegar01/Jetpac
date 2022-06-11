export default class End extends Phaser.Scene {

  constructor() {
    super({ key: 'end' });
  }

  init(data){
    this.gameOver = data[0];
  }

  create() {
    if(this.gameOver){
      this.add.text(320, 200, 'No has podido completar tu misión.\n\nPulsa cualquier tecla para volver al menú.', 
      { fill: '#FFFFFF', fontFamily: 'Pixeled', fontSize: 20 })
      .setOrigin(0.5, 0.5)
      .setAlign('center');

      this.lose = this.sound.add('lose');
      this.lose.play();
    }
    else {
      this.add.text(320, 200, 'Has escapado con éxito.\n\nPulsa cualquier tecla para volver al menú.', 
      { fill: '#FFFFFF', fontFamily: 'Pixeled', fontSize: 20 })
      .setOrigin(0.5, 0.5)
      .setAlign('center');

      this.win = this.sound.add('win');
      this.win.play();
    }

    this.input.keyboard.on('keydown', function (event) { 
      this.scene.start('menu');
    }, this);
  }
}