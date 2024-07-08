import { Card } from "@/components/card/card";
import { SocialCard } from "./socialCard";
import { useTranslations } from "next-intl";

const ContactSection: React.FC = () => {
  const t = useTranslations("contact");
  return (
    <section className="bg-gradient-to-bl from-[#222222] to-[#121212]">
      <main className="p-8 flex flex-col items-center md:items-stretch md:flex-row md:justify-between">
        <div className="flex flex-col justify-between">
          <span>
            <h2 className="font-montserrat font-bold text-2xl">
              {t("title.text")}
            </h2>
            <p className="font-firaSans">{t("title.hook")}</p>
          </span>
          <div className="flex flex-row justify-center mt-2 gap-2 sm:justify-stretch md:gap-4">
            <SocialCard.list />
          </div>
        </div>

        <Card variant="glass" size="auto" className="w-[23.31rem mt-8 md:mt-0">
          <h3 className="font-montserrat font-bold text-xl mb-2">{t("location.title")}</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.9360546601769!2d-46.82617343046435!3d-22.438651059155813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8fd3360b9d123%3A0xef2ebe3f534ba0fa!2sAgencia%20No%20Kopy!5e0!3m2!1spt-BR!2sbr!4v1720041993606!5m2!1spt-BR!2sbr"
            className="w-full h-[16rem] rounded-md border-none"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="location"
          ></iframe>
          <span className="font-montserrat font-semibold text-center mt-2">
            <h4>Galeria Shopping Sarkis</h4>
            <p className="text-NKGreen-500 text-sm">
              R.José Bonifácio, 394 - Centro, Itapira - SP
            </p>
          </span>
        </Card>
      </main>
    </section>
  );
};

export { ContactSection };