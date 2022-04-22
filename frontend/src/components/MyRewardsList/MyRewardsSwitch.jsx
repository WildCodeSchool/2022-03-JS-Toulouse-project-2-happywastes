import React from "react";
import "./MyRewardsSwitch.css";
import Pagin from "./components/Pagin";

export default function MyRewardsSwitch({
  slicing,
  funcPrevious,
  funcNext,
  pagination,
  dataLength,
}) {
  const paginationTable = [];
  for (let i = 0; i < pagination; i += 1) {
    paginationTable.push(i);
  }

  return (
    <div className="switch-rewards">
      {slicing === 0 ? (
        <button
          className="previous-button none"
          type="button"
          onClick={funcPrevious}
        >
          &nbsp;
        </button>
      ) : (
        <button
          className="previous-button"
          type="button"
          onClick={funcPrevious}
        >
          &nbsp;
        </button>
      )}
      {paginationTable.map((el) => (
        <Pagin
          key={el}
          roundSelected={
            slicing / 5 === el ? "round-selected" : "round-not-selected"
          }
        />
      ))}
      {slicing === dataLength - 5 ? (
        <button className="next-button none" type="button" onClick={funcNext}>
          &nbsp;
        </button>
      ) : (
        <button className="next-button" type="button" onClick={funcNext}>
          &nbsp;
        </button>
      )}
    </div>
  );
}
