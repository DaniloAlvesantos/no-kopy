import * as React from "react";

interface ButtonProps {
  text: string;
  primary: boolean;
  img?: React.ReactElement;
  color?: "purple" | "second-purple" | "white" | "darkblue";
  margin?: string;
  hoverTextDark?: boolean;
}
// terminar de estlizar o modo primary do botão
export const Button: React.FC<ButtonProps> = (props) => {
  let { text, primary, color, img, margin, hoverTextDark } = props;
  const [style, setStyle] = React.useState<string>();
  React.useEffect(() => {
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
          <div className={`flex items-center justify-center relative`}>
            <h2>{text}</h2>
            <span className="absolute right-0 object-fill">{img}</span>
          </div>
        </p>
      </button>
    </>
  );
};
