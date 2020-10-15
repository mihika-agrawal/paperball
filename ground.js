class Ground{

constructor(w,h){
var options={
  isStatic:true
}
  this.ground=Bodies.rectangle(800,680,w,h,options);
  World.add(world,this.ground);
  this.width=w;
  this.height=h;


}
display(){
  fill("yellow");
  rectMode(CENTER);
 var p= this.ground.position;
 rect(p.x,p.y,this.width,this.height);

}
}
