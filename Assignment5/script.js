var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");




//square
ctx.fillStyle = "yellow";
ctx.strokeStyle = "solid, black, wide";
ctx.lineWidth = "5";
ctx.beginPath();
ctx.moveTo(85, 300);
ctx.lineTo(185, 300);
ctx.lineTo(185, 400);
ctx.lineTo(85, 400);
ctx.closePath();
ctx.fill();
ctx.stroke();


//circle
ctx.fillStyle = "#fff00";
ctx.strokeStyle = "red, wide";
ctx.lineWidth = "5";
ctx.beginPath();
ctx.arc(385,440,50,0, (2 *Math.PI), false);
ctx.closePath();
ctx.fill();
ctx.stroke();

//pentagon
ctx.beginPath()
ctx.moveTo(557,305)
ctx.moveTo(667,284)
ctx.moveTo(724,379)
ctx.moveTo(651,464)
ctx.moveTo(548,420)
ctx.closePath()


