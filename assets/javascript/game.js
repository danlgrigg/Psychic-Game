//create array for computerChoice 

var computerChoiceArr = [
"a", "b", "c","d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
];
 //start game with scores for each variable
var wins = 0
var losses = 0
var guessesLeft = 9
var guessesSofar =[];
// var userGuess = document.onkeyup;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left");
var guessesSoFarText = document.getElementById("guesses-so-far");
//create count variable




var computerGuess = computerChoiceArr[Math.floor(Math.random()* computerChoiceArr.length)];
console.log(computerGuess);

//Create function to run whenever the user presses a key
document.onkeyup = function(event) {
    //make function for computer randomly pick a letter of the alphabet
    var userGuess = event.key;
    console.log(userGuess);
    guessesSoFar.text(userGuess);
         



    // //compare user guess to computer pick
    if (userGuess === computerChoice){
        wins++;
        alert("You really ARE psychic!!!");
        
    }

    else {
        guessesLeft--;
       
    

    }

    if (guessesLeft === 0){
        alert("You LOSE!!!");
        losses++;
    }
}
//print results to user view 

//create a reset for game after a win, or 9 wrong guesses

//create a counter to track wins, losses, guesses left, guesses so far