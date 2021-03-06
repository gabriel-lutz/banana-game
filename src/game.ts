import FallingObject from "./fallingObject";
import Player from "./player";
import Watermelon from "./watermelon";
import Banana from "./banana";
import Orange from "./orange";
import Apple from "./apple";
import Strawberry from "./strawberry";
import Bomb from "./bomb";

export default class Game {
  canvas: HTMLCanvasElement;
  screenWidth: number = 375;
  screenHeight: number;
  context: CanvasRenderingContext2D;
  player: Player;
  fallingObjects: FallingObject[];
  score: number = 0;
  lifes: number = 4;
  gameIntervalId: NodeJS.Timer;
  scoreElement: HTMLElement = document.querySelector(".score");
  lifeImgElements = document.querySelectorAll(".full");
  gameOverElement: HTMLElement = document.querySelector(".gameOver");

  constructor(screenHeight: number, canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.screenHeight = screenHeight;
    this.context = canvas.getContext("2d");
  }

  start() {
    this.fallingObjects = [];
    this.lifeImgElements.forEach((element) =>
      element.setAttribute("src", "./assets/heart.png")
    );
    this.lifes = 4;
    this.score = 0;
    this.scoreElement.innerHTML = `<p> Score: ${this.score} <p>`
    this.gameOverElement.setAttribute("class", "gameOver hide");
    this.player = new Player(this.context, this.screenWidth, this.screenHeight);
    this.clearIntervals();
    this.gameIntervalId = setInterval(() => this.gameLoop(), 1000 / 60);
  }

  clearIntervals() {
    clearInterval(this.gameIntervalId);
  }

  gameLoop() {
    if (Math.random() >= 0.99) {
      this.fallingObjects.push(this.generateNewObject());
    }
    if (Math.random() >= 0.997) {
      this.fallingObjects.push(new Bomb(this.context));
    }
    this.checkIfHealthIsAboveZero();
    this.updateState();
    this.renderGame();
  }

  checkIfHealthIsAboveZero() {
    if (this.lifes <= 0) {
      this.endGame();
    }
  }

  generateNewObject() {
    const randomPercentage = Math.random();
    if (randomPercentage < 0.3) {
      return new Orange(this.context);
    } else if (randomPercentage < 0.6) {
      return new Apple(this.context);
    } else if (randomPercentage < 0.8) {
      return new Watermelon(this.context);
    } else if (randomPercentage < 0.95) {
      return new Strawberry(this.context);
    } else {
      return new Banana(this.context);
    }
  }

  updateState() {
    this.fallingObjects.forEach((fallingObject) => {
      fallingObject.move();
      if (this.player.checkCollision(fallingObject)) {
        if (fallingObject.theBanana) {
          this.removeFallingObject(fallingObject);
          this.score *= 2;
          return (this.scoreElement.innerHTML = `<p> Score: ${this.score} <p>`);
        } else if (fallingObject.theBomb) {
          this.removeFallingObject(fallingObject);
          return this.endGame();
        } else {
          this.removeFallingObject(fallingObject);
          this.score += fallingObject.points;
          return (this.scoreElement.innerHTML = `<p> Score: ${this.score} <p>`);
        }
      }
      this.removeOnGroundCollision(fallingObject);
    });
  }

  removeOnGroundCollision(fallingObject: FallingObject) {
    if (this.checkGroundCollision(fallingObject)) {
      if (!fallingObject.theBomb) {
        this.lifeImgElements[this.lifes - 1].setAttribute(
          "src",
          "./assets/heart-empty.png"
        );
        this.lifes--;
      }
      this.removeFallingObject(fallingObject);
    }
  }

  checkGroundCollision(fallingObject: FallingObject) {
    if (fallingObject.y + 50 > this.screenHeight) {
      return true;
    } else {
      return false;
    }
  }

  removeFallingObject(objectToRemove: FallingObject) {
    this.fallingObjects = this.fallingObjects.filter((fallingObject) => {
      if (fallingObject === objectToRemove) {
        return false;
      } else {
        return true;
      }
    });
  }

  endGame() {
    this.clearIntervals();
    this.gameOverElement.setAttribute("class", "gameOver");
    console.log("fim de jogo");
  }

  renderGame() {
    this.clearScreen();
    const image = new Image();
    image.src = "./assets/moon.png";
    this.context.beginPath();
    this.context.drawImage(
      image,
      -400,
      this.screenHeight < 900 ? -100 : 0,
      1200,
      this.screenHeight < 900 ? 900 : this.screenHeight
    );
    this.context.fill();
    this.fallingObjects.forEach((fallingObject) => fallingObject.draw());
    this.player.draw();
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
