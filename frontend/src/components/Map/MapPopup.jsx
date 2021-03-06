import { motion, AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./MapPopup.scss";
import "../../assets/css/popup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import rewards from "../Dashboard/DataReward";
import UserUtils from "../../services/UserUtils";
import { GlobalUserContext } from "../GlobalUserContext";

library.add(faClose);

function MapPopup({ setShowPopup, title, text, element, fav }) {
  const navigate = useNavigate();
  const userContext = useContext(GlobalUserContext);
  const [userMail] = userContext.userMail;

  const addToFavourite = () => {
    const user = new UserUtils(userMail);
    user
      .addFavourite([
        {
          id: element.recordid,
          flux: element.flux ? element.flux : element.categorie,
        },
      ])
      .then(() => navigate("/recycler"));
  };

  const handleChoice = () => {
    navigate(`/recycler/centre/${element.recordid}`);
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="popup">
        <motion.div
          key="popup"
          positionTransition
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ y: -400, opacity: 0, transition: { duration: 0.5 } }}
          transition={{ duration: 0.1 }}
          className="popup-card-tacos"
        >
          <div className="map-card-header">
            <h3>{title}</h3>
            <button type="button" onClick={() => setShowPopup(false)}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
          <div className="map-card-body">
            <p>{text}</p>
            <ul className="popup-item">
              {rewards.slice(rewards.length - 4).map((reward) => (
                <li key={reward.id}>
                  <img src={reward.img} alt="" className="reward-small" />
                </li>
              ))}
            </ul>
            <div className="selection">
              <button
                className="selectCenter"
                type="button"
                id={element.recordid}
                onClick={handleChoice}
              >
                Choisir ce centre de recyclage
              </button>
              {!fav && (
                <button
                  type="button"
                  id={element.recordid}
                  onClick={addToFavourite}
                >
                  Ajouter aux favoris ???
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default MapPopup;
