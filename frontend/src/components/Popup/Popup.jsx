import React from "react";
import "./Popup.scss";

function Popup({ setShowPopup, title, text }) {
  return (
    <div id="popup">
      <h3>{title}</h3>
      <p>{text}</p>
      <button type="button" onClick={() => setShowPopup(false)}>
        close
      </button>
    </div>
  );
}

export default Popup;
