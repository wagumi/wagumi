/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/no-custom-classname */

import clsx from "clsx";
import Link from "next/link";
import type { FC } from "react";
import { useMemo, useEffect, useState, useCallback } from "react";

import { SquareImage } from "@/cats/components/atoms/SquareImage";
import { useCopy } from "@/cats/hooks/useCopy";
import { useDebouncedValue } from "@/cats/hooks/useDebouncedValue";
import { useRandomNumber } from "@/cats/hooks/useRandomNumber";

export const RandomCat: FC = () => {
  const [isCopied, copy] = useCopy();
  const { randomNumber, setRandomNumber } = useRandomNumber();
  const [isLoaded, setIsLoaded] = useState(true);
  const [randomCatURL, setRandomCatURL] = useState<string | null>(
    "https://arweave.net/MMY-YFY8TGANUHkthoTuW9YWAqQlqD0iKJJyvC_z8dw",
  );

  const artURL = "https://cats.wagumi.xyz/metadata/";
  const debouncedImageURL = useDebouncedValue(`${artURL}${randomNumber}`, 300);

  const setRandom = useCallback(() => {
    const randomNumber = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min) + min);
    };

    setRandomNumber(randomNumber(0, 999));
  }, [setRandomNumber]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(debouncedImageURL);
      const metadata = await result.json();
      setRandomCatURL(metadata.image);
    };
    fetchData();
    setIsLoaded(false);
  }, [debouncedImageURL]);

  const imageSize = 320;

  return (
    <div className="py-3">
      <SquareImage
        src={randomCatURL}
        size={imageSize}
        alt="Random Cat Image"
        className={clsx("rounded-md shadow-xl", !isLoaded && "blur-sm")}
        onLoad={(): void => {
          return setIsLoaded(true);
        }}
      />
      <div className="flex justify-end py-3">
        <h3 className="text-3xl text-white">#{randomNumber}</h3>
      </div>
      <div className="flex justify-end max-w-xs">
        <button
          className="hover:bg-opacity-30 p-2 hover:bg-gray-300 rounded-md border border-white"
          onClick={(): void => {
            return copy(debouncedImageURL);
          }}
        >
          {isCopied ? "Copied!" : "Copy Image URL"}
        </button>
        <div className="px-2" />
        <button
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="hover:bg-opacity-30 grow p-2 text-white hover:bg-gray-300 rounded-md border border-white"
          onClick={setRandom}
        >
          Generate Random Wagumi Cat
        </button>
      </div>
      <div className="flex py-3 w-full max-w-xs">
        <Link href="/mint">
          <a className="hover:bg-opacity-30 p-1 mt-2 w-full text-2xl text-center text-white hover:bg-gray-300 rounded-md border border-current">
            Go Mint
          </a>
        </Link>
      </div>
    </div>
  );
};
