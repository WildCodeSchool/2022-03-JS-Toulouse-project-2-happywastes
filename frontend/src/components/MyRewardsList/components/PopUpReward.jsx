import React from "react";
import "./PopUpReward.css";

export default function PopUpReward({ trigger }) {
  return (
    <div className="popup-container">
      <div className={trigger ? "on" : "off"}>bienvenue sur mon pop-up</div>
    </div>
  );
}
