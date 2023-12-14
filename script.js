const choices = ['rock', 'paper', 'scissors'];

function makeChoice(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    
    displayResult(playerChoice, computerChoice, result);
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function displayResult(playerChoice, computerChoice, result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}
/* Existing JavaScript */

function displayResult(playerChoice, computerChoice, result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    
    displayChoiceIcon('playerChoiceIcon', playerChoice);
    displayChoiceIcon('computerChoiceIcon', computerChoice);
}

function displayChoiceIcon(elementId, choice) {
    const iconElement = document.getElementById(elementId);

    switch (choice) {
        case 'rock':
            iconElement.innerHTML = '<i class="fas fa-hand-rock"></i>';
            break;
        case 'paper':
            iconElement.innerHTML = '<i class="fas fa-hand-paper"></i>';
            break;
        case 'scissors':
            iconElement.innerHTML = '<i class="fas fa-hand-scissors"></i>';
            break;
        default:
            iconElement.innerHTML = '';
    }
}
/* Existing JavaScript */

function displayResult(playerChoice, computerChoice, result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    
    displayChoiceIcon('playerChoiceIcon', playerChoice);
    displayChoiceIcon('computerChoiceIcon', computerChoice);
}

function displayChoiceIcon(elementId, choice) {
    const iconElement = document.getElementById(elementId);

    // Create a new div for the icon
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('choice-icon');

    // Set the content based on the chosen option
    switch (choice) {
        case 'rock':
            iconDiv.innerHTML = '<i class="fas fa-hand-rock"></i>';
            break;
        case 'paper':
            iconDiv.innerHTML = '<i class="fas fa-hand-paper"></i>';
            break;
        case 'scissors':
            iconDiv.innerHTML = '<i class="fas fa-hand-scissors"></i>';
            break;
        default:
            return; // Do nothing if the choice is invalid
    }

    // Clear the existing content and append the new icon div
    iconElement.innerHTML = '';
    iconElement.appendChild(iconDiv);
}

