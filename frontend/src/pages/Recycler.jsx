import React, { useEffect, useState } from "react";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import NavBottom from "../components/NavBottom/NavBottom";
import Map from "../components/Map/Map";
import BackButton from "../components/BackButton/BackButton";
import collectCenters from "../services/collect_centers";
import UserUtils from "../services/UserUtils";

function Recycler() {
  const [mapCenter, setMapCenter] = useState(null);
  const [apiData, setApiData] = useState([]);
  const [userFavourites, setUserFavourites] = useState([]);

  const user = new UserUtils(1);

  useEffect(() => {
    user.getFavourites().then((response) => {
      if (response) {
        response.map((el) =>
          collectCenters
            .getOne(el.id)
            .then((res) =>
              setUserFavourites((favourites) => [...favourites, res])
            )
        );
      }
    });
  }, []);

  function getGPSLocation() {
    const position = undefined;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        collectCenters
          .inZone(500, [pos.coords.latitude, pos.coords.longitude])
          .then((data) => {
            setApiData(data);
            setMapCenter([pos.coords.latitude, pos.coords.longitude]);
          });
      },
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

      {mapCenter !== null && userFavourites.length > 0 ? (
        <Map
          center={mapCenter}
          userPos={mapCenter}
          data={apiData}
          favourites={userFavourites}
        />
      ) : (
        ""
      )}
      <NavBottom />
    </div>
  );
}

export default Recycler;
