"use client"; // Must use client component because the framer motion.

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { generateKeys } from "@/utils/generateKeys";

const AboutSection: React.FC = () => {
  const t = useTranslations("about");
  const keys = generateKeys(3);

  return (
    <section className="bg-gradient-to-b from-NKGreen-700 to-NKBlack-500 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col items-center justify-center p-8">
        <motion.h2
          {...frameText(2)}
          className="font-montserrat font-extrabold text-4xl my-4"
        >
          {t.rich("title", {
            strong: (text) => (
              <strong className="text-NKGreen-300">{text}</strong>
            ),
          })}
        </motion.h2>

        <span className="font-firaSans font-medium text-lg">
          {keys.map((idx) => (
            <motion.p {...frameText(idx)} key={idx} className="my-8">
              {t(`description.${idx}`)}
            </motion.p>
          ))}
        </span>
      </div>

      <motion.div
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ amount: "all", margin: "0px 1000px 200px 0px", once: true }}
        variants={frameImage}
        className="flex items-center justify-center"
      >
        <Image
          width={0}
          height={0}
          src="/team.svg"
          alt="illustration"
          className="size-[20rem]"
        />
      </motion.div>
    </section>
  );
};

const frameText = (delay: number) => {
  return {
    initial: {
      opacity: 0,
      x: "-100%",
    },
    whileInView: {
      opacity: 1,
      x: 0,
    },
    viewport: {
      once: true,
    },
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.5 + delay / 10,
    },
  };
};

const frameImage: Variants = {
  offScreen: {
    opacity: 0,
  },
  onScreen: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export { AboutSection };
