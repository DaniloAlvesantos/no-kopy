import React from "react";
import { PrimaryCard } from "../components/cards/card-primary";
import { Headers } from "../components/Menus";
import { TeamComponent } from "../components/team/component";
import { Button } from "../components/Buttons";
import { LightbulbFilament, Lightning, Monitor } from "@phosphor-icons/react";

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

const skils = [
  {
    id: crypto.randomUUID(),
    title: "Layouts exclusivos",
    text: "Layouts criativos, com o foco na modernidade",
    icon: <LightbulbFilament size={32} color="#f7f7f2" />,
  },
  {
    id: crypto.randomUUID(),
    title: "Layouts responsivos",
    text: "Responsividade para seu site. Para qualquer dispositivo acesse seu site!",
    icon: <Monitor size={32} color="#f7f7f2" />,
  },
  {
    id: crypto.randomUUID(),
    title: "Novas características",
    text: "Ideias que vão impulsionar suas vendas e visualizações",
    icon: <Lightning size={32} color="#f7f7f2" />,
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

          <section
            id="solution"
            className="relative w-full flex py-4 md:p-12 lg:p-4 lg:flex-1 lg:gap-8 items-center justify-center my-8"
          >
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
              <p className="font-oswald text-lg sm:text-xl lg:text-2xl my-4">
                Impulsione seus projetos com sites, vídeos, reels, designs
                modernos e administrando suas mídias e vendas.
              </p>
              <Button text="Começar" primary={false} color="purple" />
            </div>
          </section>
          <section
            id="skills"
            className="flex flex-col items-center justify-center bg-darkBlue-500 text-light-500 w-full p-4"
          >
            <div className="">
              <h2 className="font-poppins text-lg">
                Conjunto de funcionalidade que a no copy faz para se destacar.{" "}
              </h2>
              <p className="font-oswald text-[#e4e4e4] md:text-lg my-4">
                Confica algumas de nossas habilidade que irá fazer você destacar
                seu comercio, por sua volta!
              </p>
            </div>
            <div className="">
              {skils.map((skill) => (
                <div
                  key={skill.id}
                  //bg-gradient!
                  className="my-4 bg-secondaryPurple-500 rounded p-2 w-full"
                >
                  <span className="flex items-center justify-center text-center my-6 relative">
                    <span className="absolute left-0">{skill.icon}</span>
                    <h3 className="font-poppins font-thin">{skill.title}</h3>
                  </span>
                  <p className="font-poppins font-light text-center mt-2 bg-[#e4e4e4] text-primaryBlue-500 rounded-md p-4">{skill.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
