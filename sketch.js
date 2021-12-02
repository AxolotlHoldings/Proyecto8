
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // escribir el código para cambiar el color del fondo 
  // rojo cuando se presiona RIGHT_ARROW (tecla de flecha derecha)
  if (keyIsDown(RIGHT_ARROW)||keyDown("D")){
    background("red");
    box.shapeColor = "yellow";
    box.x = box.x+5;
  }
  

  if (keyIsDown(LEFT_ARROW)||keyDown("A")) 
  {
    background("blue");
    box.shapeColor = "green";
    box.x = box.x-5;
  }
 
    if (keyIsDown(UP_ARROW)||keyDown("W")) 
  {
    background("yellow");
    box.shapeColor = "red";
    box.y = box.y-5;
  }

  if (keyIsDown(DOWN_ARROW)||keyDown("S")) 
  {
    background("green");
    box.shapeColor = "blue";
    box.y = box.y+5;
  }


  
  drawSprites();
}

