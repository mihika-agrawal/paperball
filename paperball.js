class Ball{
 constructor(){
var options={
    isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
this.body=Matter.Bodies.circle(100,650,30,options);
World.add(world,this.body);
this.radius=30;

}
display(){
fill("purple");
 var p=this.body.position;
ellipseMode(CENTER)
ellipse(p.x,p.y,this.radius*2);




}





 }










