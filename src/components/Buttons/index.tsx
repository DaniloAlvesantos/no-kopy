import * as React from "react";
import { ButtonProps } from "./props";

export const Button: React.FC<ButtonProps> = (props) => {
  let { text, primary, color, margin, hoverTextDark } = props;
  const [style, setStyle] = React.useState<string>();

  function colors(){
    switch (color) {
      case "purple":
        primary
          ? setStyle("bg-primaryPurple-500 hover:bg-primaryPurple-600")
          : setStyle("border-primaryPurple-500 hover:bg-primaryPurple-500");
        break;
      case "second-purple":
        primary
          ? setStyle("bg-secondaryPurple-500 hover:bg-secondaryPurple-400")
          : setStyle("border-secondaryPurple-500 hover:bg-secondaryPurple-500");
        break;
      case "white":
        primary
          ? setStyle("bg-light-500")
          : setStyle("border-light-500 hover:bg-light-500");
        break;
      case "darkblue":
        primary
          ? setStyle("bg-darkBlue-500 hover:bg-darkBlue-600")
          : setStyle("border-darkBlue-500 hover:bg-darkBlue-500");
        break;
      default:
        primary
          ? setStyle("bg-[#121212] hover:bg-[#111111]")
          : setStyle("border-[#121212] hover:bg-[#121212]");
    }
  }

  React.useEffect(() => {
    colors();
  }, [props]);

  return (
    <>
      <button
        className={
          primary
            ? `${style} w-[10rem] p-2 rounded text-light-500 transition-colors duration-200 ease-in-out`
            : `bg-transparent border-2 ${style} rounded-full px-8 py-2  transition-colors duration-500 ease-in-out m-${margin} group`
        }
      >
        <p
          className={`font-poppins ${
            hoverTextDark
              ? "group-hover:text-dark-500 transition-colors"
              : "group-hover:text-light-500 transition-colors"
          }`}
        >
          {text}
        </p>
      </button>
    </>
  );
};
