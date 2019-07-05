var circleY = 50;

function setup() {
  // put setup code here
  createCanvas(600,440);
  background(51);
  frameRate(100);
}

function draw() {
  // put drawing code here2
  if(mouseX>600 || mouseY>440){
    background(51);
  }
  //ellipseMode(CENTER);
  rectMode(CENTER);

  // APPLE
  noStroke();
  fill(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),20);
  circle(mouseX, mouseY, 100);

  // LINES
  stroke(color(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),40));
  strokeWeight(1);
  var ymover = Math.floor((Math.random() * 600) +1 );
  var xmover = Math.floor((Math.random() * 600) +1 );
  line(0,100+ymover,500,500+ymover);
  line(100+xmover,0,600+xmover,400);

  // MOON
  fill(51);
  circle(400,circleY-1,50);
  fill(255,255,255);
  circle(400,circleY,50);
  

  // BODY
  stroke(0);
  strokeWeight(2)
  fill(0,0,0,155);
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
