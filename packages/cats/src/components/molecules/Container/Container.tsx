import type { FC } from "react";

export const Container: FC = ({ children }) => {
  return (
    <div className="w-full min-h-screen text-white bg-black">
      <div className="flex flex-col justify-center items-center h-screen">
        {children}
      </div>
    </div>
  );
};
