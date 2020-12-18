class Shark()
{
    constructor(){
        this.x = random(screen.width);
        this.y = random(screen.height);
        this.isActive = false;
    }
    
    display(imageKind, width, height){
        if(this.isActive){
            
        image(imageKind, this.x, this.y, width, height);
        
        }
        
        bounce(){
            this.x = -this.x;
            this.y = -this.y;
            
        }
        yeetSkeet(){
            
            this.x += random(.5, 1);
            this.y += random(.5, 1);
        }
    
}