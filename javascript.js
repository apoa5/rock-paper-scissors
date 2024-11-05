//Declare global variables
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Select the DOM elements
const userScoreElement = document.querySelector('.userScore');
const computerScoreElement = document.querySelector('.computerScore');
const nextRoundIcon = document.getElementById('nextRound');
const roundWinner = document.querySelector('.roundWinner');

// Get user and computer game areas
const userGameArea = document.querySelector('.userGameArea');
const computerGameArea = document.querySelector('.computerGameArea');

// Store human choice from the UI
let humanChoice = '';

// Event listeners for user's choice
document.querySelector('.rock').addEventListener('click', () => selectChoice('rock'));
document.querySelector('.paper').addEventListener('click', () => selectChoice('paper'));
document.querySelector('.scissors').addEventListener('click', () => selectChoice('scissors'));

// Function to handle user selection and initiate the round
function selectChoice(choice) {
    humanChoice = choice;
    displayChoice(userGameArea, choice); // Show user's choice
    const computerChoice = getComputerChoice(); // Show computer's choice
    playRound(humanChoice, computerChoice); // Play the round after both choices are displayed
  
}

// Display the selected choice (human or computer) in the game area
function displayChoice(area, choice) {
    area.innerHTML = ''; // Clear area to display only the selected choice
    area.classList.add('centered-choice');

    const choiceImg = document.createElement('img');
    choiceImg.src = `assets/${choice}.png`;
    choiceImg.alt = choice;
    choiceImg.style.width = '150px'; // Enlarge chosen icon
    area.appendChild(choiceImg);
}

// Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    displayChoice(computerGameArea, computerChoice); // Display computer's choice
    return computerChoice;
}

// Play a single round, update scores, and prepare for the next round
function playRound(human, computer) {
    roundWinner.classList.add('roundWinner');
    if ((human === 'rock' && computer === 'scissors') ||
        (human === 'paper' && computer === 'rock') ||
        (human === 'scissors' && computer === 'paper')) {
        humanScore++;
        roundWinner.textContent="You win this round!";
    } else if (human === computer) {
        roundWinner.textContent="It's a tie";
    } else {
        computerScore++;
        roundWinner.textContent="You lose this round!";
    }

    // Update scores in the UI
    userScoreElement.classList.add('userScore');
    computerScoreElement.classList.add('computerScore');
    userScoreElement.textContent = `${humanScore}`;
    computerScoreElement.textContent = `${computerScore}`;

    // Increase rounds played and check if the game has finished
    roundsPlayed++;
    if (roundsPlayed === 5) {
        // Delay declaring the winner to allow the final choice display and score update
        setTimeout(declareWinner, 300); // Adjust delay as needed
    }
}


// Trigger the next round and reset choices
nextRoundIcon.addEventListener('click', () => {
    if (roundsPlayed < 5) {
        resetChoices(); // Reset the choices for the next round
    }
});

// Display game result after 5 rounds
function declareWinner() {
    if (humanScore > computerScore){
        alert("You win!");
    }
    else if (humanScore === computerScore) {
        alert("It's a tie!")
    }
    else {
        alert("You lose!")
    }
    resetGame();
}

// Reset the game state for replay
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    userScoreElement.textContent='0';
    computerScoreElement.textContent='0';
    resetChoices();
}

// Reset choices in the game area to the original options
function resetChoices() {
    // Reset user and computer game areas
    userGameArea.classList.remove('centered-choice'); // Remove the centered class
    userGameArea.innerHTML = `
        <div class="rock"><img src="assets/rock.png" alt="Rock"></div>
        <div class="paper"><img src="assets/paper.png" alt="Paper"></div>
        <div class="scissors"><img src="assets/scissors.png" alt="Scissors"></div>
    `;
    computerGameArea.innerHTML = `<div class="computer"><img src="assets/desktop.png" alt="Computer"></div>`;
    roundWinner.textContent='Select Rock, Paper, or Scissors to start game!';
  

    // Reattach event listeners to the reset options
    document.querySelector('.rock').addEventListener('click', () => selectChoice('rock'));
    document.querySelector('.paper').addEventListener('click', () => selectChoice('paper'));
    document.querySelector('.scissors').addEventListener('click', () => selectChoice('scissors'));
}
