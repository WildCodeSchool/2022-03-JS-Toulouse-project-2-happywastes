import React, { useState, useEffect } from "react";
import Map from "../components/Map/Map";

function Influence() {
  const [mapCenter, setMapCenter] = useState(null);
  function getGPSLocation() {
    const position = undefined;
    navigator.geolocation.getCurrentPosition(
      (pos) => setMapCenter([pos.coords.latitude, pos.coords.longitude]),
      (error) => error
    );
    return position;
  }

  useEffect(() => {
    getGPSLocation();
  }, []);
  return (
    <div id="influence">
      {mapCenter && <Map center={mapCenter} userPos={mapCenter} />})
    </div>
  );
}

export default Influence;
