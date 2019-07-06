// OBJECTS

var board = {
  height : 400,
  width : 900,
  color : 0
};
var ball ={
  x : 50,
  y : 50,
  r : 50,
  color : 'red'
};
var bouncingBall ={
  x : 50,
  y : 50,
  r : 50,
  color : 'red',
  xspeed : 10,
  yspeed : 10,
  bounce : function (){
    if(bouncingBall.x > board.width || bouncingBall.x < bouncingBall.r ){
      bouncingBall.xspeed *= -1;
    }
    if(bouncingBall.y > board.height || bouncingBall.y < bouncingBall.r ){
      bouncingBall.yspeed *= -1;
    }
  }
};


// FUNCTIONS

function drawBulbs(){
  stroke(255);
  strokeWeight(2);
  for (var x = 25; x < mouseX; x+=50){
    for (var y = 25; y < board.width; y+=50){
      fill(random(255));
      circle(x,y,40);
    }
  }
}

function drawBouncingball(){
  fill(255,0,0);
  circle(bouncingBall.x,bouncingBall.y, bouncingBall.r);
  bouncingBall.x += bouncingBall.xspeed;
  bouncingBall.y += bouncingBall.yspeed;
  bouncingBall.bounce();
}
// MAIN

function setup() {
  // put setup code here
  createCanvas(board.width,board.height);
}

function draw() {
  background(board.color);
  ellipseMode(CENTER);
  drawBulbs();
  drawBouncingball();
  // put drawing code here
}
