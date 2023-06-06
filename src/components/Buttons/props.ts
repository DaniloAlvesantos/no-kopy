export interface ButtonProps {
  text: string;
  margin?: string;
  primary: boolean;
  hoverTextDark?: boolean;
  img?: React.ReactElement;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  color?: "purple" | "second-purple" | "white" | "darkblue";
}
