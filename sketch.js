var garden;
var jerry, jerry1, jerry2, jerry3, jerry4;
var tom, tom1, tom2, tom3, tom4;


function preload() {
    garden = loadImage("garden.png");
    jerry1 = loadImage("jerryOne.png");
    jerry2 = loadImage("jerryTwo.png");
    jerry3 = loadImage("jerryThree.png");
    jerry4 = loadImage("jerryFour.png");
    tom1 = loadImage("tomOne.png");
    tom2 = loadImage("tomTwo.png");
    tom3 = loadImage("tomThree.png");
    tom4 = loadimage("tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    jerry = createSprite(200,600)
    jerry.addAnimation(jerry1)
    jerry.scale = 0.2

    tom = createSprite(200,600)
    tom.addAnimation(tom1)
    tom.scale=0.2


}

function draw() {

    background(255);
    background.addImage(garden)

     if(tom.isTouching(jerry)){
         jerry.addAnimation(jerry4)
         tom.addAnimation(tom4)
     }

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if(keyDown("left_arrow")) {
        tom.velocityX= -2
        tom.addAnimation(tom3)
        jerry.addAnimation(jerry1)

      }

  //For moving and changing animation write code here


}
