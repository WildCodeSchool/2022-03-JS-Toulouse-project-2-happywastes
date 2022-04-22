import React from "react";
import "./UserPositionBTN.scss";
import { useMap } from "react-leaflet";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faStreetView);

function UserPositionBTN({ newPos, placement }) {
  const map = useMap();
  return (
    <FontAwesomeIcon
      icon={faStreetView}
      size="2xl"
      className="centerIcon"
      onClick={() => {
        map.flyTo(newPos, 17);
      }}
      style={placement && { left: placement.left, bottom: placement.bottom }}
    />
  );
}

export default UserPositionBTN;
