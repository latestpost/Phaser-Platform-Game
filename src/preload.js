var preload = function(game){}

preload.prototype = {
	preload: function(){
            level=1;
            leveltext='level1';
            this.add.sprite(280,240,"loadingBack");
            var loadingBar = this.add.sprite(280,240,"loading");
            //loadingBar.anchor.setTo(0,0.5);
            this.game.load.setPreloadSprite(loadingBar,0);

            this.game.load.image("gametitle","assets/logo.png");
            this.game.load.image("play","assets/play.png");
            this.game.load.image("button1","assets/button1.png");
            this.game.load.image("button2","assets/button2.png");
            this.game.load.image("button3","assets/button3.png");
            this.game.load.image("buttonblank","assets/buttonblank.png");
            this.game.load.image("buttonblankdisabled","assets/buttonblankdisabled.png");
            
             //spritesheet for animations
            this.game.load.spritesheet('mario', 'assets/newspritesheet-small.png',50,50); // key, sourcefile, framesize x, framesize y
            //background, ground, fireball images
            this.game.load.image('fireball', 'assets/fireball.png',40,30);
            //gamepad buttons
            this.game.load.spritesheet('buttonvertical', 'assets/button-vertical.png',64,64);
            this.game.load.spritesheet('buttonhorizontal', 'assets/button-horizontal.png',96,64);
            this.game.load.spritesheet('buttondiagonal', 'assets/button-diagonal.png',64,64);
            this.game.load.spritesheet('buttonfire', 'assets/button-round-a.png',96,96);
            this.game.load.spritesheet('buttonjump', 'assets/button-round-b.png',96,96);
            // fullscreen setup
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
            
            //level data
            this.game.load.tilemap('level1', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
            this.game.load.tilemap('level2', 'assets/level2.json', null, Phaser.Tilemap.TILED_JSON); 
            this.game.load.tilemap('level3', 'assets/level3.json', null, Phaser.Tilemap.TILED_JSON); 
            this.game.load.tilemap('level4', 'assets/level4.json', null, Phaser.Tilemap.TILED_JSON); 
            this.game.load.tilemap('level5', 'assets/level5.json', null, Phaser.Tilemap.TILED_JSON); 
            this.game.load.tilemap('level6', 'assets/level6.json', null, Phaser.Tilemap.TILED_JSON); 
            this.game.load.tilemap('level7', 'assets/level7.json', null, Phaser.Tilemap.TILED_JSON); 
            this.game.load.tilemap('level8', 'assets/level8.json', null, Phaser.Tilemap.TILED_JSON); 
            this.game.load.tilemap('level9', 'assets/level9.json', null, Phaser.Tilemap.TILED_JSON); 
            this.game.load.tilemap('level10', 'assets/level10.json', null, Phaser.Tilemap.TILED_JSON); 
            this.game.load.tilemap('level11', 'assets/level11.json', null, Phaser.Tilemap.TILED_JSON); 
            this.game.load.tilemap('level12', 'assets/level12.json', null, Phaser.Tilemap.TILED_JSON); 
            this.game.load.tilemap('level13', 'assets/level13.json', null, Phaser.Tilemap.TILED_JSON); 
            this.game.load.tilemap('level14', 'assets/level14.json', null, Phaser.Tilemap.TILED_JSON); 
            this.game.load.tilemap('level15', 'assets/level15.json', null, Phaser.Tilemap.TILED_JSON); 
            this.game.load.tilemap('level16', 'assets/level16.json', null, Phaser.Tilemap.TILED_JSON); 
            
            
            //images
            this.game.load.image('tiles', 'assets/super_mario.png');
            this.game.load.image('back1', 'assets/back1.png');
            this.game.load.image('back2', 'assets/back2.png');
            this.game.load.image('back3', 'assets/back3.png');
            this.game.load.image('barrel', 'assets/barrel.png');
            this.game.load.image('coin', 'assets/coin.png');
            this.game.load.image('bits', 'assets/bits.png');
            this.game.load.image('gameover', 'assets/gameover.png');
            this.game.load.image('levelover', 'assets/levelover.png');
            this.game.load.image('smoke', 'assets/smoke.png');
            this.game.load.image('star', 'assets/star.png');
            this.game.load.image('star1', 'assets/bluestar.png');
            this.game.load.image('star2', 'assets/greenstar.png');
            this.game.load.image('star3', 'assets/redstar.png');
            this.game.load.image('star4', 'assets/yellowstar.png');
            this.game.load.image('goldstar', 'assets/yellowstar.png');
            this.game.load.image('greystar', 'assets/greenstar.png');
            
            this.game.load.image('hud1', 'assets/bluekey.png');
            this.game.load.image('hud2', 'assets/greenkey.png');
            this.game.load.image('hud3', 'assets/redkey.png');
            this.game.load.image('hud4', 'assets/yellowkey.png');
            
            this.game.load.spritesheet("tileSprites", "assets/super_mario.png", 72,72)
            
            //sounds
            this.load.audio("coin", "assets/smb_coin.wav");
            this.load.audio("jump", "assets/smb_jump-small.wav");
            this.load.audio("stomp", "assets/smb_stomp.wav");
            this.load.audio("bump", "assets/smb_bump.wav");
            this.load.audio("breakblock", "assets/smb_breakblock.wav");
            this.load.audio("fireball", "assets/smb_fireball.wav");
            this.load.audio("gameover", "assets/smb_gameover.wav");
            this.load.audio("ide", "assets/smb_mariodie.wav");
            this.load.audio("fireworks", "assets/smb_fireworks.wav");
            this.load.audio("theme", "assets/mariotheme.mp3");
  
	},
  	create: function(){
            this.game.state.start("GameTitle");
	}
};