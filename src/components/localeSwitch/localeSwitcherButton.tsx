"use client";

import Image from "next/image";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";
import { useParams } from "next/navigation";

interface LocaleSwitcherButtonProps {
  locale: string;
}

const LocaleSwitcherButton: React.FC<LocaleSwitcherButtonProps> = ({
  locale,
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const nextLocale = locale === "pt" ? "en" : "pt";

  function handleSwitchLocale() {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <button onClick={handleSwitchLocale} disabled={isPending} data-testid="changeLocale">
      <Image
        src={locale !== "pt" ? "/USA-flag.svg" : "/BRAZIL-flag.svg"}
        width={38}
        height={38}
        alt="Locale flag"
        className="object-cover"
      />
    </button>
  );
};

export { LocaleSwitcherButton };
