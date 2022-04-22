import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLocation,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useMap } from "react-leaflet";
import "./MapFavourites.scss";

library.add(faLocation, faArrowAltCircleDown);

function MapFavourites({ data }) {
  const map = useMap();

  return (
    <div id="map-list">
      <h2>Mes Lieux Favoris</h2>
      <ul className="fa-ul">
        {data.map((el) => (
          <li key={el.recordid}>
            <FontAwesomeIcon
              className="locationIcon"
              icon={faLocation}
              size="lg"
              onClick={() => {
                map.flyTo(el.fields.geo_point_2d, 15);
              }}
            />
            {`${el.fields.commune} (${el.fields.code_postal})`}
            &nbsp;&nbsp;
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MapFavourites;
