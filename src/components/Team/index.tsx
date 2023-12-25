import React from "react";
interface TeamComponentProps {
  id: string;
  name: string;
  career: string;
  xp: number;
  instagramUrl: string;
  background: string;
  urlImage: string;
}

export const TeamComponent: React.FC<TeamComponentProps> = (props) => {
  const { name, career, xp, instagramUrl, background, urlImage } = props;

  return (
    <div
      tabIndex={0}
      className="rounded w-[16rem] h-[21rem] m-4 relative bg-light-500 font-Montserrat font-extrabold flex flex-col items-center justify-between"
    >
      <div className="flex items-center justify-center">
        <img
          className="absolute inset-0 rounded-t object-cover h-24 w-full"
          id="background"
          src={background}
          alt=""
        />
        <div className="text-center flex flex-col items-center justify-center">
          <img
            id="profile"
            className="rounded-full w-32 h-32 object-cover mt-4 z-20  "
            src={urlImage}
            alt={`Foto de ${name}`}
          />
          <h3 className="text-[1.5rem]">{name}</h3>
          <p className="text-primaryGreen-500 -mt-1">{career}</p>
        </div>
      </div>
      <footer className="flex items-center justify-between p-2 gap-20">
        <p>
          <strong className="text-primaryGreen-500">+{xp}</strong> anos de{" "}
          <br />
          experiência.
        </p>
        <a target="_blank" href={instagramUrl}>
          <img src="instagram.svg" alt="" />
        </a>
      </footer>
    </div>
  );
};
