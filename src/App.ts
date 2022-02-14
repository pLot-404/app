import Game from './modules/Game';
import Map from './modules/Map';
import Tile from './modules/Tile';
import Scene from './modules/Scene';
import './css/Style.scss';
import mapData from './data/map.json';

// キーバインドをe.codeで定義
const codes = {
  up: ['KeyW', 'Numpad8', 'ArrowUp'], // w,テンキー8,↑
  down: ['KeyS', 'Numpad2', 'ArrowDown'], // s,テンキー2,↓
  right: ['KeyD', 'Numpad6', 'ArrowRight'], // d,テンキー6,→
  left: ['KeyA', 'Numpad4', 'ArrowLeft'], // a,テンキー4,←
  confirm: ['Enter', 'KeyZ'], // Enter,z
  discard: ['Escape', 'KeyX'], // Esc,x
};

// タイルサイズの定義
const tileSize = 48;

// 移動速度の定義
const walkSpeed = 6;
const runSpeed = 16;

const floorData = mapData.floor;
const objectData = mapData.object;

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
  const floor = new Map('./img/school.png');
  floor.data = floorData;
  floor.x = tileSize * (Math.floor(game.canvas.width / tileSize) / 2 - 1) - tileSize / 2;
  floor.y = tileSize * (Math.floor(game.canvas.height / tileSize) / 2 - 2) - tileSize / 2;
  scene.add(floor);

  const objects = new Map('./img/schoolD.png', './img/school.png');
  objects.data = objectData;
  objects.x = tileSize * (Math.floor(game.canvas.width / tileSize) / 2 - 1) - tileSize / 2;
  objects.y = tileSize * (Math.floor(game.canvas.height / tileSize) / 2 - 2) - tileSize / 2;
  scene.add(objects);

  // スプライト（タイル）生成・追加
  const kanzaki = new Tile('./img/kanzaki1.png');
  [kanzaki.x, kanzaki.y] = [
    (tileSize * Math.floor(game.canvas.width / tileSize)) / 2 - tileSize / 2,
    (tileSize * Math.floor(game.canvas.height / tileSize)) / 2 - tileSize / 2,
  ];

  objects.add(kanzaki);

  // イベントハンドラのオーバーライド
  scene.eventHandler = () => {
    if (
      (objects.x - tileSize / 2) % tileSize === 0 &&
      (objects.y - tileSize / 2) % tileSize === 0
    ) {
      [floor.xSpeed, floor.ySpeed, objects.xSpeed, objects.ySpeed] = [0, 0, 0, 0];
      // マップの移動（シフトキーが押されていたら走る）
      if (game.keyMap.up.push) {
        floor.ySpeed += game.shift ? runSpeed : walkSpeed;
        objects.ySpeed += game.shift ? runSpeed : walkSpeed;
      }
      if (game.keyMap.down.push) {
        floor.ySpeed -= game.shift ? runSpeed : walkSpeed;
        objects.ySpeed -= game.shift ? runSpeed : walkSpeed;
      }
      if (game.keyMap.right.push) {
        floor.xSpeed -= game.shift ? runSpeed : walkSpeed;
        objects.xSpeed -= game.shift ? runSpeed : walkSpeed;
      }
      if (game.keyMap.left.push) {
        floor.xSpeed += game.shift ? runSpeed : walkSpeed;
        objects.xSpeed += game.shift ? runSpeed : walkSpeed;
      }
    }
  };

  game.add(scene);

  // ゲームを開始する
  game.start();
});
