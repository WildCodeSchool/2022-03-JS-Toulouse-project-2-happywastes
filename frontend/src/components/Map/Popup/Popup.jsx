import React from "react";
import "./Popup.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClose } from "@fortawesome/free-solid-svg-icons";

library.add(faClose);

function Popup({ setShowPopup, title, text }) {
  return (
    <div id="popup">
      <div className="card">
        <div className="card-header">
          <h3>{title}</h3>
          <button type="button" onClick={() => setShowPopup(false)}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <div className="card-body">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
