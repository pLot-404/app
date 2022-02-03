import Game from "./modules/Game";
import Sprite from "./modules/Sprite";
import './css/style.module.scss';

window.addEventListener("load", () => {
  const game = new Game(window.innerWidth * 0.95, window.innerHeight * 0.95);

  window.addEventListener("resize", () => {
    game.resize(window.innerWidth * 0.95, window.innerHeight * 0.95);
  });

  const school = new Sprite("./img/school_A5.png");
  game.add(school);

  game.start();
});
