export type NavigationType = {
  title: string;
  href: string;
};

export interface MenuProps {
  navigation: NavigationType[];
}

export interface HeaderProps {
  navigation: NavigationType[];
  handleShow: () => void;
  show: boolean;
}

export interface AsideProps extends MenuProps {}