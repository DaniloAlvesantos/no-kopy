import { useState } from "react";

interface SwitchProps {
  actived: boolean;
  setActived: (props: boolean) => void;
}

const Switch: React.FC<SwitchProps> = (props) => {
  const { actived, setActived } = props;

  const handleActived = () => {
    return setActived(!actived);
  };

  return (
    <div className={`bg-NKGreen-700 rounded-full w-16 p-1`}>
      <div
        className={`bg-white size-7 rounded-full cursor-pointer transition ease-in-out duration-500 ${
          actived ? "translate-x-full" : "translate-x-0"
        } `}
        onClick={handleActived}
      ></div>
    </div>
  );
};

export { Switch };
