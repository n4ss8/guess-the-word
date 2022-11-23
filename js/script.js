const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess-button");
const inputLetter = document.querySelector(".input-letter");
const wordProgess = document.querySelector(".word-progress");
const remainingGuesses =  document.querySelector(".remaining-guesses");
const remainingGuessesSpan = document.querySelector(".remaining-guesses-span");
const message = document.quesrySelector(".message");
const playAgainButton = document.querySelector("play-again");
const word = "magnolia";

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");

    }
    wordProgress.innerText = placeHolderLetters.join("");
};
placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = inputLetter.value;
    console.log(guess);
    inputLetter.value = "";
});

const playersInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Enter a letter";
        } else if (input.length > 1) {
            message.innerText = "Enter a single letter.";
        } else if (!input.match(acceptedLetter)) {
            message.innerText = "Enter a letter from A to Z";
        } else {
            return input;
        }
        };

        const makeGuess = function (guess) {
            guess = guess.toUpperCase();
            if (guessedLetters.includes(guess)) {
                message.innerText = "Hey, you already guessed that letter!!";
            } else {
                guessedLetters.push(guess);
                console.log(guessedLetters);
            }
        };


