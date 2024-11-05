import { Home, LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { cva, VariantProps } from "class-variance-authority";

import { User, Presentation } from "lucide-react";
import {} from "react-icons/pi";
import { string } from "zod";

export type NavigationType = {
  title: string;
  href: string;
};

export type MenuProps = {
  navigation: NavigationType[];
};

export type HeaderProps = {
  navigation: NavigationType[];
  handleShow: () => void;
  show: boolean;
};

export const AsideVariants = cva("", {
  variants: {
    variant: {
      default:
        "fixed left-0 top-0 bottom-0 z-50 bg-NKBlack-500/60 backdrop-blur-sm border-2 border-NKGreen-500 md:hidden m-2 rounded-md",
      secondaray: "bg-background h-screen rounded-r-md",
    },
    size: {
      default: "w-full max-w-[15rem]",
      secondaray: "sm:flex-[180px_1_0] sm:max-w-[180px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface AsideProps
  extends VariantProps<typeof AsideVariants>,
    React.ComponentProps<"aside"> {
  children: React.ReactNode;
}

export type AsideMenuProps = MenuProps & {};

export type AsideDashboardProps = {
  items: {
    icon: LucideIcon | IconType;
    text: string;
    href: string;
  }[];
};

export const AsideDashboardData: { icon: LucideIcon | IconType; href: string }[] = [
  { icon: Home, href: "/dashboard" },
  { icon: User, href: "/dashboard/profile" },
  { icon: Presentation, href: "/dashboard/meetings" },
];
