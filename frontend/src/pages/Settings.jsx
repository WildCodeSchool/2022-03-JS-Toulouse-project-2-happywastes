import { useState, useEffect } from "react";
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
    <div>
      <BackButton />
      <Avatar avatarImg={avatarInfo.img} avatarName={avatarInfo.name} />
      <SettingsMenuList setAvatarInfo={setAvatarInfo} avatarInfo={avatarInfo} />
      <BackButton />
      <NavBottom />
      <BackButton />
    </div>
  );
}
