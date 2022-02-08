class Sprite {
  img: HTMLImageElement;
  /*表示する画像 */

  constructor(
    img: string,
    public x: number = 0, // 初期絵画位置x
    public y: number = 0, // 初期絵画位置y
    public width: number = 40, // 絵画サイズ幅
    public height: number = 40, // 絵画サイズ高さ
    public index: number = 0 // 左上から数えたタイルの番号
  ) {
    // 画像の初期化
    this.img = new Image();
    this.img.src = img;
  }

  update(canvas: HTMLCanvasElement) {
    // レンダーを呼び出す
    this.render(canvas);
    // イベントハンドラを呼び出す
    this.eventHandler();
  }

  render(canvas: HTMLCanvasElement) {
    if (
      this.x < -1 * this.width ||
      this.x > canvas.width ||
      this.y < -1 * this.height ||
      this.y > canvas.height
    ) {
      // キャンバスの外にオブジェクトがあるなら絵画しない
      return;
    }

    // コンテキストを取得
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    // 絵画するタイルの縦横の番号を求める
    const xIndex = this.index % (this.img.width / this.width);
    const yIndex = Math.floor(this.index / (this.img.width / this.width));

    // 絵画する
    ctx.drawImage(
      this.img,
      this.width * xIndex,
      this.height * yIndex,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  eventHandler() {
    /* オーバーライドする */
  }
}

export default Sprite;
