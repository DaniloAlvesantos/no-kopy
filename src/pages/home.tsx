import React, { useEffect, useState } from "react";
import { PrimaryCard } from "../components/cards/card-primary";
import { Headers } from "../components/Menus";
import { TeamComponent } from "../components/Team";
import { Button } from "../components/Buttons";
import { LightbulbFilament, Lightning, Monitor } from "@phosphor-icons/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "../components/Footer";

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
    delayAnimation: "150",
  },
  {
    id: crypto.randomUUID(),
    title: "Layouts responsivos",
    text: "Responsividade para seu site. Para qualquer dispositivo acesse seu site!",
    icon: <Monitor size={32} color="#f7f7f2" />,
    delayAnimation: "300",
  },
  {
    id: crypto.randomUUID(),
    title: "Novas características",
    text: "Ideias que vão impulsionar suas vendas e visualizações",
    icon: <Lightning size={32} color="#f7f7f2" />,
    delayAnimation: "450",
  },
];

export function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const [name, setName] = useState<string>();

  return (
    <div className="overflow-hidden">
      <Headers />
      <section className="-z-10 bg-hero bg-top lg:bg-[center_top] bg-cover bg-fixed bg-no-repeat w-full h-[25rem] md:h-[30rem] flex items-center justify-center object-cover relative">
        <div className="-z-10 bg-gradient-to-b  from-dark-500 via-[#111111] to-[#121212] opacity-75 absolute top-0 right-0 w-full h-full" />
        <span>
          <h1
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            className="font-oswald font-light text-center text-lg md:text-2xl lg:text-3xl my-4 md:my-12 text-light-500"
          >
            Nós somos
            <strong className="font-poppins font-thin"> no copy</strong>
          </h1>
          <h2
            data-aos="fade-left"
            data-aos-duration="1700"
            data-aos-easing="ease-in-out"
            className="font-oswald font-light text-center text-lg md:text-2xl lg:text-3xl my-4 md:my-12 text-light-500"
          >
            Agência para impulcionar seus négocios
          </h2>
        </span>
      </section>
      <main className="flex flex-col items-center justify-center w-full">
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

          <section
            id="solution"
            className="relative w-full flex py-4 md:p-12 lg:p-4 lg:flex-1 lg:gap-8 items-center justify-center my-8"
          >
            <div className="m-4">
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                loading="lazy"
                className="w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] hidden lg:block object-contain"
                src="/mockup.png"
                alt=""
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className="flex-col"
            >
              <h2 className="font-poppins text-xl sm:text-3xl md:text-4xl lg:text-[2.6rem]">
                Soluções inovadoras para <br /> impulsionar seus{" "}
                <strong className="text-primaryPurple-500 lg:text-darkBlue-400 lg:leading-[4rem]">
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
            className="flex flex-col items-center md:items-start justify-center bg-darkBlue-500 text-light-500 w-full p-4 md:grid md:grid-cols-2"
          >
            <div className="md:my-6 mx-4">
              <h2 className="font-poppins text-lg sm:text-xl md:text-3xl lg:text-4xl">
                Conjunto de funcionalidade que a no copy faz para se destacar.
              </h2>
              <p className="font-oswald text-[#e4e4e4] text-base sm:text-lg md:text-xl lg:text-2xl lg:my-8 my-4">
                Confica algumas de nossas habilidade de forma resumida, que
                vamos te mostrar como você irá se destacar no meio digital e por
                sua volta!
              </p>
            </div>
            <div id="skills" className="overflow-hidden">
              {skils.map((skill) => (
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-delay={skill.delayAnimation}
                  key={skill.id}
                  className="my-4 bg-gradient-to-br from-secondaryPurple-500 via-secondaryPurple-600 to-secondaryPurple-700 rounded p-2 w-full"
                >
                  <span className="flex items-center justify-center text-center my-6 relative">
                    <span className="absolute left-0 lg:left-2">
                      {skill.icon}
                    </span>
                    <h3 className="font-poppins font-thin lg:text-xl">
                      {skill.title}
                    </h3>
                  </span>
                  <p className="font-poppins font-light text-center mt-2 bg-[#e4e4e4] text-primaryBlue-500 lg:text-lg rounded-md p-4">
                    {skill.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
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
                  className="bg-light-500 w-[15rem] border-2 rounded-sm border-secondaryPurple-500 my-4 p-2 font-poppins outline-none focus:border-0 focus:rounded focus:ring-4 focus:ring-secondaryPurple-500 duration-300 transition-all"
                />
                <a
                  target="_blank"
                  href={`https://api.whatsapp.com/send?1=pt_BR&phone=5519994337262&text=Olá Gustavo, tudo bem ? me chamo ${name}, vim conversar sobre négocios.`}
                >
                  <Button text="Enviar" color="second-purple" primary={true} />
                </a>
              </div>
            </div>
          </PrimaryCard>
        </div>
      </main>
      <Footer />
    </div>
  );
}
