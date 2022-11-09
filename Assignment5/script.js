var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");




//square
ctx.fillStyle = "yellow";
ctx.strokeStyle = "solid, black, wide";
ctx.lineWidth = "5"
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
ctx.arc(385,440,50,0, (3*Math.PI)/2, false);
ctx.lineTo(385,440);
ctx.closePath();
ctx.fill();
ctx.stroke();



