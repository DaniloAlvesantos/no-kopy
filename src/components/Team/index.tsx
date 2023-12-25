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
    <div tabIndex={0} className="rounded w-[18rem] h-[24rem] m-4 relative">
      <div className="flex items-center justify-center">
        <img className="absolute inset-0 -z-10 rounded-t object-cover h-24 w-full" id="background" src={background} alt="" />
        <span className="text-center">
          <img id="profile" className="rounded-full w-32 h-32 object-cover mt-4" src={urlImage} alt={`Foto de ${name}`} />
          <title>{name}</title>
          <p>{career}</p>
        </span>
      </div>
      <footer>
        <div>
          <p>+{xp} anos de experiência.</p>
          <a href={instagramUrl}>
            <img src="" alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
};
