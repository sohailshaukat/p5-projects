var board = {
  width : 960,
  height : 540,
  color : 51
};


function drawStick(x,y,len){
  fill(200);
  noStroke();
  rect(x-5,y,10,len);
}

function drawLicky(x,y,max_r,min_r){
  for(var i = max_r ; i > min_r; i-= 10 ){
    fill(random(255),random(255),random(255));
    circle(x,y,i);
  }
}

function drawLollipop(x,y,len,max_r,min_r){
  drawStick(x,y,len);
  drawLicky(x,y,max_r,min_r);
}

function setup() {
  // put setup code here
  createCanvas(board.width,board.height);
  frameRate(10);
}

function draw() {
  // put drawing code here
  var lollipop = {
    x : 60,
    y : 100,
    max_r : 150,
    min_r : 20,
    len : 150
  };
  background(board.color);
  var row =0;
  var face = 1;
  while(row<500){
    for(var column=0; column < board.width; column+=(120) ){
      drawLollipop(lollipop.x+column,lollipop.y+row,(random(lollipop.len)*face),lollipop.max_r+random(50),lollipop.min_r);
        face *= -1
    }
    row+=250;
  }

}
