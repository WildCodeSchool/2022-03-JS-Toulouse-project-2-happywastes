import "./Avatar.css";
import React from "react";

function Avatar() {
  return (
    <div className="avatar-container">
      <div className="hexagon-border-2">
        <div className="hexagon-border-1">
          <div className="hexagon">
            <img src="../src/assets/img/Phill-Good.png" alt="cat" srcSet="" />
          </div>
        </div>
      </div>
      <h2 className="avatar-title">PHILL GOOD</h2>
    </div>
  );
}

export default Avatar;
