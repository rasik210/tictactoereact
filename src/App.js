import { useState } from "react";

function Square({value, onSquareClick }) {
  return <button className="square"  onClick={onSquareClick } >{value}</button>
}

 export default function Board() {
  const [ xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  

  function handleClick(i) {
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice(); 
    if(xIsNext){
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

  }

  const winner = calculateWinner(squares);
  let status;

  if(winner){
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  } 

  function calculateWinner(squares){
    // Entire board is saved in a one dimensional array named squares e.g. [X,X,X,O,X,O,X,O,O]
    const winnerLines = [
      [0,1,2], //row 0
      [3,4,5], //row 1
      [6,7,8], //row 2
      [0,3,6], //column 0
      [1,4,7], //column 1
      [2,5,8], //column 2
      [0,4,8], //diagonal 0
      [2,4,6]  //diagonal 1
    ];
    for (let i = 0; i < winnerLines.length; i++) {
      const [a, b, c] = winnerLines[i]
      if (squares[a] && squares[a] == squares[b] && squares[b] == squares[c]) {
        return squares[a]
      }
    }
    return null;
  }

  return (
  <div className="board">
    <div className="status">{status}</div>
    <div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick ={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick ={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick ={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick ={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick ={() => handleClick(4)}/> 
        <Square value={squares[5]} onSquareClick ={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick ={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick ={() => handleClick(7)}/> 
        <Square value={squares[8]} onSquareClick ={() => handleClick(8)}/>
      </div>
    </div>
  </div>
  )
}
