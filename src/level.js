import Fuel from './fuel.js';
import Player from './player.js';
import Spaceship from './spaceship.js';
import Meteor from './meteor.js';
import Follower from './follower.js';
import Bubble from './bubble.js';

export default class Level extends Phaser.Scene {

  constructor() {
    super({ key: 'level' });
  }

  init(data){
    this.level = data[0];
  }

  create() {
    const config = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0
    };
    this.music = this.sound.add('music', config);
    this.music.play();

    this.input.mouse.disableContextMenu();

    this.fuelPicked = false;
    this.takenFuels = 0;
    this.neededFuels = 5;
    this.enemies = this.add.group();

    this.width = this.cameras.main.width;
    this.height = this.cameras.main.height;

    this.player = new Player(this, 200, 300, this.width);
    this.player.setScale(2);

    this.spaceship = new Spaceship(this, 430, this.height - 90, this.neededFuels);
    this.spaceship.body.setSize(36, 98, true);
    this.spaceship.setScale(2);

    this.fuels = this.add.group();
    this.createFuel(Phaser.Math.Between(10, this.width - 10), 0, false);

    this.map = this.make.tilemap({
      key : 'map',
      tileWidth : 8, 
      tileHeight : 8
    });

    const tileset = this.map.addTilesetImage('tileset', 'tiles');
    this.layer = this.map.createLayer('topLayer', tileset, 0, 0);
    this.layer.setScale(2.5);

    this.layer.setCollisionBetween(0, 999);
    this.physics.add.collider(this.player, this.layer);
    this.physics.add.collider(this.player, this.spaceship, (o1, o2) => { 
      if(this.fuelPicked){ 
        o2.updateFuel();
        this.fuelPicked = false;
        this.drop = this.sound.add('drop');
        this.drop.play();
        this.fuel.destroy();
        if(this.takenFuels < this.neededFuels) { this.createFuel(Phaser.Math.Between(10, this.width - 10), 0); }
        else 
        {
          o2.hide();
          o1.destroy();
          this.timer.destroy();

          this.tween = this.tweens.add({
            targets: this.spaceship,
            y: -1000,
            duration: 4000, 
            ease: 'Quint.easeIn',
            delay: 1000,

            onComplete: () => { this.level += 1; let data; this.music.stop();
              if(this.level <= 3) { data = [this.level]; this.scene.start('level', data) } 
              else { data = [false]; this.scene.start('end', data); }}
          });
        }
      }
    });
    this.physics.add.collider(this.layer, this.fuels);

    if(this.level === 1) {
      this.meteors = this.add.group();
      this.timer = this.time.addEvent(
      {
        delay: 1000,
        callback: this.createMeteor,
        callbackScope: this,
        loop: true
      });

      this.physics.add.collider(this.layer, this.meteors, (o1, o2) => { o1.explode();});
      this.physics.add.collider(this.player, this.meteors, (o1, o2) => { let data = [true]; this.music.stop(); this.scene.start('end', data); });
    }
    else if(this.level === 2) {
      this.bubbles = this.add.group();
      this.timer = this.time.addEvent(
      {
        delay: 1500,
        callback: this.createBubble,
        callbackScope: this,
        loop: true
      });

      this.physics.add.collider(this.layer, this.bubbles, (o1, o2) => { o1.bounce(); });
      this.physics.add.collider(this.player, this.bubbles, (o1, o2) => { let data = [true]; this.music.stop(); this.scene.start('end', data); });
    }
    else if(this.level === 3) {
      this.followers = this.add.group();
      this.timer = this.time.addEvent(
      {
        delay: 2000,
        callback: this.createFollower,
        callbackScope: this,
        loop: true
      });

      this.physics.add.collider(this.player, this.followers, (o1, o2) => { let data = [true]; this.music.stop(); this.scene.start('end', data); });
    }
  }

  createFuel(x, y)
  {
    this.fuel = new Fuel(this, x, y);
    this.fuel.setScale(2);
    this.fuels.add(this.fuel);
  }

  createMeteor()
  {
    this.meteor = new Meteor(this, Phaser.Math.Between(0, this.width), 0, Phaser.Math.RND.pick([-1, 1]), this.width);
    this.meteor.setScale(2);
    this.meteors.add(this.meteor);
    this.enemies.add(this.meteor);
  }
  
  createBubble()
  {
    this.bubble = new Bubble(this, Phaser.Math.Between(0, this.width), 0, Phaser.Math.RND.pick([-1, 1]), this.width);
    this.bubble.setScale(2);
    this.bubbles.add(this.bubble);
    this.enemies.add(this.bubble);
  }

  createFollower()
  {
    this.follower = new Follower(this, Phaser.Math.Between(0, this.width), 0);
    this.follower.setScale(2);
    this.followers.add(this.follower);
    this.enemies.add(this.follower);
  }

  fuelPick()
  {
    this.fuelPicked = true;
    this.takenFuels++;
  }
}