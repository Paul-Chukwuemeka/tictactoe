import GameBoard from "./pages/Gameboard";
import { useState, createContext } from "react";
import { MdOutlineRestartAlt } from "react-icons/md";
import ParticlesComponent from "./components/ParticlesComponent";

interface AppContextType {
  turn: string;

  setTurn: React.Dispatch<
    React.SetStateAction<string>
  >;

  cells: string[];

  setCells: React.Dispatch<
    React.SetStateAction<string[]>
  >;
  isGameOver: boolean;
  setIsGameOver: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  isTie: boolean;
  setIsTie: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  score: {circle:number,cross:number};
  setScore: React.Dispatch<
    React.SetStateAction<{circle:number,cross:number}>
  >;
}

export const AppContext =
  createContext<AppContextType>({
    turn: "circle",
    setTurn: () => {},
    cells: ["", "", "", "", " ", "", "", "", ""],
    setCells: () => {},
    isGameOver: false,
    setIsGameOver: () => {},
    isTie: false,
    setIsTie: () => {},
    score:{circle:0,cross:0},
    setScore:()=>{}
  });
function App() {
  const [turn, setTurn] = useState("Circle");
  const [isGameOver, setIsGameOver] =
    useState(false);
  const [isTie, setIsTie] = useState(false);
  const [score,setScore] = useState({circle:0,cross:0})
  const [cells, setCells] = useState<
    Array<string>
  >(["", "", "", "", " ", "", "", "", ""])

  const message = `It is ${turn}'s turn`;
  const winningMessage = `Congratulations ${turn == "Circle" ? "Cross" : "Circle" }! You won!`;
  return (
    <AppContext.Provider
      value={{
        turn,
        setTurn,
        isGameOver,
        setIsGameOver,
        cells,
        setCells,
        isTie,
        setIsTie,
        score,
        setScore
      }}
    >
      <ParticlesComponent />
      <div className="flex flex-col items-center gap-4 h-screen p-12 relative">
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
        <div className="flex items-center justify-center gap-4 relative w-full">
          <p className="text-2xl">
            Circle: {score.circle}
          </p>
          <p className="text-2xl">
            Cross: {score.cross}
          </p>
          <button className="absolute right-0 text-3xl hover:text-sky-500"
          onClick={()=>{
            setScore({circle:0,cross:0})
            setCells(Array(9).fill(""));
            setTurn("Circle")
            setIsGameOver(false);
            setIsTie(false);
            const cellElements =
              document.querySelectorAll(
                ".cell > div:first-child"
              );
            cellElements.forEach((element) => {
              element.classList.remove(
                "circle",
                "cross"
              );
            });
          }}
          >
          <MdOutlineRestartAlt title="Reset board" />
          </button>
        </div>
        <GameBoard />
        <p className="text-2xl">{isTie ? "It's a tie!" : isGameOver ? winningMessage : message }</p>
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
