function setup() {
  // put setup code here
  createCanvas(600,440);
  background(51);
}

function draw() {
  // put drawing code here2
  if(mouseX>600 || mouseY>440){
    background(51);
  }
  ellipseMode(CENTER);
  rectMode(CENTER);

  // APPLE
  noStroke();
  fill(255,0,0,50);
  circle(mouseX, mouseY, 20);


  // BODY
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
