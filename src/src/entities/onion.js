import Phaser from "phaser";

class onion extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "onion", 0);

    this.r = 0;

    const random = Math.random();

    this.scale = 0.1 * random;

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.body.setCircle(this.width / 2, 0, this.height / 8);

    // this.body.setCollideWorldBounds(true)
    // this.body.setSize(12, 40)
    // this.body.setOffset(12, 23)
    // this.body.setMaxVelocity(300, 400)
    // this.body.setDragX(400)
  }

  preUpdate() {
    this.setRotation(this.r);
    this.r += 0.1;
  }
}

export default onion;
