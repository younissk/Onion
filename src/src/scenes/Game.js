import Phaser from "phaser";
import Hero from "../entities/Hero.js";
import onion from "../entities/onion.js";
import Onion from "../entities/onion.js";

class Game extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    this.load.image(
      "bg",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-299mem-31meg-1607544523.jpg?crop=1.00xw:0.755xh;0,0.213xh&resize=1200:*"
    );

    this.load.image("onion", "assets/onion.png");

    this.load.image(
      "hero-run-sheet",
      "https://cdn.pixabay.com/photo/2020/05/01/15/45/mouse-5117776_1280.png"
    );
  }

  create(data) {
    let image = this.add.image(250, 160, "bg");
    image.scale = 0.6;

    this.score = 0;

    this.text = this.add.text(20, 20, "0");

    this.cursorKeys = this.input.keyboard.createCursorKeys();

    this.addHero();

    this.onionSpawner = this.time.addEvent({
      callback: this.spawnOnion,
      callbackScope: this,
      delay: 300,
      loop: true,
    });
  }

  addHero() {
    this.hero = new Hero(this, 150, 50);
  }

  update(time, delta) {
    this.text.text = `${this.score}`;
  }

  spawnOnion() {
    let random = Math.random();
    const onion = new Onion(this, 500 * random, 0);
    this.physics.add.collider(this.hero, onion);
    this.physics.add.overlap(this.hero, onion, () => {
      this.hero.destroy();
      this.onionSpawner.destroy();
      this.text.destroy();
      this.add.text(
        50,
        20,
        `YOU LOSE, try again, your score was ${this.score}`
      );
      setTimeout(() => this.scene.restart(), 2000);
    });

    this.score += 1;
    setTimeout(() => {
      onion.destroy();
    }, 2000);
  }
}

export default Game;
