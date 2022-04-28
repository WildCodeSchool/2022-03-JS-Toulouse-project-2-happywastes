import React, { useState, useEffect } from "react";
import { utilFavourites, collectCenters } from "../services/utils";
import Map from "../components/Map/Map";

function Influence() {
  const [mapCenter, setMapCenter] = useState(null);
  const [favourites, setFavourites] = useState([]);

  function getGPSLocation() {
    const position = undefined;
    navigator.geolocation.getCurrentPosition(
      (pos) => setMapCenter([pos.coords.latitude, pos.coords.longitude]),
      (error) => error
    );
    return position;
  }

  useEffect(() => {
    if (mapCenter) {
      collectCenters
        .inZone(5000, mapCenter)
        .then((result) => {
          const parsedData = utilFavourites.parse(result);
          setFavourites(parsedData);
        })
        .catch((error) => console.error("error %#d", error));
    }
    // getAPIData(
    //   "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=points-dinteret&q=&facet=categorie&refine.categorie=Déchetterie&rows=100"
    // );
    getGPSLocation();
  }, []);
  return (
    <div id="influence">
      {mapCenter && (
        <Map center={mapCenter} userPos={mapCenter} data={favourites} />
      )}
      )
    </div>
  );
}

export default Influence;
