import React from "react";
import { PrimaryCard } from "../components/cards/card-primary";
import { Headers } from "../components/Menus";
import { TeamComponent } from "../components/team/component";
import { Info } from "@phosphor-icons/react";
import { Button } from "../components/Buttons";

const teamInfo = [
  {
    id: crypto.randomUUID(),
    name: "Danilo Alves",
    career: "Desenvolvedor",
    xp: 3,
    type: "Front-end",
    instagramUrl: "https://www.instagram.com/danilodos9818/",
    altImage: "Integrante Danilo",
    urlImage: "https://i.ibb.co/tKL36pm/danilo3.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Israel Buchi",
    career: "Designer",
    xp: 2,
    type: "Grafico",
    instagramUrl: "https://www.instagram.com/israelbdesigner/",
    altImage: "Integrante Israel",
    urlImage: "https://i.ibb.co/kQmNz8Y/israel.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Odriel Matos",
    career: "Gestor Administrativo",
    xp: 4,
    type: "ADM",
    instagramUrl: "https://www.instagram.com/odrielmatosviagem/",
    altImage: "Integrant Odriel",
    urlImage: "https://i.ibb.co/h2gGLPd/odriel.jpg",
  },
];

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
          Somos uma agência formada por freelancers experientes, que oferece um
          atendimento personalizado e exclusivo, relatório semanal completo e
          projeção de estratégias e projetos.
        </PrimaryCard>
        <div
          className="w-full flex flex-col items-center justify-center my-4"
          id="team"
        >
          <h2 className="m-4 w-11/12 sm:w-[36rem] p-[1.5rem] bg-darkBlue-500 text-light-500 font-poppins font-light rounded text-center">
            Conheça o nosso time
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamInfo.map((info) => (
              <TeamComponent
                key={info.id}
                id={info.id}
                name={info.name}
                career={info.career}
                xp={info.xp}
                type={info.type}
                instagramUrl={info.instagramUrl}
                altImage={info.altImage}
                urlImage={info.urlImage}
              />
            ))}
          </div>
          <section className="relative w-full flex p-4 md:p-12 lg:p-4 lg:flex-1 lg:gap-8 items-center justify-center my-8 bg-darkBlue-500 text-light-500">
            <div className="m-4">
              <img
                loading="lazy"
                className="w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] hidden lg:block object-contain"
                src="/mockup.png"
                alt=""
              />
            </div>
            <div className="flex-col">
              <h2 className="font-poppins text-xl sm:text-3xl md:text-4xl lg:text-[2.6rem]">
                Soluções inovadoras para <br /> impulsionar seus{" "}
                <strong className="text-primaryPurple-500 lg:text-darkBlue-400">
                  projetos.
                </strong>
              </h2>
              <p className="font-oswald sm:text-xl lg:text-2xl my-4">
                Impulsione seus projetos com sites, vídeos, reels, designs
                modernos e administrando suas mídias e vendas.
              </p>
              <Button
                text="Começar"
                primary={false}
                color="primaryPurple-500"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
