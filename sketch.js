/*let shark;

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
   
    
}
function draw(){
     background("white");
    
        sHark.yeetSkeet();
    
    if(sHark.x > 500 - 100 || sHark.x < 100){
       sHark.xDirection * -1;
   }
    if (sHark.y > 500 - 100 || sHark.y < 100) {
    sHark.yDirection *= -1;
    }
               sHark.display(shark, 100,100);

 
}

function setup(){
        createCanvas(screen.width, screen.height);

    sHark = new Shark();
    
}*/

let rgbarr = [];
let sHark;
let rad = 60; // Width of the shape

let shark;
function preload(){
    
    shark = loadImage("media/shark.png");
}
function setup() {
    createCanvas(screen.width, screen.height);
    noStroke();
    frameRate(30);
    ellipseMode(RADIUS);
    sHark = new Shark();


    

}
function mouseWithin(x, y, rad) {
    let isinside;
    if (dist(x, y, mouseX, mouseY) < rad) {
        isinside = true;
        return isinside;
    }
    return isinside;
}

function draw() {
    background(102);
    
    if(mouseWithin(sHark.x, sHark.y, rad)){
        sHark.yeetSkeet();
    }
    
    // color based collsion too hefty hefty hefty ! 
    //r : 47
 //   g 199
   // b 187
 
    if(sHark.x > width - rad || sHark.x < rad){
        sHark.xDirection *=-1;
    }

    if(sHark.y > height - rad || sHark.y < rad){
        sHark.yDirection *=-1;
        
    }
        sHark.display(shark); 
}

