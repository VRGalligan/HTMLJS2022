var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");




//square
ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
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
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red";
ctx.lineWidth = "5";
ctx.beginPath();
ctx.arc(385,441,65,0, (2 *Math.PI), false);
ctx.closePath();
ctx.fill();
ctx.stroke();

//pentagon
ctx.fillStyle = "#ff00ff";
ctx.strokeStyle = "#00ffff";
ctx.lineWidth = "5";
ctx.beginPath();
ctx.moveTo(557, 305);
ctx.moveTo(667, 284);
ctx.moveTo(724, 379);
ctx.moveTo(651, 464);
ctx.moveTo(548, 420);
ctx.closePath();
ctx.fill();
ctx.stroke();


