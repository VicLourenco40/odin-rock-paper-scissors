let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let input;

    while (input !== 'rock' &&
           input !== 'paper' &&
           input !== 'scissors')
    {
        input = prompt('Rock, Paper or Scissors?').toLowerCase();
    }

    return input;
}

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie! Both players picked ${capitalizeWord(humanChoice)}.`);
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
             (humanChoice === 'paper' && computerChoice === 'rock') ||
             (humanChoice === 'scissors' && computerChoice === 'paper'))
    {
        humanScore++;
        console.log(`You win! ${capitalizeWord(humanChoice)} beats ${capitalizeWord(computerChoice)}.`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${capitalizeWord(computerChoice)} beats ${capitalizeWord(humanChoice)}.`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);