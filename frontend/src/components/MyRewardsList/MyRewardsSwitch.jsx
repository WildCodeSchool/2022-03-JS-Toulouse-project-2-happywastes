import React from "react";
import "./MyRewardsSwitch.css";
import Pagin from "./components/Pagin";

export default function MyRewardsSwitch({
  slicing,
  funcPrevious,
  funcNext,
  pagination,
}) {
  const paginationTable = [];
  for (let i = 0; i < pagination; i += 1) {
    paginationTable.push(i);
  }

  return (
    <div className="switch-rewards">
      <button className="previous-button" type="button" onClick={funcPrevious}>
        &nbsp;
      </button>
      {paginationTable.map((el) => (
        <Pagin
          key={el}
          roundSelected={
            slicing / 5 === el ? "round-selected" : "round-not-selected"
          }
        />
      ))}
      <button className="next-button" type="button" onClick={funcNext}>
        &nbsp;
      </button>
    </div>
  );
}
