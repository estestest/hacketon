var flocon1,flocon2,flocon3,flocon4;
var Wimg,Himg,maxSizeimgW,maxSizeimgH;
function preload() {
  flocon1 = loadImage("file/1.png");
  flocon2 = loadImage("file/2.png");
  flocon3 = loadImage("file/3.png");
  flocon4 = loadImage("file/4.png");
  
}
  function setup() {
  createCanvas(360,640);
 
  
  //Deal with microphone
 mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var volume = mic.getLevel();
  
  
  //If the volume is not enought, re-map it (set a higher newMax).
  var newMax = 1;
  volume = map(volume,0,1,0,newMax);
  background(255);
  
  push();  //Start with transformations
 var size = map(volume,0,1,200,640);
 var imageOpacity= map(volume,0,1,60,250);
 imageMode(CENTER);
 tint(255,imageOpacity)
 image(flocon1, width/2,height/2,size,size);
 pop();
 
 push();  //Start with transformations
 var size = map(volume,0,1,200,640);
 var speed = map(volume,0,1,0,180);
 translate(width/2,height/2)
 rotate(speed)
 imageMode(CENTER);
 image(flocon1,0,0,size,size);
 pop();//All transformation are now dropped and the coordinate system is resetted.
   
   push();  //Start with transformations
 var size = map(volume,0,1,100,500);
 
 imageMode(CENTER);
 
 image(flocon2, width/4,height/4,size,size);
 image(flocon2, width*3/4,height/4,size,size);
 image(flocon2, width*3/4,height*3/4,size,size);
 image(flocon2, width/4,height*3/4,size,size);
  pop();
  

 
     push();  //Start with transformations
 var size = map(volume,0,1,70,500);
 imageMode(CENTER);
 image(flocon4, width/2,height/8,size,size);
 image(flocon4, 0,height/8,size,size);
 image(flocon4, width,height/8,size,size);
 image(flocon4, width,height/2,size,size);
 image(flocon4, 0,height/2,size,size);
 image(flocon4, width/2,height*7/8,size,size);
 image(flocon4, 0,height*7/8,size,size);
 image(flocon4, width,height*7/8,size,size);
  pop();
  
}