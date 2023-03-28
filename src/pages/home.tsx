import React from "react";
import { Headers } from "../components/Menus";

export function Home() {
  return (
    <>
      <Headers />
      <section className="-z-10 bg-hero w-full h-[20rem] md:h-[25rem] flex items-center justify-center bg-center bg-cover bg-no-repeat object-cover relative">
        <div className="-z-10 bg-gradient-to-r from-dark-600 to-transparent absolute top-0 right-0 w-full h-full" />
        <span>
          <h1 className="font-oswald font-light text-center text-lg md:text-2xl my-4 md:my-12 text-light-500">
            Nós somos <strong className="font-poppins font-thin">no copy</strong>
          </h1>
          <h2 className="font-oswald font-light text-center text-lg md:text-2xl my-4 md:my-12 text-light-500">Agência para impulcionar seus négocios</h2>
        </span>
      </section>
    </>
  );
}
