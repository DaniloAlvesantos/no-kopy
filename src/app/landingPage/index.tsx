import { Header } from "@/components/header/header";
import { NavigationType } from "@/components/header/main";
import { Button } from "@/components/ui/button";

const Navigation: NavigationType[] = [
  { title: "Sobre", href: "#about" },
  { title: "Serviços", href: "#services" },
  { title: "Contato", href: "#contact" },
  { title: "Agendar", href: "#book" },
];

const Video = () => {
  return (
    <>
      <span className="bg-NKBlack-500 opacity-50 absolute inset-0 -z-10" />
      <video
        autoPlay
        loop
        muted
        controls={false}
        className="absolute -z-20 w-auto min-w-full min-h-full max-w-none"
      >
        {/* <source media="(min-width: 800px)" src="" type="video/mp4" /> */}
        <source src="https://19943411.fs1.hubspotusercontent-na1.net/hubfs/19943411/Banner_Site_Cubo-1.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export function LandingPage() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <Header navigation={Navigation} />

      <main className="flex flex-col justify-center h-full max-w-[29rem] md:w-[29.8rem] p-2">
        <span>
          <h2 className="font-montserrat font-bold text-3xl mb-2">
            Agência que irá impulcionar seus négocios
          </h2>
          <p className="font-firaSans text-sm">
            Nossa agência experiente impulsionará seu negócio com estratégias
            personalizadas e resultados excepcionais. Confie em nossa equipe
            para elevar sua marca ao próximo nível.
          </p>
        </span>
        <Button className="uppercase bg-NKGreen-500 hover:bg-NKGreen-400 text-NKWhite-500 font-montserrat font-bold rounded-full w-full md:w-auto mt-10">
          Faça parte
        </Button>
      </main>

      <Video />
    </section>
  );
}
