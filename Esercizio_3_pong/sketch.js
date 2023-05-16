let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(235);
}

function draw() {
  background(235); // Crea una "scia" lasciata dalle palle con un basso alpha per un effetto di dissolvenza
  for (let ball of balls) {
    ball.update();
    ball.draw();
  }
}

function mousePressed() {
  balls.push(new Ball(mouseX, mouseY, random(60,60), color(random(200, 255), random(200, 255), random(200, 255))));
  if (balls.length > 60) {
    balls.shift(); // Rimuove la palla più vecchia se ce ne sono più di 60 in gioco
  }
}

class Ball {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.velX = random(-10, 10); // Valori casuali per la direzione sull'asse X
    this.velY = random(-10, 10); // Valori casuali per la direzione sull'asse Y
  }

  update() {
    this.x += this.velX;
    this.y += this.velY;
    if (this.x + this.size / 2 > width || this.x - this.size / 2 < 0) {
      this.velX = -this.velX;
    }
    if (this.y + this.size / 2 > height || this.y - this.size / 2 < 0) {
      this.velY = -this.velY;
    }
  }

  draw() {
    noStroke();
    fill(random(200, 255), random(200, 255), random(200, 255));
    ellipse(this.x, this.y, this.size);
  }
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}