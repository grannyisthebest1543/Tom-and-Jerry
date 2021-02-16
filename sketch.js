
var cat1,cat2,cat3,cat4;
function preload() {
    //load the images here
    cat=loadImage("cat1.png,cat2.png,cat3.png,cat4.png")
mouse=loadImage("mouse1.png,mouse2.png,mouse3.png,mouse4.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(230,100,20,20)
jerry=createSprite(200,100,40,90)

cat1=addImage("cat1.png")
cat2=addImage("cat2.png")
cat3=addImage("cat3.png")
cat4=addImage("cat4.png")

mouse1=addImage("mouse1.png")
mouse2=addImage("mouse2.png")
mouse3=addImage("mouse3.png")
mouse4=addImage("mouse4.png")
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2)



    drawSprites();
}


function keyPressed(){
if(KeyCode===LEFT_ARROW){
cat.velocityX= -5;
cat.addAnimation("catRunning",Img2);
cat.changeAnimation("catRunning");
}

text(mouseX+';'+mouseY,10,45);
  //For moving and changing animation write code here
cat.addAnimation("catLastImage",catImg3);
cat.changeAnimation("catLastImage");
}
