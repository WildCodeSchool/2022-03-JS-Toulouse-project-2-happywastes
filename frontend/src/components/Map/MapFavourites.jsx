import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLocation,
  faArrowAltCircleDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
// import React, { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "./MapFavourites.scss";
import variants from "../../assets/js/variants";
import UserUtils from "../../services/UserUtils";

library.add(faLocation, faArrowAltCircleDown, faClose);

function MapFavourites({ data }) {
  const map = useMap();
  const navigate = useNavigate();
  const removeFavourite = (id) => {
    const user = new UserUtils(1);
    user.removeFavourite(id);
    console.log(id);
    navigate("/recycler");
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      id="map-list"
    >
      <h2>
        Choisir un centre de recylage <br /> ou sélectionner un de vos favoris
      </h2>
      <ul className="fa-ul">
        {data.length > 0
          ? data.map((el) => (
              <li key={el.recordid}>
                <FontAwesomeIcon
                  className="locationIcon"
                  icon={faLocation}
                  size="lg"
                  onClick={() => {
                    map.flyTo(el.fields.geo_point_2d, 15);
                  }}
                />
                {`${el.fields.flux} (${el.fields.commune} - ${el.fields.code_insee})`}
                <FontAwesomeIcon
                  icon={faClose}
                  size="lg"
                  onClick={() => removeFavourite(el.recordid)}
                />
              </li>
            ))
          : "loading"}
      </ul>
    </motion.div>
  );
}

export default MapFavourites;
