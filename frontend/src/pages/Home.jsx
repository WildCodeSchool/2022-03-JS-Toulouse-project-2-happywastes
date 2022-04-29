import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MainMenu from "../components/MainMenu/MainMenu";
import Login from "./Login";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import variants from "../assets/js/variants";

export default function Home() {
  const [showMainMenu, setShowMainMenu] = useState(true);
  return (
    <div className="home">
      {showMainMenu ? (
        <Login setShowMainMenu={setShowMainMenu} />
      ) : (
          <AnimatePresence exitBeforeEnter>
            <motion.div
              variants={variants}
              key="Home"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <MenuList />
              <ProfileButton />
            </motion.div>
          </AnimatePresence>
      )}
    </div>
  );
}
