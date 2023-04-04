import React from "react";

interface PrimaryCard {
  title?: string;
  children: JSX.Element | string;
  full?: boolean;
}

export const PrimaryCard: React.FC<PrimaryCard> = (props) => {
  const { title, children, full } = props;
  return (
    <div
      className={`${full ? "w-full rounded-none m-0" : "w-full md:w-11/12 m-4"} min-h-[10rem] bg-gradient-to-b from-primaryPurple-500 to-secondaryPurple-500 p-4 rounded`}
    >
      {title ? (
        <h2 className={`text-light-500 font-poppins font-light uppercase ${full ? "text-base md:text-lg lg:text-xl text-start" : "text-center sm:text-start"}sm:m-2  md:m-4 text-xl`}>
          {title}
        </h2>
      ) : (
        ""
      )}
      <p className={`${full ? "text-base sm:text-lg md:text-xl lg:text-2xl p-2 md:p-10" : "text-base p-2" } text-center text-light-500 font-oswald font-normal p-2 my-2`}>
        {children}
      </p>
    </div>
  );
};
