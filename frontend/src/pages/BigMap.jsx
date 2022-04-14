import React, { useState } from "react";
import { MapContainer } from "react-leaflet";
import Map from "../components/Map/Map";

function BigMap() {
  const [mapReady, setMapReady] = useState(true);

  return mapReady ? (
    <div id="map-id">
      <MapContainer center={[43.604652, 1.444209]} zoom={13} id="map">
        <Map setMapReady={setMapReady} />
      </MapContainer>
    </div>
  ) : (
    <p>Loading..</p>
  );
}

export default BigMap;

// [43.604652, 1.444209]
