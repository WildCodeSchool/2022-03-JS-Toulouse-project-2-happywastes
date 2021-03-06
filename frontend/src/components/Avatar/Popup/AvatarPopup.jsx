import React, { useEffect, useState, useContext } from "react";
import "./AvatarPopup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "../../../assets/css/popup.scss";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { GlobalUserContext } from "../../GlobalUserContext";

library.add(faClose);

function AvatarPopup({ setShowAvatarPopup, title, setAvatarInfo, avatarInfo }) {
  const userContext = useContext(GlobalUserContext);
  const [avatarLink, setAvatarLink] = userContext.avatarLink;
  const [userMail] = userContext.userMail;
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

  function changeAccessoiresProbability() {
    if (accessoiresProbability) {
      setAccessoiresProbability(0);
    } else if (!accessoiresProbability) {
      setAccessoiresProbability(100);
    }
  }

  const setUserAvatar = (e) => {
    e.preventDefault();
    setAvatarLink(avatarInfo.img);
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/avatar/create/${userMail}`,
        {
          avatarLink,
        }
      )
      .then(() => {
        setShowAvatarPopup();
      });

    setShowAvatarPopup();
  };

  useEffect(() => {
    setAvatarLink(
      `https://avatars.dicebear.com/api/adventurer-neutral/.svg?eyes[]=${eyes}&eyebrows[]=${eyebrows}&mouth[]=${mouth}&accessoiresProbability=${accessoiresProbability}&accessoires[]=${accessoires}&backgroundColor[]=${background}`
    );
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
                      {avatarLink ? (
                        <img
                          src={avatarLink}
                          alt="Customized Avatar"
                          srcSet=""
                        />
                      ) : (
                        <img
                          src={`https://avatars.dicebear.com/api/adventurer-neutral/.svg?eyes[]=${eyes}&eyebrows[]=${eyebrows}&mouth[]=${mouth}&accessoiresProbability=${accessoiresProbability}&accessoires[]=${accessoires}&backgroundColor[]=${background}`}
                          alt="Customized Avatar"
                          srcSet=""
                        />
                      )}
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
                  <option value="variant01">Blanc</option>
                  <option value="variant02">Clair</option>
                  <option value="variant03">Mate</option>
                  <option value="variant04">Brun</option>
                  <option value="variant05">Fonc??</option>
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
                  <option value="variant01">droite</option>
                  <option value="variant02">gauche</option>
                  <option value="variant03">strabisme</option>
                  <option value="variant04">stone</option>
                  <option value="variant05">crapuleux</option>
                  <option value="variant06">m??fiant 1</option>
                  <option value="variant07">mafiant 2</option>
                  <option value="variant08">Insomnie</option>
                  <option value="variant09">??m??ch??</option>
                  <option value="variant10">??m??ch?? 2</option>
                  <option value="variant11">Sceptique 1</option>
                  <option value="variant12">Sceptique 2</option>
                  <option value="variant13">col??re 1</option>
                  <option value="variant14">col??re 2</option>
                  <option value="variant15">D??prim?? 1</option>
                  <option value="variant16">D??prim?? 2</option>
                  <option value="variant17">D??prim?? 3</option>
                  <option value="variant18">D??prim?? 4</option>
                  <option value="variant19">Ferm?? 1</option>
                  <option value="variant20">Ferm?? 2</option>
                  <option value="variant21">Clin d&apos;oeil 1</option>
                  <option value="variant22">Clin d&apos;oeil 2</option>
                  <option value="variant23">Captivant</option>
                  <option value="variant24">Surpris</option>
                  <option value="variant25">Surpris gauche</option>
                  <option value="variant26">Surpris droit</option>
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
                  <option value="variant01">furieux ??pais</option>
                  <option value="variant02">furieux</option>
                  <option value="variant03">d????us</option>
                  <option value="variant04">surpris</option>
                  <option value="variant05">surpris court</option>
                  <option value="variant06">triste</option>
                  <option value="variant07">inquiet</option>
                  <option value="variant08">??tonn?? 1</option>
                  <option value="variant09">??tonn?? 2</option>
                  <option value="variant10">blas??</option>
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
                  <option value="variant01">sourire 1</option>
                  <option value="variant02">sourire 2</option>
                  <option value="variant03">??tonn??</option>
                  <option value="variant04">d????us</option>
                  <option value="variant05">rouge ?? levres 1</option>
                  <option value="variant06">rouge ?? levres 2</option>
                  <option value="variant07">rouge ?? levres 3</option>
                  <option value="variant08">rouge ?? levres 4</option>
                  <option value="variant09">neutre</option>
                  <option value="variant10">bouche pleine</option>
                  <option value="variant11">serre les dents</option>
                  <option value="variant12">tire la langue</option>
                  <option value="variant13">bave</option>
                  <option value="variant14">surpris 1</option>
                  <option value="variant15">surpris 2</option>
                  <option value="variant16">tire la langue</option>
                  <option value="variant17">cul de poule</option>
                  <option value="variant18">??tonn?? mignon</option>
                  <option value="variant19">grimace 1</option>
                  <option value="variant20">grimace 2</option>
                  <option value="variant21">grimace 3</option>
                  <option value="variant22">dents serr??es 1</option>
                  <option value="variant23">dents serr??es 2</option>
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
              <button id="avatar-validate-button" type="submit">
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
