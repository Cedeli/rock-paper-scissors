let rounds = 0
let humanScore = 0;
let computerScore = 0;

let humanChoice;
let computerChoice;

function getComputerChoice() 
{
    switch(Math.floor(Math.random() * 3))
    {
        case 0:
            console.log("Computer chose: rock!")
            return "rock";
        case 1:
            console.log("Computer chose: paper!")
            return "paper";
        case 2:
            console.log("Computer chose: scissors")
            return "scissors"
        default:
            console.log("Computer chose: rock!")
            return "rock";
    }
}

function getHumanChoice() 
{
    let answer = prompt("Pick your choice: ");
    console.log("You chose: " + answer + "!");
    return answer;
}       

function playRound(humanChoice, computerChoice) 
{
    let lower = humanChoice.toLowerCase();

    let tie = lower.localeCompare(computerChoice) === 0;
    let hRock = lower.localeCompare("rock") === 0;
    let hScissors = lower.localeCompare("scissors") === 0;
    let hPaper = lower.localeCompare("paper") === 0;
    let cRock = computerChoice.localeCompare("rock") === 0;
    let cPaper = computerChoice.localeCompare("paper") === 0;
    let cScissors = computerChoice.localeCompare("scissors") === 0;
    
    if (tie) 
    {
        console.log("It's a tie!");
    } 
    else if (
        (hRock && cScissors) ||
        (hScissors && cPaper) ||
        (hPaper && cRock)
    )
    {
        humanScore++;
        console.log("You win!");
    }
    else 
    {
        computerScore++;
        console.log("Computer wins!");
    }

    rounds++;
}

function playGame() 
{
    rounds = 0;
    humanScore = 0;
    computerScore = 0;

    while (rounds < 5)
    {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    let winner = humanScore >= computerScore ? "Player" : "Computer";
    console.log("Game is over, " + winner + " wins!")
}