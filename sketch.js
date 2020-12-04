const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var platform1;
var platform2;
var polygon,polygonImg;
var slingshot;

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(550,250,200,20);
    platform2 = new Ground(1000,150,200,20);

    polygon = Bodies.circle(80,200,20);

   slingshot = new SlingShot(polygon.body,{x:90,y:210});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    platform1.display();
    platform2.display();
   
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);
    polygon.display();

    slingshot.display();
}

