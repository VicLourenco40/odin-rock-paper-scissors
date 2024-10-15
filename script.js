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
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log(`Tie! Both players picked ${capitalizeWord(humanChoice)}.`);
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
               (humanChoice === 'paper' && computerChoice === 'rock') ||
               (humanChoice === 'scissors' && computerChoice === 'paper'))
    {
        humanScore++;
        console.log(`You win! ${capitalizeWord(humanChoice)} beats ${capitalizeWord(computerChoice)}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${capitalizeWord(computerChoice)} beats ${capitalizeWord(humanChoice)}.`);
    }
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