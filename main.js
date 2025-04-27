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
