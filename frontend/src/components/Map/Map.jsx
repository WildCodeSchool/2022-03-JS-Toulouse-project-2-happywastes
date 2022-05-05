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
              element={el}
              position={el.fields.geo_point_2d}
              content={{
                title: `${el.fields.flux}`,
                text: `${el.fields.adresse.toLowerCase()} ${el.fields.commune.toUpperCase()} (${
                  el.fields.code_insee
                })`,
              }}
            />
          ))
        : false}
      {favourites.length > 0 &&
        favourites.map((favourite) => (
          <MapMarker
            key={favourite.recordid}
            element={favourite}
            iconURL="src/assets/img/carton.png"
            iconSize={[58, 50]}
            position={favourite.fields.geo_point_2d}
            content={{
              title: `${favourite.fields.flux}`,
              text: `${favourite.fields.adresse.toLowerCase()} ${favourite.fields.commune.toUpperCase()} (${
                favourite.fields.code_insee
              })`,
            }}
          />
        ))}
      {favourites.length > 0 && <MapFavourites data={favourites} />}
      {userPos && <UserPositionBTN newPos={center} />}
    </MapContainer>
  ) : (
    ""
  );
}

export default Map;
