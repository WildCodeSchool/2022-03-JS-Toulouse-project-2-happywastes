import React, { useState } from "react";
import Map from "../components/Map/Map";

function BigMap() {
  function getGPSPosition() {
    navigator.geolocation.getCurrentPosition((pos) => {
      return [pos.coords.latitude, pos.coords.longitude];
    });
  }

  const [localisation, setLocalisation] = useState([43.604652, 1.444209]);

  // useEffect(() => {
  //   setLocalisation(getGPSPosition());
  // }, []);

  return (
    <div id="map-id">
      <Map gps={localisation} getPos={() => getGPSPosition()} />
      <button type="button" onClick={() => setLocalisation(getGPSPosition())}>
        GPS
      </button>
    </div>
  );
}

export default BigMap;

// [43.604652, 1.444209]
