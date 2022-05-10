import React, { useState } from "react";
import L from "leaflet";
import { Marker } from "react-leaflet";
import Popup from "./MapPopup";

function MapMarker({ iconURL, position, iconSize: size, content, element }) {
  const [showPopup, setShowPopup] = useState(false);
  const markerOptions = {
    position,
    eventHandlers: { click: () => setShowPopup(true) },
    icon: new L.Icon({
      iconUrl: iconURL || "/src/assets/img/iconGrey.png",
      iconSize: size || [40, 45],
    }),
  };

  const { title, text } = content || { tilte: "", text: "" };

  return (
    <Marker
      position={markerOptions.position}
      icon={markerOptions.icon}
      eventHandlers={markerOptions.eventHandlers}
    >
      {content && showPopup && (
        <Popup
          title={title}
          text={text}
          setShowPopup={setShowPopup}
          element={element}
        />
      )}
    </Marker>
  );
}

export default MapMarker;
