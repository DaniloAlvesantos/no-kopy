import React from "react";

export interface TeamComponentProps {
  name: string;
  career: string;
  xp: number;
  type: string;
  instagramUrl: string;
  altImage: string;
  urlImage: string;
}

export const TeamComponent: React.FC<TeamComponentProps> = (props) => {
  const { name, career, xp, type, instagramUrl, altImage, urlImage } = props;

  return (
    <>
      <div className="rounded w-[18rem] h-[24rem] m-4 overflow-hidden relative group inset-0">
        <div className="">
          <img
            loading="lazy"
            className="rounded group-hover:scale-125 delay-75 duration-200 transition-transform inset-0"
            src={urlImage}
            alt={altImage}
          />
        </div>
        <div className="absolute bottom-0 translate-y-[100%] transition-all duration-500 group-hover:translate-y-[50%] bg-[#D9D9D9] bg-opacity-25 backdrop-blur-lg drop-shadow-lg inset-0 rounded-t after:relative">
          <main className="relative">
            <span className="flex flex-col items-center justify-center text-center mt-4">
              <h2 className="font-poppins text-xl leading-4 uppercase">
                {name}
              </h2>
              <h3 className="font-oswald text-primaryPurple-500">{career}</h3>
            </span>
            <div>
              <span className="absolute top-[4.6rem] left-0 bg-primaryPurple-500 rounded-md my-4 mx-2 p-4 flex items-center justify-center flex-col text-light-500 font-oswald font-light bg-opacity-80 ">
                <p>+{xp}</p>
                <p>{type}</p>
              </span>
              <span>
                <a href={instagramUrl}></a>
                <img loading="lazy" src="instagram.svg" alt="instagram" />
              </span>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
