import * as React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="-z-10 bg-gradient-to-tr from-primaryPurple-400 to-primaryPurple-500 w-full h-[100vh] flex justify-items-start lg:items-center justify-center p-4 py-[5rem] md:py-[4rem] lg:py-[6rem] relative">
      <span>
        <h1
          className="font-Montserrat font-bold text-center text-[17px] md:text-2xl lg:text-3xl my-4 md:my-12 text-light-500"
        >
          No Copy agência que irá impulcionar seus négocios
        </h1>
        <h2
          className="font-Montserrat font-light text-center text-sm sm:text-base md:text-lg my-4 md:my-12 text-light-500"
        >
          Somos uma agência formada por freelancers experientes, que oferece um
          atendimento personalizado e exclusivo.Relatórios semanais, projeção de
          estratégias e projetos.
        </h2>
      </span>
        <img
          src="rocket.svg"
          alt=""
          className="w-[22rem] h-[18rem] sm:h-[20rem] lg:w-full lg:h-full object-fill"
        />
    </section>
  );
};
