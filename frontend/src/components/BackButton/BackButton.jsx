import React from "react";
import "./back-button.css";
import image from "../../assets/img/back-button.png";

export default function BackButton() {
  return (
    <div className="back-button">
      <img src={image} alt="back-button" className="back-btn-img" />
    </div>
  );
}
