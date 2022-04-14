import React, { useEffect, useState } from "react";
import { TileLayer, Marker, Popup, useMap, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "./Map.scss";
import marker from "../../assets/img/map-marker-shield.svg";

function Map({ setMapCenter, userPos }) {
  const [apiData, setApiData] = useState([]);

  const map = useMap();
  const iconDechet = new L.Icon({
    iconUrl: marker,
    iconSize: [50, 50],
  });

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

  return (
    <>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ZoomControl position="bottomleft" />
      <Marker position={userPos} icon={iconDechet} />
      {apiData.length > 0
        ? apiData.map((el) => (
            <Marker
              eventHandlers={{ click: () => map.flyTo(el.fields.geo_point_2d) }}
              key={el.recordid}
              position={[
                el.geometry.coordinates[1],
                el.geometry.coordinates[0],
              ]}
            >
              <Popup>
                {`${el.fields.commune} (${el.fields.code_postal})`}
                <br />
                {`${el.fields.horaire}`}
              </Popup>
            </Marker>
          ))
        : false}
    </>
  );
}

export default Map;
