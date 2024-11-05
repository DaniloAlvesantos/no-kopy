"use client";

import { ProfileForm } from "@/components/forms/profile";
import { GoBackClient } from "@/components/goBack";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { Building2, Pencil } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Profile() {
  const { user } = useAuth();
  const t = useTranslations("dashboard.profile");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <section className="flex flex-col items-center justify-center p-8">
      <GoBackClient href="/dashboard" />
      <div className="my-4">
        <h1 className="font-montserrat font-medium text-2xl">{t("title")}</h1>
        <p className="font-firaSans">{t("subTitle")}</p>
      </div>
      <ProfileForm user={user} />
    </section>
  );
}
