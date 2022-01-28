class Sprite {
  img: HTMLImageElement;

  x: number;

  y: number;

  constructor(img: string) {
    this.img = new Image();
    this.img.src = img;
    [this.x, this.y] = [0, 0];
  }

  update(ctx: CanvasRenderingContext2D) {
    console.log('update')
    this.render(ctx);
  }

  render(ctx: CanvasRenderingContext2D) {
    this.img.onload = () => {
    console.log('loaded!');
    ctx.drawImage(this.img, this.x, this.y);
    }
  }
}

export default Sprite;
