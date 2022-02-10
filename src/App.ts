import Game from './modules/Game';
import Sprite from './modules/Sprite';
import Map from './modules/Map';
import Tile from './modules/Tile';
import Scene from './modules/Scene';
import './css/Style.scss';

// キーバインドをe.codeで定義
const codes = {
  up: ['KeyW', 'Numpad8', 'ArrowUp'], // w,テンキー8,↑
  down: ['KeyS', 'Numpad2', 'ArrowDown'], // s,テンキー2,↓
  right: ['KeyD', 'Numpad6', 'ArrowRight'], // d,テンキー6,→
  left: ['KeyA', 'Numpad4', 'ArrowLeft'], // a,テンキー4,←
  confirm: ['Enter', 'KeyZ'], // Enter,z
  discard: ['Escape', 'KeyX'], // Esc,x
};

// 移動速度の定義
const walkSpeed = 4;
// const runSpeed = 8;

const mapData = [
  [11,11,11,11,11,11,11,11,11,11],
  [11,10,10,10,10,10,10,10,10,11],
  [11, 4, 4, 4, 4, 4, 4, 4, 4,11],
  [11, 4,11, 4, 4,11,11,11, 4,11],
  [11, 4,11,11,11,11,10,10, 4,11],
  [11, 4,11,10,10,11, 4, 4, 4,11],
  [11, 4,11, 4, 4,11,11,11, 4,11],
  [11, 4, 9, 4, 4, 9,10,11, 4,11],
  [11, 4, 4, 4, 4, 4, 4,11, 4,11],
  [11,11,11,11,11,11,11,11,11,11]
];

window.addEventListener('load', () => {
  // 画面サイズの95%で初期化
  const game = new Game(window.innerWidth * 0.95, window.innerHeight * 0.95);

  // codesの全てのキーを呼び出し登録する
  for (const i in codes) {
    if (codes && Object.prototype.hasOwnProperty.call(codes, i)) {
      game.setKeyBind(i, codes[i]);
    }
  }

  // 画面サイズが変更されたらスクリーンサイズを変更
  window.addEventListener('resize', () => {
    game.resize(window.innerWidth * 0.95, window.innerHeight * 0.95);
  });

  // シーン生成
  const scene = new Scene();

  // タイルマップ生成
  const map = new Map('./img/school_A5.png');
  map.data = mapData;
  scene.add(map);

  // スプライト（タイル）生成・追加
  const school = new Tile('./img/schoolinside.png');

  scene.add(school);

  // イベントハンドラのオーバーライド
  scene.eventHandler = () => {
    if (game.keyMap.up.push) school.y -= walkSpeed;
    if (game.keyMap.down.push) school.y += walkSpeed;
    if (game.keyMap.right.push) school.x += walkSpeed;
    if (game.keyMap.left.push) school.x -= walkSpeed;
  };

  game.add(scene);

  // ゲームを開始する
  game.start();
});
