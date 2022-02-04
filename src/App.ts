import Game from './modules/Game';
import Sprite from './modules/Sprite';
import './css/Style.scss';

const keys = {
  up: [87, 104, 38], // w,テンキー8,↑
  down: [83, 98, 40], // s,テンキー2,↓
  right: [68, 102, 39], // d,テンキー6,→
  left: [65, 100, 37], // a,テンキー4,←
  confirm: [13, 90], // Enter,z
  discard: [27, 88], // Esc,x
};

window.addEventListener('load', () => {
  const game = new Game(window.innerWidth * 0.95, window.innerHeight * 0.95);
  for (const i in keys) {
    if (keys && Object.prototype.hasOwnProperty.call(keys, i)) {
      game.setKeyBind(i, keys[i]);
    }
  }

  window.addEventListener('resize', () => {
    game.resize(window.innerWidth * 0.95, window.innerHeight * 0.95);
  });

  const school = new Sprite('./img/school_A5.png');
  game.add(school);

  game.start();
});
