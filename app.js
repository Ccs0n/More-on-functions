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
        selection !== SCISSORS ||
        selection === null
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return;
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
// const getWinner = (cChoice, pChoice) =>
//     cChoice === pChoice
//         ? RESULT_DRAW : (cChoice === ROCK && pChoice === PAPER) ||
//         (cChoice === PAPER && pChoice === SCISSORS) ||
//         (cChoice === SCISSORS && pChoice === ROCK)
//             ? RESULT_WIN
//             : RESULT_LOSE;
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
    if(cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK
    ) {
        return RESULT_WIN;
    }else {
        return RESULT_LOSE;
    }
}
// Start game button and game
startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice(); // might be undefined
    const computerChoice = getComputerChoice();
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice);
    }
    // console.log(computerChoice);
    // console.log(playerSelection);
    // console.log(winner);

    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `
    if(winner === RESULT_DRAW) {
        message = message + 'had a draw.';
    } else if (winner === RESULT_WIN) {
        message = message + 'won';
    } else {
        message = message + 'lose';
    }
    alert(message);
    gameIsRunning = false;
});

//   --------    -------------     ----------    ------------     ------------

// EXTRA SECTION ABOUT ADDING AND SUBTRACTING

const combine = (resultHandler, operation, ...numbers) => {

    const validateNumber = number => {
        return isNaN(number) ? 0 : number;
    };
    let sum = 0;
    for (const num of numbers) {
        if (operation === 'ADD') {
            sum += validateNumber(num);
        } else{
            sum -= validateNumber(num);
        }
    }
    resultHandler(sum);
};


const showResult = (messageText, result) => {
    alert(messageText + ' ' + result)
}

console.log(combine(showResult.bind(this, 'The result after adding all the numbers is'), 'ADD', 3, 29, 84, 4, 7, 9));
console.log(combine(showResult.bind(this, 'The result after adding all the numbers is'), 'ADD', 3, 29, 84, 'Hi', 9, -12, 173, 33));
console.log(combine(showResult.bind(this, 'The result after subtracting all the numbers is'), 'SUBTRACT', 1, 3, 29, -12, 173, 33));
