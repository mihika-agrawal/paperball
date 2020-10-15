
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2,box3;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ground=new Ground(1600,20);
  box1 = new Box(1400,660,200,20);
  box2 =new Box(1290,620,20,100);
  box3= new Box(1510,620,20,100);
  ball=new Ball();
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
keyPressed();
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-20});
	}
}

