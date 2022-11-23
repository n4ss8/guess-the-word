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
                showGuessedLetters();
                updateWordInProgress(guessedLetters);
            }
        };

const updatedGuesses = function ()  {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement.apply("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};
const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const showWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            showWord.push(letter.toUpperCase());
        } else {
            showWord.push("●");
        }
    }
    //console.log(showWord);
    wordInProgress.innerText = showWord.join("");
    checkWin();
};
const checkWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the word correct! yay!</p>`;
    }
};