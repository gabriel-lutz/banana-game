import FallingObject from "./fallingObject";

export default class Bomb extends FallingObject{
    theBomb: boolean = true
    image: HTMLImageElement = new Image()
    constructor(context: CanvasRenderingContext2D){
        super(context)
        this.image.src = "./assets/bomb.png"
    }
    
}