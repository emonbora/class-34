class Ball{
    constructor(x,y,r) {
      var options = {
          isStatic : false,
          density  : 1,
          frictionAir : 0.01
      }
     this.body = Bodies.circle(x,y,r,options)
     this.x = x
     this.y = y
     this.r = r 
     World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill("brown")
        ellipse(pos.x,pos.y,this.r,this.r)
      }
}