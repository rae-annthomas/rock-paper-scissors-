
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

function playGame(){
    let humanScore =0;
    let computerScore =0;

    //playRound function runs only 1 round
    function playRound(humanChoice, computerChoice){
        console.log(`Computer: ${computerChoice}`)
        console.log(`Human: ${humanChoice}`)       
      if(humanChoice ==="scissors" && computerChoice ==="rock"){
        console.log("You lose! Rock beats Scissors")
        computerScore+=1;
      }else if(humanChoice ==="paper" && computerChoice ==="scissors"){
        console.log("You lose! Scissors beats Paper")
        computerScore+=1
      }else if(humanChoice ==="rock" && computerChoice ==="paper"){
        console.log("You lose! Paper beats Rock")
        computerScore+=1
      }else if(humanChoice ==="scissors" && computerChoice ==="paper"){
        console.log("You win! Scissors beats Paper ")
        humanScore+=1
      }else if(humanChoice ==="paper"&& computerChoice ==="rock"){
        console.log("You win! Paper beats Rock")
        humanScore+=1
      }else if(humanChoice ==="rock" && computerChoice ==="scissors"){
        console.log("You win! Rock beats Scissors")
        humanScore+=1
      }else{
        console.log("You draw! Try again");
      }
    console.log(`Human score: ${humanScore}, ComputerScore: ${computerScore}`)
    }

   for (i=1 ; i<6 ; i++){
   console.log(`Round ${i}`);
   const computerSelection = getComputerChoice();
   const humanSelection = getHumanChoice();
   playRound(humanSelection, computerSelection);  
  }

  calcFinalWinner(humanScore,computerScore)  //Run a function that compares total computer score and total human score. 
}


playGame()

function calcFinalWinner(human,computer){
   console.log("GAME OVER: 5 rounds finished")
   if (human > computer){
    console.log( `Congratulations! You win! Your score: ${human}, Computer Score: ${computer}`)
   }else if (computer > human){
    console.log( `Sorry! You lose! Your score: ${human}, Computer Score: ${computer}`)
   }else{
    console.log( `Woww! You draw. Your score: ${human}, Computer Score: ${computer}`)
   }
}

//To do:
// function finalWinner: 
//   If computer score is more than human score, print, "Sorry, You lose"
//   If human score is more than computer score, print, "Congratulations! You win!"
//   If humanScore and computerScore is even print, "Yah! You draw"


    
    
    
    
    
    
    
    
