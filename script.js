let humanScore= 0;
let computerScore= 0;


function getComputerChoice(){
    let randomNum= Math.floor(Math.random() * 3)
    console.log(randomNum)
    }


function getHumanChoice(){
    let userInput= prompt("Enter rock, paper or scissors");
    console.log(userInput)
}

getComputerChoice();
getHumanChoice();  
    
    
    
    
    
    
    
    
    // Create a function that randomly returns, "Rock", "paper", or "Scissors" using Math.random()
    // Random number multiply by 3 gives equal change of output 0,1,2
    // make output an integer
    // return integer
    // if integer is 1, output Rock
    // if integer is 2, output Paper
    // else output scissors
    
