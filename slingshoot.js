class Slingshoot {
    constructor (bodyA,bodyB){
        var options = {
            stiffness: 0.4,
            Length: 10,
            bodyA:bodyA,
            bodyB:bodyB
        }
    this.slingshoot=Matter.Constraint.create(options)
    World.add(world ,this.slingshoot)
    }
display(){
    var PointA = this.slingshoot.bodyA.position
    var PointB = this.slingshoot.bodyB.position 

    line(PointA.x,PointA.y,PointB.x,PointB.y)
}
}