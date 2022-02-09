import Sprite from './Sprite';

class Scene {
  objs: Sprite[];
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
