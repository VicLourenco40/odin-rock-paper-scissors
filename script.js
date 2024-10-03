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

function getHumanChoice() {
    let input;

    while (input !== 'rock' &&
           input !== 'paper' &&
           input !== 'scissors')
    {
        input = prompt('Rock, paper or scissors?').toLowerCase();
    }

    return input;
}