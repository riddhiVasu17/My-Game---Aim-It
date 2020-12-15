class Dart extends BaseClass {
    constructor(x,y){
      super(x,y,100,80);
      this.image = loadImage("Design/dart.png");


    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();

    }

  }