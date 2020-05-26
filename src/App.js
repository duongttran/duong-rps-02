//import React from 'react';
import React, { useState } from "react";

import ChoiceCard from './components/ChoiceCard'

import ChoiceButtons from "./components/ChoiceButtons";

import './App.css';

import { CHOICES, getRoundOutcome } from "./utils"



function App() {
  let [prompt, setGamePrompt] = useState("1,2,3 please click 1 of 3 buttons");

  let [playerChoice, setPlayerChoice] = useState(null);
  let [compChoice, setComputerChoice] = useState(null);

  const [gameHistory, setGameHistory] = useState([]); //ms6 B


  const [previousWinner, setPreviousWinner] = useState(null);//ms 5A


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



  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">

            <ChoiceCard title="Computer"
              previousWinner={previousWinner}
              imgURL={compChoice && compChoice.url} />


            <h1>{prompt}</h1>
            <div className="container">
              <ChoiceButtons onPlayerChoose={onPlayerChoose} />
              

            </div>


            <ChoiceCard title="You" previousWinner={previousWinner} imgURL={playerChoice && playerChoice.url} />

          </div>

          <div className="col-md-4 themed-grid-col">
            <h3>History</h3>
            <ul>
              {gameHistory.map((result, index) => {
                return <li key={`history${index}`}>{result}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>


    </div>
  );

}

export default App;
