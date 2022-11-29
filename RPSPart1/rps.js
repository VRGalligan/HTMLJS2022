
//Array of words

var canvas =  document.getElementById ("c");
//var ctx = canvas.getContext ("2d");
var rps = ["Rock", "Paper", "Scissors"];
rps[0] = `Rock` 
rps[1] = `Paper`
rps[2] = `Scissors`

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function(e){
    play(0)
})
btn[1].addEventListener(`click`, function(e){
    play(1)
})
btn[2].addEventListener(`click`, function(e){
    play(2)
})

//alert("Select rock, paper, or scissors!");
//var rps = ["rock", "paper", "scissors"];
//console.log(rps[0]);

//document.getElementById("rock").addEventListener('click', function (e) {
    //alert("You picked " + rps[0]);
  //  playGame(rps[0]);
//});
//document.getElementById("paper").addEventListener('click', function (e) {
    //alert("You picked " + rps[1])
    //playGame(rps[1]);
//});
//document.getElementById("scissors").addEventListener('click', function (e) {
    //alert("You picked " + rps[2])
    //playGame(rps[2]);
//});

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice)
{
    var cChoice = Math.floor(Math.random()*2.999999)
    
    alert(rps[pChoice] + " " + rps[cChoice]) 

    switch(pChoice){
        case 0:
            if(cChoice === 0)
            {
                //display a tie
                alert(`You Tied`)
            }
            else if(cChoice === 1)
            {
                //display a loss
                alert(`You Lost`)
            }
            else
            {
                //display a win
                alert(`You Won`)
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                    //display a tie
                    alert(`You Win`)
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    alert(`Tie`)
                }
                else
                {
                    //display a win
                    alert(`You Lost`)
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                    //display a tie
                    alert(`You Lost`)
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    alert(`You Win`)
                }
                else
                {
                    //display a win
                    alert(`You Tie`)
                }
             break;
    }
}