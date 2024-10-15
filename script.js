const GAME_ROUNDS = 5;

let humanScore = computerScore = roundsPlayed = 0;

const roundDisplay = document.querySelector('.round');
const humanScoreDisplay = document.querySelector('.score-human');
const computerScoreDisplay = document.querySelector('.score-computer');
const messageDisplay = document.querySelector('.message');
const buttons = document.querySelectorAll('.buttons > button');

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

function changeBoxColor(element, color = null) {
    element.classList.remove('red', 'green', 'blue');

    if (color === 'red' || color === 'green' || color === 'blue') {
        element.classList.add(color);
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        messageDisplay.innerText = `Tie! Both players picked ${capitalizeWord(humanChoice)}.`;
        changeBoxColor(messageDisplay, 'blue');
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
               (humanChoice === 'paper' && computerChoice === 'rock') ||
               (humanChoice === 'scissors' && computerChoice === 'paper'))
    {
        humanScoreDisplay.innerText = `Human: ${++humanScore}`;
        messageDisplay.innerText = `You win! ${capitalizeWord(humanChoice)} beats ${capitalizeWord(computerChoice)}`;
        changeBoxColor(messageDisplay, 'green');
    } else {
        computerScoreDisplay.innerText = `Computer: ${++computerScore}`;
        messageDisplay.innerText = `You lose! ${capitalizeWord(computerChoice)} beats ${capitalizeWord(humanChoice)}`;
        changeBoxColor(messageDisplay, 'red');
    }

    if (++roundsPlayed < GAME_ROUNDS) {
        roundDisplay.innerText = `Round ${roundsPlayed + 1}/${GAME_ROUNDS}`;
    } else {
        endGame();
    }
}

function endGame() {
    if (humanScore === computerScore) {
        roundDisplay.innerText = 'Tie!';
        changeBoxColor(roundDisplay, 'blue');
    } else if (humanScore < computerScore) {
        roundDisplay.innerText = 'You lose!';
        changeBoxColor(roundDisplay, 'red');
    } else {
        roundDisplay.innerText = 'You win!';
        changeBoxColor(roundDisplay, 'green');
    }

    buttons.forEach((button) => {
        button.disabled = true;
        changeBoxColor(button);
    })
}

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const humanChoice = event.target.id;
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    })
});
