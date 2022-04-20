import React, { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import NavBottom from "../components/NavBottom/NavBottom";
import MapPOI from "../components/Map/MapPOI";
import Map from "../components/Map/Map";
import BackButton from "../components/BackButton/BackButton";

function BigMap() {
  const [mapCenter, setMapCenter] = useState(null);
  const [apiData, setApiData] = useState([]);

  async function getAPIData(url) {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.records);
      });
  }

  useEffect(() => {
    getAPIData(
      "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=points-dinteret&q=&facet=categorie&refine.categorie=Déchetterie&rows=100"
    );
  }, []);

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
    <div id="map-id">
      <BackButton />
      <ProfileButton />
      {mapCenter !== null ? (
        <MapContainer center={mapCenter} zoom={17} id="map" zoomControl={false}>
          <Map userPos={mapCenter} data={apiData} />
          <MapPOI data={apiData.slice(0, 4)} />
        </MapContainer>
      ) : (
        ""
      )}
      <NavBottom />
    </div>
  );
}

export default BigMap;
