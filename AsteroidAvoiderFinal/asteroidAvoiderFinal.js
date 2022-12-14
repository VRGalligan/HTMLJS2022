var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var gameOver = true;
var score = 0;
var highScore = 0;
var currentState = 0;
var gameState = [];

//asteroid variables
var numAsteroids = 20;
var asteroids = [];

//Player Ship variables
var ship = new PlayerShip();
var shipWidth = 200;
var shipHeight = 190;
var shipPOS = 3;

var shipSprite= new Image();
shipSprite.src = "images/spaceship.png";

var asteroidRock = new Image();
asteroidRock.src = "images/rock.png";

var startScreen = new Image();
startScreen.src = "images/startScreenStarWars.png";

var endScreen = new Image();
endScreen.src = "images/gameOverStarWars.png";

startScreen.onload = function(){
        main();
}


//create keyboard event handlers
document.addEventListener("keydown", pressKeyDown);
document.addEventListener("keyup", pressKeyUp);

function pressKeyDown(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            //code for up W
            ship.up = true;



        }
        if (e.keyCode == 65) {
            //code for left A
            ship.left = true;



        }

        if (e.keyCode == 68) {
            //code for right D
            ship.right = true;



        }
        if (e.keyCode == 83) {
            //code for down  S

            ship.down = true;

        }
        //arrows
        if (e.keyCode == 38) {
            //code for up W
            ship.up = true;



        }
        if (e.keyCode == 37) {
            //code for left A
            ship.left = true;



        }

        if (e.keyCode == 39) {
            //code for right D
            ship.right = true;



        }
        if (e.keyCode == 40) {
            //code for down  S

            ship.down = true;

        }
    }
//Menu inputs use spacebar
    if(gameOver){
        if(e.keyCode == 32){
            if(currentState == 2){
                //game over inputs
                currentState = 0;
                numAsteroids = 20;
                asteroids = [];
                score = 0;
                //start game here
                
                main();
            }else{
                //main menu inputs
                gameStart();
                currentState = 1;
            gameOver = false;
            main();
            scoreTimer();
            }
            
            
            
        }
    }

}

function pressKeyUp(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            //code for up W
            ship.up = false;


        }
        if (e.keyCode == 65) {
            //code for left A

            ship.left = false

        }

        if (e.keyCode == 68) {
            //code for right D

            ship.right = false


        }
        if (e.keyCode == 83) {
            //code for down  S

            ship.down = false;

        }

        //arrows
        if (e.keyCode == 38) {
            //code for up W
            ship.up = false;


        }
        if (e.keyCode == 37) {
            //code for left A

            ship.left = false

        }

        if (e.keyCode == 39) {
            //code for right D

            ship.right = false


        }
        if (e.keyCode == 40) {
            //code for down  S

            ship.down = false;

        }
    }

}


//asteroid class
function Asteroid() {
    //properties to draw the asteroid
    this.radius = randomRange(15, 2);
    this.x = randomRange(canvas.width - this.radius, this.radius);
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height;
    this.vy = randomRange(10, 5);
    this.color = "white";
    
    
    //methods (functions) to draw asteroid
    this.drawAsteroid = function () {
        ctx.save();
        // ctx.beginPath();
        // ctx.fillStyle = this.color;
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        // ctx.closePath();
        // ctx.fill();
        ctx.drawImage(asteroidRock, this.x - this.radius, this.y-this.radius, this.radius *2, this.radius *2);
        ctx.restore();
        


    }

}

function PlayerShip() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.width = 40;
    this.height = 40;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.vx = 0;
    this.vy = 0;
    this.flameLength = 30;


    this.drawShip = function () {
        ctx.save();
        ctx.translate(this.x, this.y);

        //draw the thruster
        if(this.up || this.left || this.right){
            ctx.save();
            if(this.flameLength == 30){
                this.flameLength = 20;
                ctx.fillStyle = "yellow";

            }else{
                this.flameLength = 30;
                ctx.fillStyle = "orange";
            }

            //draw the flame
            ctx.beginPath();
            ctx.moveTo(0, this.flameLength);
            ctx.lineTo(5, 5);
            ctx.lineTo(-5, 5);
            ctx.lineTo(0, this.flameLength);
            ctx.closePath();
            ctx.fill();
            ctx.restore();

        }

        //draw the ship
     //   ctx.fillStyle = "red";
    //    ctx.beginPath();
    //     ctx.moveTo(0, -10);
    //    ctx.lineTo(10, 10);
    //    ctx.lineTo(-10, 10);
    //    ctx.lineTo(0, -10);
    //    ctx.closePath();
    //    ctx.fill();
       ctx.restore();
       ctx.drawImage(shipSprite, this.x - this.width/2, this.y - this.height/2 , this.width, this.height );
    }

    this.moveShip = function () {
        this.x += this.vx;
        this.y += this.vy;

        //adding boundaries for the screen
        //bottom
        if (this.y > canvas.height - this.height / 2) {
            this.y = canvas.height - this.height / 2;
            this.vy = 0;
        }
        //top boundry
        if (this.y < this.height / 2) {
            this.y = this.height / 2;
            this.vy = 0;
        }

        //adding boundaries for the screen
        //right
        if (this.x > canvas.width - this.width / 2) {
            this.x = canvas.width - this.width / 2;
            this.vy = 0;
        }
        //left boundry
        if (this.x < this.width / 2) {
            this.x = this.width / 2;
            this.vx = 0;
        }
    }
}



function main() {
    //clear the canvas
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

    gameState[currentState]();

    if (!gameOver) {
        //refresh the screen
        timer = requestAnimationFrame(main);

    }

   

}

//Game State Machine

//Main Menu State
gameState[0] = function(){
    //code for main menu
    ctx.save();
    ctx.drawImage(startScreen, 0,0,canvas.width,canvas.height);
    //ctx.font = "30px Arial";
    //ctx.fillStyle = "white";
    //ctx.textAlign = "center";
    //ctx.fillText("Asteroid Avoider", canvas.width/2, canvas.height/2 - 30);
    //ctx.font = "15px Arial";
    //ctx.fillText("Press Space to Start", canvas.width/2, canvas.height/2 + 20);
   ctx.restore();
    
}

//Play Game State
gameState[1] = function(){
    //code for asteroid game

    
    //draw score to screen
    ctx.save();
   ctx.font = "15px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${score}`, canvas.width -150, 30)
    ctx.restore();
    //ctx.drawImage(endScreen, canvas.width -150, 30)

    //vertical movement
    if (ship.up) {
        ship.vy = -10;
    } else {
        ship.vy = 3;
    }

    //horizontial movement
    if (ship.left) {
        ship.vx = -5;
    } else if (ship.right) {
        ship.vx = 5;
    } else {
        ship.vx = 0;
    }
    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var distance = Math.sqrt((dX * dX) + (dY * dY));

        //collision detection happens here
        if (detectCollision(distance, (ship.height / 2 + asteroids[i].radius))) {
            // console.log("Hit Asteroid")
            //alert("Hit Asteroid")
            gameOver = true;
            currentState = 2;
            main();
            return;

        }

        if (asteroids[i].y > canvas.height + asteroids[i].radius) {
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height;
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius)
        }


        asteroids[i].y += asteroids[i].vy;
        asteroids[i].drawAsteroid();


    }

    //draw ship
    ship.moveShip();
    ship.drawShip();

    //adds asteroids to game as time goes on
    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid());
    }

}

//Game Over State
gameState[2] = function(){
    ctx.drawImage(endScreen, 0,0,canvas.width,canvas.height);
    if(score > highScore){
        highScore = score;

        //code for game over menu
        ctx.save();
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Your Score Was: " + score.toString(), canvas.width/2, canvas.height/2 - 60);
        ctx.fillText("Your High Score is: " + highScore.toString(), canvas.width/2, canvas.height/2 - 30);
        ctx.fillText("New Record! ",  canvas.width/2, canvas.height/2);
        //ctx.font = "15px Arial";
       // ctx.fillText("Press Space to Play Again ", canvas.width/2, canvas.height/2 + 20);
        ctx.restore();
        // ctx.drawImage (endScreen)

    }else{
         //code for game over menu
         ctx.save();
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Game Over! Your Score Was: " + score.toString(), canvas.width/2, canvas.height/2 - 60);
       ctx.fillText("Your High Score is: " + highScore.toString(), canvas.width/2, canvas.height/2 - 30);
        ctx.font = "15px Arial";
       // ctx.fillText("Press Space to Play Again ", canvas.width/2, canvas.height/2 + 20);
        ctx.restore();
       
    }
   
}

//Utility functions

function gameStart(){
    //for loop to instantiate asteroids for game
for (var i = 0; i < numAsteroids; i++) {
    asteroids[i] = new Asteroid();
}

ship = new PlayerShip();
}

function randomRange(high, low) {
    return Math.random() * (high - low) + low;
}

function detectCollision(distance, calcDistance) {
    return distance < calcDistance;
}

function scoreTimer(){
    if(!gameOver){
        score++;

        if(score % 5 == 0){
            numAsteroids += 5;
            console.log(numAsteroids);

        }

        //calls scoreTimer every second
        setTimeout(scoreTimer, 1000);
    }
}
//temp call score function
//scoreTimer();