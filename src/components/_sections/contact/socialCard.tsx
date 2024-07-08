import { SocialCardProps, SocialData } from "./index";
import { Card } from "@/components/card/card";
import Image from "next/image";
import Link from "next/link";

const SocialCard = ({ social, alt, color, href }: SocialCardProps) => {
  return (
    <Link className="cursor-pointer" href={href} target="_blank">
      <Card
        variant="glass"
        size="auto"
        className={`size-14 md:size-20 hover:bg-NKWhite-500/20`}
        style={{ boxShadow: `0px 5px 8px -1px ${color}` }}
      >
        <Image
          src={`/assets/svg/${social}.svg`}
          className="object-contain"
          loading="lazy"
          width={56}
          height={56}
          alt={alt}
          title={social}
        />
      </Card>
    </Link>
  );
};

const SocialCardList = () => {
  return (
    <>
      {SocialData.map((value, i) => (
        <SocialCard
          social={value.social}
          alt={value.alt}
          color={value.color}
          href={value.href}
          key={i}
        />
      ))}
    </>
  );
};

SocialCard.list = SocialCardList;

export { SocialCard };
