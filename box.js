class Box{

    constructor(x,y,width,height) {
var options ={

isStatic:true


}
 
this.body = Bodies.rectangle (x,y,width,height,options);
this.width
this.height
World.add(world,this.body);
}

display() {

var pos = this.body.position;
rectMODE(CENTER);
push();
fill("red");
rect(pos.x,pos.y,this.width,this.height);
pop();





}


}