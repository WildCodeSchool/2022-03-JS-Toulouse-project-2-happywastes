import React from "react";
import "./Map.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import MapFavourites from "./MapFavourites";
import MapMarker from "./MapMarker";
import UserPositionBTN from "./UserPositionBTN";

function Map({
  center,
  size = "big",
  data = [],
  zoom = 17,
  userPos = false,
  favourites = [],
}) {
  const mapCenter = true;
  return mapCenter !== null ? (
    <MapContainer
      center={center}
      zoom={zoom}
      id={size === "big" ? "map-big" : "map-small"}
      zoomControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {userPos && (
        <MapMarker
          position={center}
          iconURL="src/assets/img/iconBlue-small.png"
          iconSize={[30, 35]}
        />
      )}
      {data.length > 0
        ? data.map((el) => (
            <MapMarker
              key={el.recordid}
              position={[
                el.geometry.coordinates[1],
                el.geometry.coordinates[0],
              ]}
              content={{
                title: `${el.fields.commune} (${el.fields.code_postal})`,
                text: `${el.fields.horaire}`,
              }}
            />
          ))
        : false}
      {favourites.length > 0 && <MapFavourites data={favourites} />}
      {userPos && <UserPositionBTN newPos={center} />}
    </MapContainer>
  ) : (
    ""
  );
}

export default Map;
