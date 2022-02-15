import Sprite from './Sprite';

export default class Tile extends Sprite {
  /** マップと同期して動かすフラグ */
  sync: boolean;

  constructor(img: string, public size: number = 48, public index: number = 0) {
    super(img, size, size, index);

    this.sync = true;
  }
}
