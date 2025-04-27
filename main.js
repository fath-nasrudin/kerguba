// returnn rock, paper, scissor
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return 'rock';
    if (randomNumber === 1) return 'paper';
    if (randomNumber === 2) return 'scissor';
}

function getHumanChoice() {
    const result = window.prompt(`Choose between 'rock', 'paper', or 'scissor'`);
    return result;
}

// output: 0 mean tie, 1 mean user win, 2 mean compute win.
function getWinner(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') return 0;
        if (computerChoice === 'paper') return 2;
        if (computerChoice === 'scissor') return 1;
    }

    if (humanChoice === 'paper') {
        if (computerChoice === 'rock') return 1;
        if (computerChoice === 'paper') return 0;
        if (computerChoice === 'scissor') return 2;
    }

    if (humanChoice === 'scissor') {
        if (computerChoice === 'rock') return 2;
        if (computerChoice === 'paper') return 1;
        if (computerChoice === 'scissor') return 0;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRoundCLI() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(humanChoice, computerChoice);

    if (winner === 0) {
        console.log('Tie');
        console.log(`Human Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }

    // human win
    if (winner === 1) {
        console.log('You win');
        console.log(`Human Score: ${++humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }

    // Computer win
    if (winner === 2) {
        console.log('Computer win');
        console.log(`Human Score: ${humanScore}`)
        console.log(`Computer Score: ${++computerScore}`)
    }
}