/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-constructed-context-values */
// ESLint désactivé dû au useMemo obligatoire avec le useContext

import React, { useState, createContext } from "react";

const GlobalUserContext = createContext();

function GlobalUserProvider({ children }) {
  const [userMail, setUserMail] = useState("");
  const [user, setUser] = useState(false);
  const [notif, setNotif] = useState(false);
  const [avatarLink, setAvatarLink] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  return (
    <GlobalUserContext.Provider
      value={{
        firstname: [firstname, setFirstname],
        lastname: [lastname, setLastname],
        userMail: [userMail, setUserMail],
        user: [user, setUser],
        notif: [notif, setNotif],
        avatarLink: [avatarLink, setAvatarLink],
      }}
    >
      {children}
    </GlobalUserContext.Provider>
  );
}

export { GlobalUserContext, GlobalUserProvider };
