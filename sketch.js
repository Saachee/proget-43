

function setup() {
  createCanvas(720, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();
 scAngle = map(sc,0,60,0,360);
 mnAngle = map(mn,0,60,0,360);
 hrAngle = map(hr%12,0,12,0,360);
// drawing the seconds hand;
  push();
  rotate(scAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,100,0);
  pop();
// drawing the minute hand;
push();
rotate(mnAngle);
stroke("yellow");
strokeWeight(7);
line(0,0,75,0);
pop();
//drawing the hour hand;
push();
rotate(hrAngle);
stroke("yellow");
strokeWeight(7);
line(0,0,50,0);
pop();

// drawing the arc
strokeWeight(10);
noFill();
// seconds
stroke("yellow");
arc(0,0,300,300,0,scAngle);
// hours
stroke("orange");
arc(0,0,260,260,0,hrAngle);
// minute
stroke("red");
arc(0,0,280,280,0,mnAngle);
  /*let c = map(mouseX, 0, width, 0, 175);
  
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);*/
}
