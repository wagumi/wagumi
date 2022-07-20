import type { FC } from "react";

import { PageTitle } from "@/cats/components/atoms/PageTitle";

interface PageHeaderProps {
  title: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ title }) => {
  return (
    <header>
      <PageTitle title={title} />
    </header>
  );
};
