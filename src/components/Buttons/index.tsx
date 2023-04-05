import * as React from "react";

interface ButtonProps {
  text: string;
  primary: boolean;
  img?: React.ReactElement;
  color?: "primaryPurple-500" | "darkBlue-500" | "light-500" | "red-500";
  margin?: string;
  dark?: boolean;
  textColor?: "light-500" | "dark-500"
}
// terminar de estlizar o modo primary do botão
export const Button: React.FC<ButtonProps> = (props) => {
  const { text, primary, img, color, margin, dark, textColor } = props;
  return (
    <>
      <button
        className={
          primary
            ? ""
            : `bg-transparent border-2 border-${color} rounded-full px-8 py-2 hover:bg-${color} transition-colors duration-500 ease-in-out m-${margin} group`
        }
      >
        <p
          className={`font-poppins text-${textColor} ${color === "light-500" && "group-hover:text-dark-500 transition-colors"}`}
        >
          {text}
        </p>
      </button>
    </>
  );
};
