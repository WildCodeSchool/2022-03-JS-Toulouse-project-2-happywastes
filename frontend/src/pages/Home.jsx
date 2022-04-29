import { useState } from "react";
import MainMenu from "../components/MainMenu/MainMenu";
import Login from "./Login";
import ProfileButton from "../components/ProfileButton/ProfileButton";

export default function Home() {
  const [showMainMenu, setShowMainMenu] = useState(true);
  return (
    <div className="home">
      {showMainMenu ? (
        <Login setShowMainMenu={setShowMainMenu} />
      ) : (
        <>
          <MainMenu />
          <ProfileButton />
        </>
      )}
    </div>
  );
}
