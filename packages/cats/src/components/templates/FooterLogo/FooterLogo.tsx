import {
  WagumiCatsDeployment,
  WagumiCatsRinkebyDeployment,
} from "@wagumi/contracts";
import type { FC } from "react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

interface FooterLinkProps {
  href: string;
}

interface FooterLogoProps {
  discord?: string;
  github?: string;
  twitter?: string;
}

export const FooterLink: FC<FooterLinkProps> = ({ children, href }) => {
  return (
    <p className="text-xl italic font-semibold text-gray-300">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-100 hover:underline"
      >
        {children}
      </a>
    </p>
  );
};

export const FooterIconLink: FC<FooterLinkProps> = ({ children, href }) => {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-gray-200 cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export const FooterLogo: FC<FooterLogoProps> = ({
  discord,
  github,
  twitter,
}) => {
  return (
    <footer className="p-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="flex justify-center space-x-6">
        <FooterLink
          href={`https://${
            process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
              ? ""
              : "rinkeby."
          }etherscan.io/address/${
            process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
              ? WagumiCatsDeployment.address
              : WagumiCatsRinkebyDeployment.address
          }`}
        >
          Etherscan
        </FooterLink>
        <FooterLink
          href={
            process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
              ? "https://opensea.io/collection/wagumi-cats"
              : "https://testnets.opensea.io/collection/wagumi-cats-v3"
          }
        >
          Opensea
        </FooterLink>
      </div>
      <div className="py-3" />
      <div className="flex justify-center space-x-6">
        {discord && (
          <FooterIconLink href={discord}>
            <span className="sr-only">Discord</span>
            <FaDiscord className="w-6 h-6" />
          </FooterIconLink>
        )}
        {github && (
          <FooterIconLink href={github}>
            <span className="sr-only">Github</span>
            <FaGithub className="w-6 h-6" />
          </FooterIconLink>
        )}
        {twitter && (
          <FooterIconLink href={twitter}>
            <span className="sr-only">Twitter</span>
            <FaTwitter className="w-6 h-6" />
          </FooterIconLink>
        )}
      </div>
    </footer>
  );
};
