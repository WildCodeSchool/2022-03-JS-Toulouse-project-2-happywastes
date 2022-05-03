import React, { useState, useEffect } from "react";
import UserUtils from "../services/UserUtils";
import { utilFavourites, collectCenters } from "../services/utils";
import Map from "../components/Map/Map";

function Influence() {
  const [mapCenter, setMapCenter] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [getData, setGetData] = useState(false);
  const [user, setUser] = useState(undefined);

  function getGPSLocation() {
    const position = undefined;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setMapCenter([pos.coords.latitude, pos.coords.longitude]);
        setGetData(true);
      },
      (error) => error
    );
    return position;
  }

  useEffect(() => {
    getGPSLocation();
  }, []);

  useEffect(() => {
    UserUtils.getInfos(1).then((response) => setUser(response));
    if (getData) {
      collectCenters
        .inZone(500, mapCenter)
        .then((result) => {
          const parsedData = utilFavourites.parse(result);
          setFavourites(parsedData);
        })
        .catch((error) => error);
    }
  }, [getData]);
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
