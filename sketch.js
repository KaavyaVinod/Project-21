var bullet, wall;
var speed , weight,thickness ;









function setup() {
  createCanvas(800,400);
  bullet = createSprite(200, 200, 50, 10);
  bullet.velocityX = 3
  
  wall = createSprite(700, 200, thickness, height/2)
  wall.shapeColor = color("white");
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83)
}

function draw() {
  background("black");  
  bullet.velocityX = speed ;
  if(hasCollided(bullet,wall)){
bullet.velocityX = 0;
var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
if (damage > 10){


  wall.shapeColor = "red";
}

if (damage < 10){
  wall.shapeColor = "green";
}




  }
  drawSprites();
}


function hasCollided(object1,object2){
  bulletRightEdge = object1.x + object1.width;
  wallLeftEdge = object2.x;
  if(bulletRightEdge>=wallLeftEdge){

    return  true ;
  }
return  false;

}