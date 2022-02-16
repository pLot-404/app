import Tile from './Tile';

export default class CharaTile extends Tile {
  /** キャラクターの向き
   * 0:正面
   * 1:後ろ
   * 2:左
   * 3:右
   */
  direction: 0 | 1 | 2 | 3;

  /** キャラクターのアニメーション
   * 1/2:歩いている
   * 0:止まっている
   */
  animation: 0 | 1 | 2;

  constructor(img: string, size = 48) {
    super(img, size);
    this.direction = 0;
    this.animation = 0;
  }

  render(canvas: HTMLCanvasElement): void {
    if (
      this.x + this.shift.x < -1 * this.width ||
      this.x + this.shift.x > canvas.width ||
      this.y + this.shift.y < -1 * this.height ||
      this.y + this.shift.y > canvas.height
    ) {
      // キャンバスの外にオブジェクトがあるなら絵画しない
      return;
    }

    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      this.img,
      this.size * this.animation,
      this.size * this.direction,
      this.size,
      this.size,
      this.x + this.shift.x,
      this.y + this.shift.y,
      this.size,
      this.size,
    );
  }
}
