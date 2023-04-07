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
      className={`fixed ${
        menu ? "-translate-x-0" : "-translate-x-full"
      } w-[14rem] h-full top-0 left-0 bg-gradient-to-b from-darkBlue-500 to-primaryPurple-500 flex items-center justify-center flex-col z-20 duration-300 ease-in-out rounded-br rounded-tr md:hidden`}
    >
      <span className="absolute top-10 right-11">
        <img
          loading="eager"
          className="w-32 h-32 object-fill"
          src="nocopy-background.png"
          alt=""
        />
      </span>
      <ul className="w-full text-center">
        <li className="m-4 text-light-500 uppercase font-oswald font-light transition-colors ease-linear">
          <a href="">Sobre</a>
        </li>
        <li className="m-4 text-light-500 uppercase font-oswald font-light transition-colors ease-linear">
          <a href="">Nosso Time</a>
        </li>
        <li className="m-4 text-light-500 uppercase font-oswald font-light transition-colors ease-linear">
          <a href="">Projetos</a>
        </li>
        <li className="m-4 text-light-500 uppercase font-oswald font-light transition-colors ease-linear">
          <a href="">Contratar</a>
        </li>
      </ul>
      <ul className="absolute bottom-0 flex items-center justify-center">
        <li className="my-2 mx-1 object-fill">
          <img loading="lazy" src="whatsapp.svg" alt="whatsapp" />
        </li>
        <li className="my-2 mx-1 object-fill">
          <img loading="lazy" src="instagram.svg" alt="instagram" />
        </li>
        <li className="my-2 mx-1 object-fill">
          <img loading="lazy" src="gmail.svg" alt="email" />
        </li>
      </ul>
    </aside>
  );
};
