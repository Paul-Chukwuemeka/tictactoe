import React , { useState } from "react";
import Cell from "../components/Cell";

interface GameBoardProps {
    turn : string,
    setTurn : React.Dispatch<React.SetStateAction<string>>
}

const Gameboard: React.FC<GameBoardProps> = ({turn, setTurn}) => {
  const [cell, setCell] = useState<Array<string>>(
    ["", "", "", "", "", "", "", "", ""]
  );
  return (
    <>
      <div className="gameboard w-80 h-80 bg-sky-300 grid grid-cols-3 grid-rows-3">
        {cell.map((cell, index) => (
          <Cell key={index} id={index.toString()} cell={cell} />
        ))}
      </div>
    </>
  );
}

export default Gameboard;
