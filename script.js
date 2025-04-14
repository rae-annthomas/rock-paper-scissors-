

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

function getHumanChoice(){ //Assume user will always enter valid input (rock, paper, scissors - case insensitive)
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
   
    return humanScore
  }else if(humanChoice ==="rock" && computerChoice ==="scissors"){
    console.log("You win! Rock beats Scissors")
   

  }else{
    console.log("You draw! Try again");
  }
   
}


function playGame(){
   for (i=1 ; i<6 ; i++){
   console.log(`Round ${i}`);

   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();
   playRound(humanSelection, computerSelection);  
  }

  console.log("GAME OVER: 5 rounds finished"  )  //Run a function that compares total computer score and total human score. 
}




playGame()


//To do:
// function finalWinner: 
//   If computer score is more than human score, print, "Sorry, You lose"
//   If human score is more than computer score, print, "Congratulations! You win!"
//   If humanScore and computerScore is even print, "Yah! You draw"


    
    
    
    
    
    
    
    
