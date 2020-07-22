var form,player;
var gameState=0;
var bg;
var player1,girl;
var sand,pyramid,pyramid2,pyramid3;
var palmtree,palmtree2,palmtree3;

function preload(){
  girl=loadAnimation("images/girl1.png","images/girl2.png");
  sand=loadImage("images/desertimg.jpg");
  pyramidImg=loadImage("images/pyramid.png");
  palmtreeImg=loadImage("images/palmtree.png");
  
}

function setup(){
  createCanvas(displayWidth,displayHeight-30);
  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight-30);
 bg.scale=5;
  bg.addImage("background",sand);
   player1=createSprite(30,displayHeight-100,20,60);
   player1.addAnimation("girl1",girl);
   pyramid=createSprite(600,displayHeight-350,50,50);
   pyramid.addImage("obstacle",pyramidImg);
   pyramid2=createSprite(200,displayHeight-300,60,60);
   pyramid2.addImage("obstacle2",pyramidImg);
   pyramid2.scale=2
   pyramid3=createSprite(1000,displayHeight-200,70,70);
   pyramid3.addImage("obstacle3",pyramidImg);
   pyramid3.scale=2;
   palmtree=createSprite(70,displayHeight-450,10,10);
   palmtree.addImage("tree",palmtreeImg);
   palmtree.scale=1.5;
   palmtree2=createSprite(1100,displayHeight-450,40,40);
   palmtree2.addImage("tree2",palmtreeImg);
   palmtree2.scale=1.5;
   palmtree3=createSprite(1300,displayHeight-450,50,50);
   palmtree3.addImage("tree3",palmtreeImg);
   palmtree3.scale=2;





 form=new Form();

}
function draw(){
  background("pink");
  if(gameState===1){
   drawSprites();
    }
   
  if(keyIsDown(RIGHT_ARROW)){
    player1.x=player1.x+5;
  }

   
  if(keyIsDown(LEFT_ARROW)){
    player1.x=player1.x-5;
  }
  
   
  if(keyIsDown(UP_ARROW)){
    player1.y=player1.y-5;
  }
  
   
  if(keyIsDown(DOWN_ARROW)){
    player1.y=player1.y+5;
  }
  
  

form.display();
}


