"use client"; // Must use client component because the framer motion.

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { generateKeys } from "@/utils/generateKeys";
import { QuestionCard } from "@/components/question-card/question-card";
import { frameImage, frameText, frameQuestion } from "./motions";

const aboutKeys = generateKeys(3);
const questionsKeys = generateKeys(6);

const QuestionSec = () => {
  const tQuestions = useTranslations("questions");

  return (
    <div className="mt-8 p-8 flex items-center justify-center flex-col">
      <motion.h2
        {...frameQuestion(3)}
        className="font-montserrat font-extrabold text-2xl my-4 uppercase"
      >
        {tQuestions.rich("title", {
          strong: (text) => (
            <strong className="text-NKGreen-300">{text}</strong>
          ),
        })}
      </motion.h2>

      <div className="flex items-center justify-center flex-wrap gap-4 w-full 2xl:max-w-[50%]">
        {questionsKeys.map((idx) => (
          <motion.span
            {...frameQuestion(idx)}
            key={idx}
            className="w-full sm:w-auto"
          >
            <QuestionCard question={tQuestions(`text.${String(idx)}`)} />
          </motion.span>
        ))}
      </div>

      <motion.h3
        {...frameQuestion(5)}
        className="text-center font-montserrat font-extrabold text-lg w-full sm:w-auto sm:text-2xl my-4 uppercase bg-NKGreen-500 shadow-NKGreen-500 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.0)] p-2 px-4 mt-8 rounded-full"
      >
        {tQuestions("hook")}
      </motion.h3>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const tAbout = useTranslations("about");

  return (
    <section className="bg-gradient-to-b from-NKGreen-700 to-NKBlack-500 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:w-[60%]">
        <div className="flex flex-col items-center justify-center p-8">
          <motion.h2
            {...frameText(2)}
            className="font-montserrat font-extrabold text-4xl my-4"
          >
            {tAbout.rich("title", {
              strong: (text) => (
                <strong className="text-NKGreen-300">{text}</strong>
              ),
            })}
          </motion.h2>

          <span className="font-firaSans font-medium text-lg">
            {aboutKeys.map((idx) => (
              <motion.p {...frameText(idx)} key={idx} className="my-8">
                {tAbout(`description.${idx}`)}
              </motion.p>
            ))}
          </span>
        </div>

        <motion.div
          initial="offScreen"
          whileInView="onScreen"
          viewport={{
            amount: "all",
            margin: "0px 1000px 200px 0px",
            once: true,
          }}
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
      </main>
      
      <QuestionSec />
    </section>
  );
};

export { AboutSection };
