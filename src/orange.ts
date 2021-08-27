import FallingObject from "./fallingObject";

export default class Orange extends FallingObject {
  image: HTMLImageElement = new Image();
  constructor(context: CanvasRenderingContext2D) {
    super(context);
    this.points = 5;
    this.image.src = "./assets/orange.png";
  }
}
