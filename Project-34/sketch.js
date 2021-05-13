//Create variables here 
var  dog, happyDog;

var database;
var foodS, foodStock;

function preload()
{
  dogImg = loadImage("dogImg.png");
  dogImg1 = loadImage("dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(500,500);
  
  dog = createSprite(250,400,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

    
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }
  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImg);
  }
  drawSprites();
  //add styles here
  strokeWeight()
  stroke("red");
  fill("red");
  textSize(16);
  text("Food Remaining: " + foodS, 160,250);
  fill("black");
  text("Note: Press UP Arrow Key To Feed the Dog", 100,50);
}

function readStock(data){
  foodS=data.val();
}

function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food: x 
  })
}

