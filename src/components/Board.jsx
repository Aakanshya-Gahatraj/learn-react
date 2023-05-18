import { useState } from "react";
import Cell from "./Cell";
const TEST_BOARD_STATE = ["X", "O", "", "", "X", "", "", "", "X"];
const whoWon = (boardState = TEST_BOARD_STATE) => {
  //write logic
  const diagonalSameVal = diagonalCheck(boardState);
  const straightSameVal = straightCheck(boardState);

  console.log({ diagonalSameVal, straightSameVal });

  if (diagonalSameVal) {
    return diagonalSameVal;
  }
  if (straightSameVal) {
    return straightSameVal;
  }

  // good luck
  return null;
};

const straightCheck = (boardState) => {
  console.table(boardState);
  if (
    (boardState[0] == boardState[3] && boardState[3] == boardState[6]) ||
    (boardState[0] == boardState[1] && boardState[1] == boardState[2])
  ) {
    return boardState[0];
  }
  if (
    (boardState[1] == boardState[4] && boardState[4] == boardState[7]) ||
    (boardState[3] == boardState[4] && boardState[4] == boardState[5])
  ) {
    return boardState[4];
  }
  if (
    (boardState[2] == boardState[5] && boardState[5] == boardState[8]) ||
    (boardState[6] == boardState[7] && boardState[7] == boardState[8])
  ) {
    return boardState[8];
  }
  return "";
};

const diagonalCheck = (boardState) => {
  // write that returns true if won
  const diagonalRight =
    boardState[0] == boardState[4] && boardState[4] == boardState[8];
  const diagonalLeft =
    boardState[2] == boardState[4] && boardState[4] == boardState[6];

  if (diagonalLeft || diagonalRight) return boardState[4];

  return "";
};

const Board = () => {
  const [turn, setTurn] = useState("X");
  const [boardState, setBoardState] = useState(Array(9).fill(""));

  const winner = whoWon(boardState);
  return (
    <>
      <h1 className="text-4xl">Turn : {turn}</h1>
      <div className="grid grid-cols-3 w-52">
        {boardState.map((cellValue, idx) => (
          <Cell
            key={idx}
            value={cellValue}
            disabled={cellValue !== "" || winner}
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
