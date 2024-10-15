function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';

        case 1:
            return 'paper';

        default:
            return 'scissors';
    }
}

function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    const scoreDisplay = document.querySelector('.score-display');
    const roundMessageDisplay = document.querySelector('.message-display');

    if (humanChoice === computerChoice) {
        roundMessageDisplay.innerText = `Tie! Both players picked ${capitalizeWord(humanChoice)}.`;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
               (humanChoice === 'paper' && computerChoice === 'rock') ||
               (humanChoice === 'scissors' && computerChoice === 'paper'))
    {
        humanScore++;
        roundMessageDisplay.innerText = `You win! ${capitalizeWord(humanChoice)} beats ${capitalizeWord(computerChoice)}.`;
    } else {
        computerScore++;
        roundMessageDisplay.innerText = `You lose! ${capitalizeWord(computerChoice)} beats ${capitalizeWord(humanChoice)}.`;
    }

    scoreDisplay.innerText = `Human: ${humanScore} | Computer: ${computerScore}`;

    roundsPlayed++;

    if (roundsPlayed >= 5) {
        decideWinner();
    }
}

function decideWinner() {
    const winnerDisplay = document.querySelector('.winner-display');
    const buttons = document.querySelectorAll('button');
    
    if (humanScore === computerScore) {
        winnerDisplay.innerText = 'Tie!';
    } else if (humanScore < computerScore) {
        winnerDisplay.innerText = 'You lose!';
    } else {
        winnerDisplay.innerText = 'You win!';
    }

    buttons.forEach((button) => {
        button.disabled = true;
    });
}

let humanScore = computerScore = roundsPlayed = 0;

document.querySelector('.button-rock').addEventListener('click', () => {
    playRound('rock');
});

document.querySelector('.button-paper').addEventListener('click', () => {
    playRound('paper');
});

document.querySelector('.button-scissors').addEventListener('click', () => {
    playRound('scissors');
});