// This is gonna count how many times you won
var wins =0;
// This is gonna count how many times you lost
var losses =0;
// This is how many guesses you have left
var guessesleft = 13;
// This is what letters you have guessed so far
var lettersguessed = [];
// The computer picks a random letter
var computersletter = ""


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Updated wins
function winsupdate() {
    wins++;
}

// Updated losses
function lossupdate() {
    losses++;
}

// Updated guesses
function guessupdate() {
    guessesleft--;
}

// Computer guess
function computerguessupdate() {
    
}

function reset() {
    // resets the guessesleft
    guessesleft = 13;
    // resets the array of guessed[]
    lettersguessed = [];

}

// When letter guessed is equal to computer guess; updates stats
if (letterguessed == computersletter) {
    winsupdate();
    reset();

}

// When the user doesnt guess correct
if (letterguessed !== computersletter){
    guessesleft--
}

// When user runs out of guesses
if (guessesleft <= 0){
    reset();
    lossupdate();

}
