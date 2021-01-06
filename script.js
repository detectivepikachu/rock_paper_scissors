function playerChoice() {
    let playerChoice = prompt("rock, paper or scissors?");
  return playerChoice.toLowerCase();
  }						                                                                                              		//playerSelection function declaration
    function computerPlay() {
      let choices = ['rock', 'paper', 'scissors'];
      return thing = choices[Math.floor(Math.random() * choices.length)];;
    }                                                                            //computerSelection function declaration
      
    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return("Oops it\'s a tie");
      } else if (playerSelection === 'rock' && computerSelection === 'paper') {
          computerScore++;
          return("You lose I win!");
      } else if (playerSelection === 'paper' && computerSelection === 'rock') {
          playerScore++;
          return("Congrats! You win!");
      } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
          computerScore++;
          return("You lose I win!");
      } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
          computerScore++;
          return("You lose I win!");
      } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
          playerScore++;
          return("Congrats! You win!");
      } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
          playerScore++;
          return("Congrats! You win!");
      } else {
        return("Please type in a correct choice")
      }
      }                                                                                                       //playRound function declaration
    
  for(var i=0;i=5;i++) {
      const playerSelection = playerChoice();
    const computerSelection = computerPlay();
      console.log (playRound(playerSelection, computerSelection));
      console.log ("You chose " + playerSelection + " and the computer chose " + computerSelection);
      console.log ("Your Score is " + playerScore);
      console.log ("Computer\'s Score is " + computerScore);
    if (playerScore === 5) {
      console.log ("You win! You beat the computer!");
      break;
    } else if (computerScore === 5) {
      console.log ("You lose! You lost against a machine!");
      break;
    }
    }
  