let rounds = 0;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    console.log("Computer chose: " + computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    const answer = prompt("Pick your choice: ");
    console.log("You chose: " + answer);
    return answer.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log("You win!");
    } else {
        computerScore++;
        console.log("Computer wins!");
    }
    rounds++;
}

const choices = document.querySelectorAll(".choice");
choices.forEach((button) =>{ 
    button.addEventListener("click", (e) => {
        playRound(button.id, getComputerChoice());
    });
});