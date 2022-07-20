import type { FC, ImgHTMLAttributes } from "react";

interface SquareImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  size: number;
}

export const SquareImage: FC<SquareImageProps> = ({ alt, size, ...props }) => {
  return <img width={size} height={size} alt={alt} {...props} />;
};
