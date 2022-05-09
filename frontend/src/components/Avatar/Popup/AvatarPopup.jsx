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
              <label htmlFor="accessoires">
                Couleur
                <select
                  onChange={(e) => setBackground(e.target.value)}
                  name="background"
                  id="background"
                  defaultValue={background}
                  className={background}
                >
                  <option value="variant01">Blanc</option>
                  <option value="variant02">Clair</option>
                  <option value="variant03">Mate</option>
                  <option value="variant04">Brun</option>
                  <option value="variant05">Foncé</option>
                </select>
              </label>
              <label htmlFor="eyes">
                Yeux
                <select
                  onChange={(e) => setEyes(e.target.value)}
                  name="eyes"
                  id="eyes"
                  defaultValue={eyes}
                >
                  <option value="variant01">droite</option>
                  <option value="variant02">gauche</option>
                  <option value="variant03">strabisme</option>
                  <option value="variant04">stone</option>
                  <option value="variant05">crapuleux</option>
                  <option value="variant06">méfiant 1</option>
                  <option value="variant07">mafiant 2</option>
                  <option value="variant08">Insomnie</option>
                  <option value="variant09">éméché</option>
                  <option value="variant10">éméché 2</option>
                  <option value="variant11">Sceptique 1</option>
                  <option value="variant12">Sceptique 2</option>
                  <option value="variant13">colère 1</option>
                  <option value="variant14">colère 2</option>
                  <option value="variant15">Déprimé 1</option>
                  <option value="variant16">Déprimé 2</option>
                  <option value="variant17">Déprimé 3</option>
                  <option value="variant18">Déprimé 4</option>
                  <option value="variant19">Fermé 1</option>
                  <option value="variant20">Fermé 2</option>
                  <option value="variant21">Clin d&apos;oeil 1</option>
                  <option value="variant22">Clin d&apos;oeil 2</option>
                  <option value="variant23">Captivant</option>
                  <option value="variant24">Surpris</option>
                  <option value="variant25">Surpris gauche</option>
                  <option value="variant26">Surpris droit</option>
                </select>
              </label>
              <label htmlFor="eyebrows">
                Sourcils
                <select
                  onChange={(e) => setEyebrows(e.target.value)}
                  name="eyebrows"
                  id="eyebrows"
                  defaultValue={eyebrows}
                >
                  <option value="variant01">furieux épais</option>
                  <option value="variant02">furieux</option>
                  <option value="variant03">déçus</option>
                  <option value="variant04">surpris</option>
                  <option value="variant05">surpris court</option>
                  <option value="variant06">triste</option>
                  <option value="variant07">inquiet</option>
                  <option value="variant08">étonné 1</option>
                  <option value="variant09">étonné 2</option>
                  <option value="variant10">blasé</option>
                </select>
              </label>
              <label htmlFor="mouth">
                Bouche
                <select
                  onChange={(e) => setMouth(e.target.value)}
                  name="mouth"
                  id="mouth"
                  defaultValue={mouth}
                >
                  <option value="variant01">sourire 1</option>
                  <option value="variant02">sourire 2</option>
                  <option value="variant03">étonné</option>
                  <option value="variant04">déçus</option>
                  <option value="variant05">rouge à levres 1</option>
                  <option value="variant06">rouge à levres 2</option>
                  <option value="variant07">rouge à levres 3</option>
                  <option value="variant08">rouge à levres 4</option>
                  <option value="variant09">neutre</option>
                  <option value="variant10">bouche pleine</option>
                  <option value="variant11">serre les dents</option>
                  <option value="variant12">tire la langue</option>
                  <option value="variant13">bave</option>
                  <option value="variant14">surpris 1</option>
                  <option value="variant15">surpris 2</option>
                  <option value="variant16">tire la langue</option>
                  <option value="variant17">cul de poule</option>
                  <option value="variant18">étonné mignon</option>
                  <option value="variant19">grimace 1</option>
                  <option value="variant20">grimace 2</option>
                  <option value="variant21">grimace 3</option>
                  <option value="variant22">dents serrées 1</option>
                  <option value="variant23">dents serrées 2</option>
                  <option value="variant24">glotte apparente</option>
                  <option value="variant25">vampyre</option>
                  <option value="variant26">bouche ouverte</option>
                  <option value="variant27">sourire triangulaire</option>
                  <option value="variant28">dents de lapin</option>
                  <option value="variant29">bouche v</option>
                  <option value="variant30">bouche triangle</option>
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
