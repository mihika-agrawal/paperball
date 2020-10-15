
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
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ground=new Ground(800,20);
  box1 = new Box(600,660,200,20);
  box2 =new Box(490,620,20,100);
  box3= new Box(710,620,20,100);
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

}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-20});
	}
}

