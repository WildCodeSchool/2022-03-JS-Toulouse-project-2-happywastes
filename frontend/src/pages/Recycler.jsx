import React, { useEffect, useState } from "react";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import NavBottom from "../components/NavBottom/NavBottom";
import Map from "../components/Map/Map";
import BackButton from "../components/BackButton/BackButton";

function Recycler() {
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
        <Map
          center={mapCenter}
          userPos={mapCenter}
          data={apiData}
          favourites={apiData.slice(0, 4)}
        />
      ) : (
        ""
      )}
      <NavBottom />
    </div>
  );
}

export default Recycler;
