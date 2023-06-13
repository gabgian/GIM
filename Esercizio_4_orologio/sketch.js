let showTime = false;

let W = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  frameRate(60);
}

function draw() {
  background(0);
  noStroke();

  let h = hour();
  let m = minute();
  let s = second();

  var hourtime = hour();
  var mintime = minute();
  var sectime = second();

  var segmentWidth = width / 3;
  let segmentHeight_hour = height;
  let segmentHeight_minute = height;
  let segmentHeight_second = height;

  // Segmento 1
  var segment1X = 0;
  var segment1Y = 0;
  var segment1Gradient = drawingContext.createLinearGradient(segment1X, segment1Y, segment1X, segment1Y + segmentHeight_hour);
  segment1Gradient.addColorStop(0, color(hourtime * 15, 100, 100)); // Cambia ogni ora
  segment1Gradient.addColorStop(0.5, color((hourtime * 15 + 85) % 120, 100, 100)); // Cambia ogni ora
  segment1Gradient.addColorStop(1, color((hourtime * 15 + 120) % 50, 100, 100)); // Cambia ogni ora
  drawingContext.fillStyle = segment1Gradient;
  rect(segment1X, segment1Y, segmentWidth, segmentHeight_hour);

  // Segmento 2
  var segment2X = segmentWidth;
  var segment2Y = 0;
  var segment2Gradient = drawingContext.createLinearGradient(segment2X, segment2Y, segment2X, segment2Y + segmentHeight_minute);
  segment2Gradient.addColorStop(0, color((mintime * 6 + 120) % 360, 100, 100)); // Cambia ogni minuto
  segment2Gradient.addColorStop(0.5, color((mintime * 6 + 180) % 360, 100, 100)); // Cambia ogni minuto
  segment2Gradient.addColorStop(1, color((mintime * 6 + 240) % 360, 100, 100)); // Cambia ogni minuto
  drawingContext.fillStyle = segment2Gradient;
  rect(segment2X, segment2Y, segmentWidth, segmentHeight_minute);

  // Segmento 3
  var segment3X = segmentWidth * 2;
  var segment3Y = 0;
  var segment3Gradient = drawingContext.createLinearGradient(segment3X, segment3Y, segment3X, segment3Y + segmentHeight_second);
  segment3Gradient.addColorStop(0, color((sectime * 6 + 240) % 360, 100, 100)); // Cambia ogni secondo
  segment3Gradient.addColorStop(0.5, color((sectime * 6 + 360) % 360, 100, 100)); // Cambia ogni secondo
  segment3Gradient.addColorStop(1, color((sectime * 6 + 360) % 360, 100, 100)); // Cambia ogni secondo
  drawingContext.fillStyle = segment3Gradient;
  rect(segment3X, segment3Y, segmentWidth, segmentHeight_second);

  if (showTime) {
    // Mostra l'orario al centro della finestra

	if (h < 10) h = "0" + h;
  	if (m < 10) m = "0" + m;
  	if (s < 10) s = "0" + s;
    textSize(16);
    textAlign(CENTER, CENTER);

    // hour
    fill(255);
    text(h, segmentWidth / 2, height / 2);

    // min
    fill(255);
    text(m, segmentWidth + segmentWidth / 2, height / 2);

    // sec
    fill(255);
    text(s, segmentWidth * 2 + segmentWidth / 2, height / 2);

    if (h > 18 || h < 6) W = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  showTime = true;
}

function mouseReleased() {
  showTime = false;
}
