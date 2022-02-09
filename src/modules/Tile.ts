import Sprite from "./Sprite";

export default class Tile extends Sprite {
  constructor(img, public size: number = 40) {
    super(img,size,size);
  }
}
