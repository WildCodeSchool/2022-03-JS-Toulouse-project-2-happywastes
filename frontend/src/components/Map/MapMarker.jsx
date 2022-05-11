import React, { useState } from "react";
import L from "leaflet";
import { Marker } from "react-leaflet";
import Popup from "./MapPopup";

function MapMarker({
  iconURL,
  position,
  iconSize: size,
  content,
  element,
  fav,
  showTitle = true,
}) {
  const [showPopup, setShowPopup] = useState(false);
  const centerTypeIcon = {
    "Récup'verre": "/src/assets/img/iconGreen-small.png",
    "Récup'Textile": "/src/assets/img/iconRed-small.png",
    "Collecte sélective": "/src/assets/img/iconYellow-small.png",
  };

  const markerOptions = {
    position,
    eventHandlers: { click: () => setShowPopup(true) },
    icon: new L.Icon({
      iconUrl:
        iconURL ||
        centerTypeIcon[element?.fields?.flux] ||
        "/src/assets/img/iconGrey.png",
      iconSize: size || [50, 45],
    }),
  };

  const { title, text } = content || { tilte: "", text: "" };
  return (
    <Marker
      position={markerOptions.position}
      icon={markerOptions.icon}
      eventHandlers={markerOptions.eventHandlers}
    >
      {content && showPopup && showTitle && (
        <Popup
          title={title}
          text={text}
          setShowPopup={setShowPopup}
          element={element}
          fav={fav}
        />
      )}
    </Marker>
  );
}

export default MapMarker;
