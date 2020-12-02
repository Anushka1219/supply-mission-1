var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, drop;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	
	
	wall4=createSprite(0,600,1600,450);
	wall4.shapeColor="green";
	wall1=createSprite(400,650,305,45);
	wall1.shapeColor="red";
	wall2=createSprite(250,650,25,175);
	wall2.shapeColor="red";
	wall3=createSprite(550,650,25,175);
	wall3.shapeColor="red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  if(keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic(packageBody,false);
	}	
 
  Engine.update(engine);
}
