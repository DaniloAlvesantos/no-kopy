import React from "react";

interface TeamComponentProps {
  id: string;
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
    <div tabIndex={0} className="rounded w-[18rem] h-[24rem] m-4 overflow-hidden relative group transition-all duration-500 ease-out">
      <div className="w-full h-full">
        <img
          loading="lazy"
          className="w-full h-full object-fill rounded group-hover:scale-125 duration-300 transition-transform"
          src={urlImage}
          alt={altImage}
        />
      </div>
      <div
        className={`absolute translate-y-[100%] transition-transform duration-500 ease-out group-hover:translate-y-[50%] bg-light-500 bg-opacity-40 backdrop-blur-md inset-0 rounded-t`}
      >
        <main className="relative">
          <span className="flex flex-col items-center justify-center text-center mt-4">
            <h2 className="font-poppins text-xl leading-4 uppercase">{name}</h2>
            <h3 className="font-oswald text-primaryPurple-500">{career}</h3>
          </span>
          <div className="w-full">
            <span className="absolute top-[4.6rem] left-0 bg-primaryPurple-500 rounded-md my-4 mx-2 p-2 w-[5rem] h-[5rem] flex items-center justify-center flex-col text-light-500 font-oswald font-light bg-opacity-80 ">
              <p>+{xp}</p>
              <p>{type}</p>
            </span>
            <span className="absolute top-[4.6rem] right-0 bg-primaryPurple-500 rounded-md my-4 mx-2 p-2 w-[5rem] h-[5rem] flex items-center justify-center flex-col text-light-500 font-oswald font-light bg-opacity-80">
              <a target="_blank" href={instagramUrl}>
                <img loading="lazy" src="instagram.svg" alt="instagram" />
              </a>
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};
