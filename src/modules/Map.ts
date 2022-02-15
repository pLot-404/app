import Tile from './Tile';

export default class Map {
  /** 絵画する画像 */
  img: HTMLImageElement;

  /** 代わりの画像 */
  altImg: HTMLImageElement | null;

  /** 画像の座標 */
  x: number;

  /** 画像の座標 */
  y: number;

  /** マップデータの二次元配列 */
  data: number[][];

  /** マップ上のタイル */
  tiles: Tile[];

  /** 横方向の速度 */
  xSpeed: number;

  /** 縦方向の速度 */
  ySpeed: number;

  /** 壁判定 */
  wall: number[];

  constructor(img: string, altImg?: string, public size: number = 48) {
    this.img = new Image();
    this.img.src = img;

    if (altImg) {
      this.altImg = new Image();
      this.altImg.src = altImg;
    }

    [this.x, this.y, this.xSpeed, this.ySpeed] = [0, 0, 0, 0];

    this.data = [];
    this.tiles = [];
    this.wall = [];
  }

  update(canvas: HTMLCanvasElement) {
    this.render(canvas);

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    for (let i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i].sync) this.tiles[i].shift = { x: this.x, y: this.y };
      this.tiles[i].update(canvas);

      this.tiles[i].map = {
        x: this.tiles[i].sync
          ? this.tiles[i].x / this.size
          : (this.tiles[i].x - this.x) / this.size,
        y: this.tiles[i].sync
          ? this.tiles[i].y / this.size
          : (this.tiles[i].y - this.y) / this.size,
      };
    }
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

        if (this.altImg) {
          if (this.size * xIndex > this.img.width || this.size * yIndex > this.img.height) {
            ctx.drawImage(
              this.altImg,
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
    }
  }

  isWall(x: number, y: number) {
    const cantThrough = this.wall.some((i) => i === this.data[y][x]);
    return cantThrough;
  }

  add(tile: Tile) {
    // eslint-disable-next-line no-param-reassign
    tile.map = {
      x: tile.sync ? tile.x / this.size : (tile.x - this.x) / this.size,
      y: tile.sync ? tile.y / this.size : (tile.y - this.y) / this.size,
    };
    this.tiles = this.tiles.concat([tile]);
  }

  eventHandler() {
    /**
     * オーバーライドする
     */
  }
}
