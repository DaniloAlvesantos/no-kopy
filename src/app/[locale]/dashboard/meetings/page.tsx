import { GoBack } from "@/components/goBack";
import { MyMeetings } from "@/components/meeting/myMeetings";
import { getTranslations } from "next-intl/server";

export default async function Meeting() {
  const t = await getTranslations("dashboard.myMeetings");
  return (
    <section className="flex flex-col items-center justify-center p-8 text-2xl">
      <GoBack href="/dashboard" />
      <span className="text-center mt-2">
        <h2 className="font-montserrat font-medium">{t("title")}</h2>
        <p className="font-firaSans text-sm">{t("subTitle")}</p>
      </span>
      <MyMeetings />
    </section>
  );
}
