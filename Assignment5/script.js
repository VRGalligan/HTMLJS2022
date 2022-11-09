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



//circle
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red";
ctx.lineWidth = "5";
ctx.beginPath();
ctx.arc(385,441,65,0, (2 *Math.PI), false);
ctx.closePath();
ctx.fill();
ctx.stroke();



//line
ctx.strokeStyle ="rgb(225,0,0)"
ctx.lineWidth = "5"
ctx.beginPath();
ctx.moveTo(86,682);
ctx.lineTo(279,549);
ctx.stroke();

//star
ctx.fillStyle = "ffff00";
ctx.strokeStyle = "rgb(32,32,32)";
ctx.lineWidth = "5";
ctx.beginPath();
ctx.moveTo(635,496);
ctx.lineTo(668,554);
ctx.lineTo(733,566);
ctx.lineTo(688,615);
ctx.lineTo(696,681);
ctx.lineTo(635,653);
ctx.lineTo(575,681);
ctx.lineTo(583,615);
ctx.lineTo(538,567);
ctx.lineTo(602,553);
ctx.closePath();
ctx.fill();
ctx.stroke();

