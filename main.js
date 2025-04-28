// returnn rock, paper, scissor
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return 'rock';
    if (randomNumber === 1) return 'paper';
    if (randomNumber === 2) return 'scissor';
}

function getHumanChoice() {
    const result = window.prompt(`Open CLI to see the game!. 
Choose between 'rock', 'paper', or 'scissor'`);
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

function playRound(humanChoice, computerChoice) {
    const winner = getWinner(humanChoice, computerChoice);

    if (winner === 1) ++humanScore;
    if (winner === 2) ++computerScore;
    return winner;
}

function playRoundCLI() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const winner = playRound(humanChoice, computerChoice);
    if (winner === 0) {
        console.log('Tie');
        console.log(`Human Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }

    // human win
    if (winner === 1) {
        console.log('You win');
        console.log(`Human Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }

    // Computer win
    if (winner === 2) {
        console.log('Computer win');
        console.log(`Human Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }
}

function resetScore() {
    computerScore = 0;
    humanScore = 0;
}

function playGameCLI() {
    const round = 5;

    for (let i = 0; i < round; i++) {
        playRoundCLI()
    }

    if (humanScore > computerScore) {
        console.log('Congrats! You, little human, Win!!')
    } else if (humanScore < computerScore) {
        console.log('Unfortunately, you lose, little human!')
    } else {
        console.log('Draw! I think i found a though human. You are my rival now!')
    }

    resetScore();
}

function updateStatusUI(humanChoice, computerChoice, winner) {
    const humanChoiceUI = document.querySelector('#human-choice');
    const computerChoiceUI = document.querySelector('#computer-choice');
    const gameStatus = document.querySelector('#game-status');

    humanChoiceUI.textContent = humanChoice;
    computerChoiceUI.textContent = computerChoice;

    if (winner === 0) gameStatus.textContent = 'Tie!';
    if (winner === 1) gameStatus.textContent = 'You win!';
    if (winner === 2) gameStatus.textContent = 'Computer win!';
}

function updateScoreUI() {
    const humanScoreUI = document.querySelector('#human-score');
    const computerScoreUI = document.querySelector('#computer-score');
    humanScoreUI.textContent = humanScore;
    computerScoreUI.textContent = computerScore;
}

function playRoundGUI() {
}

function disableChoices() {
    const choices = document.querySelector('.choices');

    const buttons = choices.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true)
}

function showMessage(message) {
    const messageUI = document.querySelector('#message');
    messageUI.textContent = message;
}

function endGame(message) {
    disableChoices();
    showMessage(message)
}

function populateListeners() {
    const choices = document.querySelector('.choices');

    // game harus punya state running | end;
    
    choices.addEventListener('click', (e) => {
        if (e.target.classList.contains('choices-item')) {
            const humanChoice = e.target.value;
            const computerChoice = getComputerChoice();
            const winner = playRound(humanChoice, computerChoice);

            if (computerScore >= 5 || humanScore >= 5) {
                let message;    
                if (computerScore >= 5) message = 'Unfortunately, little human, you lose!. Refresh the page to fight again if you dont accept this fate';
                if (humanScore >= 5) message = 'Congrats, little human, you win!. Refresh the page to fight again, you just lucky';
                endGame(message);
            }

            updateStatusUI(humanChoice, computerChoice, winner)
            updateScoreUI();
        }
    })
}

function main() {
    populateListeners();
}

main();
