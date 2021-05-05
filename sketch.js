var playership,playershipImg;
var alienship1,alienship2,alienship3,alienship4,alienship1Img,alienship1Img,alienship2Img,alienship3Img,alienship4Img;
var ground;
var bg,backgroundImg;

function preload (){
    playershipImg = loadImage("ship.jpg");
    backgroundImg = loadImage("background.jpg");
    alienship1Img = loadImage("alienship1.png");
    alienship2Img = loadImage("alienship2.png");
    alienship3Img = loadImage("alienship3.png");
    alienship4Img = loadImage("alienship4.png");
}

function setup (){
    createCanvas(700,700);

    bg = createSprite(300,300);
    bg.addImage("bg",backgroundImg);
    bg.velocityY = 1;

    playership = createSprite(200,200,50,50);
    playership.scale = 0.5;
    playership.addImage("playership",playershipImg);

    rect(0,690,700,10);// ground

    
}
function draw(){
    background("black");

    if(keyDown("left_arrow")){
        playership.x = playership.x -3;
    }
    if(keyDown("right_arrow")){
        playership.x = playership.x +3;
    }
    if(keyDown("space")){
        playership.velocityY = -10;
    }
    playership.velocityY = playership.velocityY + 0.8;

    if(bg.y>750){
        bg.y = 300;

    }
}
