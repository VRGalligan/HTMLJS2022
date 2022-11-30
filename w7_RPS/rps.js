//canvas drawing stuff
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var vampire = new Image();
var mummy = new Image();
var ghost = new Image();
var hvampire = new Image();
var hmummy = new Image();
var hghost = new Image();

vampire.src ="images/vampire.png";
mummy.src ="images/mummy.png";
ghost.src ="images/ghost.png";

hvampire.src ="images/hvampire.png";
hmummy.src ="images/hmummy.png";
hghost.src ="images/hghost.png";

hghost.onload = function(){
    draw(vampire, mummy, ghost, vampire, mummy, ghost);
}

document.addEventListener("keydown",onKeyDown);
document.addEventListener("keyup",onKeyUp);

var gameOver = true;
var results = "Select Vampire, Mummy, Ghost, if you dare."

function onKeyDown(e){
    console.log(e.keyCode);

}
function onKeyUp(e){
    if(e.keyCode == 32){
        console.log("You pressed the spacebar")
        
        gameOver = false;
        draw(vampire, mummy, ghost, vampire, mummy, ghost);
    }
}

function draw(vampire, mummy, ghost, cvampire, cmummy, cghost){
    if(gameOver == true){
        //drawing the fonts
        ctx.font = "40px Arial";
        ctx.fillStyle = "darkpurple";
        ctx.strokeStyle = "lightred";
        ctx.textAlign = "center";
        ctx.fillText("Welcome to the Haunted House Choice Game!", canvas.width/2, 280);
        ctx.fillText("Press Space to Start", canvas.width/2, 320);
        ctx.strokeText("Welcome to the Haunted House Choice Game!", canvas.width/2, 280);
    }
    else{

        ctx.save();
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        ctx.fillStyle = "darkred"
        ctx.fillText("Player Choice", canvas.width/2, 100);
        ctx.drawImage(vampire, canvas.width/2 - vampire.width/2- 300, 50);
        ctx.drawImage(mummy, canvas.width/2 - mummy.width/2, 150, 200, 200);
        ctx.drawImage(ghost, canvas.width/2 - ghost.width/2 + 300 , 50);
        //computer choices
        ctx.fillText("Computer Choice", canvas.width/2, 325);
        ctx.drawImage(cvampire, canvas.width/2 - cvampire.width/2 - 300, 375);
        ctx.drawImage(cmummy, canvas.width/2 - cmummy.width/2 , 375,200,200);
        ctx.drawImage(cghost, canvas.width/2 - cghost.width/2 + 300 , 375);

        ctx.fillText(results, canvas.width/2, 525);
        ctx.restore();
    }
    }
    






//alert("Select vampire, mummy, or ghost!");
var rps = ["vampire", "mummy", "ghost"];
//console.log(rps[0]);

document.getElementById("vampire").addEventListener('click', function (e) {
    //alert("You picked " + rps[0]);
    playGame(rps[0]);
});
document.getElementById("mummy").addEventListener('click', function (e) {
    //alert("You picked " + rps[1])
    playGame(rps[1]);
});
document.getElementById("ghost").addEventListener('click', function (e) {
    //alert("You picked " + rps[2])
    playGame(rps[2]);
});

function playGame(playerChoice) {
    if(gameOver == true){
         return;

    } else{ 

var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice);

    switch (playerChoice) {
        case "vampire":
            if (cpuChoice == 0) {
                //vampire
                //alert("CPU chose Vampire. It's a tie!")
                results =  "CPU chose Vampire. It's a tie!"
                draw(hvampire, mummy, ghost, hvampire, mummy, ghost);
            }
            else if (cpuChoice == 1) {
                //mummy
                //alert("CPU chose Mummy. You lose!")

                results =  "CPU chose Mummy. You Lose!"
                draw(hvampire, mummy, ghost, vampire, hmummy, ghost);
            }
            else {
               //ghost
                //alert("CPU chose Ghost. You win!")

                results =  "CPU chose Ghost. You win!"
                draw(hvampire, mummy, ghost, vampire, mummy, hghost);


            }
            break;

        case "mummy":
            if (cpuChoice == 0) {
                //vampire
                //alert("CPU chose Vampire. You win!")

                results =  "CPU chose Vampire. You win!"
                draw(vampire, hmummy, ghost, hvampire, mummy, ghost);
            }
            else if (cpuChoice == 1) {
                //mummy
               // alert("CPU chose Mummy. It's a tie!")

                results =  "CPU chose Mummy. It's a tie!"
                draw(vampire, hmummy, ghost, vampire, hmummy, ghost);
            }
            else {
                //alert("CPU chose Scissors. You lose!")

                results =  "CPU chose Scissors. You Win!"
                draw(vampire, hmummy, ghost, vampire, mummy, hghost);
            }
            break;

        case "ghost":
            if (cpuChoice == 0) {
                //vampire
                //alert("CPU chose Vampire. You lose!")

                results =  "CPU chose Vampire. You lose!"
                draw(vampire, mummy, hghost, hvampire, mummy, ghost);
            }
            else if (cpuChoice == 1) {
                //mummy
                //alert("CPU chose Mummy. You win!")

                results =  "CPU chose Mummy. You Win!"
                draw(vampire, mummy, hghost, vampire, hmummy, ghost);
            }
            else {
                //ghost
                //alert("CPU chose Ghost. It's a tie!")

                results =  "CPU chose Ghost. You it's a tie!"
                draw(vampire, mummy, hghost, vampire, mummy, hghost);
            }
            break;
    }
    }
    
}
