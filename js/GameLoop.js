var canvas, context, ball, player, timer, interval = 1000/60;
var frictionX = 1;
var frictionY = 1;
var gravity = 1;


canvas = document.getElementById("canvas")
context = canvas.getContext("2d")


ball = new GameObject(canvas.width/2,canvas.height/2,80,80,"#00ff62")
player = new GameObject( canvas.width/2, canvas.height/2, 190, 40,)
ball.vx = 0;
ball.vy = 0;
ball.jumpSpeed = -20;

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

   
    doHandleAcceleration();
    doApplyFriction();
    doHandleGravity();
    doUpdatePosition();
    doCheckBottomBounds();
     


    ball.move();
    if(ball.x > canvas.width + ball.width/2 - 100)
    {
         ball.vx *= -1;
    }
     if (ball.x < 0 + ball.width/2)
     {
         ball.vx += 10;
     }
     if(ball.y > canvas.height + ball.height/2 - 100)
     {
         ball.vy *= -1;
     }






     player.move();
    function doHandleAcceleration () {
        if (d == true) {
            player.vx += player.ax * player.force;
        }

        if (a == true) {
            player.vx += player.ax * -player.force;
        }
    }

    function doHandleGravity () {
        ball.vy += gravity;
    }

    function doUpdatePosition () {
        ball.x += ball.vx;
        ball.y += ball.vy;
    }

    function doCheckBottomBounds() {
        if (ball.y > canvas.height - ball.height/2) {
        ball.vy *= -1;
        ball.vx + 10
        }
    }

    function doApplyFriction()
    {
        player.vx *= 0.93;
    }

        ball.drawCircle();
        player.drawRect();

}
 