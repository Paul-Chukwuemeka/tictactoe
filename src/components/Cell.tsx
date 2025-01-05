import React from "react";

interface CellProps {
  cell: string;
  id: string;
}

const Cell: React.FC<CellProps> = ({ cell,id }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const taken = target.classList.contains("circle") || target.classList.contains("cross")
  };
  return (
    <div className="border border-[#3b455c] flex justify-center items-center"  id={id} onClick={handleClick}>
     {cell}
    </div>
  );
};

export default Cell;
