import { AboutSection } from "@/components/_sections/about/about";
import { HeroSection } from "@/components/_sections/hero/hero"
import { Header } from "@/components/header/header";
import { NavigationType } from "@/components/header/main";

const Navigation: NavigationType[] = [
  { title: "Sobre", href: "#about" },
  { title: "Serviços", href: "#services" },
  { title: "Contato", href: "#contact" },
  { title: "Agendar", href: "#book" },
];

export function LandingPage() {
  return (
    <>
      <Header navigation={Navigation} />
      <HeroSection />
      <AboutSection />
    </>
  );
}
