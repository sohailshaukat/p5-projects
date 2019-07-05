var circleY = 50;
var canvasHeight=440,canvasWidth=600;
let extraCanvas;
var circle1 = {
  x : 400,
  y: 100,
  diameter : 80,
  speed : 1
};

function drawMoon(){
  noStroke();
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

function setup() {
  // put setup code here
  createCanvas(canvasWidth,canvasHeight);
  background(51);
  frameRate(100);
  extraCanvas = createGraphics(canvasWidth,canvasHeight);
  extraCanvas.clear();
}

function draw() {
  // put drawing code here2
  background(51);
  if(mouseX>600 || mouseY>440){

    extraCanvas.clear();
  }
  //ellipseMode(CENTER);
  rectMode(CENTER);

  // APPLE
  image(extraCanvas, 0, 0);
  extraCanvas.noStroke();
  extraCanvas.fill(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),20);
  extraCanvas.circle(mouseX, mouseY, 100);

  // LINES
  extraCanvas.stroke(color(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),40));
  extraCanvas.strokeWeight(1);
  var ymover = Math.floor((Math.random() * 600) +1 );
  var xmover = Math.floor((Math.random() * 600) +1 );
  extraCanvas.line(0,100+ymover,500,500+ymover);
  extraCanvas.line(100+xmover,0,600+xmover,400);

  // MOON
  extraCanvas.drawMoon();

  // BODY
  stroke(0);
  strokeWeight(2)
  fill(0,0,0,255);
  rect(240,145,20,100);

  // HEAD
  ellipse(240,115,60,60);

  // EYES
  fill(0,255,255);
  ellipse(221,115,16,32);
  ellipse(259,115,16,32);

  // LEGS
  stroke(0);
  line(230,195,220,205);
  line(250,195,260,205);
}

function mousePressed(){
  background(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1));
}
