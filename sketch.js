const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

 var engine,world,body;
 var ground;
function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var qwerty = {
  isStatic: true
}
ground=Bodies.rectangle(200,390,400,20,qwerty);
World.add(world,ground);
console.log(body);

var abc = {
  restitution: 1
}
body=Bodies.circle(200,100,20,abc);
World.add(world,body);
}

function draw() {
  background(0); 
  Engine.update(engine); 
rectMode(CENTER);
rect(ground.position.x, ground.position.y, 400, 20);

ellipseMode(RADIUS);
ellipse(body.position.x, body.position.y, 20, 20);
}
