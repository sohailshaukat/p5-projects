var circleY,circleX;
function setup() {
  // put setup code here
  createCanvas(800,400);
  circleY = 100;
  circleX = 600;
  frameRate(60);
}

function draw() {
  // put drawing code here
  background(51);

  // MOON
  fill(255,255,255);
  circle(circleX,circleY++,100);
  if(circleY >300 && circleY < 500){
    circle(600,-400+circleY,100);
  }
  else if (circleY == 500) {
    circleY = 100;

  }

  // HOUSE RECTANGLE
  fill(105);
  rect(100,300,100,50);
  triangle(150,250,100,300,200,300)
}
