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
  // user.addFavourite([
  //   {
  //     id: "62550ba833e40682b8d456e79a5a62f57f00b07b",
  //     flux: "Collecte sélective",
  //     collet_type: 3,
  //   },
  //   {
  //     id: "6dd847cae7a672abf64308ba273ceb38258c9392",
  //     flux: "Collecte sélective",
  //     collet_type: 3,
  //   },
  //   {
  //     id: "8d7425130cd9c8af69482c0b746f7e643ed1d41e",
  //     flux: "Récup'verre",
  //     collet_type: 1,
  //   },
  //   {
  //     id: "d0f954d74d5095c9a6a903fa64ae8dbd2c138701",
  //     flux: "Récup'Textile",
  //     collet_type: 3,
  //   },
  //   {
  //     id: "a676187369dee3686e8ef27042ced4dc18c03ced",
  //     flux: "Ordures ménagères",
  //     collet_type: 5,
  //   },
  // ]);

  async function getAPIData(url) {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.records);
      });
  }

  useEffect(() => {
    user.getFavourites().then((response) => setUserFavourites(response));
    getAPIData(
      "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=points-dinteret&q=&facet=categorie&refine.categorie=Déchetterie&rows=100"
    );
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

      {mapCenter !== null ? (
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
