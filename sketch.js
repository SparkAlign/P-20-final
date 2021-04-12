var tom,tomImg1,tomImg2,tomImg3;
var jerry,jerryImg1,jerryImg2,jerryImg3;
var bg,bgImg;

function preload() {
    //load the images here
    tomImg1=loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3=loadAnimation("images/tomFour.png");

    bgImg=loadImage("images/garden.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2=loadAnimation("images/jerryThree.png","images/jerryTwo.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(500,400,1000,800);
    bg.addImage(bgImg);
    bg.scale=1.2;

    tom=createSprite(700,600,30,40);
    tom.addAnimation("tomsleeping",tomImg1);
    tom.scale=0.2;

    jerry=createSprite(100,600,50,50);
    jerry.addAnimation("jerry",jerryImg1);
    jerry.scale=0.2;


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    console.log(tom.x-jerry.x);
    if(tom.x-jerry.x<0){
     
        tom.addAnimation("tomTouching",tomImg3);
        tom.changeAnimation("tomTouching",tomImg3);
        tom.scale=0.2;

        jerry.addAnimation("jerryTouching",jerryImg3);
        jerry.changeAnimation("jerryTouching",jerryImg3);
        jerry.scale=0.2;

        tom.velocityX=0;
        tom.x=200

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode===LEFT_ARROW){
       tom.velocityX=-5;
       tom.addAnimation("tomwalking",tomImg2);
       tom.changeAnimation("tomwalking",tomImg2);
       
       jerry.addAnimation("jerryTeasing",jerrImg2);
       jerry.changeAnimation("jerryTeasing",jerryImg2);
   }

}
