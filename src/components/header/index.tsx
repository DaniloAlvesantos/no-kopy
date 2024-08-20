"use client";

import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "./header";
import { MenuProps } from "./main";
import { AsideMenu } from "./ui/aside";

export function Menu({ navigation }: MenuProps) {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  return (
    <>
      <Header show={show} handleShow={handleShow} navigation={navigation} />
      <AnimatePresence mode="wait" initial={false}>
        {show && <AsideMenu navigation={navigation} />}
      </AnimatePresence>
    </>
  );
}