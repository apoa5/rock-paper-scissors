let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice;
    let choice = Math.random();
    console.log(choice);
    if (choice <= 0.33){
        computerChoice = "rock";
    }
    else if (choice <= 0.66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    console.log("Computer choice: " + computerChoice);
    return computerChoice;
    
}


function getHumanChoice(){
    let humanChoice;
    humanChoice = prompt("Enter your choice (rock, paper, or scissors) : ").toLowerCase();
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        alert("Please enter 'rock', 'paper', or 'scissors'");
    }
    else
    console.log("Human choice: " + humanChoice);
    return humanChoice;
}


function playRound(human, computer) {
    
    if (computer== "rock" && human == "paper"){
        console.log("You win! Computer chose rock and paper beats rock");
        humanScore += 1;
    }
    else if (computer== "rock" && human == "scissors"){
        console.log("You lose! Computer chose rock and rock beats paper");
        computerScore += 1;
    }
    else if (computer == "paper" && human == "rock"){
        console.log("You lose! Computer chose paper and paper beats rock");
        computerScore += 1;
    }
    else if (computer == "paper" && human== "scissors"){
        console.log("You win! Computer chose paper and scissors beats paper");
        humanScore += 1;
    }
    else if(computer == "scissors" && human == "rock") {
        console.log("You win! Computer chose scissors and rock beats scissors");
        humanScore += 1;
    } 
    else if (computer == "scissors" && human== "paper"){
        console.log("You lose! Computer chose scissors and scissors beats paper");
        computerScore += 1;
    }
    else {
        console.log("It's a draw");
        humanScore += 0.5;
        computerScore += 0.5;
    }

    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}




function playGame() {
    for (i = 0; i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("Congratulation! You won the game with a score of: " + humanScore + " while the computer got: " + computerScore);
    }
    else{
        console.log("You lost the game with a score of: " + humanScore + " while the computer got: " + computerScore);
    }
}

playGame();




