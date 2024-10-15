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
    const roundMessageDisplay = document.querySelector('.round-message-display');

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
}

/*function playGame() {
    if (humanScore === computerScore) {
        console.log('Tie!');
    } else if (humanScore < computerScore) {
        console.log('You lose!');
    } else {
        console.log('You win!');
    }
}*/

let humanScore = computerScore = 0;

document.querySelector('.button-rock').addEventListener('click', () => {
    playRound('rock');
});

document.querySelector('.button-paper').addEventListener('click', () => {
    playRound('paper');
});

document.querySelector('.button-scissors').addEventListener('click', () => {
    playRound('scissors');
});