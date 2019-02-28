var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// This is gonna count how many times you won
var wins =0;
// This is gonna count how many times you lost
var losses =0;
// This is how many guesses you have left
var guessesleft = 13;
// This is what letters you have guessed so far
var lettersguessed = [];
// The computer picks a random letter
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];



// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
// "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// // Updated wins
// function winsupdate() {
//     wins++;
// }

// // Updated losses
// function lossupdate() {
//     losses++;
// }

// // Updated guesses
// function guessupdate() {
//     guessesleft--;
// }

// // Computer guess
// function computerguessupdate() {
    
// }

// function reset() {
//     // resets the guessesleft
//     guessesleft = 13;
//     // resets the array of guessed[]
//     lettersguessed = [];

// 
document.onkeyup = function(event){
    var userguess = event.key;
    var lowercase = userguess.toLowerCase();

// WINS
   if (userguess.indexOf(lowercase) !==-1) {
       if (lowercase === computerGuess){
       wins++;
       lettersguessed = [];
       guessesLeft = 13;
       console.log(computerGuess)
       }

       else {
           guessesleft--;
       }

       if (guessesleft === 0){
           losses++;
               lettersguessed = [];
               guessesleft = 13;
           }

       lettersguessed.push(event.key);    

       }


   

// When letter guessed is equal to computer guess; updates stats
// if (letterguessed == computersletter) {
//     winsupdate();
//     reset();

// }

// // When the user doesnt guess correct
// if (letterguessed !== computersletter){
//     guessesleft--
// }

// // When user runs out of guesses
// if (guessesleft <= 0){
//     reset();
//     lossupdate();

// }

// var
var html = 
"<p>win: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>guesses remaining: " + guessesleft + "</p>" +
"<p>letter guessed: " + lettersguessed + "</p>"

;

document.querySelector("#psychic").innerHTML = html;
}