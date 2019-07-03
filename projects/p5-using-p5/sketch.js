function setup() {
  // put setup code here
  createCanvas(400,400);
  print('Setup function!');
}

function draw() {
  // put drawing code here
  background(200,0,0);
  var i;
  for(i=50;i<150;i+=10){
  circle(i,50,20);
  }
  for(i=50;i<300;i+=10){
  circle(50,i,20);
  }
  for(i=50;i<150;i+=10){
  circle(150,i,20);
  }
  for(i=50;i<150;i+=10){
  circle(i,150,20);
  }
  for(i=100;i<175;i+=10){
  circle(i,200,20);
  }
  for(i=200;i<270;i+=10){
  circle(100,i,20);
  }
  for(i=100;i<175;i+=10){
  circle(i,270,20);
  }
  for(i=270;i<340;i+=10){
  circle(175,i,20);
  }
  for(i=100;i<175;i+=10){
  circle(i,340,20);
  }
  console.log(frameCount);
}
