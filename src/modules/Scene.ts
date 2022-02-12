import Map from './Map';
import Sprite from './Sprite';
import Tile from './Tile';

class Scene {
  objs: Array<Sprite | Map | Tile>;
  /** そのシーンに入っているオブジェクト一覧 */

  constructor() {
    this.objs = [];
  }

  add(obj: Sprite | Map | Tile) {
    this.objs = this.objs.concat([obj]);
  }

  update() {
    this.eventHandler();
  }

  eventHandler() {
    /**
     * オーバーライドする
     */
  }
}

export default Scene;
