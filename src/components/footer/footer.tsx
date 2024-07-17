import Image from "next/image";
import Link from "next/link";
import { generateKeys } from "@/utils/generateKeys";
import { useTranslations } from "next-intl";
import { FooterProps, LiNavigationProps } from "./main";

const LiNavigation = ({ text, url }: LiNavigationProps) => {
  return (
    <li className="uppercase font-montserrat font-normal text-sm hover:text-NKGreen-300 transition-colors duration-300">
      <Link href={url}>{text}</Link>
    </li>
  );
};



const Footer: React.FC<FooterProps> = ({ navigation }) => {
  const t = useTranslations("footer");
  const InfoKeys = generateKeys(2);
  const WidgetsKeys = generateKeys(2);

  const InfoData: LiNavigationProps[] = InfoKeys.map((i) => ({
    text: t(`links.info.${i}.text`),
    url: t(`links.info.${i}.url`),
  }));

  const Widgets: LiNavigationProps[] = WidgetsKeys.map((i) => ({
    text: t(`links.widgets.${i}.text`),
    url: t(`links.widgets.${i}.text`),
  }));

  const year = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-t from-NKBlack-500 to-NKGreen-700 w-full p-8 flex-col mt-8">

      <main className="flex flex-col sm:flex-row items-center justify-between px-2">
        <Image
          src="/assets/LOGO-3.png"
          width={200}
          height={200}
          quality={100}
          alt="Secondary Logo"
          className="object-cover h-[6.5rem] w-auto"
        />

        <div className="flex flex-col gap-5 sm:flex-row sm:gap-20 mt-6 sm:mt-0 text-center sm:text-start">
          <ul>
            {InfoData.map((value, idx) => (
              <LiNavigation text={value.text} url={value.url} key={idx} />
            ))}
          </ul>

          <ul>
            {Widgets.map((value, idx) => (
              <LiNavigation text={value.text} url={value.url} key={idx} />
            ))}
          </ul>

          <ul>
            {navigation.map((value, idx) => (
              <LiNavigation text={value.title} url={value.href} key={idx} />
            ))}
          </ul>
        </div>
      </main>

      <hr className="border-NKWhite-500 mt-8 sm:mb-12" />

      <div className="flex flex-col items-center justify-center mt-8">
        <ul className="flex gap-4">
          <li className="border border-NKWhite-500 rounded-full p-3 group cursor-pointer">
            <Link href="" target="_blank">
              <Image
                src="/assets/svg/instagram.svg"
                width={20}
                height={20}
                alt="instagram logo"
                className="invert grayscale group-hover:invert-0 group-hover:grayscale-0 transition ease-in-out duration-500"
              />
            </Link>
          </li>
          <li className="border border-NKWhite-500 rounded-full p-3 group cursor-pointer">
            <Link href="" target="_blank">
              <Image
                src="/assets/svg/linkedin.svg"
                width={20}
                height={20}
                alt="linkedin logo"
                className="invert grayscale group-hover:invert-0 group-hover:grayscale-0 transition ease-in-out duration-500"
              />
            </Link>
          </li>
          <li className="border border-NKWhite-500 rounded-full p-3 group cursor-pointer">
            <Link href="" target="_blank">
              <Image
                src="/assets/svg/whatsapp.svg"
                width={20}
                height={20}
                alt="whatsapp logo"
                className="grayscale group-hover:grayscale-0 transition ease-in-out duration-500"
              />
            </Link>
          </li>
        </ul>

        <p className="mt-5 font-montserrat uppercase font-semibold text-[.6rem] sm:text-sm tracking-wide">
          &copy;{year} no kopy - agência de marketing digital
        </p>
      </div>
    </footer>
  );
};

export { Footer };
