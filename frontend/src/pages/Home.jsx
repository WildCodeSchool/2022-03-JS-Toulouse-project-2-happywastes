import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import UserContext from "../components/UserContext";
import MainMenu from "../components/MainMenu/MainMenu";
import Login from "./Login";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import variants from "../assets/js/variants";

export default function Home() {
  const { user } = useContext(UserContext);
  return (
    <div className="home">
      {user ? (
        <Login />
      ) : (
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={variants}
            key="Home"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <MainMenu />
            <ProfileButton />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
