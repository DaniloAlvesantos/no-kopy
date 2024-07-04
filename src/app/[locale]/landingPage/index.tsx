import { Header } from "@/components/header/header";
import { NavigationType } from "@/components/header/main";
import { useTranslations } from "next-intl";
import { generateKeys } from "@/utils/generateKeys";
import { HeroSection, AboutSection, ServicesSection, ContactSection } from "@/components/_sections/index";

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
      <ServicesSection />
      <ContactSection />
    </>
  );
}
