import * as React from "react";
import { List, X } from "@phosphor-icons/react";

interface NavMenuProps {
  setMenu: Function;
  setDark: Function;
  menu: any;
  dark: boolean;
}

export const NavBarMenu: React.FC<NavMenuProps> = ({
  setMenu,
  menu,
  setDark,
  dark,
}) => {
  function handleTheme(event: { preventDefault: () => void }) {
    event.preventDefault();
    setDark(!dark); // Alternando o estado
    document.documentElement.classList.toggle("dark"); // Alternando entre dark
  }
  return (
    <nav
      className={`bg-gradient-to-r from-secondaryPurple-500 to-primaryPurple-500 dark:from-darkBlue-500 dark:to-secondaryPurple-600 w-full h-[5.125rem] flex items-center justify-between`}
    >
      <div>
        <img
          className="w-[4.375rem] h-[4.375rem]"
          src="/nocopy-icon-background.png"
          alt=""
        />
      </div>
      <div className="m-4 md:hidden">
        <div
          onClick={() => setMenu(!menu)}
          className={`${
            menu ? "rotate-180" : ""
          } duration-150 transition ease-out w-12 h-12 text-light-500 object-fill`}
        >
          {!menu ? <List className="w-12 h-12" /> : <X className="w-12 h-12" />}
        </div>
      </div>
      <ul className="hidden md:flex items-center">
        <li className="m-4 text-primaryPurple-500 uppercase font-poppins bg-light-500 dark:bg-primaryBlue-600 dark:hover:bg-darkBlue-400 dark:text-light-500 py-3 px-6 rounded hover:bg-gray-200 transition-colors ease-linear cursor-pointer">
          <a href="#">Sobre</a>
        </li>
        <li className="m-4 text-light-500 uppercase font-poppins hover:text-gray-300 transition-colors ease-linear cursor-pointer">
          <a href="#">Integrantes</a>
        </li>
        <li className="m-4 text-light-500 uppercase font-poppins hover:text-gray-300 transition-colors ease-linear cursor-pointer">
          <a href="#">Projetos</a>
        </li>
        <li className="m-4 text-light-500 uppercase font-poppins hover:text-gray-300 transition-colors ease-linear cursor-pointer">
          <a href="#">Contratar</a>
        </li>
        <li className="mx-10">
          <button
            onClick={handleTheme}
            tabIndex={0}
            className="absolute w-[3.7rem] h-8 top-[1.5rem] right-5 rounded-2xl bg-secondaryPurple-500 dark:bg-light-500 flex items-center transition duration-300"
          >
            <div
              className={`relative w-7 h-7 rounded-full transition transform duration-500 ${
                dark ? "translate-x-full" : "translate-x-1"
              } p-1 bg-light-500 dark:bg-secondaryPurple-500 shadow-md flex items-center justify-center`}
            ></div>
          </button>
        </li>
      </ul>
    </nav>
  );
};
