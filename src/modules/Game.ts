import Sprite from './Sprite';
import MultiEventListener from './MultiEventListener';

// keyMap用の型定義
interface key {
  [index: string]: {
    // 作用のエイリアス名
    code: string[]; // 作用を起こすキーのe.code一覧
    push: boolean; // キーのいずれかが押されているかの判定
  };
}

class Game {
  /*
ゲームエンジン全体の制御

canvas : ゲームを表示するキャンバス
objs: ゲームで表示するスプライト一覧
keyMap: キーボードと動作の対応
*/

  public canvas: HTMLCanvasElement;
  /* ゲームを表示するキャンバス */

  public objs: Sprite[];
  /* ゲームで表示するスプライト一覧 */

  public keyMap: key;
  /* キーボードと動作の対応 */

  constructor(width = 320, height = 600) {
    // キャンバスの生成とrootへの追加
    this.canvas = document.createElement('canvas');
    const root = document.getElementById('root');
    if (root) root.appendChild(this.canvas);

    // 大きさを設定
    [this.canvas.width, this.canvas.height] = [width, height];

    // スプライトの初期化
    this.objs = [];

    // キーマップの初期化
    this.keyMap = {};
  }

  resize(width = 320, height = 600) {
    // 大きさを設定
    [this.canvas.width, this.canvas.height] = [width, height];
  }

  start() {
    // メインループ
    this.mainloop();

    // キーが押される・離されるときにkeyMapのフラグを変化
    MultiEventListener(window, 'keydown keyup', (e: KeyboardEvent): void => {
      e.preventDefault();
      for (const i in this.keyMap) {
        if (this.keyMap && Object.prototype.hasOwnProperty.call(this.keyMap, i))
          switch (e.type) {
            case 'keydown':
              if (this.keyMap[i].code.indexOf(e.code) !== -1) {
                this.keyMap[i].push = true;
              }
              break;
            case 'keyup':
              if (this.keyMap[i].code.indexOf(e.code) !== -1) {
                this.keyMap[i].push = false;
              }
              break;

            default:
              return;
          }
      }
    });
  }

  mainloop() {
    // コンテキストを取得して塗りつぶす
    const ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // すべてのオブジェクトを再絵画
    for (let i = 0; i < this.objs.length; i++) {
      this.objs[i].update(this.canvas);
    }

    // ループ
    requestAnimationFrame(this.mainloop.bind(this));
  }

  add(obj: Sprite) {
    // スプライトを追加
    this.objs = this.objs.concat([obj]);
  }

  setKeyBind(name: string, codes: string[]) {
    // キーマップを登録
    this.keyMap[name] = {
      code: codes,
      push: false,
    };
  }
}

export default Game;
