import GameBoard from "./pages/Gameboard";
import {
  useState,
  useContext,
  createContext,
} from "react";

interface AppContextType {
  turn: string;

  setTurn: React.Dispatch<
    React.SetStateAction<string>
  >;

  cells: string[];

  setCells: React.Dispatch<
    React.SetStateAction<string[]>
  >;
  winningMessage: string | null;
  setWinningMessage: React.Dispatch<
    React.SetStateAction<string>
  >;
  isGameOver: boolean;
  setIsGameOver: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export const AppContext =
  createContext<AppContextType>({
    turn: "circle",
    setTurn: () => {},
    cells: ["", "", "", "", " ", "", "", "", ""],
    setCells: () => {},
    winningMessage: null,
    setWinningMessage: () => {},
    isGameOver: false,
    setIsGameOver: () => {},
  });
function App() {
  const [turn, setTurn] = useState("Circle");
  const [winningMessage, setWinningMessage] =
    useState("");
  const [isGameOver, setIsGameOver] =
    useState(false);
  const [cells, setCells] = useState<
    Array<string>
  >(["", "", "", "", " ", "", "", "", ""]);

  const message = `It is ${turn}'s turn`;
  return (
    <AppContext.Provider
      value={{
        turn,
        setTurn,
        winningMessage,
        setWinningMessage,
        isGameOver,
        setIsGameOver,
        cells,
        setCells,
      }}
    >
      <div className="flex flex-col items-center gap-6 h-screen p-12 relative">
        <h1 className="text-3xl font-bold text-sky-500">
          Tic-
          <span className="text-red-500">
            Tac
          </span>
          -
          <span className="text-green-500">
            Toe
          </span>
        </h1>
        <GameBoard />
        <p className="text-2xl">{message}</p>
        <p className="absolute bottom-0 p-5 text-xl">
          Built By{" "}
          <a href="https://github.com/Paul-Chukwuemeka">
            {" "}
            Paul Chukwemeka
          </a>
        </p>
      </div>
    </AppContext.Provider>
  );
}

export default App;
