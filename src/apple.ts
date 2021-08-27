import FallingObject from "./fallingObject";

export default class Apple extends FallingObject{
    image: HTMLImageElement = new Image()
    constructor(context: CanvasRenderingContext2D){
        super(context)
        this.points = 10
        this.image.src = "./assets/red-apple.png"
    }
}