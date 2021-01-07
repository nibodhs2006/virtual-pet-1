//Create variables here
var dog,happyDog,database,foodS,foodStock
function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png")
  happydogImage=loadImage("images/dogImg.png")
}

function setup() {
 // database=firebase.database()
	createCanvas(500, 500);
  dog=createSprite(250,250,30,30)
  dog.addImage(dogImage)
  dog.scale=0.2

//foodStock=database.ref('food')
//foodStock.on("value",readStock)

}


function draw() {  
background(46,139,87)
  drawSprites();
textSize(20)
fill('white')
 text("note:pressUP_ARROW key to feed drago milk",10,100)
}

if(keyIsDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(dogHappy)

}

function readStock(data){
food=data.val()
}

function writeStock(x){
if(x<=0){
x=0
}else{
x=x-1

}


daytabase.ref('/').update({
  food:x
})
}