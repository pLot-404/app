import Sprite from './Sprite';
import MultiEventListener from './MultiEventListener';

interface keyEvent {
  code: string[];
  push: boolean;
}

interface key {
  [index: string]: keyEvent;
}

class Game {
  public canvas: HTMLCanvasElement;

  public objs: Sprite[];

  public keyMap: key;

  constructor(width = 320, height = 600) {
    this.canvas = document.createElement('canvas');
    const root = document.getElementById('root');
    if (root) root.appendChild(this.canvas);
    [this.canvas.width, this.canvas.height] = [width, height];

    this.objs = [];

    this.keyMap = {};
  }

  resize(width = 320, height = 600) {
    [this.canvas.width, this.canvas.height] = [width, height];
  }

  start() {
    this.mainloop();

    MultiEventListener(window, 'keydown keyup', (e: Event) => {
      e.preventDefault();
      for (const i in this.keyMap) {
        if (this.keyMap && Object.prototype.hasOwnProperty.call(this.keyMap, i))
          switch (e.type) {
            case 'keydown':
              break;
            default:
              return;
          }
      }
    });
  }

  mainloop() {
    const ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.objs.length; i++) {
      this.objs[i].update(this.canvas);
    }

    requestAnimationFrame(this.mainloop.bind(this));
  }

  add(obj: Sprite) {
    this.objs = this.objs.concat([obj]);
  }

  setKeyBind(name: string, codes: string[]) {
    this.keyMap[name] = {
      code: codes,
      push: false,
    };
  }
}

export default Game;
