const GameStates = {
    STARTSCREEN: "StartScreen",
    GETREADY: "READY",
    GETREADYTWO: "ACTUALLYREADY",
    GAMEPLAY: "GamePlay",
    GAMEOVER: "GameOver"
};


let myFont;

let titleWords;

let sHark;
let rad = 80; // Width of the shape

let shark;
let gameState;

let titleScreenImage;
let titleScreen;

let bgImage;
let bg;

let GOSCREENWORDS;

let DIRWORDS;

let timer;


let timer2;

function preload() {
    shark = loadImage("media/shark.png");
    myFont = loadFont("media/Pixels.ttf");

    bgImage = loadImage("media/dink.jpg");

    titleScreenImage = loadImage("media/title.png");
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    noStroke();
    frameRate(30);
    textSize(72);
    textFont(myFont);
    ellipseMode(RADIUS);
    sHark = new Shark();
    gameState = GameStates.STARTSCREEN;
    titleWords = "PRESS SPACE BAR TO PLAY";
    GOSCREENWORDS = "GAME OVER. YOU LOSE. ";
    DIRWORDS = "PLACE MOUSE HERE TO START: ";
    timer = 3;

    timer2 = 1;
}
// color based collsion too hefty hefty hefty ! 
//r : 47
//   g 199
// b 187
function mouseWithin(x, y, rad) {
    let isinside;
    if (dist(x, y, mouseX, mouseY) < rad) {
        isinside = true;
        return isinside;
    }
    return isinside;
}

function draw() {

    switch (gameState) {
        case GameStates.STARTSCREEN:
            background(0);

            fill(255);
            text(titleWords, 540, screen.height / 2);


            titleScreen = image(titleScreenImage, 300, 100);
            if (keyIsDown(32)) {
                gameState = GameStates.GETREADY;
            }
            break;
        case GameStates.GETREADY:
            background(0);
            fill(255);
            text(DIRWORDS, 540, (screen.height / 2) - 200);
            ellipse((width / 2) + 20, height / 2, 50, 50);

            if (mouseWithin(width / 2, height / 2, 70)) {
                gameState = GameStates.GETREADYTWO;
            }
            break;
        case GameStates.GETREADYTWO:
            background(0);

            fill(255);
            text(timer, screen.width / 2, (screen.height / 2) - 200);

            ellipse((width / 2) + 20, height / 2, 50, 50);

            if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
                timer--;
            }
            if (timer == 0) {
                gameState = GameStates.GAMEPLAY;
            }
            break;

        case GameStates.GAMEPLAY:
            background(bgImage);

            if (frameCount % 60 == 0 && timer2 > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
                timer2--;
            }
            if (timer2 == 0) {
                if (mouseWithin(sHark.x, sHark.y, rad)) {
                    sHark.yeetSkeet();
                } else {
                    gameState = GameStates.GAMEOVER;
                }
                if (sHark.x > width - rad || sHark.x < rad) {
                    sHark.xDirection *= -1;
                }
                if (sHark.y > height - rad || sHark.y < rad) {
                    sHark.yDirection *= -1;

                }
            }
            sHark.display(shark);


            break;
        case GameStates.GAMEOVER:
            background(0);
            fill(255);
            text(GOSCREENWORDS, 540, screen.height / 2);
            break;


    }

}
