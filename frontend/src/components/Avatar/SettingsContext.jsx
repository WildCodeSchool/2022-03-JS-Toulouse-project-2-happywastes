import { createContext, useState, useMemo } from "react";

export const SettingsContext = createContext();

function SettingsProvider() {
  const [userSettings, setUserSettings] = useState("PHILL GOOD");
  const [userAvatar, setUserAvatarLink] = useState("");
  const avatarLink = useMemo(
    () => ({ userAvatar, setUserAvatarLink }),
    [userAvatar]
  );
  const userName = useMemo(
    () => ({ userSettings, setUserSettings }),
    [userSettings]
  );
  return <SettingsContext.Provider value={(userName, avatarLink)} />;
}

export default SettingsProvider;
