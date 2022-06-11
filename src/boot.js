export default class Boot extends Phaser.Scene {

  constructor() {
    super({ key: 'boot' });
  }

  preload() {
    this.load.setPath('assets/sprites/');
    this.load.image('spaceship', 'spaceship.png');
    this.load.image('fuel', 'fuel.png');
    this.load.image('bullet', 'bullet.png');
    this.load.spritesheet('meteor', 'meteor.png', {frameWidth: 16, frameHeight: 14});
    this.load.spritesheet('player', 'jetpac.png', {frameWidth: 17, frameHeight: 24});
    this.load.spritesheet('explosion', 'explosion.png', {frameWidth: 24, frameHeight: 17});
    this.load.spritesheet('bubble', 'bubble.png', {frameWidth: 16, frameHeight: 16});

    this.load.image('tiles', 'tileset.png');
    this.load.tilemapTiledJSON('map','map1.json');

    this.load.setPath('assets/audio/');
    this.load.audio('pick', 'pick.wav');
    this.load.audio('explosion', 'explosion.wav');
    this.load.audio('drop', 'drop.wav');
    this.load.audio('win', 'win.wav');
    this.load.audio('lose', 'lose.wav');
    this.load.audio('music', 'music.wav');
    this.load.audio('shoot', 'shoot.wav');

    let width = this.cameras.main.width;
    let height = this.cameras.main.height;
    let loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);
  }

  create() {
    this.createAnimations();
    this.scene.start('menu');
  }

  createAnimations()
  {
    this.anims.create(
    {
      key: 'fly',
      frames: this.anims.generateFrameNumbers('player', {start : 0, end: 3}),
      frameRate: 5,
      repeat: -1
    })
    this.anims.create(
    {
      key: 'walk',
      frames: this.anims.generateFrameNumbers('player', {start: 4, end: 7}),
      frameRate: 10,
      repeat: -1
    })
    this.anims.create(
    {
      key: 'stop',
      frames: this.anims.generateFrameNumbers('player', {start: 4, end: 4}),
      frameRate: 5,
      repeat: -1
    })

    this.anims.create(
    {
      key: 'move',
      frames: this.anims.generateFrameNumbers('meteor', {start: 0, end: 1}),
      frameRate: 5,
      repeat: -1
    })
    this.anims.create(
    {
      key: 'explode',
      frames: this.anims.generateFrameNumbers('explosion', {start: 0, end: 2}),
      frameRate: 5,
      repeat: 0
    })

    this.anims.create(
    {
      key: 'follow',
      frames: this.anims.generateFrameNumbers('meteor', {start: 2, end: 3}),
      frameRate: 5,
      repeat: -1
    })

    this.anims.create(
    {
      key: 'bounce',
      frames: this.anims.generateFrameNumbers('bubble', {start: 0, end: 1}),
      frameRate: 5,
      repeat: -1
    })
  }
}