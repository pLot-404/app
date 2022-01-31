class Sprite {
  img: HTMLImageElement;

  x: number;

  y: number;

  constructor(img: string) {
    this.img = new Image();
    img.onload = () => {
      [this.x, this.y] = [0, 0];
    }
    this.img.src = img;
  }

  update(ctx: CanvasRenderingContext2D) {
    this.render(ctx);
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.img, this.x, this.y);
  }
}

export default Sprite;
