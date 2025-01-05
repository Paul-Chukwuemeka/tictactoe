import GameBoard from "./pages/Gameboard";
import { useState } from "react";

function App() {
  const [turn, setTurn] = useState("O");
  const [winningMessage, setWinningMessage] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  

  const message = `It is now ${turn}'s turn`
  return (
    <div className="flex flex-col items-center gap-6 h-screen p-12 relative">
      <h1 className="text-3xl font-bold text-sky-500">
        Tic-
        <span className="text-red-500">Tac</span>-
        <span className="text-green-500">
          Toe
        </span>
      </h1>
      <GameBoard turn={turn} setTurn={setTurn} />
      <p className="text-2xl">{message}</p>
      <p className="absolute bottom-0 p-5 text-xl">
        Built By{" "}
        <a href="https://github.com/Paul-Chukwuemeka">
          {" "}
          Paul Chukwemeka
        </a>
      </p>
    </div>
  );
}

export default App;
