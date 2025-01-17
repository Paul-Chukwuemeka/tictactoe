import React from "react";
import { useContext, useEffect } from "react";
import { AppContext } from "../App";

interface CellProps {
  id: number;
}

const Cell: React.FC<CellProps> = ({ id }) => {
  const {
    turn,
    setTurn,
    setIsTie,
    cells,
    setCells,
    isGameOver,
    setIsGameOver,
    score,
    setScore,
  } = useContext(AppContext);

  useEffect(() => {
    checkGame();
  }, [cells]);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

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
      if (isGameOver) {
        return;
      }
      if (turn === "Circle") {
        setTurn("Cross");
        handleCellUpdate("Circle");
        target.previousSibling
          ? (
              target.previousSibling as HTMLElement
            ).classList.add("circle")
          : "";
      } else {
        setTurn("Circle");
        handleCellUpdate("Cross");

        target.previousSibling
          ? (
              target.previousSibling as HTMLElement
            ).classList.add("cross")
          : "";
      }
    } else {
      setTurn(turn);
    }
  };
  const handleCellUpdate = (
    className: string
  ) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };

  const checkGame = () => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        cells[a] &&
        cells[a] === cells[b] &&
        cells[a] === cells[c]
      ) {
        setIsGameOver(true);
        clearBoard();
        if (cells[a] === "Circle") {
          setScore({
            circle: score.circle + 1,
            cross: score.cross,
          });
        } else {
          setScore({
            circle: score.circle,
            cross: score.cross + 1,
          });
        }
        return;
      }
    }
    if (
      !isGameOver &&
      cells.every((cell) => cell !== "")
    ) {
      setIsTie(true);
      clearBoard()
      console.log("It's a tie!");
    }
  };
  const clearBoard = () => {
    setTimeout(() => {
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
    }, 1000);
  };
  return (
    <div
      className="cell border border-[#3b455c] w-[101%] flex justify-center items-center relative"
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
