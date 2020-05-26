export const CHOICES = {
    scissors: {
      name: "scissors",
      //url: "http://getdrawings.com/image/scissor-drawing-62.jpg"
      url: "https://freesvg.org/img/1423835245.png"
    },
    paper: {
      name: "paper",
      url: "https://image.freepik.com/free-vector/white-post-note-paper-with-brown-sticky-tape_130827-12.jpg"
    },
    rock: {
      name: "rock",
      url:
        "https://www.searchpng.com/wp-content/uploads/2018/12/Rock-illustration-PNG-715x580.png"
    }
  };
  
  
  
  
  
  export const getRandomChoice = () => {
    let choiceNames = Object.keys(CHOICES);
    let randomIndex = Math.floor(Math.random() * 3);
    let choiceName = choiceNames[randomIndex];
    return CHOICES[choiceName];
  
  };
  
  
  export const getRoundOutcome = userChoice => {
    const computerChoice = getRandomChoice().name;
    let result;
  
    if (userChoice === "rock") {
      result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "paper") {
      result = computerChoice === "rock" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "scissors") {
      result = computerChoice === "paper" ? "Victory!" : "Defeat!";
    }
  
    if (userChoice === computerChoice) result = "Tie game!";
    return [result, computerChoice];
  
  
  };