import React from "react";
import { PrimaryCard } from "../components/cards/card-primary";
import { Headers } from "../components/Menus";
import { Team } from "../components/team";

export function Home() {
  return (
    <>
      <Headers />
      <section className="-z-10 bg-hero w-full h-[20rem] md:h-[25rem] flex items-center justify-center bg-center bg-cover bg-no-repeat object-cover relative">
        <div className="-z-10 bg-gradient-to-r from-dark-600 to-transparent absolute top-0 right-0 w-full h-full" />
        <span>
          <h1 className="font-oswald font-light text-center text-lg md:text-2xl my-4 md:my-12 text-light-500">
            Nós somos{" "}
            <strong className="font-poppins font-thin">no copy</strong>
          </h1>
          <h2 className="font-oswald font-light text-center text-lg md:text-2xl my-4 md:my-12 text-light-500">
            Agência para impulcionar seus négocios
          </h2>
        </span>
      </section>
      <main className="flex flex-col items-center justify-center w-full">
        <PrimaryCard title="Sobre" full={true}>
        Somos uma agência formada por freelancers experientes, que oferece um atendimento personalizado e exclusivo, relatório semanal completo e projeção de estratégias e projetos.
        </PrimaryCard>
        <div 
        className="w-full flex flex-col items-center justify-center my-4"
        id="team">
          <h2 className="m-4 w-11/12 sm:w-[36rem] p-[1.5rem] bg-darkBlue-500 text-light-500 font-poppins font-light rounded text-center">
            Conheça o nosso time
          </h2>
          <div>
            <Team />
          </div>
        </div>
      </main>
    </>
  );
}
