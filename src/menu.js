export default class Menu extends Phaser.Scene {

    constructor() {
        super({ key: 'menu' });{
        }
    }

    create() {
        this.add.text(0, 50, '>  Tu nave se ha estrellado en un planeta desconocido. \n\n>  Ahora, tu misión consiste en recolectar los diferentes botes\n\n    de combustible para poder escapar. \n\n>  Recuerda... cuidado con los peligros que pueden estar acechando.',
        { fill: '#FFFFFF', fontFamily: 'Pixeled', fontSize: 20 })

        this.add.text(0, 250, 'Selecciona un nivel:', { fill: '#FFFFFF', fontFamily: 'Pixeled', fontSize: 20 });

        this.addButton(100, 350, 'Nivel 1', 1);
        this.addButton(250, 350, 'Nivel 2', 2);
        this.addButton(400, 350, 'Nivel 3', 3);
    }

    addButton(posX, posY, text, level) {
        let button = this.add.text(posX, posY, text, { fill: '#FFFFFF', fontFamily: 'Pixeled', fontSize: 20 });
        button.setInteractive();
        button.on('pointerdown', function (event) { let data = [level]; this.scene.start('level', data) }, this);
    }
}