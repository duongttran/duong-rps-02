import React from 'react'

export default function ChoiceCard(props) {
    const DEFAULT_IMG =
    "https://us.123rf.com/450wm/lineartestpilot/lineartestpilot1810/lineartestpilot181011615/110716162-stock-vector-line-drawing-cartoon-question-mark.jpg?ver=6";

    const won = props.title === props.previousWinner;
    let className;

    const hasPreviousGame =
      props.previousWinner === "Computer" || props.previousWinner === "You";

    if (hasPreviousGame) {
      className = won ? "winner" : "loser";
    }
  
    let prompt;

    if (won) {
      prompt = "Won";
      className = won ? "winner" : "loser";
    } else if (props.previousWinner === "Tie") {
      prompt = "Tie";
    } else if (props.previousWinner === null) {
      prompt = "Start";
    } else {
      prompt = "Lost";
    }
  
    return (
      <div className={`choice-card ${className}`}>
        <h1>{props.title}</h1>
        <img src={props.imgURL || DEFAULT_IMG} alt={props.title} />
        <h3>{prompt}</h3>
      </div>
    );
}



/* import React, { Component } from 'react'
export default class ChoiceCard extends Component {
    render() {
        return (
            <div>
                <div className={`choice-card ${this.props.winner ? 'winner' : 'loser'}`}>
            <h1>{this.props.title}</h1>
            <img src={this.props.imgURL} alt={this.props.title} />
            <h3>{this.props.winner ? 'Won' : 'Loss'}</h3>
        </div>
            </div>
        )
    }
} */

