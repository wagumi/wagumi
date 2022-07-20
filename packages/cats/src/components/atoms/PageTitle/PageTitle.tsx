import Link from "next/link";
import type { FC } from "react";

interface PageTitleProps {
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="py-3">
      <Link href="/">
        <a className="text-5xl font-bold tracking-widest hover:underline">
          {title}
        </a>
      </Link>
    </div>
  );
};
