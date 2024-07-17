import { Menu } from "@/components/header/index";
import { NavigationType } from "@/components/header/main";
import { useTranslations } from "next-intl";
import { generateKeys } from "@/utils/generateKeys";
import { HeroSection, AboutSection, ServicesSection, ContactSection, BookSection } from "@/components/_sections/index";
import { Footer } from "@/components/footer/footer";

export function LandingPage() {

  const t = useTranslations("menuLandingPage");
  const keys = generateKeys(4);

  const Navigation: NavigationType[] = keys.map((i) => {
    return { title: t(`${i}.title`), href: t(`${i}.href`) };
  });

  return (
    <>
      <Menu navigation={Navigation} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <BookSection />
      <Footer navigation={Navigation} />
    </>
  );
}
