import { Variants } from "framer-motion";

export const frameQuestion = (delay: number) => {
  return {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: 1.5,
      delay: 0.5 + delay / 10,
    },
    viewport: {
      once: true,
    },
  };
};

export const frameText = (delay: number) => {
  return {
    initial: {
      opacity: 0,
      x: "-100%",
    },
    whileInView: {
      opacity: 1,
      x: 0,
    },
    viewport: {
      once: true,
    },
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.8 + delay / 10,
    },
  };
};

export const frameImage: Variants = {
  offScreen: {
    opacity: 0,
  },
  onScreen: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

