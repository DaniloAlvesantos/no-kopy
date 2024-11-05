import { ChevronLeft } from "lucide-react";
import { Link } from "@/navigation";
import { getLocale } from "next-intl/server";

interface GoBackProps {
  href: string;
  text?: string;
}

export const GoBack = async ({ href, text }: GoBackProps) => {
  const locale = await getLocale();
  const message = locale === "en" ? "Go Back" : "Voltar";
  return (
    <Link
      href={href}
      className="absolute left-1 top-2 flex items-center text-NKGreen-400 group transition-colors duration-300 cursor-pointer"
    >
      <ChevronLeft
        className="size-7 group-hover:text-NKGreen-300"
        strokeWidth={1.5}
      />
      <span className="font-firaSans text-sm text-center -ml-1.5 group-hover:text-NKGreen-300">
        {!text ? message : text}
      </span>
    </Link>
  );
};
