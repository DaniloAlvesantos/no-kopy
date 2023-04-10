import React, { useEffect, useState } from "react";
import { PrimaryCardProps } from "./type";

export const PrimaryCard: React.FC<PrimaryCardProps> = (props) => {
  const { title, children, full, color } = props;
  const [style, setStyle] = useState<string>();

  function colors() {
    switch (color) {
      case "purple":
        setStyle("from-primaryPurple-500 to-secondaryPurple-500");
        break;
      case "white":
        setStyle("from-light-500 to-light-500 md:shadow-cardShadow");
        break;
    }
  }

  useEffect(() => {
    colors();
  }, [props]);

  return (
    <div
      className={`${
        full ? "w-full rounded-none m- py-8" : "w-full md:w-11/12 m-4 p-8"
      } min-h-[10rem] bg-gradient-to-b ${style} p-4 rounded relative`}
    >
      {title ? (
        <h2
          className={`${
            color === "white" && "text-dark-500"
          } text-light-500 font-poppins font-light uppercase ${
            full
              ? "text-base md:text-lg lg:text-xl text-start"
              : "text-center sm:text-start"
          } sm:m-2  md:m-4 mb-4 text-xl`}
        >
          {title}
        </h2>
      ) : (
        ""
      )}
      <span
        className={`${
          full
            ? "text-[1.1rem] md:text-xl lg:text-2xl p-2 md:p-10"
            : "text-base p-2"
        }  text-light-500 font-oswald font-normal p-2 my-2`}
      >
        {children}
      </span>
    </div>
  );
};
