import * as React from "react";
import { Button } from "../../../components/Buttons";
import "aos/dist/aos.css";
import AOS from "aos";

export const Solution: React.FC = () => {
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="solution"
      className="relative w-full flex py-4 md:p-12 lg:p-4 lg:flex-1 lg:gap-8 items-center justify-center -mb-4 sm:-mb-0 my-8"
    >
      <div className="m-4">
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          loading="lazy"
          className="w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] hidden lg:block object-contain "
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
        <h2
          tabIndex={0}
          className="font-poppins text-xl sm:text-3xl md:text-4xl lg:text-[2.6rem]"
        >
          Soluções inovadoras para <br /> impulsionar seus{" "}
          <strong className="text-primaryPurple-500 lg:text-darkBlue-400 lg:leading-[4rem]">
            projetos.
          </strong>
        </h2>
        <p
          tabIndex={0}
          className="font-oswald text-lg sm:text-xl lg:text-2xl my-4"
        >
          Impulsione seus projetos com sites, vídeos, reels, designs modernos e
          administrando suas mídias e vendas.
        </p>
        <Button
          onClick={() => null}
          text="Começar"
          primary={false}
          color="purple"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
          loading="lazy"
          className="w-[15rem] h-[18rem] md:w-[20rem] m-2 sm:m-4 lg:hidden object-contain"
          src="/solution.svg"
          alt=""
        />
      </div>
    </section>
  );
};
