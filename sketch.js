
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3;
var ground1;
var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,680,2800,20);
	bin1 = new Bin(1400,660,150,20);
	bin2 = new Bin(1335,650,20,75);
	bin3 = new Bin(1475,650,20,75);
	paper1 = new Paper(200,630,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(paper1.y);
	bin1.display();
	bin2.display();
	bin3.display();
	ground1.display();
	paper1.display();

	if(keyPressed()	 && paper1.y<500	){
		paper1.velocityY=0;
	}

	paper1.velocityY=paper1.velocityY+70;

	fill("white");
	textSize(12);
	text("Press Up to move",1000,200);
	text("Press Down to Stop",1000,250);

  drawSprites();
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.5,y:-1});

  }
  if(keyCode===null){

	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0,y:0});

  }
}


