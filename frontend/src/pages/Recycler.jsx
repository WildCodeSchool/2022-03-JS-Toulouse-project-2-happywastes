import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useContext } from "react";
import { GlobalUserContext } from "../components/GlobalUserContext";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import NavBottom from "../components/NavBottom/NavBottom";
import Map from "../components/Map/Map";
import BackButton from "../components/BackButton/BackButton";
import collectCenters from "../services/collect_centers";
import UserUtils from "../services/UserUtils";
import variants from "../assets/js/variants";

function Recycler() {
  const userContext = useContext(GlobalUserContext);
  const [userMail] = userContext.userMail;

  const [mapCenter, setMapCenter] = useState(null);
  const [apiData, setApiData] = useState([]);
  const [userFavourites, setUserFavourites] = useState([]);

  const user = new UserUtils(userMail);

  useEffect(() => {
    user.getFavourites().then((response) => {
      if (response) {
        Promise.all(
          response.map((el) => collectCenters.getOne(el.id).then((res) => res))
        ).then((values) => setUserFavourites(values));
      }
    });
  }, []);

  function getGPSLocation() {
    const position = undefined;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        collectCenters
          .inZone(500, [pos.coords.latitude, pos.coords.longitude])
          .then((data) => {
            setApiData(data);
            setMapCenter([pos.coords.latitude, pos.coords.longitude]);
          });
      },
      (error) => error
    );
    return position;
  }
  useEffect(() => {
    getGPSLocation();
  }, []);
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
            favourites={userFavourites}
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
