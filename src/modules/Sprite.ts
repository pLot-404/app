class Sprite {
  img: HTMLImageElement;

  constructor(
    img: string,
    public x: number = 0,
    public y: number = 0,
    public width: number = 40,
    public height: number = 40,
    public index: number = 0
  ) {
    this.img = new Image();
    this.img.src = img;
  }

  update(canvas: HTMLCanvasElement) {
    this.render(canvas);
  }

  render(canvas: HTMLCanvasElement) {
    if (
      this.x < -1 * this.width ||
      this.x > canvas.width ||
      this.y < -1 * this.height ||
      this.y > canvas.height
    ) {
      return;
    }
    const ctx = canvas.getContext("2d");

    const xIndex = this.index % (this.img.width / this.width);
    const yIndex = ~~(this.index / (this.img.width / this.width));
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
}

export default Sprite;
