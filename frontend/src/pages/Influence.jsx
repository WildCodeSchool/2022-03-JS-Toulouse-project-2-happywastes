import React, { useState, useEffect } from "react";
import { utilFavourites } from "../services/utils";
import Map from "../components/Map/Map";

function Influence() {
  const [mapCenter, setMapCenter] = useState(null);
  const [favourites, setFavourites] = useState([]);

  async function getAPIData(url) {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFavourites(utilFavourites.parse(data.records));
      });
  }

  function getGPSLocation() {
    const position = undefined;
    navigator.geolocation.getCurrentPosition(
      (pos) => setMapCenter([pos.coords.latitude, pos.coords.longitude]),
      (error) => error
    );
    return position;
  }

  function getFavourites(userId) {
    // TODO get favourites for this user from api;
    const sampleFavourites = [
      {
        id: 0,
        name: "Déchetterie de Saint Cyprien",
        address: "18, place Roguet",
        city: "toulouse",
        zip_code: "31100",
        coords: { lat: 43.59741384474553, long: 1.430733744180212 },
        schedule: { lundi: "8h00/18h00", mardi: "8h00/18h00" },
        categories: [0, 1, 2],
      },
      {
        id: 1,
        name: "Déchetterie de Saint Cyprien",
        address: "18, place Roguet",
        city: "toulouse",
        zip_code: "31100",
        coords: { lat: 43.57, long: 1.44 },
        schedule: { lundi: "8h00/18h00", mardi: "8h00/18h00" },
        categories: [0, 1, 2],
      },
      {
        id: 2,
        name: "Déchetterie de Saint Cyprien",
        address: "18, place Roguet",
        city: "toulouse",
        zip_code: "31100",
        coords: { lat: 43.55, long: 1.41 },
        schedule: { lundi: "8h00/18h00", mardi: "8h00/18h00" },
        categories: [0, 1, 2],
      },
    ];
    setFavourites(sampleFavourites[userId]);
    return true;
  }

  useEffect(() => {
    getAPIData(
      "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=points-dinteret&q=&facet=categorie&refine.categorie=Déchetterie&rows=100"
    );
    getGPSLocation();
    getFavourites(1);
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
