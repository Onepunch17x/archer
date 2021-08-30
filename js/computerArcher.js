class bow2 {
    constructor(x,y,width,height){

        var options={
            isStatic:true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body)

        this.width=width
        this.height=height
        this.image=loadImage("assets/computerArcher.png")




    }
    display(){

        if (keyIsDown(DOWN_ARROW) && angle < 5.2) {
            angle += -0.01;
            Matter.Body.setAngle(this.body, angle);
          }
      
          if (keyIsDown(UP_ARROW) && angle > 5.9) {
            angle -= -0.01;
            Matter.Body.setAngle(this.body, angle);
          }

        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        Matter.Body.setAngle(this.body,-PI/-2);
        pop();
    }
}