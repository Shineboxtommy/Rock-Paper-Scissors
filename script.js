

//Create Function named Get Computer Choice

let getComputerChoice = () => 
{
    let randomNumber = Math.floor(Math.random() * 3) // Returns a value of 0, 1, or 2
    console.log(randomNumber);
    return  randomNumber === 0 ? 'Rock'
    : randomNumber === 1 ? 'Paper'
    : randomNumber === 2 ? 'Scissors'
    : 'Invalid Choice';
};

console.log(getComputerChoice()); // Returns 'Rock', 'Paper', or 'Scissors'

let getHumanChoice = () => 
{
    let humanChoice = prompt('Choose Rock, Paper, or Scissors').toLowerCase();
    console.log(humanChoice);
}

