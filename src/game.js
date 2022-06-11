import Boot from './boot.js';
import Menu from './menu.js';
import End from './end.js';
import Level from './level.js';

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 500,
    scale: {
        //mode: Phaser.Scale.FIT,  
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    pixelArt: true,
    scene: [Boot, Menu, Level, End],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: false
        }
    }
};

new Phaser.Game(config);