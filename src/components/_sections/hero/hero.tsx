import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const HeroSection: React.FC = () => {
  const t = useTranslations("hero");

  return (
    <section className="relative h-screen w-full flex items-center justify-center lg:justify-start overflow-hidden">
      <main className="flex flex-col justify-center h-full max-w-[29rem] md:w-[29.8rem] p-4 md:m-8">
        <span>
          <h2 className="font-montserrat font-bold text-3xl mb-2 md:text-5xl">
            {t("title")}
          </h2>
          <p className="font-firaSans text-sm md:text-base">
            {t("description")}
          </p>
        </span>
        <Button className="uppercase bg-NKGreen-500 hover:bg-NKGreen-400 text-NKWhite-500 font-montserrat font-bold rounded-full w-full md:w-auto mt-10">
          {t("button-text")}
        </Button>
      </main>

      <span className="bg-NKBlack-500 opacity-50 absolute inset-0 -z-10" />
      <video
        autoPlay
        loop
        playsInline
        muted
        className="absolute -z-20 w-auto min-w-full min-h-full max-w-none animate-fade-in"
      >
        <source
          src="https://19943411.fs1.hubspotusercontent-na1.net/hubfs/19943411/Banner_Site_Cubo-1.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
};

export { HeroSection };
