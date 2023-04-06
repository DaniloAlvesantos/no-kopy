import * as React from "react";

interface ButtonProps {
  text: string;
  primary: boolean;
  img?: React.ReactElement;
  color?: "purple" | "second-purple" | "white" | "darkblue";
  margin?: string;
  dark?: boolean;
  textColor?: "light-500" | "dark-500";
}
// terminar de estlizar o modo primary do botão
export const Button: React.FC<ButtonProps> = (props) => {
  let { text, primary, color, img, margin, dark, textColor } = props;
  const [style, setStyle] = React.useState<string>()
  React.useEffect(() => {
    switch(color) {
      case "purple": setStyle("border-primaryPurple-500 hover:bg-primaryPurple-500");
      break;
      case "second-purple": setStyle("border-secondaryPurple-500 hover:bg-secondaryPurple-500");
      break;
      case "white": setStyle("border-light-500 hover:bg-light-500");
      break;
      case "darkblue": setStyle("border-darkBlue-500 hover:bg-darkBlue-500");
      break;
      default: setStyle("border-[#121212] hover:bg-[#121212]");
    }
  },[props])


  return (
    <>
      <button
        className={
          primary
            ? ""
            : `bg-transparent border-2 ${style} rounded-full px-8 py-2  transition-colors duration-500 ease-in-out m-${margin} group`
        }
      >
        <p
          className={`font-poppins text-${textColor} ${
            color === "white" && "group-hover:text-dark-500 transition-colors"
          }`}
        >
          {text}
        </p>
      </button>
    </>
  );
};
