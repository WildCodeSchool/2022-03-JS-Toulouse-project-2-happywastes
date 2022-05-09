import { createContext, useState, useMemo } from "react";

export const SettingsContext = createContext();

function SettingsProvider({ children }) {
  const [userSettings, setUserSettings] = useState("PHILL GOOD");
  const userName = useMemo(
    () => ({ userSettings, setUserSettings }),
    [userSettings]
  );
  return (
    <SettingsContext.Provider value={userName}>
      {{ children }}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
