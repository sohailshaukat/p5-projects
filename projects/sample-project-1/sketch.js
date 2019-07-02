function setup() {
  // put setup code here
  createCanvas(400,400);
  print('Setup function!');
}

function draw() {
  // put drawing code here
  background(200,0,0);
  circle(50,50,20);
  console.log(frameCount);
}
