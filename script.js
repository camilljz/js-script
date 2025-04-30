
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

function getHumanChoice() {
    svar = prompt("Skriv inn rock, paper eller scissors", "input")
    svar.toLowerCase()
    if (svar == "rock" || svar == "paper" || svar == "scissors") {
        return svar
    }
}



function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (
            (humanChoice == "rock" && computerChoice == "paper") || 
            (humanChoice == "scissors" && computerChoice == "rock") ||
            (humanChoice == "paper" && computerChoice == "scissors")) 
            {
                computerScore += 1
                console.log("You lose, computers choice "+computerChoice+" beats "+humanChoice+".")
            }
    
        else if (humanChoice == computerChoice) {
            console.log("No one wins, you drew the same.")
        }
        
        else {
            humanScore += 1
            console.log("You win, human choice "+humanChoice+" beats "+computerChoice+".")
        }
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    
    for (let i = 1; i < 6; i++) {
        playRound(humanSelection, computerSelection)
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
    }

    console.log("Final Score: \nHuman: "+humanScore+"\nComputer: "+computerScore)

    
}
playGame()