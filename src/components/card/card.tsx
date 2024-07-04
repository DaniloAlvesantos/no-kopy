import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const CardVariants = cva("rounded-lg flex flex-col border-2 p-4 transiiton duration-500 ease", {
  variants: {
    variant: {
      default: "items-start justify-center gap-4 border-NKCian-400 bg-NKGreen-700",
      secondaray: "items-center justify-center border-NKGreen-500 bg-NKBlack-500",
      glass:"items-center justify-center border-NKGreen-500 bg-NKWhite-500/10 backdrop-blur-sm"
    },
    size: {
      default: "w-full xl:w-[22.375rem] xl:h-[10.9375rem]",
      full: "w-full h-auto",
      glass:"min-w-[5.983rem]",
      sm:"size-[5.983rem]",
      auto:"w-auto h-auto"
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface CardProps
  extends React.ComponentProps<"article">,
    VariantProps<typeof CardVariants> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  variant,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <article
      className={cn(CardVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </article>
  );
};

export { Card };
