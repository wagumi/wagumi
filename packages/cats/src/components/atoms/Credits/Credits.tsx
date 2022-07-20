import type { FC } from "react";

interface CreditsProps {
  twitterUsername?: string;
}

export const Credits: FC<CreditsProps> = ({
  twitterUsername = "littlemonastar",
}) => {
  return (
    <div className="py-3">
      <h6 className="text-xl font-bold tracking-widest">
        Art by:{" "}
        <a
          href={`https://twitter.com/${twitterUsername}`}
          target="_blank"
          rel="noreferrer"
          className=" hover:underline"
        >
          @{twitterUsername}
        </a>
      </h6>
    </div>
  );
};
