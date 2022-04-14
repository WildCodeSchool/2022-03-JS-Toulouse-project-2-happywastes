import React, { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet";
import MapPOI from "../components/Map/MapPOI";
import Map from "../components/Map/Map";

function BigMap() {
  const [mapCenter, setMapCenter] = useState(null);
  const [locList, setLocList] = useState([]);

  function getGPSLocation() {
    let position = undefined;
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
    <div id="map-id">
      <ul id="locList">
        {locList.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
      {mapCenter !== null ? (
        <MapContainer center={mapCenter} zoom={20} id="map" zoomControl={false}>
          <Map setMapCenter={setMapCenter} userPos={mapCenter} />
          <MapPOI />
        </MapContainer>
      ) : (
        ""
      )}
    </div>
  );
}

export default BigMap;

// [43.604652, 1.444209]
