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

function playGame() {
    let humanScore = computerScore = 0;

    function playRound(humanChoice, computerChoice) {
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

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === computerScore) {
        console.log('Tie!');
    } else if (humanScore < computerScore) {
        console.log('You lose!');
    } else {
        console.log('You win!');
    }
}

playGame();