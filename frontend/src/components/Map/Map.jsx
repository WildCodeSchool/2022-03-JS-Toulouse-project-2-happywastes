import React from "react";
import { TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "./Map.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import marker from "../../assets/img/iconBlue-small.png";

library.add(faStreetView);

function Map({ userPos, data }) {
  const map = useMap();
  const iconDechet = new L.Icon({
    iconUrl: marker,
    iconSize: [30, 37],
  });

  return (
    <>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <FontAwesomeIcon
        icon={faStreetView}
        size="2xl"
        className="centerIcon"
        onClick={() => {
          map.flyTo(userPos, 17);
        }}
      />
      <Marker position={userPos} icon={iconDechet} />
      {data.length > 0
        ? data.map((el) => (
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
