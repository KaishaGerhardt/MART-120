// JavaScript source code
// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var x = 50;
var y = 50;
var diameter = 25;
var mousex = 0;
var mousey = 0;

i = 1.85 // upper mouth radian
x = 0.2 // lower mouth radian
speed = 0.01 // speed of mouth opening & closing

function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(0,30,380);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);

    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)


    //character
    push();
    fill(245, 204, 174, 240);
    translate(250, 330);
    noStroke();
    for (var r3 = 0; r3 < 10; r3++) {
        if (frameCount <= 600) {
            ellipse(characterX, characterY + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
        }
        if (frameCount > 600) {
            ellipse(characterX, characterY, 80, 150)
        }
        rotate(PI / 5);
    }
    pop();

        //Pacman body
        fill(255, 255, 0);
    ellipse(characterX, characterY, 50, 50);

        //Pacman mouth
        fill(0);
        if (i >= 2 || i <= 1.8) {
            speed = speed * (-1)
        }
    arc(characterX, characterY, 50, 50,
            (i += speed) * PI, (x -= speed) * PI, PIE);


    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

    // check to see if the character has left the exit
    if (characterX > width && characterY > width - 50) {
        fill(800);
        stroke(10);
        textSize(30);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }

    // potential enemy
    fill(300,150,100);
    // draw the shape
    fill("red");
    rect(200, shapeY, 50, 25); //bottom half of ghost
    ellipse(225, shapeY, 50, 50); //top half of ghost
    fill("white"); //eye whites
    ellipse(215, shapeY, 15, 15);
    ellipse(235, shapeY, 15, 15);
    fill("blue");//blue part of eyes
    ellipse(235, shapeY, 10, 10);
    ellipse(215, shapeY, 10, 10);
      
     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

      	noStroke();
	fill(255, 0, 0);

    ellipse(mousex, mousey, 15, 50);

}


function keyPressed() {
    if (key == 'd') {
        x += 10;
    }
    else if (key == 'a') {
        x -= 10;
    }
}

function mouseClicked() {
    mousex = mouseX;
    mousey = mouseY;

    fill("red");
    rect(200, mouseY, 50, 25); //bottom half of ghost
    ellipse(225, mouseY, 50, 50); //top half of ghost
    fill("white"); //eye whites
    ellipse(215, mouseY, 15, 15);
    ellipse(235, mouseY, 15, 15);
    fill("blue");//blue part of eyes
    ellipse(235, mouseY, 10, 10);
    ellipse(215, mouseY, 10, 10);
}

/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
  }
  */