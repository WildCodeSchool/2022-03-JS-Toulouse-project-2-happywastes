const variants = {
  hidden: {
    x: 400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "Inertia", duration: 0.18 },
  },
  exit: {
    x: -400,
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.18 },
  },
};

export default variants;
