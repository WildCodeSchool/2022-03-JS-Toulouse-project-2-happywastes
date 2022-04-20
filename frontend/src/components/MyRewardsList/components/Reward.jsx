import React from "react";
import "./Reward.css";

export default function Reward(props) {
  const { img, level, color } = props;
  const pourcentage = level * 10;
  const couleur = color;

  const myStyle = {
    height: "100%",
    width: `${pourcentage}%`,
    backgroundColor: `${couleur}`,
  };

  return (
    <div className="reward">
      <img src={img} alt="img-level" />
      <div className="jauge">
        <div style={myStyle} />
      </div>
      <p id="level-title">{level} XP</p>
    </div>
  );
}
