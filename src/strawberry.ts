import FallingObject from "./fallingObject";

export default class Strawberry extends FallingObject {
  image: HTMLImageElement = new Image();
  constructor(context: CanvasRenderingContext2D) {
    super(context);
    this.points = 30;
    this.image.src = "./assets/strawberry.png";
  }
}
