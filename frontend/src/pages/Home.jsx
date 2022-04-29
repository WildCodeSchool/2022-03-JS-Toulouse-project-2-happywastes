import { motion, AnimatePresence } from "framer-motion";
import MenuList from "../components/MainMenu/MainMenu";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import variants from "../assets/js/variants";

export default function Home() {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={variants}
        key="Home"
        initial="hidden"
        animate="visible"
        exit="exit"
        className="home"
      >
        <MenuList />
        <ProfileButton />
      </motion.div>
    </AnimatePresence>
  );
}
