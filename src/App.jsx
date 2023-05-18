import "./App.css";
import Board from "./components/Board";
import ChessBoard from "./components/ChessBoard";

function App() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      {/* <Board />  */}
      <ChessBoard />
    </div>
  );
}

export default App;
