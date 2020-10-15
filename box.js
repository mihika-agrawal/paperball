class Box{

    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.width=w;
        this.height=h;
    }
display(){
    fill("white");
    var p=this.body.position;
    rectMode(CENTER);
    rect(p.x,p.y,this.width,this.height);

}














}