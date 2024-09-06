"use client";

import React from "react";

import { useTranslations } from "next-intl";
import { SignUpForm } from "@/components/forms/signup";

export default function SignUp() {
  const t = useTranslations("forms.signUp");

  return (
    <main className="flex items-stretch relative w-full min-h-screen">
      <div
        id="image"
        className="bg-singBackground bg-center bg-cover max-md:absolute max-md:inset-x-0 max-md:w-full max-md:h-full md:flex-1"
      ></div>
      <div
        id="forms"
        className="bg-NKBlack-500/30 md:bg-none backdrop-blur-md md:backdrop-blur-0 border-NKWhite md:border-0 rounded p-8 flex flex-col items-center flex-1"
      >
        <span className="mb-4 md:mb-8 text-center">
          <h2 className="font-montserrat font-semibold text-lg md:text-xl">
            {t("title")}
          </h2>
          <p className="text-sm font-firaSans">{t("subTitle")}</p>
        </span>
        <SignUpForm />
      </div>
    </main>
  );
}