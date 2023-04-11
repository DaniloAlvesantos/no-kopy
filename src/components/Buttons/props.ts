export interface ButtonProps {
  text: string;
  primary: boolean;
  img?: React.ReactElement;
  color?: "purple" | "second-purple" | "white" | "darkblue";
  margin?: string;
  hoverTextDark?: boolean;
  onClick:(e: React.MouseEvent<HTMLElement>) => void;
}

