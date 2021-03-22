var canvas
var dog,dogimg,happydog;
var food
var foodata
var database
var backimg
var walk;
var dogwalk
var milk,milkimg;
var dogsleep,dogsleepimg;
var dogsound;
var  feedfoodbutton,feeddog;
var foodObj;
var addFood,addFoods;
var dogname;
var namebox,value
var lastFed
var feedTime
function preload(){
    dogimg=loadAnimation("Dog.png")
    backimg=loadImage("backimg.jpg")
    happydog=loadImage("happydog.png")
    walk=loadAnimation("dogwalking (1) (1).png","dogwalking (1)3.png","dogwalking2.png")
    milkimg=loadImage("bone.png")
    dogsleepimg=loadImage("dogsleep.png")
    dogsound=loadSound('dogsound.mp3')
}
function setup(){
 canvas=createCanvas(1000,600)

 
 database=firebase.database()


dog=createSprite(500,400,10,10)
dog.addAnimation("dogimg",dogimg)
dog.scale=0.3

dogwalk=createSprite(500,400,10,10)
dogwalk.addAnimation("dog",walk)
dogwalk.scale=0.3
dogwalk.visible=false

milk=createSprite(300,500,10,10)
milk.addImage(milkimg)
milk.scale=0.4

dogsleep=createSprite(800,500,10,10)
dogsleep.addImage(dogsleepimg)
dogsleep.scale=0.3;
dogsleep.visible=false

    //foodata=database.ref('Food');
   // foodata.on("value",readStock);

    feedfoodbutton=createButton("feeddog")
    feedfoodbutton.position(450,100)
    feedfoodbutton.mousePressed(feeddog)

    addFood=createButton("Add Food");
    addFood.position(550,100);
    addFood.mousePressed(addFoods);

    namebox = createInput('').attribute('placeholder','Your pet name');
  namebox.position(100,100)
    // dogname = new nam()

    foodObj=new dis()
}
function draw(){
    background(backimg)
    foodObj.display()
   // dogname.display()
   value = namebox.value()
   textSize(30)
   fill("blue");
   text(value,300,100)
    if(keyDown("space")){
        dogwalk.x=500
        dogwalk.velocityX=-8
        dogwalk.scale=0.5;
        dogwalk.visible=true
        dog.visible=false
        milk.visible=false
        dogsleep.visible=false
        dogsound.play()
     }
    if(keyWentDown("up")){
       // writeStock(food)
        dogsleep.visible=false
        milk.visible=false
        dog.visible=true
        dog.addImage(happydog)
        dogsound.play()
    }
if(keyWentUp("up")){
    milk.visible=true
}
if(keyWentDown("down")){
    dogsleep.visible=true
    dogwalk.visible=true
    dog.visible=false
    milk.visible=false
}



feedTime = database.ref('FeedTime')
feedTime.on("value",function(data){
  lastFed = data.val();
})

fill("black");
textSize(15);

if(lastFed >= 12){
  text("Last Fed:" + lastFed%12 +"pm",350,30);
}else if (lastFed === 0){
  text("Last Fed: 12 Am",350,30);
}else{
  text("Last Fed:"+ lastFed + "am",350,30);
}
    drawSprites()
    textSize(10)
    fill("green")
    text("Press Up Arrow Only To Feed Dog ",400,550)
   // textSize(20)
   // text("Food remaining:"+food,30,50)
}
//function readStock(data){
    ////food=data.val()
    
//function writeStock(x){
   // if(x<=0){
    //    x=0;
       
     // }else{
     //   x=x-1;
    //  } 
    //database.ref("/").update({
    //    Food:x
   // })
//}

function feeddog(){
   
  foodObj. updatefoodstock(foodObj.deductfood()-1);
  database.ref('/').update({
    Food:foodObj.getfoodstock(),

  })
  database.ref('FeedTime').update({
    FeedTime:hour()
  })
}

function addFoods(){
  foodObj. updatefoodstock(foodObj.foodstock+1);
  database.ref('/').update({
    Food:foodObj.foodstock
  });
}