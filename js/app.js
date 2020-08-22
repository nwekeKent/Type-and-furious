window.addEventListener("load", init);

const levels = {
    easy: 5,
    medium: 3,
    hard: 2,
};

let current = levels.easy;

let time = current
let score = 0;
let isPlaying;

// Array of words
const words = [
    "javascript",
    "sigh",
    "tense",
    "airplane",
    "ball",
    "pies",
    "juice",
    "warlike",
    "bad",
    "north",
    "dependent",
    "steer",
    "silver",
    "highfalutin",
    "superficial",
    "quince",
    "eight",
    "feeble",
    "admit",
    "drag",
    "loving",
    "angular",
    "microflora",
    "inane",
    "synthetic",
    "yeast",
    "languid",
];

const second = document.querySelector("#seconds");
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const message = document.querySelector("#message");
const timeDisplay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");
const difficultySelect = document.querySelector("#difficulty");

function init() {
    // Load random word from array of words
    showWord(words);
    seconds.innerHTML = current;
    wordInput.addEventListener("input", startMatch);
    setInterval(countdown, 1000);
    setInterval(checkGameStatus, 50);
    Difficulty();
}

function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = current + 1;
        score++;
        wordInput.value = "";
        showWord(words);
        message.style.color = "green";
    }

    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "Correct!!!";
        return true;
    } else {
        message.innerHTML = "";
        return false;
    }
}

function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }

    timeDisplay.innerHTML = time;
}

function checkGameStatus() {
    if (isPlaying === false && time === 0) {
        message.innerHTML = "Game Over!!!!!";
        message.style.color = "red";
        score = -1;
    }
}

function Difficulty() {
    if (difficulty.value === "medium") {
        defaultLevel = levels.meduim;
    } else if (difficulty.value === "hard") {
        currentLevel = levels.hard;
    } else {
        currentLevel = levels.easy;
    }
}