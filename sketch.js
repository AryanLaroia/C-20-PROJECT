var car, wall;
var speed, weight;
var deformation;


function setup() {
  createCanvas(1600,400);

  car = createSprite(40,200,70,30);
  wall = createSprite(1200,200,40,height/2);
  wall.shapeColor = "white";
  
  speed = random(20,90);
  weight = random(40,1000);
}

function draw() {
  background("black");  

  car. velocityX = speed;



  if((wall.x - car.x < wall.width/2 + car.width/2) ){


deformation = (0.5*weight*speed*speed/2250);

if(deformation < 100){
car.shapeColor = "green";
}

if(deformation > 180){
  car.shapeColor = "red";
  }

  if(deformation > 100 && deformation < 180){
    car.shapeColor = "yellow";
  }

  car.collide(wall);

  }


  drawSprites();
}