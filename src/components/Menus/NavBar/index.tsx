import * as React from "react";
import { List, X } from "@phosphor-icons/react";

interface NavMenuProps {
  setMenu: Function;
  menu: any;
}

export const NavBarMenu: React.FC<NavMenuProps> = ({ setMenu, menu }) => {
  return (
    <nav
      className={`bg-transparent absolute top-0 w-full h-[5.125rem] flex items-center justify-between`}
    >
      <div>
        <img
          loading="eager"
          className="w-[4.375rem] h-[4.375rem]"
          src="/nocopy-icon-background.png"
          alt=""
        />
      </div>
      <div className="m-4 md:hidden">
        <div
          onClick={() => setMenu(!menu)}
          className={`${
            menu && "rotate-180"
          } duration-150 transition ease-out w-12 h-12 text-light-500 object-fill`}
        >
          {menu ? (
            <X tabIndex={0} className="w-12 h-12" />
          ) : (
            <List tabIndex={0} className="w-12 h-12" />
          )}
        </div>
      </div>
      <ul className="hidden md:flex items-center mr-4">
        <li className="m-4 text-light-500 uppercase font-poppins bg-primaryPurple-500 py-3 px-6 rounded hover:text-gray-400 hover:bg-primaryPurple-600 transition-colors ease-linear cursor-pointer">
          <a tabIndex={0} href="#about">
            Sobre
          </a>
        </li>
        <li className="m-4 text-light-500 uppercase font-poppins hover:text-gray-400 transition-colors ease-linear cursor-pointer">
          <a tabIndex={0} href="#projects">
            Projetos
          </a>
        </li>
        <li className="m-4 text-light-500 uppercase font-poppins hover:text-gray-400 transition-colors ease-linear cursor-pointer">
          <a tabIndex={0} href="#contact">
            Contratar
          </a>
        </li>
        <li className="m-4 text-light-500 uppercase font-poppins hover:text-gray-400 transition-colors ease-linear cursor-pointer">
          <a tabIndex={0} href="#team">
            Integrantes
          </a>
        </li>
      </ul>
    </nav>
  );
};
