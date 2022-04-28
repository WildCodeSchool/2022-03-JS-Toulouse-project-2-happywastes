import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import NavBottom from "../components/NavBottom/NavBottom";
import Map from "../components/Map/Map";
import BackButton from "../components/BackButton/BackButton";

function Recycler() {
  const [mapCenter, setMapCenter] = useState(null);
  const [apiData, setApiData] = useState([]);

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

  function getGPSLocation() {
    const position = undefined;
    navigator.geolocation.getCurrentPosition(
      (pos) => setMapCenter([pos.coords.latitude, pos.coords.longitude]),
      (error) => error
    );
    return position;
  }
  useEffect(() => {
    getGPSLocation();
  }, []);

  const variants = {
    hidden: {
      x: 400,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "Inertia", duration: 0.18 },
    },
    exit: {
      x: -400,
      opacity: 0,
      transition: { ease: "easeInOut", duration: 0.18 },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={variants}
        key="Recycler"
        initial="hidden"
        animate="visible"
        exit="exit"
        className="dashboard"
        id="map-id"
      >
        <BackButton />
        <ProfileButton />
        {mapCenter !== null ? (
          <Map
            center={mapCenter}
            userPos={mapCenter}
            data={apiData}
            favourites={apiData.slice(0, 4)}
          />
        ) : (
          ""
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.5 } }}
        >
          <NavBottom />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Recycler;
