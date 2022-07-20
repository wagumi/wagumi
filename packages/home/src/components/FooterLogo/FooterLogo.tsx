import type { ReactNode, FC } from "react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

interface FooterIconLinkProps {
  children: ReactNode;
  href: string;
}

interface FooterLogoProps {
  discord: string;
  github: string;
  twitter: string;
}

export const FooterIconLink: FC<FooterIconLinkProps> = ({ children, href }) => {
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
    <footer className="px-4 sm:px-6 lg:px-8 pt-6 mx-auto max-w-7xl">
      <div className="flex justify-center space-x-6">
        {discord && (
          <FooterIconLink href={discord}>
            <span className="sr-only">Discord</span>
            <FaDiscord className="w-8 h-8" />
          </FooterIconLink>
        )}
        {github && (
          <FooterIconLink href={github}>
            <span className="sr-only">Github</span>
            <FaGithub className="w-8 h-8" />
          </FooterIconLink>
        )}
        {twitter && (
          <FooterIconLink href={twitter}>
            <span className="sr-only">Twitter</span>
            <FaTwitter className="w-8 h-8" />
          </FooterIconLink>
        )}
      </div>
    </footer>
  );
};
