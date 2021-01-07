
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;
var score = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  //createCanvas(600,200);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running); 
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  obstacleGroup = createGroup();
  foodGroup = createGroup();
  
  
}


function draw() {
  
  background("white");
  
  if(keyDown("space") && monkey.y >= 310){
    monkey.velocityY = -17;
  }
  monkey.velocityY = monkey.velocityY + 0.8
   
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  

  monkey.collide(ground);
  spawnFood();
  spawnObstacles();
  
  drawSprites();
}

function spawnObstacles(){
 
  if (frameCount % 300 === 0){
   var obstacle = createSprite(320,290,10,40);
   obstacle.addImage("obstacle",obstacleImage);           
   obstacle.scale = 0.3;
   obstacle.velocityX = -6; 
    
   obstacle.lifetime = 300;
   
   obstacleGroup.add(obstacle);
 }
}

function spawnFood() {
  
  if (frameCount % 80 === 0) {
    
    var food = createSprite(450,120,40,10);
    food.y = Math.round(random(120,200));
    food.addImage("food",bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    
    food.lifetime = 200;
    
    foodGroup.add(food);
  }
}



