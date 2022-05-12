import React, { useState } from "react";
import L from "leaflet";
import { Marker } from "react-leaflet";
import Popup from "./MapPopup";
import iconGrey from "../../assets/img/iconGrey.png";
import iconGreen from "../../assets/img/iconGreen-small.png";
import iconRed from "../../assets/img/iconRed-small.png";
import iconYellow from "../../assets/img/iconYellow-small.png";

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
    "Récup'verre": iconGreen,
    "Récup'Textile": iconRed,
    "Collecte sélective": iconYellow,
  };

  const markerOptions = {
    position,
    eventHandlers: { click: () => setShowPopup(true) },
    icon: new L.Icon({
      iconUrl: iconURL || centerTypeIcon[element?.fields?.flux] || iconGrey,
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
