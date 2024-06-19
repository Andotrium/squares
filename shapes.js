
class Block {
    constructor(x, y) {
      this.x = x; 
      this.y = y;
      this.angle = 0;
      this.c = 70;
      this.a = 0;
      this.b = 0;
      this.c = 0;
    }
    
    display(){
      noFill();
      stroke(this.a,this.b,this.c)
      push();
      translate(this.x,this.y);
      rotate(this.angle);
      rect(0,0,size-offset,size-offset);
      pop()
    }
    move(){
      let distance = dist(mouseX,mouseY,this.x,this.y);
      let moving = dist(pmouseX,pmouseY,mouseX,mouseY);
      if( distance<distMouse&&moving>0){
        this.angle+=1;
        this.a = Math.floor(Math.random()*255);
        this.b = Math.floor(Math.random()*255);
        this.c = Math.floor(Math.random()*255);
        }
        if(this.angle>0 && this.angle<180){
          this.angle += 10;
          this.a = Math.floor(Math.random()*255);
          this.b = Math.floor(Math.random()*255);
          this.c = Math.floor(Math.random()*255);
      }
      else if(this.angle >= 180){
        this.angle = 0;
        this.a = 0;
        this.b = 0;
        this.c = 0;
      }


    }
    
    
  }
    