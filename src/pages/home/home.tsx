import React, { useState } from "react";
import { Hero } from "./components/hero";
import { Skills } from "./components/skills";
import { Headers } from "../../components/Menus";
import { Footer } from "../../components/Footer";
import { Solution } from "./components/Solution";
import { Button } from "../../components/Buttons";
import { TeamComponent } from "../../components/Team";
import { PrimaryCard } from "../../components/cards/card-primary";

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
    instagramUrl: "https://www.instagram.com/odrielmatos_nocopy/",
    altImage: "Integrant Odriel",
    urlImage: "https://i.ibb.co/h2gGLPd/odriel.jpg",
  },
];

export function Home() {
  const [name, setName] = useState<string>();

  return (
    <div className="overflow-hidden">
      <Headers />
      <Hero />
      <main
        className="flex flex-col items-center justify-center w-full"
        id="about"
      >
        <PrimaryCard color="purple" title="Sobre" full={true}>
          <p>
            Somos uma agência formada por freelancers experientes, que oferece
            um atendimento personalizado e exclusivo, relatório semanal completo
            e projeção de estratégias e projetos.
          </p>
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
        </div>

        <Solution />
        <Skills />
        <span className="w-full flex items-center justify-center my-8">
          <PrimaryCard color="white">
            <div id="contact" className="text-dark-500">
              <h2 className="font-poppins font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl my-2">
                Entre em contato!
              </h2>
              <p className="font-oswald font-normal text-base sm:text-lg md:text-xl lg:text-2xl my-2">
                Vamos pedir que informe apenas seu nome, para que você esteje
                entrando em contato conosco.
              </p>
              <div className="flex flex-col items-start justify-center">
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Informe seu nome"
                  className="bg-light-500 w-[15rem] border-2 rounded border-secondaryPurple-500 my-4 p-2 font-poppins outline-none focus:rounded focus:ring-4 focus:ring-secondaryPurple-500 duration-300 transition-all"
                />
                <a
                  target="_blank"
                  href={`https://api.whatsapp.com/send?1=pt_BR&phone=5519994337262&text=Olá Gustavo, tudo bem ? me chamo ${name}, vim conversar sobre négocios.`}
                >
                  <Button
                    onClick={() => null}
                    text="Enviar"
                    color="second-purple"
                    primary={true}
                  />
                </a>
              </div>
            </div>
          </PrimaryCard>
        </span>
      </main>
      <Footer />
    </div>
  );
}
