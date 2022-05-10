import React, { useState } from "react";
import { useMap } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import Popup from "./MapPopup";

function MapFavouriteItem({ el }) {
  const map = useMap();
  const [showPopup, setShowPopup] = useState(false);
  const { title, text } = { tilte: "", text: "" };

  return (
    <>
      <li className="favourite-item">
        <FontAwesomeIcon
          className="locationIcon"
          icon={faLocation}
          size="lg"
          onClick={() => {
            map.flyTo(el.fields.geo_point_2d, 15);
          }}
        />
        <span
          role="button"
          tabIndex="0"
          onKeyDown={() => setShowPopup(true)}
          onClick={() => setShowPopup(true)}
        >{`${el.fields.flux} (${el.fields.commune} - ${el.fields.code_insee})`}</span>
      </li>
      {showPopup && (
        <Popup
          title={title}
          text={text}
          setShowPopup={setShowPopup}
          element={el}
          fav
        />
      )}
    </>
  );
}

export default MapFavouriteItem;
