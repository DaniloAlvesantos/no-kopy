import { PiList, PiX } from "react-icons/pi";
import { MenuProps } from "./main";
import { AsideMenu } from "./ui/aside";
import { ListComponent } from "./ui/li.component";
import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export const Header: React.FC<MenuProps> = ({ navigation }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  return (
    <header className="fixed top-0 w-full">
      <nav className="w-full flex items-center justify-between md:justify-center relative p-2 md:px-2 md:py-5">
        <Image
          width={48}
          height={48}
          src="/Logo-1.png"
          className="object-contain md:absolute md:left-4 md:top-2"
          alt="Logo"
        />

        <ul className="hidden md:flex gap-4 uppercase font-montserrat font-bold">
          {navigation.map((item, index) => (
            <ListComponent key={index} item={item} />
          ))}
        </ul>

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
