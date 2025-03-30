

let humanScore = 0;
let computerScore = 0;

//Reference to the body of the page
const body = document.querySelector("body");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");

button1.innerText = "Rock";
button2.innerText = "Paper";
button3.innerText = "Scissors";

const buttonContainer = document.createElement("div");

body.appendChild(buttonContainer);
buttonContainer.appendChild(button1);
buttonContainer.appendChild(button2);
buttonContainer.appendChild(button3);

//Div to display results
const resultsDiv = document.createElement("div");
body.appendChild(resultsDiv);
const playerDiv = document.createElement("div");
const computerDiv = document.createElement("div");
const playerChoice = document.createElement("h2");
const playerScore = document.createElement("p");
const computerChoice = document.createElement("h2");
const compScore = document.createElement("p");
const computerChoiceText = document.createElement("p");
resultsDiv.appendChild(playerDiv);
resultsDiv.appendChild(computerDiv);
playerDiv.appendChild(playerChoice);
computerDiv.appendChild(computerChoice);
playerDiv.appendChild(playerScore);
computerDiv.appendChild(compScore);
computerDiv.appendChild(computerChoiceText);


body.style.display = "flex";
body.style.flexDirection = "column";
buttonContainer.style.alignSelf = "center";
buttonContainer.style.marginTop = "5rem";
buttonContainer.style.marginBottom = "5rem";
/* Results Div Styling */
resultsDiv.style.backgroundColor = "grey";
resultsDiv.style.width = "50%";
resultsDiv.style.margin = "auto";
playerChoice.innerText = "Player";
computerChoice.innerText = "Computer";
playerScore.innerText = 0;
compScore.innerText = 0;
//computerChoiceText.innerText = "Rock";
playerDiv.style.display = "flex";
playerDiv.style.width = "20rem";
playerDiv.style.alignItems = "center";
playerDiv.style.gap = "3rem";
playerDiv.style.justifyContent = "space-evenly";
computerDiv.style.display = "flex";
computerDiv.style.gap = "3rem";
computerDiv.style.alignItems = "center";
computerDiv.style.justifyContent = "space-evenly";
computerDiv.style.width = "25rem";

//Create Function named Get Computer Choice

let getComputerChoice = () => 
{
    let randomNumber = Math.floor(Math.random() * 3) // Returns a value of 0, 1, or 2
    //console.log(randomNumber);
    return  randomNumber === 0 ? 'rock'
    : randomNumber === 1 ? 'paper'
    : randomNumber === 2 ? 'scissors'
    : 'Invalid Choice';
};

//console.log(getComputerChoice()); // Returns 'Rock', 'Paper', or 'Scissors'

let getHumanChoice = () => 
{
    let humanChoice = prompt('Choose Rock, Paper, or Scissors').toLowerCase();
    return humanChoice;
}


let playRound = (humanChoice, computerChoice) => 
{
    if (humanChoice === computerChoice)
    {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors')
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock')
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper')
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else
    {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;

    }
    console.log(`Human Score: ${humanScore}`);
    playerScore.innerText = humanScore;
    compScore.innerText = computerScore;
    computerChoiceText.innerText = computerChoice;
    
    if (humanScore === 5)
    {
        alert("You Win!");
        restartGame();
    }
    if (computerScore === 5)
    {
        alert("You Lose!");
        restartGame();
    }

}

let restartGame = () =>
{
    humanScore = 0;
    computerScore = 0;
}

// let playGame = () =>
// {
//     for (let i = 0; i < 5; i++)
//     {
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice);
//     }
//     if (humanScore > computerScore)
//     {
//         alert(`You win! ${humanScore} to ${computerScore}`);
//     }
//     else if (humanScore === computerScore)
//     {
//         alert(`It's a tie! ${humanScore} to ${computerScore}`);
//     }
//     else
//     {
//        alert(`You lose! ${computerScore} to ${humanScore}`);
//     }
// }



// button1.addEventListener("click", function() {
//     humanChoice = button1.innerText.toLowerCase();
//     playRound(humanChoice, getComputerChoice());
// });

// button2.addEventListener("click", function()
// {
//     humanChoice = button2.innerText.toLowerCase();
//     playRound(humanChoice, getComputerChoice());
// });

// button3.addEventListener("click", function() 
// {
//     humanChoice = button3.innerText.toLowerCase();
//     playRound(humanChoice, getComputerChoice());
// });

let buttons = [button1, button2, button3];

buttons.forEach(button => {
    button.addEventListener("click", function() {
            //Get the buttons text
    humanChoice = button.innerText.toLowerCase();
    playRound(humanChoice, getComputerChoice());
    
    });
    
});

//playGame();
