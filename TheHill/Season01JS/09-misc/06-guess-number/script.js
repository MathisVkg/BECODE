// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    var randomNumber = Math.ceil(Math.random() * 100);
    console.log(randomNumber);
    var stockGuess = 1;

    var guess = prompt("Guess number between 1 and 100");
    while (guess != randomNumber ) {
        if (guess < randomNumber) {
            guess = prompt("Your number is lower");
            stockGuess++;
        }
        else if (guess > randomNumber) {
            guess = prompt("Your number is higher");
            stockGuess++;
        }
    }
    alert("You find the number, you needed " + stockGuess + " guesses!")
})();
