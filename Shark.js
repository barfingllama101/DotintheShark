class Shark
{
    constructor(){
        this.x = random(50);
        this.y = random(50);
    }
    
    display(imageKind, width, height){
        image(imageKind, this.x, this.y, width, height);
        
    }
    bounce(){
            this.x = -this.x;
            this.y = -this.y;
            
        }
    yeetSkeet(){
            
            this.x += random(1,2);
            this.y += random(1, 2);
        }
    
}