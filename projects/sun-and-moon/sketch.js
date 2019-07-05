var canvasHeight = 400, canvasWidth = 800;
let extraCanvas;
var circle1 = {
  x : 100,
  y: 100,
  diameter : 100,
  speed : 1
};
var circle2 = {
  x : 100,
  y : 100,
  diameter : 100,
  speed : 2
};

// DRAW MOON
function drawMoon(){
  fill(255,255,255);
  circle(circle1.x,circle1.y,circle1.diameter);
  circle1.y += circle1.speed;
  if(circle1.y > canvasHeight-50 && circle1.y < canvasHeight+99){
    circle(circle1.x,circle1.y-canvasHeight,circle1.diameter);
  }
  else if (circle1.y >= 499) {
    circle1.y = circle1.y-canvasHeight+circle1.speed;
  }
}
function drawSun(){
  fill(255,220,0,100);
  circle(circle2.x,circle2.y,circle2.diameter);
  circle2.x += circle2.speed;
  if(circle2.x > canvasWidth-100 && circle2.x < canvasWidth+99){
    circle(circle2.x-canvasWidth,circle2.y,circle2.diameter);
  }
  else if (circle2.x >= canvasWidth+circle2.diameter) {
    circle2.x = circle2.x-canvasWidth+circle2.speed;
  }

}

// Draw STARS
function drawStars(){
  extraCanvas.strokeWeight(2);
  extraCanvas.stroke(255);
  extraCanvas.point(random(0,canvasWidth),random(0,canvasHeight))
  strokeWeight(0);
  extraCanvas.noStroke();
}


function setup() {
  // put setup code here
  createCanvas(canvasWidth, canvasHeight);
  extraCanvas = createGraphics(canvasWidth, canvasHeight);
  extraCanvas.clear();
  noStroke();
}

function draw() {
  // put drawing code here
  background('#000033');
  stroke(255);

  // STARS
  image(extraCanvas,0,0);
  drawStars();

  // MOON
  drawMoon();

  // SUN
  drawSun();

  // HOUSE RECTANGLE
  var houseR = map(circle1.y,0,canvasHeight,51,200);
  var houseG = map(circle2.x,0,canvasWidth,200,100);
  fill(houseR,houseG,255-houseG);
  rect(50,300,100,50);
  triangle(100,250,50,300,150,300);

}
