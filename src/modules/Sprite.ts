class Sprite {
  /** 表示する画像 */
  img: HTMLImageElement;

  /** 横方向の速度 */
  xSpeed: number;

  /** 縦方向の速度 */
  ySpeed: number;

  /** スプライトをずらす */
  shift: {
    x: number;
    y: number;
  };

  constructor(
    img: string,
    public width: number = 48, // 絵画サイズ幅
    public height: number = 48, // 絵画サイズ高さ
    public index: number = 0, // 左上から数えたタイルの番号
    public x: number = 0, // 初期絵画位置x
    public y: number = 0, // 初期絵画位置y
  ) {
    // 画像の初期化
    this.img = new Image();
    this.img.src = img;

    [this.xSpeed, this.ySpeed] = [0, 0];
    this.shift = { x: 0, y: 0 };
  }

  update(canvas: HTMLCanvasElement) {
    // レンダーを呼び出す
    this.render(canvas);
    // イベントハンドラを呼び出す
    this.eventHandler();

    // 移動する
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  render(canvas: HTMLCanvasElement) {
    if (
      this.x + this.shift.x < -1 * this.width ||
      this.x + this.shift.x > canvas.width ||
      this.y + this.shift.y < -1 * this.height ||
      this.y + this.shift.y > canvas.height
    ) {
      // キャンバスの外にオブジェクトがあるなら絵画しない
      return;
    }

    // コンテキストを取得
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

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
      this.x + this.shift.x,
      this.y + this.shift.y,
      this.width,
      this.height,
    );
  }

  eventHandler() {
    /* オーバーライドする */
  }
}

export default Sprite;
