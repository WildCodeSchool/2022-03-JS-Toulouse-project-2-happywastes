import React, { useState } from "react";
import "./Reward.css";
import PopUpReward from "./PopUpReward";

export default function Reward({ img, level, color }) {
  const [popupReward, setPopupReward] = useState(false);
  const popupAppear = () => {
    setPopupReward(!popupReward);
  };

  const pourcentage = level * 10;
  const couleur = color;

  const myStyle = {
    height: "100%",
    width: `${pourcentage}%`,
    backgroundColor: `${couleur}`,
  };

  return (
    <div className="reward">
      <button type="button" onClick={() => popupAppear()}>
        <img className="img-reward" src={img} alt="img-level" />
      </button>

      <div className="jauge">
        <div style={myStyle} />
      </div>
      <p id="level-title">{level} XP</p>
      {popupReward && (
        <PopUpReward
          trigger={popupReward}
          funcClosePopup={popupAppear}
          img={img}
          level={level}
        />
      )}
    </div>
  );
}
