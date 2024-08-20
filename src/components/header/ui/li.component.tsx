import React, { useRef } from "react";
import Link from "next/link";

interface ListProps {
  item: {
    href: string;
    title: string;
  };
}

const ListComponent: React.FC<ListProps> = React.memo(({ item }) => {
  return (
    <li className="border-b-2 border-transparent hover:border-NKGreen-500 transition-colors duration-500">
      <Link href={item.href}>{item.title}</Link>
    </li>
  );
});

export { ListComponent };