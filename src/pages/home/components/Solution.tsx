import * as React from "react";
import { Button } from "../../../components/Buttons";

export const Solution: React.FC = () => {

  return (
    <section
      id="solution"
      className="relative w-full flex flex-col-reverse gap-4 lg:flex-row p-4 sm:p-8 md:p-12 lg:p-4 lg:flex-1 lg:gap-8 items-center justify-center my-4 md:my-8 lg:my-20"
    >
      <div className="m-4">
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
          loading="lazy"
          className="w-[15rem] h-[15rem] sm:w-[18rem] sm:h-[16rem] md:w-[20rem] md:h-[17rem] lg:w-full lg:h-full my-2 sm:m-4 lg:m-0 object-contain"
          src="/solution.svg"
          alt=""
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        className="flex flex-col items-center md:items-start justify-center text-center md:text-start mt-4 md:mt-0"
      >
        <h2
          tabIndex={0}
          className="font-poppins text-2xl sm:text-3xl md:text-[32px] lg:text-[2.6rem]"
        >
          Soluções inovadoras para  impulsionar seus{" "}
          <strong className="text-primaryPurple-500 lg:text-darkBlue-400 lg:leading-[4rem]">
            projetos.
          </strong>
        </h2>
        <p
          tabIndex={0}
          className="font-poppins text-base sm:text-xl lg:text-2xl my-4"
        >
          Impulsione seus projetos com sites, vídeos, reels, designs modernos e
          administrando suas mídias e vendas.
        </p>
        <a href="#contact">
          <Button
            onClick={() => null}
            text="Eu quero começar!"
            primary={false}
            color="purple"
          />
        </a>
      </div>
    </section>
  );
};
