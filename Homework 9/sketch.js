// JavaScript source code
            function setup() {
  createCanvas(500,600);
}

function draw()
{
    background(200,400,300);
let c = color('hsl(160, 100%, 50%)');
noStroke();
fill(c);
rect(0, 10, 45, 80); // Draw rectangle
c = color('hsla(160, 100%, 50%, 0.5)');
fill(c);
rect(55, 10, 45, 80); // Draw rectangle

fill(204, 153, 0);
rect(70, 80, 350, 450, 80);

c = color('hsla(40, 300%, 85%, 1)');
fill(c);
rect(100, 100, 290, 360, 360);

c = color('hsla(40, 300%, 85%, .6)');
rect(200, 400, 100, 200, 40);


c = color('hsla(50, 300%, 85%, 1)');
fill(c)
triangle(220, 350, 248, 220, 276, 350);

c = color('hsla(1000, 200%, 500%, 0.5)');
fill(c);
ellipse(310, 260, 75, 45);
ellipse(180, 260, 75, 45);

c = color('hsla(200, 200%, 30%, 0.5)');
fill(c);
circle(310, 260, 40);
circle(180, 260, 40);

c = color(65);
fill(c);
circle(310, 260, 20);
circle(180, 260, 20);

c = color(1000);
fill(c);
circle(300, 260, 10);
circle(170, 260, 10);

c = color(1000);
fill(c);
arc(250, 380, 60, 60, 0, PI + QUARTER_PI, PIE);

c = color(204, 153, 0);
fill(c);
rect(150, 200, 75, 20, 20, 40, 10, 5);
rect(270, 200, 75, 20, 20, 40, 10, 5);

rect(140, 100, 220, 90, 20);

c = color('hsla(160, 100%, 50%, 1)');
fill(c);
arc(250, 570, 300, 200, 0, PI + QUARTER_PI, PIE);

c = color('hsla(40, 300%, 85%, 1)');
fill(c);
ellipse(90, 300, 65, 65);
ellipse(400, 300, 65, 65);

c = color(100, 55, 100);
fill(c);
ellipse(90, 330, 35, 35);
ellipse(400, 330, 35, 35);

    console.log("draw?");
}
