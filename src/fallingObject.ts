export default class FallingObject{
    context: CanvasRenderingContext2D;
    x: number;
    y: number;
    speedX:number = 1;
    speedY:number = 1;
    image: HTMLImageElement;
    points: number;
    theBomb: boolean = false
    theBanana: boolean = false

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
    this.x = Math.floor(Math.random() * 325) ;
    this.y = 10;
  }
  
  move() {
    
    this.y *= 1.01;
  }

  draw() {
    this.context.beginPath();
    this.context.drawImage(this.image,this.x, this.y, 50, 50);
    this.context.fill();
  }
}