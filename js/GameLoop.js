var canvas, context, player, timer, interval = 1000/60

canvas = document.getElementById("canvas")
context = canvas.getContext("2d")
score = document.getElementById("Score")
var img = document.getElementById("Chicken");

player = new GameObject( 60, canvas.height/2, 30, 120,)
player2 = new GameObject( canvas.width + -70, canvas.height/2, 30, 120)
ball = new GameObject(canvas.width/2, canvas.height/2, 50, 50)

context.font = "bold 20px Arial"
context.fillstyle = "black"

var p1Wins = 0;
var p2Wins = 0;

console.log(img);

player.color = "blue"
player2.color = "magenta"

ball.vx = 12;
ball.vy = 12;

timer = setInterval(animate, interval);

function animate()
{



      //PADDLE 1 MOVEMENT

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillText("Player 1 | Player 2", canvas.width/2.42, 50);

    
    context.save();
    context.strokeStyle = "yellow"

    context.beginPath();
    {
        context.moveTo(canvas.width/2, canvas.height);
        context.lineTo(canvas.width/2, canvas.height * -1);
        context.closePath();
        context.lineWidth = 3;
        context.stroke();
        
    }

    if(s)
    {
      player.y += 8
    }

    if(w)
    {
         player.y -= 8
    }

    player.move();

    if (player.y > canvas.height - player.height + 40)
    {
        player.y -= 8;
    }
    if (player.y < 0 + player.height + -45)
    {
        player.y += 8;
    }

    //PADDLE 2 MOVEMENT

    if(downArrow)
    {
      player2.y += 8
    }

    if(upArrow)
    {
         player2.y -= 8
    }

    player2.move();

    if (player2.y > canvas.height - player2.height + 40)
    {
        player2.y -= 8;
    }
    if (player2.y < 0 + player2.height + -45)
    {
        player2.y += 8;
    }

    ball.move();
    //PADDLE 1 COLLISION
    if(ball.collisionCheck(player))
    {

    if(ball.y < player.y - player.height/6)
    {
        ball.vx = 12;
        ball.vy = -12;
    }
    else if(ball.y > player.y + player.height/6)
    {
        ball.vx = 12;
        ball.vy = 12;
    }
    else
    {
        ball.vx = 12;
        ball.vy = 0;
    }
    }

    //PADDLE 2 COLLISION

    if(ball.collisionCheck(player2))
    {

    if(ball.y < player2.y - player2.height/6)
    {
        ball.vx = -12;
        ball.vy = -12;
    }
    else if(ball.y > player2.y + player2.height/6)
    {
        ball.vx = -12;
        ball.vy = 12;
    }
    else
    {
        ball.vx = -12;
        ball.vy = 0;
    }
    }


    if (ball.x < -200 + ball.width )
    {
        ball.x = canvas.width/2
        ball.vx *= -1;
        p2Wins++
    }
    if(ball.x > canvas.width + 150)
    {
        ball.x = canvas.width/2
        ball.vx*= -1;
        p1Wins++
    }
    if (ball.y > canvas.height - ball.height)
    {
        ball.vy *= -1;
    }
    if (ball.y < 0 + ball.height)
    {
        ball.vy *= -1;
    }

        player.drawRect();
        player2.drawRect();
        context.drawImage(img, ball.x -23, ball.y - 24, 50, 50);
    


    ////PLAYER 1 SCORE
    context.fillText(p1Wins, canvas.width/2.26, 100);

    context.fillText("|", canvas, 100);

    ////PLAYER 2 SCORE
    context.fillText(p2Wins, 550, 100);
    

}

