import { useLocale } from "next-intl";
import { LocaleSwitcherButton } from "./localeSwitcherButton";

const LocaleSwitch = () => {
  const locale = useLocale();

  return <LocaleSwitcherButton locale={locale} />;
};

export { LocaleSwitch };
