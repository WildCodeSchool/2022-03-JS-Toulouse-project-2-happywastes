import React from "react";
import "./MapPopup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import rewards from "../Dashboard/DataReward";

library.add(faClose);

function MapPopup({ setShowPopup, title, text }) {
  return (
    <div id="popup">
      <div className="map-card">
        <div className="map-card-header">
          <h3>{title}</h3>
          <button type="button" onClick={() => setShowPopup(false)}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <div className="map-card-body">
          <p>{text}</p>
          <ul>
            {rewards.slice(rewards.length - 4).map((reward) => (
              <li>
                <img src={reward.img} alt="" className="reward-small" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MapPopup;
