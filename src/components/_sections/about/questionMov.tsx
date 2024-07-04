import { useTranslations } from "next-intl";
import { generateKeys } from "@/utils/generateKeys";
import { QuestionCard } from "@/components/question-card/question-card";

const questionsKeys = generateKeys(6);

const QuestionMov = () => {
  const tQuestions = useTranslations("questions");

  return (
    <div className="mt-8 p-8 flex items-center justify-center flex-col">
      <h2 className="font-montserrat font-extrabold text-2xl my-4 uppercase">
        {tQuestions.rich("title", {
          strong: (text) => (
            <strong className="text-NKGreen-300">{text}</strong>
          ),
        })}
      </h2>

      <div className="flex items-center justify-center flex-wrap gap-4 w-full 2xl:max-w-[50%]">
        {questionsKeys.map((idx) => (
          <span key={idx} className="w-full sm:w-auto">
            <QuestionCard question={tQuestions(`text.${String(idx)}`)} />
          </span>
        ))}
      </div>

      <h3 className="text-center font-montserrat font-extrabold text-lg w-full sm:w-auto sm:text-2xl my-4 uppercase bg-NKGreen-500 shadow-NKGreen-500 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.0)] p-2 px-4 mt-8 rounded-full">
        {tQuestions("hook")}
      </h3>
    </div>
  );
};

export { QuestionMov };