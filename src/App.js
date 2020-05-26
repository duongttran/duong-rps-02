//import React from 'react';
import React, { useState } from "react";

import ChoiceCard from './components/ChoiceCard'

import ChoiceButtons from "./components/ChoiceButtons";

import './App.css';

import { CHOICES, getRoundOutcome } from "./utils"



function App() {
  let [prompt, setGamePrompt] = useState("Please click 1 of 3 buttons below");

  let [playerChoice, setPlayerChoice] = useState(null);
  let [compChoice, setComputerChoice] = useState(null);

  const [gameHistory, setGameHistory] = useState([]); //ms6 B


  const [previousWinner, setPreviousWinner] = useState(null);//ms 5A

  const [startGame, setStartGame] = useState(false);

 
  


  const onPlayerChoose = playerChoice => {
    var outcome = getRoundOutcome(playerChoice);
    var result = outcome[0];
    var compChoice = outcome[1];

    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
    setComputerChoice(newComputerChoice);
    setPlayerChoice(newUserChoice);



    //Milestone 5B
    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }

    setGamePrompt(result);//ms6 A
    gameHistory.push(result);//ms6 C
    setGameHistory(gameHistory);//ms6 D
  };

  let gameStatus = previousWinner === "You" ? "winner-status " : "loser-status";
  if (!previousWinner || previousWinner === "Tie") gameStatus = "";

  /*   let gameStatus = (previousWinner === "You") ? "winner-status"
                  : (previousWinner === "Computer") ? "loser-status" : ""; */

  //let userName = prompt("what's your name?")                

  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">

          <div className="col-md-8 themed-grid-col">

            <ChoiceCard title="Computer"
              previousWinner={previousWinner}
              imgURL={compChoice && compChoice.url} />


            <h1 className={gameStatus}>{prompt}</h1>
            <ChoiceButtons disabledButton={startGame} onPlayerChoose={onPlayerChoose} />

            <ChoiceCard title="You" previousWinner={previousWinner} imgURL={playerChoice && playerChoice.url} />

            <div className="container">
          
            </div>

          </div>

          <div className="col-md-4 themed-grid-col">
    <h3>Press "Start" button to play the game</h3>
            <button className="btn btn-info btn-lg" onClick={() => setStartGame(!startGame)}>Start</button>

    

            <h3>History</h3>
            <ol>
              {gameHistory.map((result, index) => {
                return <li key={`history${index}`}>{result}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>


    </div>
  );

}

export default App;
