// JavaScript source code
var eyecolorX = 310;
var eyecolorY = 260;
var eyecolorDirection = 5;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 2;

var headX = 180;
var headY = 260;
var headDirection = -2;

var size = 110;
var count = 2;
var sizeDirection = -5;

let x = 1;
let y = 0;



function setup() {
    createCanvas(500, 600);
}

function draw()
{
    background(200,400,300);
let c = color('hsl(160, 100%, 50%)');
noStroke();
fill(c);



    //hair
fill(204, 153, 0);
rect(70, 80, 350, 450, 80);

    //head
c = color('hsla(40, 300%, 85%, 1)');
fill(c);
rect(100, 100, 290, 360, 360);
c = color('hsla(40, 300%, 85%, .6)');
rect(200, 400, 100, 200, 40);

    //nose
c = color('hsla(50, 300%, 85%, 1)');
fill(c)
triangle(220, 350, 248, 220, 276, 350);

    //white of eyes
c = color('hsla(1000, 200%, 500%, 0.5)');
fill(c);
ellipse(310, 260, 75, 45);
ellipse(180, 260, 75, 45);

    //eyecolor
c = color('hsla(200, 200%, 30%, 0.5)');
    fill(c);
    circle(eyecolorX, eyecolorY, 40);
    eyecolorX += eyecolorDirection;
    if (eyecolorX >= 320 || eyecolorX <= 300) {
        eyecolorDirection *= -10;
    }
    //lefteyecolor
   c = color('hsla(200, 200%, 30%, 0.5)');
    fill(c);
    circle(headX, headY, 40);
    headX += headDirection;
    if (headX >= 210 || headX <= 165) {
        headDirection *= -10;
    }

    //pupils
c = color(65);
fill(c);
circle(310, 260, 20);
    circle(180, 260, 20);

    //light in eyes
c = color(1000);
fill(c);
circle(300, 260, 10);
circle(170, 260, 10);

    //mouth
c = color(1000);
fill(c);
arc(250, 380, 60, 60, 0, PI + QUARTER_PI, PIE);


    //eyebrows
c = color(204, 153, 0);
fill(c);
    rect(150, bodyY, 75, 20, 20, 40, 10, 5);
    rect(270, bodyY, 75, 20, 20, 40, 10, 5);
    bodyY += bodyDirection;
    if (bodyY <= 175 || bodyY >= 240) {
        bodyDirection *= -1;
    }


    //bang
rect(140, 100, 220, 90, 20);


    //shirt
c = color('hsla(160, 100%, 50%, 1)');
fill(c);
arc(250, 570, 300, 200, 0, PI + QUARTER_PI, PIE);


    //ears
c = color('hsla(40, 300%, 85%, 1)');
fill(c);
ellipse(90, 300, 65, 65);
ellipse(400, 300, 65, 65);


    //earrings
c = color(100, 55, 100);
fill(c);
ellipse(90, 330, 35, 35);
ellipse(400, 330, 35, 35);

point(30, 20);
point(85, 20);
point(85, 75);
    point(30, 75);

    line(30, 20, 85, 75);

    c = color('hsla(540, 300%, 85%, 1)');
    fill(c);
   textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }

   
    text("Kai$ha", 100, 500);


    //flower1
 
    push();
    fill(245, 204, 174, 240);
    translate(90, 330);
    noStroke();
    for (var r3 = 0; r3 < 10; r3++) {
        if (frameCount <= 600) {
            ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
        }
        if (frameCount > 600) {
            ellipse(0, 40, 25, 50)
        }
        rotate(PI / 5);
    }
    pop();


    //flower2

    push();
    fill(245, 204, 174, 240);
    translate(400, 330);
    noStroke();
    for (var r3 = 0; r3 < 10; r3++) {
        if (frameCount <= 600) {
            ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
        }
        if (frameCount > 600) {
            ellipse(0, 40, 25, 50)
        }
        rotate(PI / 5);
    }
    pop();

    console.log("draw?");
}
