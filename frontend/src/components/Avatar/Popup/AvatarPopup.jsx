import React, { useEffect, useState } from "react";
import "./AvatarPopup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "../../../assets/css/popup.scss";
import { AnimatePresence, motion } from "framer-motion";

library.add(faClose);

function AvatarPopup({ setShowAvatarPopup, title, setAvatarInfo, avatarInfo }) {
  const [background, setBackground] = useState(avatarInfo.options.background);
  const [eyes, setEyes] = useState(avatarInfo.options.eyes);
  const [eyebrows, setEyebrows] = useState(avatarInfo.options.eyebrows);
  const [mouth, setMouth] = useState(avatarInfo.options.mouth);
  const [accessoiresProbability, setAccessoiresProbability] = useState(
    avatarInfo.options.accessoiresProbability
  );
  const [accessoires, setAccessoires] = useState(
    avatarInfo.options.accessoires
  );
  const setUserAvatar = (e) => {
    e.preventDefault();
  };
  function changeAccessoiresProbability() {
    if (accessoiresProbability) {
      setAccessoiresProbability(0);
    } else if (!accessoiresProbability) {
      setAccessoiresProbability(100);
    }
  }

  useEffect(() => {
    setAvatarInfo({
      img: `https://avatars.dicebear.com/api/adventurer-neutral/.svg?eyes[]=${eyes}&eyebrows[]=${eyebrows}&mouth[]=${mouth}&accessoiresProbability=${accessoiresProbability}&accessoires[]=${accessoires}&backgroundColor[]=${background}`,
      options: {
        background,
        eyes,
        eyebrows,
        mouth,
        accessoiresProbability,
        accessoires,
      },
    });
  }, [background, eyes, eyebrows, mouth, accessoiresProbability, accessoires]);

  return (
    <AnimatePresence>
      <motion.div
        key="popup"
        positionTransition
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.1 }}
        className="popup"
        id="avatar-popup"
      >
        <div className="avatar-card">
          <div className="card-header">
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <button
              className="fa-button"
              type="button"
              onClick={() => setShowAvatarPopup(false)}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
            <motion.div
              positionTransition
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              className="avatar-popup-container"
            >
              <div className="avatar-hexagon-border-3">
                <div className="avatar-hexagon-border-2">
                  <div className="avatar-hexagon-border-1">
                    <div className="avatar-hexagon">
                      <img
                        src={`https://avatars.dicebear.com/api/adventurer-neutral/.svg?eyes[]=${eyes}&eyebrows[]=${eyebrows}&mouth[]=${mouth}&accessoiresProbability=${accessoiresProbability}&accessoires[]=${accessoires}&backgroundColor[]=${background}`}
                        alt="Customized Avatar"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <form onSubmit={setUserAvatar}>
              <label className="avatar-inputs" htmlFor="accessoires">
                <span>Couleur</span>
                <select
                  onChange={(e) => setBackground(e.target.value)}
                  name="background"
                  id="background"
                  defaultValue={background}
                  className={background}
                >
                  <option value="variant01">1</option>
                  <option value="variant02">2</option>
                  <option value="variant03">3</option>
                  <option value="variant04">4</option>
                  <option value="variant05">5</option>
                </select>
              </label>
              <label className="avatar-inputs" htmlFor="eyes">
                <span>Yeux</span>
                <select
                  onChange={(e) => setEyes(e.target.value)}
                  name="eyes"
                  id="eyes"
                  defaultValue={eyes}
                >
                  <option value="variant01">1</option>
                  <option value="variant02">2</option>
                  <option value="variant03">3</option>
                  <option value="variant04">4</option>
                  <option value="variant05">5</option>
                  <option value="variant06">6</option>
                  <option value="variant07">7</option>
                  <option value="variant08">8</option>
                  <option value="variant09">9</option>
                  <option value="variant10">10</option>
                  <option value="variant11">11</option>
                  <option value="variant12">12</option>
                  <option value="variant13">13</option>
                  <option value="variant14">14</option>
                  <option value="variant15">15</option>
                  <option value="variant16">16</option>
                  <option value="variant17">17</option>
                  <option value="variant18">18</option>
                  <option value="variant19">19</option>
                  <option value="variant20">20</option>
                  <option value="variant21">21</option>
                  <option value="variant22">22</option>
                  <option value="variant23">23</option>
                  <option value="variant24">24</option>
                  <option value="variant25">25</option>
                  <option value="variant26">26</option>
                </select>
              </label>
              <label className="avatar-inputs" htmlFor="eyebrows">
                <span>Sourcils</span>
                <select
                  onChange={(e) => setEyebrows(e.target.value)}
                  name="eyebrows"
                  id="eyebrows"
                  defaultValue={eyebrows}
                >
                  <option value="variant01">1</option>
                  <option value="variant02">2</option>
                  <option value="variant03">3</option>
                  <option value="variant04">4</option>
                  <option value="variant05">5</option>
                  <option value="variant06">6</option>
                  <option value="variant07">7</option>
                  <option value="variant08">8</option>
                  <option value="variant09">9</option>
                  <option value="variant10">10</option>
                </select>
              </label>
              <label className="avatar-inputs" htmlFor="mouth">
                Bouche
                <select
                  onChange={(e) => setMouth(e.target.value)}
                  name="mouth"
                  id="mouth"
                  defaultValue={mouth}
                >
                  <option value="variant01">1</option>
                  <option value="variant02">2</option>
                  <option value="variant03">3</option>
                  <option value="variant04">4</option>
                  <option value="variant05">5</option>
                  <option value="variant06">6</option>
                  <option value="variant07">7</option>
                  <option value="variant08">8</option>
                  <option value="variant09">9</option>
                  <option value="variant10">10</option>
                  <option value="variant11">11</option>
                  <option value="variant12">12</option>
                  <option value="variant13">13</option>
                  <option value="variant14">14</option>
                  <option value="variant15">15</option>
                  <option value="variant16">16</option>
                  <option value="variant17">17</option>
                  <option value="variant18">18</option>
                  <option value="variant19">19</option>
                  <option value="variant20">20</option>
                  <option value="variant21">21</option>
                  <option value="variant22">22</option>
                  <option value="variant23">23</option>
                  <option value="variant24">24</option>
                  <option value="variant25">25</option>
                  <option value="variant26">26</option>
                  <option value="variant27">27</option>
                  <option value="variant28">28</option>
                  <option value="variant29">29</option>
                  <option value="variant30">30</option>
                </select>
              </label>
              <label
                className="avatar-is-accessoires-container"
                htmlFor="isAccessoire"
              >
                Accessoire?
                <input
                  id="is-accessoire"
                  type="checkbox"
                  checked={accessoiresProbability ? "checked" : ""}
                  onChange={() => changeAccessoiresProbability()}
                  placeholder="isAccessoire"
                  name="isAccessoire"
                />
              </label>
              <label
                id="avatar-input"
                className="avatar-accessoires-container"
                htmlFor="accessoires"
              >
                Accessoires
                <select
                  onChange={(e) => setAccessoires(e.target.value)}
                  name="accessoires"
                  id="accessoires"
                  defaultValue={accessoires}
                >
                  <option value="sunglasses">Lunettes de soleil</option>
                  <option value="glasses">Lunettes</option>
                  <option value="smallGlasses">Petites lunettes</option>
                  <option value="mustache">Moustache</option>
                  <option value="birthmark">tache de naissance</option>
                </select>
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

export default AvatarPopup;
