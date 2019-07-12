let wordBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let playerWins = 0;
let playerLosses = 0;
let playerGuessesRemaining = 5;
let playerGuesses = [];

document.onkeyup = function (event) {
    console.log(event.key)

    let userGuess = event.key
    let computerGuess = wordBank[Math.floor(Math.random() * wordBank.length)];

    console.log(computerGuess);
    console.log(playerWins);
    console.log(playerLosses);
    console.log(playerGuessesRemaining);



    if (userGuess === computerGuess) {
        playerGuessesRemaining = 5;
        playerWins++;
        playerGuesses = [];
        alert("Yay, you have WON!!")
    }

    else {
        playerGuessesRemaining--
        playerGuesses.push(userGuess);
    };



    if (playerGuessesRemaining === 0) {
        playerLosses++;
        playerGuessesRemaining = playerGuessesRemaining + 5;
        playerGuesses = [];
        alert("Sorry, you have lost!")
    }


    document.getElementById('wins').innerHTML = 'Wins: ' + playerWins;
    document.getElementById('losses').innerHTML = 'Losses: ' + playerLosses;
    document.getElementById('guessesLeft').innerHTML = 'Guesses Remaining: ' + playerGuessesRemaining;
    document.getElementById('LettersGuessed').innerHTML = 'Guesses So Far: ' + playerGuesses;
}
