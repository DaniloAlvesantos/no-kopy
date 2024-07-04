"use client";

import Image from "next/image";
import { MenuProps } from "./main";
import { AsideMenu } from "./ui/aside";
import { PiList, PiX } from "react-icons/pi";
import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ListComponent } from "./ui/li.component";
import { LocaleSwitch } from "../localeSwitch/localeSwitch";

export const Header: React.FC<MenuProps> = ({ navigation }) => {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  return (
    <header className="fixed top-0 w-full z-10">
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

        <AnimatePresence mode="wait" initial={false}>
          {show && <AsideMenu navigation={navigation} />}
        </AnimatePresence>
      </nav>
    </header>
  );
};
