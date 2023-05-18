import React from "react";

const ChessCells = ({ value, color }) => {
  return (
    <>
      <div
        className={
          "h-20 w-20 flex justify-center items-center border text-red-400 " +
          color
        }
      >
        {value}
      </div>
    </>
  );
};

export default ChessCells;
