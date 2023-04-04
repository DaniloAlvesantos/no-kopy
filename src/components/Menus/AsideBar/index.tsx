import * as React from "react";

interface AsideBarMenuProps {
  setMenu: Function;
  setDark: Function;
  menu: any;
  dark: boolean;
}

export const AsideBarMenu: React.FC<AsideBarMenuProps> = ({
  setMenu,
  menu,
  setDark,
  dark,
}) => {

  function handleTheme(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <aside
      onTouchMove={() => setMenu(false)}
      className={`fixed ${
        menu ? "translate-x" : "-translate-x-full"
      } w-[14rem] h-full absolute top-0 left-0 bg-gradient-to-b from-darkBlue-500 to-primaryPurple-500 flex items-center justify-center flex-col z-20 duration-300 ease-in-out rounded-br rounded-tr`}
    >
      <span className="absolute top-10 right-11">
        <img loading="eager" className="w-32 h-32 object-fill" src="nocopy-background.png" alt="" />
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
        <li className="m-4 text-light-500 uppercase font-oswald font-light transition-colors ease-linear">
          <a href="">
            <button
              onClick={handleTheme}
              tabIndex={0}
              className="absolute w-[3.7rem] h-8 bottom-[9.5rem] left-[5.2rem] rounded-2xl bg-secondaryPurple-500 dark:bg-light-500 flex items-center transition duration-300"
            >
              <div
                className={`relative w-7 h-7 rounded-full transition transform duration-500 ${
                  dark ? "translate-x-full" : "translate-x-1"
                } p-1 bg-light-500 dark:bg-secondaryPurple-500 shadow-md flex items-center justify-center`}
              ></div>
            </button>
          </a>
        </li>
      </ul>
      <ul className="absolute bottom-0 flex items-center justify-center">
        <li className="my-2 mx-1 object-fill"><img loading="lazy" src="whatsapp.svg" alt="whatsapp" /></li>
        <li className="my-2 mx-1 object-fill"><img loading="lazy" src="instagram.svg" alt="instagram" /></li>
        <li className="my-2 mx-1 object-fill"><img loading="lazy" src="gmail.svg" alt="email" /></li>
      </ul>
    </aside>
  );
};
