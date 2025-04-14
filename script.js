let humanScore= 0;
let computerScore= 0;


function getComputerChoice(){
    let randomNum= Math.floor(Math.random() * 3)
    if (randomNum === 0){  
        return "rock"
    } else if(randomNum === 1) {
        return "paper"
    }else{
        return "scissors"
    }
}

function getHumanChoice(){
  let userInput= prompt("Enter rock, paper or scissors");
  let lowerUserInput = userInput.toLowerCase()
   return lowerUserInput;
}

function playRound(humanChoice, computerChoice){
    console.log(`Computer: ${computerChoice}`)
    console.log(`Human: ${humanChoice}`)
    
  if(humanChoice ==="scissors" && computerChoice ==="rock"){
    console.log("You lose! Rock beats Scissors")
  }else if(humanChoice ==="paper" && computerChoice ==="scissors"){
    console.log("You lose! Scissors beats Paper")
  }else if(humanChoice ==="rock" && computerChoice ==="paper"){
    console.log("You lose! Paper beats Rock")
  }else if(humanChoice ==="scissors" && computerChoice ==="paper"){
    console.log("You win! Scissors beats Paper ") 
  }else if(humanChoice ==="paper"&& computerChoice ==="rock"){
    console.log("You win! Paper beats Rock")
  }else if(humanChoice ==="rock" && computerChoice ==="scissors"){
    console.log("You win! Rock beats Scissors")
  }else{
    console.log("You draw! Try again")
  }

  
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


    
    
    
    
    
    
    
    
    // Create a function that randomly returns, "Rock", "paper", or "Scissors" using Math.random()
    // Random number multiply by 3 gives equal change of output 0,1,2
    // make output an integer
    // return integer
    // if integer is 0, output Rock
    // if integer is 1, output Paper
    // if integer is 2, output Scissors
    // else output scissors
    
