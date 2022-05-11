import "./Splashscreen.css";
import { motion } from "framer-motion";

function Splashscreen() {
  return (
    <motion.div
      className="container-splashscreen"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <img
        className="logo"
        src="src/assets/img/HW_LogoBlue-large.png"
        alt="logo"
      />
      <div className="lds-ellipsis">
        <div className="ellipsis" />
        <div className="ellipsis" />
        <div className="ellipsis" />
        <div className="ellipsis" />
      </div>
    </motion.div>
  );
}

export default Splashscreen;
