import Game from "./modules/Game";
import Sprite from "./modules/Sprite";

window.addEventListener("load", () => {
  const game = new Game(window.innerWidth, window.innerHeight);

  window.addEventListener("resize", () => {
    game.resize(window.innerWidth, window.innerHeight);
  });

  const school = new Sprite("./img/school_A5.png");
  game.add(school);

  game.start();
});
