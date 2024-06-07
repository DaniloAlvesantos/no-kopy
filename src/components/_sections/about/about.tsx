import Image from "next/image";

const Texts: string[] = [
  "Somos uma empresa de marketing digital, com a dedicação em destacar sua marca no meio digital. Com estratégias somado com nossa equipe profissional, geramos resultados imediatos em sua marca.",
  "Nosso trabalho é fazer você e sua empresa impactar a concorrência, com qualidade em audiovisual, estratégias, gatilhos, etc.",
  "Não fique de fora, agende uma reunião com nossa equipe agora mesmo!",
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-NKGreen-700 to-NKBlack-500 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="font-montserrat font-bold text-2xl">Quem nos <strong className="text-NKGreen-300">somos ?</strong></h2>
        <span className="font-firaSans font-medium">
          {Texts.map((text, idx) => (
            <p key={idx} className="m-2">{text}</p>
          ))}
        </span>
      </div>
      <div>
        <Image src="" alt="illustration" />
      </div>
    </section>
  );
};

export { AboutSection };
