//create array for computerChoice 

var computerChoiceArr = [
"a", "b", "c","d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
];
 //start game with scores for each variable
var wins = 0
var losses = 0
var guessesLeft = 9
var guessesSofar =""

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-so");
var computerChoice = renderLetter(computerChoiceArr)


//Create function to run whenever the user presses a key
//make function for computer randomly pick a letter of the alphabet
document.onkeyup = function(event) {
    var userGuess = event.key();

    function renderLetter (arr) {
    
    return arr[Math.floor(Math.random()* arr.length)]
}
    console.log(renderLetter(computerChoiceArr))

    if (userGuess === computerChoice){
        wins++;
    }

    else {
        guessesLeft - 1;
        
    }

}
//compare user guess to computer pick

//print results to user view 

//create a counter to track wins, losses, guesses left, guesses so far