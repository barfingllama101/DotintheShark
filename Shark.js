class Shark
{
    constructor(){
        this.x = width /2;
        this.y = height / 2;
        this.ySpeed = 2.2;
        this.xSpeed = 2.8;
        this.xDirection = 1;
        this.yDirection = 1;
    }
    
    display(imageKind){
        image(imageKind, this.x, this.y, 80, 80);
    }
    
    yeetSkeet(){
            
            this.x = this.x + this.xSpeed * this.xDirection;
            this.y = this.y + this.ySpeed * this.yDirection;
        }
    
}