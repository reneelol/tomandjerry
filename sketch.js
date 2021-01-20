var gardenImg
var tomOne
var tomTwo
var tomThree
var tomFour
var jerryOne
var jerryTwo
var jerryThree

function preload() {
  gardenImg = loadImage("images/garden.png")
  tomOne = loadImage("images/tomOne.png")
  tomTwo = loadAnimation("images/tomTwo.png","images/tomThree.png")
  tomThree = loadAnimation("images/tomFour.png")
  jerryOne = loadAnimation("images/jerryOne.png")
  jerryTwo = loadAnimation("images/jerryTwo.png","images/jerryThree.png")
  jerryThree = loadAnimation("images/jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(870,600);
    tom.addImage(tomOne);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerry",jerryOne);
    jerry.scale = 0.15;

}

function draw() {

    background(gardenImg);
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tomOne",tomThree)
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomOne")
        jerry.addAnimation("jerryOne",jerryThree)
        jerry.scale = 0.15;
        jerry.changeAnimation("jerryOne")
    }
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW)
    { tom.velocityX = -5;
         tom.addAnimation("tomRunning", tomTwo); 
         tom.changeAnimation("tomRunning"); 
         jerry.addAnimation("jerryTeasing", jerryTwo); 
         jerry.frameDelay = 25; 
         jerry.changeAnimation("jerryTeasing");
         } 



}
