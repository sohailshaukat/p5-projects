var board = {
  width : 400,
  height : 60,
};
var ball = {
  x: 300,
  y: 30,
  radius : 50,
  speed : 8,
  color : 'brown',
  swing : 3
};
var goku = {
  x : 0,
  y : 0,
  shake : 3
}


function drawBall(){
  fill(ball.color);
  strokeWeight(0);
  var shake = random(-1*ball.swing,ball.swing);
  circle(ball.x,ball.y+shake,ball.radius);
  ball.x += ball.speed
  if (ball.x > board.width || ball.x < 100){
    ball.speed *= -1;
  }
}
function drawGoku(){
  var shake = random((-1)*goku.shake,goku.shake);
  if(ball.x > 150){
    image(goku1,goku.x,goku.y+shake);
  }
  else if (ball.x>120&& ball.x<=150) {
    image(goku2,goku.x,goku.y+shake);
  }
  else {
    image(goku3,goku.x,goku.y+shake);
  }

}

function setup() {
  // put setup code here
  createCanvas(board.width,board.height);
  goku1 = loadImage('goku-1.png');
  goku2 = loadImage('goku-2.png');
  goku3 = loadImage('goku-3.png');
  frameRate(100);
}

function draw() {
  // put drawing code here
  background(0,70,134);
  drawBall();
  drawGoku();
}
