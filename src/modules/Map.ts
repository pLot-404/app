export default class Map {
  img: HTMLImageElement;
  /** 絵画する画像 */

  x: number;
  /** 画像の座標 */

  y: number;
  /** 画像の座標 */

  data: number[][];
  /** マップデータの二次元配列 */

  constructor(img: string, public size: number = 48) {
    this.img = new Image();
    this.img.src = img;

    [this.x, this.y] = [0, 0];

    this.data = [];
  }

  update(canvas: HTMLCanvasElement) {
    this.render(canvas);
  }

  render(canvas: HTMLCanvasElement) {
    for (let i = 0; i < this.data.length; i++) {
      // タイルの絵画位置
      const y = this.y + this.size * i;
      // タイルの位置が画面の外なら飛ばす
      if (y < -1 * this.size || y > canvas.height) continue;

      for (let j = 0; j < this.data[i].length; j++) {
        const x = this.x + this.size * j;
        if (x < -1 * this.size || x > canvas.width) continue;

        const xIndex = this.data[i][j] % (this.img.width / this.size);
        const yIndex = Math.floor(this.data[i][j] / (this.img.width / this.size));

        const ctx = canvas.getContext('2d');

        ctx.drawImage(
          this.img,
          this.size * xIndex,
          this.size * yIndex,
          this.size,
          this.size,
          x,
          y,
          this.size,
          this.size,
        );
      }
    }
  }

  eventHandler() {
    /**
     * オーバーライドする
     */
  }
}
