import FallingObject from "./fallingObject";

export default class Watermelon extends FallingObject {
  image: HTMLImageElement = new Image();
  constructor(context: CanvasRenderingContext2D) {
    super(context);
    this.points = 20;
    this.image.src = "./assets/watermelon.png";
  }
}
