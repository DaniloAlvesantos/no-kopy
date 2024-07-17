"use client";

import Image from "next/image";
import { HeaderProps } from "./main";
import { PiList, PiX } from "react-icons/pi";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ListComponent } from "./ui/li.component";
import { LocaleSwitch } from "../localeSwitch/localeSwitch";

export const Header: React.FC<HeaderProps> = ({
  navigation,
  handleShow,
  show,
}) => {
  const [hidden, setHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (!previous) {
      return;
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, type: "spring" }}
      className="fixed top-0 w-full z-10"
    >
      <nav className="w-full flex items-center justify-between relative p-2 md:px-2 md:py-4">
        <Image
          width={48}
          height={48}
          src="/assets/LOGO-1.png"
          className="object-contain"
          alt="Logo"
        />

        <ul className="hidden md:flex gap-4 uppercase font-montserrat font-bold">
          {navigation.map((item, index) => (
            <ListComponent key={index} item={item} />
          ))}
        </ul>

        <div className="hidden md:block">
          <LocaleSwitch />
        </div>

        {show ? (
          <PiX
            className={`text-NKWhite size-12 md:hidden`}
            onClick={handleShow}
          />
        ) : (
          <PiList
            className={`text-NKWhite size-12 md:hidden`}
            onClick={handleShow}
          />
        )}
      </nav>
    </motion.header>
  );
};
