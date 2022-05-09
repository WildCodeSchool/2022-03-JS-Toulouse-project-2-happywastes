import "./AvatarPopup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "../../../assets/css/popup.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

library.add(faClose);

function SettingsPopup({ setShowAvatarPopup, setAvatarInfo }) {
  const [userIdentifiant, setUserIdentifiant] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSetIdentifiants = (e) => {
    e.preventDefault();
    setAvatarInfo(userIdentifiant);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="popup"
        positionTransition
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.1 }}
        role="button"
        className="popup"
        id="avatar-popup"
      >
        <div className="avatar-card">
          <div className="card-header">
            <h3>Changer mes informartions</h3>
          </div>
          <div className="card-body">
            <button
              className="fa-button"
              type="button"
              onClick={() => setShowAvatarPopup(false)}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
            <form onSubmit={handleSetIdentifiants}>
              <label className="id-inputs" htmlFor="name">
                <span>Identifiant</span>
                <input
                  onChange={(e) => setUserIdentifiant(e.target.value)}
                  type="text"
                  name="name"
                  defaultValue={userIdentifiant}
                />
              </label>
              <label className="id-inputs" htmlFor="password">
                <span>Mot de Passe</span>
                <input
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                  type="password"
                  name="password"
                  defaultValue={userPassword}
                />
              </label>
              <button
                id="avatar-validate-button"
                type="submit"
                onClick={() => setShowAvatarPopup(false)}
              >
                Valider
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SettingsPopup;
