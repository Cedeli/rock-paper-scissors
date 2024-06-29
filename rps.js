let humanScore = 0;
let computerScore = 0;
let finished = false;
const rounds = 5;

const scoreDisplayHuman = document.querySelector(".score#human");
const scoreDisplayComputer = document.querySelector(".score#computer");
const scoreLabelHuman = document.querySelector(".score-label#human");
const scoreLabelComputer = document.querySelector(".score-label#computer");
const choices = document.querySelectorAll(".choice");
const victoryLabel = document.querySelector(".victory-label")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    if (finished) resetGame();

    scoreLabelHuman.setAttribute("style", "color:black");
    scoreLabelComputer.setAttribute("style", "color:black");

    updateScore(humanChoice, computerChoice);

    if (humanScore >= rounds) {
        victoryLabel.innerText = "Player Wins!";
        finished = true;
    } else if (computerScore >= rounds) {
        victoryLabel.innerText = "Computer Wins!";
        finished = true;
    }
}

function updateScore(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        scoreLabelHuman.setAttribute("style", "color:orange");
        scoreLabelComputer.setAttribute("style", "color:orange");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        scoreLabelHuman.setAttribute("style", "color: green");
    } else {
        computerScore++;
        scoreLabelComputer.setAttribute("style", "color: green");
    }

    showScore();
}

function showScore() {
    scoreDisplayHuman.innerText = humanScore;
    scoreDisplayComputer.innerText = computerScore;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    victoryLabel.innerText = "";
    scoreDisplayHuman.innerText = humanScore;
    scoreDisplayComputer.innerText = computerScore;
    finished = false;
}

choices.forEach((button) =>{ 
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});