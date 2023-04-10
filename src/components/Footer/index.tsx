import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-primaryPurple-500 via-primaryPurple-600 to-secondaryPurple-500 w-full min-h-[15rem] p-4 flex flex-col md:flex-auto items-center justify-center">
      <img className="w-[12rem] h-[12rem] md:absolute left-0" src="/nocopy-background.png" alt="" />
      <div className="flex items-center flex-col text-light-500">
        <p className="font-oswald text-sm md:text-base lg:text-lg">Confira nossas redes sociais e meios de comunicação.</p>
        <ul className="inline-flex group items-center justify-center gap-4 my-8 md:my-4">
          <li className="cursor-pointer hover:bg-primaryPurple-400 hover:opacity-50 hover:backdrop-blur-md p-4 rounded transition-all ease-out duration-300">
            <a href="#">
                <img className="group-hover:opacity-100 transition-all ease-out duration-300" id="instagram" src="/instagram.svg" alt="nosso instagram" />
            </a>
          </li>
          <li className="cursor-pointer hover:bg-primaryPurple-400 hover:opacity-50 hover:backdrop-blur-md p-4 rounded transition-all ease-out duration-300">
            <a href="#">
                <img className="group-hover:opacity-100 transition-all ease-out duration-300" id="gmail" src="gmail.svg" alt="nosso email" />
            </a>
          </li>
        </ul>
      </div>
      <h4 className="text-light-500 font-poppins absolute bottom-2">&#169; 2023 no copy</h4>
    </footer>
  );
};
