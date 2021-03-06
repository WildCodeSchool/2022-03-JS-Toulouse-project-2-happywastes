import React from "react";
import "./Map.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import MapFavourites from "./MapFavourites";
import MapMarker from "./MapMarker";
import UserPositionBTN from "./UserPositionBTN";
import inconBlue from "../../assets/img/iconBlue-small.png";
import carton from "../../assets/img/carton.png";

function Map({
  center,
  size = "big",
  data = [],
  zoom = 17,
  userPos = false,
  favourites = [],
  showTitle = true,
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
        <MapMarker position={center} iconURL={inconBlue} iconSize={[30, 35]} />
      )}
      {data.length > 0
        ? data.map((el) => (
            <MapMarker
              key={el.recordid}
              showTitle={showTitle}
              fav={false}
              element={el}
              position={el?.fields?.geo_point_2d}
              content={{
                title: `${el?.fields?.flux}`,
                text: `${
                  el.fields?.adresse ? el.fields?.adresse.toLowerCase() : ""
                } ${el.fields?.commune.toLowerCase()} (${
                  el.fields?.code_insee
                })`,
              }}
            />
          ))
        : false}
      {favourites.length > 0 &&
        favourites.map((favourite) => (
          <MapMarker
            key={favourite.recordid}
            showTitle={showTitle}
            fav="true"
            element={favourite}
            iconURL={carton}
            iconSize={[58, 50]}
            position={favourite.fields.geo_point_2d}
            content={{
              title: `${favourite.fields.flux}`,
              text: `${
                favourite.fields.adresse
                  ? favourite.fields.adresse.toLowerCase()
                  : ""
              } ${favourite.fields.commune.toUpperCase()} (${
                favourite.fields.code_insee
              })`,
            }}
          />
        ))}
      {showTitle && <MapFavourites data={favourites} showTitle={showTitle} />}
      {userPos && <UserPositionBTN newPos={center} />}
    </MapContainer>
  ) : (
    ""
  );
}

export default Map;
