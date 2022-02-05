import Game from './modules/Game';
import Sprite from './modules/Sprite';
import './css/Style.scss';

const codes = {
  up: ["KeyW", "Numpad8", "ArrowUp"], // w,テンキー8,↑
  down: ["KeyS", "Numpad2", "ArrowDown"], // s,テンキー2,↓
  right: ["KeyD", "Numpad6", "ArrowRight"], // d,テンキー6,→
  left: ["KeyA", "Numpad4", "ArrowLeft"], // a,テンキー4,←
  confirm: ["Enter", "KeyZ"], // Enter,z
  discard: ["Escape", "KeyX"], // Esc,x
};

window.addEventListener('load', () => {
  const game = new Game(window.innerWidth * 0.95, window.innerHeight * 0.95);
  for (const i in codes) {
    if (codes && Object.prototype.hasOwnProperty.call(codes, i)) {
      game.setKeyBind(i, codes[i]);
    }
  }

  window.addEventListener('resize', () => {
    game.resize(window.innerWidth * 0.95, window.innerHeight * 0.95);
  });

  const school = new Sprite('./img/school_A5.png');
  game.add(school);

  game.start();
});
