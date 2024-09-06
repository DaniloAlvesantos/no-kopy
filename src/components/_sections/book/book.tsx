import { FormBook } from "@/components/forms/meeting"
import { useTranslations } from "next-intl";

const BookSection: React.FC = () => {
    const t = useTranslations("book.title")
    return (
        <section className="p-8">
            <span>
                <h2 className="font-montserrat font-bold text-2xl sm:text-3xl">{t("text")}</h2>
                <p className="font-firaSans">{t.rich("subTitle", {
                    strong: (text) => (
                        <strong className="text-NKGreen-400">{text}</strong>
                    )
                })}</p>
            </span>
            <FormBook />
        </section>
    )
}

export { BookSection };