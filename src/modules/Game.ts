import Sprite from "./Sprite";

class Game {
  canvas: HTMLCanvasElement;

  objs: Sprite[];

  constructor(width: number = 320, height: number = 600) {
    this.canvas = document.createElement("canvas");
    document.getElementById("root").appendChild(this.canvas);
    [this.canvas.width, this.canvas.height] = [width, height];

    this.objs = [];
  }

  resize(width: number = 320, height: number = 600) {
    [this.canvas.width, this.canvas.height] = [width, height];
  }

  start() {
    this.mainloop();
  }

  mainloop() {
    const ctx = this.canvas.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.objs.length; i++) {
      this.objs[i].update(this.canvas);
    }

    requestAnimationFrame(this.mainloop.bind(this));
  }

  add(obj: Sprite) {
    this.objs = this.objs.concat([obj]);
  }
}

export default Game;
