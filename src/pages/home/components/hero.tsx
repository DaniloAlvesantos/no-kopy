import * as React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="-z-10 bg-gradient-to-tr from-dark-700 to-primaryGreen-500 w-full h-[100vh] flex items-center justify-center text-center flex-col p-4 pt-24 relative font-Montserrat text-light-500 gap-8">
      <span>
        <h1 className="font-bold text-lg my-4">
          Agência que irá impulcionar seus négocios!
        </h1>
        <h2 className="font-light text-center text-xs sm:text-base">
          Agência experiente oferece estratégias personalizadas para impulsionar
          seu negócio, proporcionando resultados excepcionais para elevar sua
          marca ao próximo nível.
        </h2>
      </span>
      <img
        src="rocket.svg"
        alt=""
        className="w-[15rem] h-[15rem] object-fill"
      />
    </section>
  );
};
