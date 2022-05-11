import "./SettingsMenuItem.css";
import "../../assets/css/main.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AvatarPopup from "../Avatar/Popup/AvatarPopup";
import SettingsPopup from "../Avatar/Popup/SettingsPopup";
import FavoritePopup from "../Avatar/Popup/FavoritePopup";

function SettingsMenuItem(props) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const { title, color, image, setAvatarInfo, avatarInfo, routePath } = props;
  return (
    <AnimatePresence>
      <motion.div>
        <div className={`settings-menu-item ${color}`}>
          <img className="settings-menu-item-image" src={image} alt="" />
          <button
            type="button"
            onClick={() => togglePopup()}
            className="settings-menu-item-text"
          >
            {title}
          </button>
          {showPopup && routePath === "avatar-popup" && (
            <AvatarPopup
              setShowAvatarPopup={setShowPopup}
              setAvatarInfo={setAvatarInfo}
              avatarInfo={avatarInfo}
              title="Modifier son avatar"
            />
          )}
          {showPopup && routePath === "identifiant/popup" && (
            <SettingsPopup
              setShowAvatarPopup={setShowPopup}
              setAvatarInfo={setAvatarInfo}
              avatarInfo={avatarInfo}
              title="Modifier son avatar"
            />
          )}
          {showPopup && routePath === "favoris/popup" && (
            <FavoritePopup
              setShowAvatarPopup={setShowPopup}
              setAvatarInfo={setAvatarInfo}
              avatarInfo={avatarInfo}
              title="Modifier son avatar"
            />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SettingsMenuItem;
