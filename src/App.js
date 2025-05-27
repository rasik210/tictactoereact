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
    status = "Next player: " + (xIsNext ? "X" : "O");
  } 

  function calculateWinner(squares){
    //check row 0
    if (squares[0] == squares[1] && squares[1] == squares[2] && squares[0] != null) {
      return squares[0];
    }

    //check row 1
    if (squares[3] == squares[4] &&  squares[4] == squares[5] && squares[3] != null) {
      return squares[3] ;
    }

    //check row 2
    if (squares[6] == squares[7] && squares[7] == squares[8] && squares[6] != null) {
      return squares[6] ;
    }

    //check column 0
    if (squares[0] == squares[3] && squares[3] == squares[6] && squares[0] != null) {
      return squares[0];
    }

    //check column 1
    if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != null) {
      return squares[1];
    }

    //check column 2
    if (squares[2] == squares[5] &&  squares[5] == squares[8] && squares[2] != null) {
      return squares[2];
    }

    //check diagonal 0
    if (squares[0] == squares[4] &&  squares[4] == squares[8] && squares[0] != null) {
      return squares[0];
    }

    //check diagonal 1
    if (squares[2] == squares[4] &&  squares[4] == squares[6] && squares[2] != null) {
      return squares[2];
    }

    return null;
  }

  return (
  <>
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
  </>
  )
}
