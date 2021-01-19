/*--------------- Preset output before we edit anything start ----------------*/

var output = "JavaScript Loading";
document.getElementById("feedback").innerHTML = output;
//innerHTML = everything between the <tags></tags>

/*------------ preset output before we edit end should read "JavaScript Loading"
if this does not show up, and your expected result does not happen, then you
have an issue bellow. --------------------------------------------------------*/
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



var x = myCanvas.width / 2;
var y = myCanvas.height / 2;
var dx = 10;
var dy = 10;
var size = 15;
var dampening = .01;
var gravity = .2;
var traction = .8;



document.addEventListener("keydown",moveUp); // read key press

function moveUp(){ //when key press, change dy value to make ball move up
    dy -= 7;
}



var rectl = -300;
var rectx = 550;
var recty = 600;

function drawRect() {
  ctx.beginPath();
  ctx.rect(rectx, recty, 50, rectl)
  ctx.stroke();
}

function pipes() { //makes a pipe
  drawRect(); //creates the pipe
  rectx --; //every loop of the function changes the x value of the pipe to make it move left

  if (rectx <= -50) { //if the rectangle goes past the wall of the canvas
    rectx = 550; // reset the position to its original
  }
}

setInterval(pipes,1); // loops pipe function to continuously generate pipes





function drawCircle() {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function draw() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height ); //Clears the canvas every frame, so a new circle can be drawn.
    drawCircle();

    if (x + dx > myCanvas.width - size ||  x + dx < size) { //If the circle's x position exceeds the width of the canvas...
      dx = -dx; //The ball's x direction will be flipped, and it will bounce a specific distance (damping).
    }

    if(y + dy > myCanvas.height - size || y + dy < size) { //If the circle's y position exceeds the height of the canvas...
      dy = -dy * dampening; //Its y direction will be flipped, and it's speed will decrease.
    }

    dy += gravity; //Adds the gravity value to the ball's dy value, giving it gravity

    if (((y + dy) + size) <= myCanvas.height) { // if the y position is below or equal to the bottom  of the canvas
      y += dy; // then add dy to its y value
    }
  }
  setInterval(draw, 15); //repeat the draw function









/*----------------------------------------- Do not make changes below this line
Output command for any changes above. If there are no changes above then it
will read "JavaScript Loading". If there is a change above, then it will output
that change, if there is an error it will output "JavaScript file not loading".
------------------------------------------------------------------------------*/

var styledOutput = "";

if (Array.isArray(output)) {
  for (var i = 0; i < output.length; i++) { styledOutput += output[i] + "<BR>";}
}

if (styledOutput.length != 0) { output = styledOutput; }

document.getElementById("feedback").innerHTML = output;

/* ------------------------------- End of File -------------------------------*/
