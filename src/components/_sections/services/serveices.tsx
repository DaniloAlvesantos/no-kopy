import React, { ElementType } from "react";
import { generateKeys } from "@/utils/generateKeys";
import { useTranslations } from "next-intl";
import { PiBrain, PiDevices, PiMonitor, PiTrendUp } from "react-icons/pi";
import { Card } from "@/components/card/card";
import { Button } from "@/components/ui/button";

type DataType = {
  title: string;
  text: string;
  icon: ElementType;
};

const Icons = [PiBrain, PiDevices, PiMonitor, PiTrendUp];

const ServicesSection: React.FC = () => {
  const tHook = useTranslations("services.hook");
  const t = useTranslations("services.cards");
  const keys = generateKeys(4);

  const Data: DataType[] = keys.map((i) => {
    return { title: t(`${i}.title`), text: t(`${i}.text`), icon: Icons[i] };
  });

  return (
    <section className="bg-gradient-to-b from-NKBlack-500 to-[#0c301b] flex items-center justify-center">
      <main className="flex flex-col lg:flex-row lg:justify-between p-8 md:w-[40rem] lg:w-full md:my-[10rem]">
        <div className="flex flex-col lg:w-[30%]">
          <span className="font-montserrat font-bold">
            <p className="text-NKGreen-300 uppercase">{tHook("subTitle")}</p>
            <h2 className="text-3xl">{tHook("title")}</h2>
          </span>
          <p className="font-firaSans my-4">{tHook("text")}</p>
          <Button
            variant="outline"
            className="font-montserrat uppercase font-semibold border-2 border-NKGreen-300 hover:bg-NKGreen-300 duration-300 transition-colors ease-in-out rounded-full md:w-1/2 lg:w-auto"
          >
            {tHook("buttonText")}
          </Button>
        </div>

        <div className="grid xl:grid-cols-2 gap-4 items-center justify-items-center my-8 lg:my-0">
          {Data.map((value, i) => (
            <Card key={i}>
              <span>
                {React.createElement(value.icon, {
                  className: "size-10 text-NKGreen-500",
                })}
                <h3 className="font-montserrat font-bold text-lg mt-2">
                  {value.title}
                </h3>
              </span>
              <p className="font-firaSans tracking-tight xl:block">
                {value.text}
              </p>
            </Card>
          ))}
        </div>
      </main>
    </section>
  );
};

export { ServicesSection };
