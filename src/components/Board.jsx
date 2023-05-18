import { useState } from "react";
import Cell from "./Cell";
const TEST_BOARD_STATE = ["X", "O", "", "", "X", "", "", "", "X"];
const whoWon = (boardState = TEST_BOARD_STATE) => {
  //write logic
  if (diagonalCheck(boardState, "X")) return "X";
  if (diagonalCheck(boardState, "O")) return "O";
  // good luck
  return null;
};

const diagonalCheck = (boardState, value) => {
  // write that returns true if won
  if (boardState[4] == value) {
    const diagonalRight =
      boardState[0] == boardState[4] && boardState[4] == boardState[8];
    const diagonalLeft =
      boardState[2] == boardState[4] && boardState[4] == boardState[6];

    console.log({ diagonalLeft, diagonalRight, value });
    return diagonalLeft || diagonalRight;
  }
  return false;
};

const Board = () => {
  const [turn, setTurn] = useState("X");
  const [boardState, setBoardState] = useState(Array(9).fill(""));

  const winner = whoWon(boardState);
  console.log({ boardState, winner });
  return (
    <>
      <h1 className="text-4xl">Turn : {turn}</h1>
      <div className="grid grid-cols-3 w-52">
        {boardState.map((cellValue, idx) => (
          <Cell
            key={idx}
            value={cellValue + " " + idx}
            disabled={cellValue !== ""}
            onClickHandler={() => {
              const copyBoard = [...boardState];
              copyBoard[idx] = turn;
              setBoardState(copyBoard);
              if (turn == "X") {
                setTurn("O");
              } else {
                setTurn("X");
              }
            }}
          />
        ))}
      </div>

      {winner ? <h1>Won: {winner} </h1> : null}
    </>
  );
};

export default Board;
