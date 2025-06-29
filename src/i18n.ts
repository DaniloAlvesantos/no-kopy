import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "pt"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === "pt"
        ? import("../messages/pt.json")
        : import("../messages/en.json"))
    ).default,
  };
});
