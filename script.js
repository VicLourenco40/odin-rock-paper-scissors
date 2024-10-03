const OPTIONS = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    return OPTIONS[choice];
}
