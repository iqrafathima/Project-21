var wall,thickness;
var bullet,weight,speed;



function setup() {
  createCanvas(1000,400);

  speed=random(240,330)
  weight=random(35,55)
  thickness=randoma(22,83)

  bullet= createSprite(50,200,50,10)
  bullet.shapeColor="white"
  

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor =color(230,230,230)
}

function draw() {
  background(0);  
  background.velocityX=speed;
 background.shapeColor="black";

  if(hasCollided (bullet,wall))
  {
  bullet.velocityX=0;
   var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

   if (damage>10)
   {
     bullet.shapeColor= color(255,0,0)
   }
   if (damage<10)
   {
      bullet.shapeColor=color(0,255,0)
   }
  }




  drawSprites();
}


function hasCollided(car, lwall)
{
	bulletRightEdge=car.x +car.width;
	wallLeftEdge=lwall.x;
	if (carRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}

















































