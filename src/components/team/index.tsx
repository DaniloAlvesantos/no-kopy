import * as React from "react";
import { TeamComponent, TeamComponentProps } from "./component";

const teamInfo = [
  {
    id: crypto.randomUUID(),
    name: "Danilo Alves",
    career: "Desenvolvedor",
    xp:3,
    type: "Front-end",
    instagramUrl: "https://www.instagram.com/danilodos9818/",
    altImage: "Integrante Danilo",
    urlImage: "team/danilo.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Israel Buchi",
    career: "Designer",
    xp:2,
    type: "Grafico",
    instagramUrl: "https://www.instagram.com/israelbdesigner/",
    altImage: "Integrante Israel",
    urlImage: "team/israel.jpeg",
  },
  {
    id: crypto.randomUUID(),
    name: "Odriel Matos",
    career: "Gestor Administrativo",
    xp:4,
    type: "ADM",
    instagramUrl: "https://www.instagram.com/odrielmatosviagem/",
    altImage: "Integrant Odriel",
    urlImage: "team/odriel.jpg",
  },
];

export const Team: React.FC = () => {
  return (
    <>
      {teamInfo.map((info) => (
        <TeamComponent 
        name={info.name}
        career={info.career} 
        xp={info.xp} 
        type={info.type} 
        instagramUrl={info.instagramUrl} 
        altImage={info.altImage} 
        urlImage={info.urlImage} 
        />
      ))}
    </>
  );
};
