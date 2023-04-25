import * as React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export const Hero: React.FC = () => {
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section className="-z-10 bg-hero bg-top lg:bg-[center_top] bg-cover lg:bg-fixed bg-no-repeat w-full h-[25rem] md:h-[30rem] flex items-center justify-center object-cover relative">
      <div className="-z-10 bg-gradient-to-b  from-dark-500 via-[#111111] to-[#121212] opacity-75 absolute top-0 right-0 w-full h-full" />
      <span tabIndex={0}>
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
          Agência de marketing para impulcionar seus projetos
        </h2>
      </span>
    </section>
  );
};
