


/*function getHumanChoice() {
    svar = prompt("Skriv inn rock, paper eller scissors", "input")
    svar.toLowerCase()
    if (svar == "rock" || svar == "paper" || svar == "scissors") {
        return svar
    }
}



function playGame() {
    

    let computerSelection = getComputerChoice();
    
    for (let i = 1; i < 6; i++) {
        playRound(humanSelection, computerSelection)
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
    }
    const buttons = document.querySelectorAll('.rps')
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const humanSelection = button.textContent.toLowerCase();
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection)
        })
    })
    /*playRound(humanSelection, computerSelection)
    computerSelection = getComputerChoice();

    console.log("Final Score: \nHuman: "+humanScore+"\nComputer: "+computerScore)

    
*/

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    random = Math.random()
    if (random < 0.33) {
        return "rock"
    }

    else if (random > 0.33 && random < 0.66) {
        return "paper"
    }

    else {
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    const result = document.getElementById("results")
    if (
        (humanChoice == "rock" && computerChoice == "paper") || 
        (humanChoice == "scissors" && computerChoice == "rock") ||
        (humanChoice == "paper" && computerChoice == "scissors")) 
        {
            computerScore += 1
            
            result.textContent = "You lose, computers choice "+computerChoice+" beats "+humanChoice+"."
        }

    else if (humanChoice == computerChoice) {
        result.textContent = "No one wins, you drew the same."
    }
    
    else {
        humanScore += 1
        result.textContent = "You win, human choice "+humanChoice+" beats "+computerChoice+"."
    }
    const score = document.getElementById("score")
    score.textContent = "You: "+humanScore+"\nComputer: "+computerScore
}

function playGame() {
    const buttons = document.querySelectorAll('.rps')
    buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (roundsPlayed < maxRounds) {
        const humanSelection = button.textContent.toLowerCase();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)

        roundsPlayed++
        const score = document.getElementById("score")
        if (roundsPlayed == maxRounds) {
            const final = document.createElement("p")
            final.textContent = "Game Over! Final Score: \nYou: "+humanScore+"\nComputer: "+computerScore
            score.appendChild(final)
        }

        }
        })
    })
}
let roundsPlayed = 0
const maxRounds = 5
playGame()