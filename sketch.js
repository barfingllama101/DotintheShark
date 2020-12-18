let shark;

let sHark;
function preload(){
    
    shark = loadImage("media/shark.png");
}

function distance(x1, x2, y1, y2){
    if((Math.sqrt(x2 - x1) + Math.sqrt(y2-y1)) < 1){
           return true;

       }
}

function screenBounds(xCoord, yCoord){
    if(yCoord + 5=== 0){
        console.log("asdf");
        sHark.y = 10;
        sHark.y = -sHark.y;
    }
    if(yCoord >= screen.height - 200 ){
        console.log("height greater than ");
        sHark.y  -= 200;
        sHark.bounce();
        
    }
    if(xCoord - 5 === 0 || xCoord >= screen.width - 10){
        console.log("asdf xxxxxx");
        Shark.x = 0;
        sHark.x = -sHark.x;
    }
    
}
function draw(){
     background("white");
        sHark.display(shark, 100,200);
    
        sHark.yeetSkeet();
    
    screenBounds(sHark.x, sHark.y);

}

function setup(){
        createCanvas(screen.width, screen.height);

    sHark = new Shark();
    
}

