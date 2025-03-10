

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

let playGame = () =>
{
    for (let i = 0; i < 5; i++)
    {
        let humanChoice = getHumanChoice();
        console.log(humanChoice);
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore)
    {
        console.log(`You win! ${humanScore} to ${computerScore}`);
    }
    else if (humanScore === computerScore)
    {
        console.log(`It's a tie! ${humanScore} to ${computerScore}`);
    }
    else
    {
        console.log(`You lose! ${computerScore} to ${humanScore}`);
    }
}

playGame();
