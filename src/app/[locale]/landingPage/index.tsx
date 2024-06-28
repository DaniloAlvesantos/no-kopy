import { AboutSection } from "@/components/_sections/about/about";
import { HeroSection } from "@/components/_sections/hero/hero";
import { Services } from "@/components/_sections/services/serveices";
import { Header } from "@/components/header/header";
import { NavigationType } from "@/components/header/main";
import { generateKeys } from "@/utils/generateKeys";
import { useTranslations } from "next-intl";

export function LandingPage() {

  const t = useTranslations("menuLandingPage");
  const keys = generateKeys(4);

  const Navigation: NavigationType[] = keys.map((i) => {
    return { title: t(`${i}.title`), href: t(`${i}.href`) };
  });

  return (
    <>
      <Header navigation={Navigation} />
      <HeroSection />
      <AboutSection />
      {/* <Services /> */}
    </>
  );
}
