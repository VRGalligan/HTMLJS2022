var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");




//square
ctx.fillStyle = "yellow";
ctx.strokeStyle = "5px, solid, black, wide";
ctx.beginPath();
ctx.moveTo(85, 300);
ctx.lineTo(185, 300);
ctx.lineTo(185, 400);
ctx.lineTo(85, 400);
ctx.closePath();
