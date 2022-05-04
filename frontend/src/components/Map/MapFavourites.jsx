import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLocation,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useMap } from "react-leaflet";
import "./MapFavourites.scss";
import variants from "../../assets/js/variants";

library.add(faLocation, faArrowAltCircleDown);

function MapFavourites({ data }) {
  const map = useMap();

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      id="map-list"
    >
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
    </motion.div>
  );
}

export default MapFavourites;
