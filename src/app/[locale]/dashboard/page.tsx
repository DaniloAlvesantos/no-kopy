"use client";

import { Aside } from "@/components/header/ui/aside";
import { useAuth } from "@/hooks/useAuth";
import { useTranslations } from "next-intl";
import { Suspense } from "react";

export default function Dashboard() {
  const { user } = useAuth();

  const t = useTranslations("dashboard");

  const givenHours = (): number => {
    const hours = new Date().getHours();

    // && determina se esta entre as horas passadas
    if (hours >= 0 && hours < 12) {
      return 0;
    }

    if (hours >= 12 && hours < 18) {
      return 1;
    }

    return 3;
  };

  return (
    <div className="flex bg-zinc-900">
      <Aside.Dashboard />
      <main className="flex-1 p-4">
        <h1 className="font-montserrat font-medium text-xl">Dashboard</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <h2 className="font-firaSans">
            {t("main.welcome", { hour: givenHours(), name: user.name })}
          </h2>
        </Suspense>
      </main>
    </div>
  );
}