import { LightbulbFilament, Lightning, Monitor } from "@phosphor-icons/react";
import * as React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

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

export const Skills: React.FC = () => {
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="skills"
      className="flex flex-col items-center md:items-start justify-center bg-darkBlue-500 text-light-500 w-full p-4 md:grid md:grid-cols-2"
    >
      <div className="md:my-6 mx-4">
        <h2 className="font-poppins text-lg sm:text-xl md:text-3xl lg:text-4xl">
          Conjunto de funcionalidade que a no copy faz para se destacar.
        </h2>
        <p className="font-oswald text-[#e4e4e4] text-base sm:text-lg md:text-xl lg:text-2xl lg:my-8 my-4">
          Confica algumas de nossas habilidade de forma resumida, que vamos te
          mostrar como você irá se destacar no meio digital e por sua volta!
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
              <span className="absolute left-0 lg:left-2">{skill.icon}</span>
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
  );
};
