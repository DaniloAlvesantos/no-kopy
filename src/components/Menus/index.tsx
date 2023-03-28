import React, { useState, useEffect } from "react";
import { AsideBarMenu } from "./AsideBar";
import { NavBarMenu } from "./NavBar";

export function Headers() {
  const [menu, setMenu] = useState();
  const [dark, setDark] = useState(false);
  

  useEffect(() => {
    if (document.documentElement.classList.value === "dark") {
      setDark(true);
    }
  }, []);

  return (
    <>
      <NavBarMenu setMenu={setMenu} menu={menu} setDark={setDark} dark={dark} />
      <AsideBarMenu setMenu={setMenu} menu={menu} setDark={setDark} dark={dark} />
    </>
  );
}
