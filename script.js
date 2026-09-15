function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please choose rock, paper, or scissors.").toLowerCase();
    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissors") {
        return "scissors";
    } else if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;
function determineWinner(humanChoice, computerChoice) { 
    if (humanChoice === computerChoice) {
        return "It's a tie!";

    } else if (
              (humanChoice === "rock" && computerChoice === "scissors") ||
              (humanChoice === "paper" && computerChoice === "rock") ||
              (humanChoice === "scissors" && computerChoice === "paper")
              ) {
            humanScore++;
            return "You Win!";
    }
    else if (
              (humanChoice === "rock" && computerChoice === "paper") ||
              (humanChoice === "paper" && computerChoice === "scissors") ||
              (humanChoice === "scissors" && computerChoice === "rock")
             ) {
                computerScore++;
                return "You Lose!";
    }
}

function playRound(rounds) {
    for (let i = 0; i < rounds; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = determineWinner(humanChoice, computerChoice);
        console.log("You chose: " + humanChoice + "|rock Computer chose: " + computerChoice);
        console.log(result);
        console.log("Your score: " + humanScore + " | Computer score: " + computerScore);
        if (result === "You Win!") {
            console.log("Congratulations! You won this round.");
        } else if (result === "You Lose!") {
            console.log("Sorry! You lost this round.");
        } else {
            console.log("It's a tie! No points awarded.");
        }
    }
}

playRound(5);