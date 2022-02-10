import Map from './Map';
import Tile from './Tile';

class Scene {
  objs: Array<Map | Tile>;
  /** そのシーンに入っているオブジェクト一覧 */

  constructor() {
    this.objs = [];
  }

  add(obj: Sprite) {
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
