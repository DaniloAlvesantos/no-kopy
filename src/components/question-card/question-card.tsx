import { FaQuestion } from "react-icons/fa";

interface QuestionCardProps {
  question: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  return (
    <div className="flex items-center justify-between  w-full sm:w-[20rem] border-b-2 border-NKGreen-700 py-2">
      <span className="w-[90%] font-firaSans font-semibold text-base">
        {question}
      </span>
      <FaQuestion className="w-[3rem] h-[3.5rem] object-contain text-NKGreen-300" />
    </div>
  );
};

export { QuestionCard };
