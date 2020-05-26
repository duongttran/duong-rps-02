import React from "react";

export default function ChoiceButtons(props) {
  return (
    <div className="container">
      <button  className="btn btn-dark btn-lg" disabled={!props.disabledButton}
        onClick={() => props.onPlayerChoose("rock")}>
        Rock <i class="fas fa-hand-rock"></i>
      </button>
      <button  className="btn btn-dark btn-lg" disabled={!props.disabledButton}
        onClick={() => props.onPlayerChoose("paper")}>
        Paper <i class="fas fa-hand-paper"></i>
      </button>
      <button  className="btn btn-dark btn-lg" disabled={!props.disabledButton}
        onClick={() => props.onPlayerChoose("scissors")}>
        Scissors <i class="fas fa-hand-scissors"></i>
      </button>
    </div>
  );
}