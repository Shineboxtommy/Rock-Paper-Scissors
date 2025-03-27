

let humanScore = 0;
let computerScore = 0;

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

//Reference to the body of the page
const body = document.querySelector("body");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");

button1.innerText = "Rock";
button2.innerText = "Paper";
button3.innerText = "Scissors";

body.appendChild(button1);
body.appendChild(button2);
body.appendChild(button3);


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

const buttons = [button1, button2, button3];

buttons.forEach(button => {
    button.addEventListener("click", function() {
            //Get the buttons text
    humanChoice = button.innerText.toLowerCase();
    playRound(humanChoice, getComputerChoice());
    });
});

//playGame();
