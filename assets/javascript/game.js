//create array for computerChoice 

var computerChoiceArr = [
"a", "b", "c","d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
];
 //start game with scores for each variable

var wins = 0
var losses = 0
var guessesLeft = 9
var guessesSoFar =[];
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
    guessesSoFar.push(userGuess);
         

    
    
    // //compare user guess to computer pick
    //create a counter to track wins, losses, guesses left, guesses so far
    
    if (userGuess === computerGuess){
        wins++;
        alert("You really ARE psychic!!! I was thinking of the letter " + (computerGuess) + ".");
        guessesSoFar=[];        
        guessesLeft=9;

        }

    else {
        guessesLeft--;
       
        }

    if (guessesLeft === 0){
        alert("You LOSE!!!  You're really bad at this...");
        losses++;
        guessesSoFar=[];        
        guessesLeft=9;
    }
    
    //print results to user view 
    guessesSoFarText.textContent = guessesSoFar;
    guessesLeftText.textContent = guessesLeft;
    winsText.textContent = wins;
    lossesText.textContent = losses;
}

//create a reset for game after a win, or 9 wrong guesses
