import * as React from "react";

interface AsideBarMenuProps {
  setMenu: Function;
  menu: any;
}

export const AsideBarMenu: React.FC<AsideBarMenuProps> = ({
  setMenu,
  menu,
}) => {
  return (
    <aside
      onTouchMove={() => setMenu(false)}
      className={`fixed top-0 left-0  ${
        menu ? "-translate-x-0" : "-translate-x-full"
      } w-[14rem] h-full bg-gradient-to-br from-primaryPurple-500 to-primaryPurple-400 flex items-center justify-center flex-col z-20 duration-300 ease-in-out rounded-br rounded-tr md:hidden`}
    >
      <span className="absolute top-10 right-11">
        <img
          loading="eager"
          className="w-32 h-32 object-fill"
          src="nocopy-background.png"
          alt=""
        />
      </span>
      <ul className="w-full gap-4 flex flex-col items-center justify-center text-center">
        <li className="hover:bg-slate-100 w-full p-2 hover:text-dark-500 text-light-500 uppercase font-oswald font-light transition-colors ease-linear">
          <a onClick={() => setMenu(false)} href="#about">Sobre</a>
        </li>
        <li className="hover:bg-slate-100 w-full p-2 hover:text-dark-500 text-light-500 uppercase font-oswald font-light transition-colors ease-linear">
          <a onClick={() => setMenu(false)} href="#team">Nosso Time</a>
        </li>
        <li className="hover:bg-slate-100 w-full p-2 hover:text-dark-500 text-light-500 uppercase font-oswald font-light transition-colors ease-linear">
          <a onClick={() => setMenu(false)} href="#">Projetos</a>
        </li>
        <li className="hover:bg-slate-100 w-full p-2 hover:text-dark-500 text-light-500 uppercase font-oswald font-light transition-colors ease-linear">
          <a onClick={() => setMenu(false)} href="#contact">Contratar</a>
        </li>
      </ul>
    </aside>
  );
};
