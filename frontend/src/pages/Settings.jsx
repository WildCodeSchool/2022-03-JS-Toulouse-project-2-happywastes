import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SettingsMenuList from "../components/SettingsMenuList/SettingsMenuList";
import Avatar from "../components/Avatar/Avatar";
import NavBottom from "../components/NavBottom/NavBottom";
import BackButton from "../components/BackButton/BackButton";

export default function Settings() {
  const [avatarInfo, setAvatarInfo] = useState({
    name: "PHILL GOOD",
    img: "",
    options: {
      background: "variant01",
      eyes: "variant01",
      eyebrows: "variant01",
      mouth: "variant01",
      accessoiresProbability: 0,
      accessoires: "sunglasses",
    },
  });
  useEffect(() => {
    setAvatarInfo({
      ...avatarInfo,
      img: `https://avatars.dicebear.com/api/adventurer-neutral/${avatarInfo.name}.svg?eyes[]=${avatarInfo.options.eyes}&eyebrows[]=${avatarInfo.options.eyebrows}&mouth[]=${avatarInfo.options.mouth}&accessoiresProbability=${avatarInfo.options.accessoiresProbability}&accessoires[]=${avatarInfo.options.accessoires}&backgroundColor[]=${avatarInfo.options.background}`,
    });
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacitiy: 0 }}
      >
        <BackButton url="/dashboard" />
        <Avatar avatarImg={avatarInfo.img} avatarName={avatarInfo.name} />
        <SettingsMenuList
          setAvatarInfo={setAvatarInfo}
          avatarInfo={avatarInfo}
        />
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
