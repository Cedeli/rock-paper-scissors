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

const scoreDisplayHuman = document.querySelector(".score#human");
const scoreDisplayComputer = document.querySelector(".score#computer");
const scoreLabelHuman = document.querySelector(".score-label#human");
const scoreLabelComputer = document.querySelector(".score-label#computer");
function playRound(humanChoice, computerChoice) {
    scoreLabelHuman.setAttribute("style", "color:black");
    scoreLabelComputer.setAttribute("style", "color:black");

    if (humanChoice === computerChoice) {
        scoreLabelHuman.setAttribute("style", "color:orange");
        scoreLabelComputer.setAttribute("style", "color:orange");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        scoreDisplayHuman.innerText = humanScore;
        scoreLabelHuman.setAttribute("style", "color:green");
    } else {
        computerScore++;
        scoreDisplayComputer.innerText = computerScore;
        scoreLabelComputer.setAttribute("style", "color:green");
    }
}

const choices = document.querySelectorAll(".choice");
choices.forEach((button) =>{ 
    button.addEventListener("click", (e) => {
        playRound(button.id, getComputerChoice());
    });
});