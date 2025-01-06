import React from "react";

interface CellProps {
  cells: Array<string>;
  id: number;
  turn: string;
  setTurn: React.Dispatch<
    React.SetStateAction<string>
  >;
  setCells: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}

const Cell: React.FC<CellProps> = ({
  cells,
  id,
  turn,
  setTurn,
  setCells,
}) => {
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const target = e.target as HTMLElement;
    let taken = false;
    if (target.previousSibling) {
      taken =
        (
          target.previousSibling as HTMLElement
        ).classList.contains("circle") ||
        (
          target.previousSibling as HTMLElement
        ).classList.contains("cross");
    }

    if (!taken) {
      if (turn === "circle") {
        setTurn("cross");
        handleCellUpdate("circle");
        target.previousSibling
          ? (
              target.previousSibling as HTMLElement
            ).classList.add("circle")
          : "";
      } else {
        setTurn("circle");
        handleCellUpdate("cross");

        target.previousSibling
          ? (
              target.previousSibling as HTMLElement
            ).classList.add("cross")
          : "";
      }
    } else {
      setTurn(turn);
      console.log("taken");
    }
  };
  const handleCellUpdate = (
    className: string
  ) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };
  console.log(cells)

  return (
    <div
      className="border border-[#3b455c] flex justify-center items-center relative"
      id={id.toString()}
    >
      <div></div>
      <div
        className="h-full w-full bg-transparent absolute top-0 left-0"
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Cell;
