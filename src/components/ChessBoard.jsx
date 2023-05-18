import ChessCells from "./ChessCells";

const colors = ["bg-white", "bg-black"];

const chessBoardState = [];

const testarr = [1, 3, 5, 7];

const isBlackOrWhite = (x, y) => {
  for (let offset of testarr) {
    if (x === y - offset || x - offset === y) {
      return colors[1];
    }
  }
};

for (let x = 0; x < 8; x++) {
  for (let y = 0; y < 8; y++) {
    chessBoardState.push(
      <ChessCells
        key={x * 8 + y}
        value={x * 8 + y}
        color={isBlackOrWhite(x, y)}
      />
    );
  }
}

const ChessBoard = () => {
  return (
    <div className="grid grid-cols-8 border">
      {chessBoardState.map((chessCell) => chessCell)}
    </div>
  );
};

export default ChessBoard;
