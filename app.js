"use strict";

const startGameBtn = document.getElementById('start-game-btn');

// Global constants for the game selections
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW'
const RESULT_WIN = 'YOU WIN'
const RESULT_LOSE = 'YOU LOSE'

let gameIsRunning = false;

// checks the validity of choice and alerts if choice is invalid
const getPlayerChoice = () => {
    const selection = prompt(`Pick one: ${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

// generates a random choice for the computer based on the outcome of Math.random
const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 6.7) {
       return PAPER;
    } else {
        return SCISSORS;
    }
}

// logic behind winner choice
const getWinner = (cChoice, pChoice) =>
    cChoice === pChoice
        ? RESULT_DRAW : (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
            ? RESULT_WIN
            : RESULT_LOSE;

//     if(cChoice === pChoice) {
//         return RESULT_DRAW;
//     } else if (
//         cChoice === ROCK && pChoice === PAPER ||
//         cChoice === PAPER && pChoice === SCISSORS ||
//         cChoice === SCISSORS && pChoice === ROCK
//     ) {
//         return RESULT_WIN;
//     }else {
//         return RESULT_LOSE;
//     }
// }

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(getComputerChoice, getPlayerChoice);
    console.log(computerChoice);
    console.log(playerSelection);
    console.log(winner);
});

