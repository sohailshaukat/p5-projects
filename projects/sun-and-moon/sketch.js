var circle1 = {
  y: 100,
  x : 600,
  diameter : 100,
  speed : 1
};
var circle2 = {
  x : 600,
  y : 100,
  diameter : 100,
  speed : 2
};
var canvasHeight = 400, canvasWidth = 800;

// DRAW MOON
function drawMoon(){
  fill(255,255,255);
  circle(circle1.x,circle1.y,circle1.diameter);
  circle1.y += circle1.speed;
  if(circle1.y > canvasHeight-100 && circle1.y < canvasHeight+99){
    circle(circle1.x,circle1.y-canvasHeight,circle1.diameter);
  }
  else if (circle1.y >= 499) {
    circle1.y = circle1.y-canvasHeight+circle1.speed;
  }
}
function drawSun(){
  console.log(circle2.x);
  fill('yellow');
  circle(circle2.x,circle2.y,circle2.diameter);
  circle2.x += circle2.speed;
  if(circle2.x > canvasWidth-100 && circle2.x < canvasWidth+99){
    circle(circle2.x-canvasWidth,circle2.y,circle2.diameter);
  }
  else if (circle2.x >= canvasWidth+circle2.diameter) {
    circle2.x = circle2.x-canvasWidth+circle2.speed;
  }
}

function setup() {
  // put setup code here
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  // put drawing code here
  background(51);

  // MOON
  drawMoon();

  // SUN
  drawSun();

  // HOUSE RECTANGLE
  fill(105);
  rect(100,300,100,50);
  triangle(150,250,100,300,200,300)


}
