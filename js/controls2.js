//38
var upArrow = false;
//40
var downArrow = false;

 //player 2 up and down arrow key

document.addEventListener("keydown", press)
document.addEventListener("keyup", release)

 function press(e)
{
    console.log("Pressed "+ e.keyCode)
    if(e.keyCode == 38)
    {
        upArrow=true;
    }
    if(e.keyCode == 40)
    {
        downArrow=true;
    }

}

function release(e)
{
    console.log("Pressed "+ e.keyCode)
    if(e.keyCode == 38)
    {
        upArrow=false;
    }
    if(e.keyCode == 40)
    {
        downArrow=false;
    }
    
}