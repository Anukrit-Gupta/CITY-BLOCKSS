class Ball extends BaseClass {
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.image = loadImage("block.gif")
  }

  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
}
