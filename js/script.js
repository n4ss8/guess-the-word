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