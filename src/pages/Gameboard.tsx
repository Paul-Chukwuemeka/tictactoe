import React, { useContext } from "react";
import { AppContext } from "../App";
import Cell from "../components/Cell";

const Gameboard: React.FC = () => {
  const { cells } = useContext(AppContext);
  return (
    <>
      <div className="gameboard w-80 h-80 bg-sky-400 grid gap-x-[0.5px] grid-cols-3 grid-rows-3">
        {cells.map((_, index) => (
          <Cell id={index} key={index} />
        ))}
      </div>
    </>
  );
};

export default Gameboard;
