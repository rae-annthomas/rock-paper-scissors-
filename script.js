const buttons = document.querySelectorAll("button")
const container = document.querySelector(".container")
const humanScoreDiv = document.querySelector(".humanScore")
const computerScoreDiv = document.querySelector(".computerScore")
const displayComputerChoice = document.createElement("div")
const displayHumanChoice = document.createElement("div")
const displayRoundMsg = document.createElement("div")
const gameOverMsg = document.createElement("h4")
const finalWinnerMsg = document.createElement("div")

finalWinnerMsg.classList.toggle("finalWinnerMsg")

let humanScore =0;
let computerScore =0;

buttons.forEach((btn) => {
  btn.addEventListener("click", playRound)
  })



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

//playRound function runs only 1 round
function playRound(e, computerChoice){
  let humanChoice =e.target.id;
  displayHumanChoice.textContent = `You chose: ${humanChoice}`
  container.appendChild(displayHumanChoice)

  computerChoice = getComputerChoice();
  displayComputerChoice.textContent = `Computer chose: ${computerChoice}`;
  container.appendChild(displayComputerChoice)
   
    if(humanChoice ==="scissors" && computerChoice ==="rock"){
      displayRoundMsg.textContent = "You lose! Rock beats Scissors";
      container.appendChild(displayRoundMsg) 
      computerScore+=1;
    }else if(humanChoice ==="paper" && computerChoice ==="scissors"){
      displayRoundMsg.textContent = "You lose! Scissors beats Paper";
      container.appendChild(displayRoundMsg);
      computerScore+=1;
    }else if(humanChoice ==="rock" && computerChoice ==="paper"){
      displayRoundMsg.textContent = "You lose! Paper beats Rock";
      container.appendChild(displayRoundMsg);
      computerScore+=1;
    }else if(humanChoice ==="scissors" && computerChoice ==="paper"){
      displayRoundMsg.textContent = "You win! Scissors beats Paper ";
      container.appendChild(displayRoundMsg);
      humanScore+=1;
    }else if(humanChoice ==="paper"&& computerChoice ==="rock"){
      displayRoundMsg.textContent = "You win! Paper beats Rock";
      container.appendChild(displayRoundMsg);
      humanScore+=1;
    }else if(humanChoice ==="rock" && computerChoice ==="scissors"){
      displayRoundMsg.textContent = "You win! Rock beats Scissors";
      container.appendChild(displayRoundMsg);
      humanScore+=1;
    }else{
      displayRoundMsg.textContent = "You draw! Try again";
      container.appendChild(displayRoundMsg);
    }
    humanScoreDiv.textContent = humanScore;
    computerScoreDiv.textContent = computerScore;
    

    calcFinalWinner(humanScore,computerScore)
    
  }

//Function that compares total computer score and total human score. 
function calcFinalWinner(human,computer){ 
  if (human === 5 || computer === 5){
   gameOverMsg.textContent = "Game Over";
   container.appendChild(gameOverMsg)
  
   if (human > computer){
    finalWinnerMsg.textContent = `Congratulations! You win! Your score: ${human}, Computer Score: ${computer}`;
    container.appendChild(finalWinnerMsg);
   }else if (computer > human){
    finalWinnerMsg.textContent = `Sorry! You lose! Your score: ${human}, Computer Score: ${computer}`;
    container.appendChild(finalWinnerMsg);
   }else{
    finalWinnerMsg.textContent = `Woww! You draw. Your score: ${human}, Computer Score: ${computer}`;
    container.appendChild(finalWinnerMsg);
   }
    buttons.forEach(button => {
    button.disabled = true;
    });
 } 
}








// function playGame(e){
//    for (i=1 ; i<6 ; i++){  //Plays 5 rounds
//    console.log(`Round ${i}`);
//    const computerSelection = getComputerChoice();
//    const humanSelection = e.target.id;
//    playRound(humanSelection, computerSelection);  
//   }

//   calcFinalWinner(humanScore,computerScore)  
// }

// playGame()




    
    
    
    
    
    
    
    
