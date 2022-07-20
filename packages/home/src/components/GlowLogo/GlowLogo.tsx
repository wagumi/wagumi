import type { FC } from "react";

import styles from "./GlowLogo.module.css";

export type GlowLogoProps = {
  src: string;
};

export const GlowLogo: FC<GlowLogoProps> = ({ src }) => {
  return (
    <div className="relative w-96 sm:w-4/5 md:w-3/5 lg:w-2/5">
      <img alt="logo" src={src} className={styles.glow} />
    </div>
  );
};
