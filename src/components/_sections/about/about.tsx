import Image from "next/image";
import { useTranslations } from "next-intl";
import { QuestionMov } from "./questionMov";
import { generateKeys } from "@/utils/generateKeys";

const aboutKeys = generateKeys(3);

const AboutSection: React.FC = () => {
  const tAbout = useTranslations("about");

  return (
    <section className="bg-gradient-to-b from-NKGreen-700 to-NKBlack-500 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:w-[60%]">
        <div className="flex flex-col items-center justify-center p-8">
          <h2
            className="font-montserrat font-extrabold text-4xl my-4"
          >
            {tAbout.rich("title", {
              strong: (text) => (
                <strong className="text-NKGreen-300">{text}</strong>
              ),
            })}
          </h2>

          <span className="font-firaSans font-medium text-lg">
            {aboutKeys.map((idx) => (
              <p key={idx} className="my-8">
                {tAbout(`description.${idx}`)}
              </p>
            ))}
          </span>
        </div>

        <div
          className="flex items-center justify-center"
        >
          <Image
            width={0}
            height={0}
            src="/assets/svg/team.svg"
            alt="illustration"
            className="size-[20rem]"
          />
        </div>
      </main>
      
      <QuestionMov />
    </section>
  );
};

export { AboutSection };
