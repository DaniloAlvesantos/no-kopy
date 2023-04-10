export interface PrimaryCardProps {
  title?: string;
  color: "purple" | "white";
  children: JSX.Element | string | any;
  full?: boolean;
}
