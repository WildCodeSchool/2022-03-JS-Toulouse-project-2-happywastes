import "./SettingsMenuItem.css";
import "../../assets/css/main.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AvatarPopup from "../Avatar/Popup/AvatarPopup";

function SettingsMenuItem(props) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const { title, color, image, setAvatarInfo, avatarInfo } = props;
  return (
    <motion.div role="button">
      <div className={`settings-menu-item ${color}`}>
        <img className="settings-menu-item-image" src={image} alt="" />
        <button
          type="button"
          onClick={() => togglePopup()}
          className="settings-menu-item-text"
        >
          {title}
        </button>
        {showPopup && (
          <AvatarPopup
            setShowAvatarPopup={setShowPopup}
            setAvatarInfo={setAvatarInfo}
            avatarInfo={avatarInfo}
            title="Modifier son avatar"
          />
        )}
      </div>
    </motion.div>
  );
}

export default SettingsMenuItem;
