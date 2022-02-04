import Sprite from "./Sprite";

interface keyEvent {
  keyCode: number[];
  push: boolean;
}

interface key {
  [index: string]: keyEvent;
}

class Game {
  public canvas: HTMLCanvasElement;

  public objs: Sprite[];

  public keyMap: key;

  constructor(width: number = 320, height: number = 600) {
    this.canvas = document.createElement("canvas");
    const root = document.getElementById("root");
    if (root) root.appendChild(this.canvas);
    [this.canvas.width, this.canvas.height] = [width, height];

    this.objs = [];

    this.keyMap = {};
  }

  resize(width: number = 320, height: number = 600) {
    [this.canvas.width, this.canvas.height] = [width, height];
  }

  start() {
    this.mainloop();

    const eventListener = (e) => {
      e.preventDefault();
      for(const i in this.keyMap){
        switch(e.type){
          case "keydown":
            
        }
      }
    };
  }

  mainloop() {
    const ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
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

  setKeyBind(name: string, code: number[]) {
    this.keyMap[name] = {
      keyCode: code,
      push: false,
    };
  }
}

export default Game;
