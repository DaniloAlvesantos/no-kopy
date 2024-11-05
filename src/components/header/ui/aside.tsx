"use client";

import React from "react";
import {
  AsideDashboardData,
  AsideDashboardProps,
  AsideMenuProps,
  AsideProps,
  AsideVariants,
} from "../main";

import { motion } from "framer-motion";
import { LocaleSwitch } from "@/components/localeSwitch/localeSwitch";
import { cn } from "@/lib/utils";

import { Link } from "@/navigation";
import { LogOut } from "lucide-react";
import { destroyCookie } from "nookies";
import { useRouter } from "@/navigation";
import { generateKeys } from "@/utils/generateKeys";
import { useTranslations } from "next-intl";

const framerSlideBar = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%", transition: { duration: 0.3 } },
  transition: { duration: 0.5 },
};

const framerText = (delay: number) => {
  return {
    initial: { x: -50, opacity: 0, filter: "blur(.7rem)" },
    animate: { x: 0, opacity: 1, filter: "blur(0)" },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};

const Aside = ({ children, size, variant, className }: AsideProps) => {
  return (
    <motion.aside
      {...framerSlideBar}
      className={cn(AsideVariants({ variant, size, className }))}
    >
      {children}
    </motion.aside>
  );
};

const AsideMenu = React.memo(({ navigation }: AsideMenuProps) => {
  return (
    <Aside>
      <div className="relative w-full h-full flex items-center justify-center">
        <ul className="font-montserrat font-bold uppercase leading-8 tracking-widest">
          {navigation.map((item, idx) => (
            <motion.li key={idx} {...framerText(idx)}>
              <a href={item.href}>{item.title}</a>
            </motion.li>
          ))}
        </ul>

        <span className="md:hidden absolute bottom-4 right-4">
          <LocaleSwitch />
        </span>
      </div>
    </Aside>
  );
});

const AsideDashboard = React.memo(() => {
  const router = useRouter();
  const signOut = () => {
    destroyCookie(undefined, "nokopy.token");
    router.push("/signin");
  };

  const t = useTranslations("dashboard");

  const AsideKeys = generateKeys(AsideDashboardData.length);
  const AsideData: AsideDashboardProps["items"] = AsideKeys.map((i) => ({
    icon: AsideDashboardData[i].icon,
    text: t(`aside.navigation.${i}`),
    href: AsideDashboardData[i].href,
  }));

  return (
    <Aside variant="secondaray" size="secondaray" className="relative">
      <div className="p-2">
        {AsideData.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="flex items-center justify-start gap-2 my-2 hover:bg-accent rounded-md p-3"
          >
            <item.icon className="size-6 text-white" strokeWidth={1.5} />
            <p className="font-montserrat hidden sm:block">{item.text}</p>
          </Link>
        ))}
      </div>

      <LogOut
        className="absolute bottom-4 left-2 cursor-pointer hover:text-NKGreen-300 p-1 size-8"
        onClick={signOut}
      />
    </Aside>
  );
});

Aside.Menu = AsideMenu;
Aside.Dashboard = AsideDashboard;

export { Aside };
