"use client";

import React from "react";
import { AsideProps } from "../main";
import { motion } from "framer-motion";
import { LocaleSwitch } from "@/components/localeSwitch/localeSwitch";

const framerSlideBar = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%", transition: { duration: 0.3 } },
  transition: { duration: 0.5 },
};

const framerText = (delay: number) => {
  return {
    initial: { x: -50, opacity: 0, filter: "blur(.7rem)" },
    animate: { x: 0, opacity: 1, filter: "blur(0)" },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};

const AsideMenu: React.FC<AsideProps> = React.memo(({ navigation }) => {
  return (
    <motion.aside
      {...framerSlideBar}
      className="fixed left-0 top-0 bottom-0 z-50 bg-NKBlack-500/60 backdrop-blur-sm border-2 border-NKGreen-500 md:hidden m-2 rounded-md w-full max-w-[15rem]"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <ul className="font-montserrat font-bold uppercase leading-8 tracking-widest">
          {navigation.map((item, idx) => (
            <motion.li key={idx} {...framerText(idx)}>
              <a href={item.href}>{item.title}</a>
            </motion.li>
          ))}
        </ul>

        <span className="md:hidden absolute bottom-4 right-4">
          <LocaleSwitch />
        </span>
      </div>
    </motion.aside>
  );
});

export { AsideMenu };