"use client";

import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { useTranslations } from "next-intl";
import { SignInForm } from "@/components/forms/signin/index.";

export default function SignIn() {
  const t = useTranslations("forms.signIn");

  return (
    <main className="flex items-stretch relative w-full min-h-screen">
      <div
        id="image"
        className="bg-singBackground bg-center bg-cover max-md:absolute max-md:inset-x-0 max-md:w-full max-md:h-full md:flex-1"
      ></div>
      <div className="bg-NKBlack-500/30 md:bg-none backdrop-blur-md md:backdrop-blur-0 border-NKWhite md:border-0 rounded p-8 flex flex-col items-center justify-between flex-1">
        <>
          <h2 className="font-montserrat font-semibold text-lg md:text-xl">
            {t("title")}
          </h2>
          <SignInForm />
        </>

        <div className="mt-16 w-full flex flex-col items-center">
          <hr className="h-[2px] w-full md:w-2/4 bg-NKBlack-500 md:bg-accent border-0 rounded-full" />
          <Link
            href="/signup"
            className="flex flex-col w-full md:w-2/4 border border-NKGreen-500 hover:bg-accent rounded p-4 relative mt-4 transition-colors duration-300"
          >
            <p className="font-montserrat text-sm font-medium">
              {t("card.title")}
            </p>
            <span className="font-firaSans text-sm text-NKGreen-500 font-medium">
              {t("card.text")}
            </span>
            <ChevronRight className="absolute right-1 inset-y-[1.5rem]" />
          </Link>
        </div>
      </div>
    </main>
  );
}
