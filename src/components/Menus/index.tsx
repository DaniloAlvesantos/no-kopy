import React, { useState } from "react";
import { AsideBarMenu } from "./AsideBar";
import { NavBarMenu } from "./NavBar";

export function Headers() {
  const [menu, setMenu] = useState();

  return (
    <>
      <NavBarMenu setMenu={setMenu} menu={menu} />
      <AsideBarMenu setMenu={setMenu} menu={menu} />
    </>
  );
}
