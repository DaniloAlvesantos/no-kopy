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
    urlImage: "https://i.ibb.co/ft13q0h/1.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Israel Buchi",
    career: "Designer",
    xp: 2,
    type: "Grafico",
    instagramUrl: "https://www.instagram.com/israelbdesigner/",
    altImage: "Integrante Israel",
    urlImage: "https://i.ibb.co/s6T9J2C/5.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Odriel Matos",
    career: "Gestor Administrativo",
    xp: 4,
    type: "ADM",
    instagramUrl: "https://www.instagram.com/odrielmatos_nocopy/",
    altImage: "Integrant Odriel",
    urlImage: "https://i.ibb.co/j6DR3XY/4.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Gustavo Matos",
    career: "Social Media",
    xp: 3,
    type: "Instagram",
    instagramUrl: "https://www.instagram.com/odrielmatos_nocopy/",
    altImage: "Integrant Gustavo",
    urlImage: "https://i.ibb.co/fp7GN6y/3.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Gabriel Farias",
    career: "Gestor de Tráfego Pago",
    xp: 2,
    type: "Adsense",
    instagramUrl: "https://www.instagram.com/odrielmatos_nocopy/",
    altImage: "Integrant Gabriel",
    urlImage: "https://i.ibb.co/b3pQBnG/2.png",
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
      >

        <Solution />
        <Skills />

        <div className="w-full flex items-center justify-center my-6 sm:my-8 md:my-12 lg:my-16 p-4 ">
          <div id="contact" className="text-dark-500 relative">
            <h2 className="font-poppins font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl my-2">
              Entre em contato!
            </h2>
            <p className="font-oswald font-normal text-base sm:text-lg md:text-xl lg:text-2xl my-2">
              Pedimos que você informe seu nome, para estar sendo direcionado a
              nosso whatsapp, para estar entrando em contato e fechando
              orçamentos.
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
            <img
              className="mt-12 w-[18rem] sm:w-[22rem]"
              src="/contact-us.svg"
              alt=""
            />
          </div>
        </div>

        <div
          className="w-full flex flex-col items-center justify-center my-4"
          id="team"
        >
          <h2 className="m-4 w-11/12 sm:w-[36rem] p-[1.5rem] bg-darkBlue-500 text-light-500 font-poppins font-light rounded text-center">
            Conheça o nosso time
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
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
      </main>
      <Footer />
    </div>
  );
}
