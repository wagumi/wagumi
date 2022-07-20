import {
  WagumiCatsDeployment,
  WagumiCatsRinkebyDeployment,
} from "@wagumi/contracts";
import { ERC721_ABI, useContract } from "ethereal-react";

import { Credits } from "@/cats/components/atoms/Credits";
import { Summary } from "@/cats/components/molecules/Summary";
import { Minter } from "@/cats/components/organisms/Minter";
import { FooterLogo } from "@/cats/components/templates/FooterLogo";
import { PageHeader } from "@/cats/components/templates/PageHeader";
import { DISCORD_URL, GITHUB_URL, TWITTER_URL } from "@/cats/const/social";

export const MintPage = (): JSX.Element => {
  console.log(process.env.NEXT_PUBLIC_VERCEL_ENV);

  const WagumiCatsDeploymentContract = useContract(
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
      ? WagumiCatsDeployment.address
      : WagumiCatsRinkebyDeployment.address,
    [...ERC721_ABI, "function mint()"],
  );

  return (
    <>
      <PageHeader
        title={`WAGUMI Cats 🐾${
          process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
            ? ""
            : "Testnet!!!"
        }`}
      />
      <Summary contract={WagumiCatsDeploymentContract} />
      <Minter contract={WagumiCatsDeploymentContract} />
      <Credits />
      <FooterLogo
        discord={DISCORD_URL}
        github={GITHUB_URL}
        twitter={TWITTER_URL}
      />
    </>
  );
};

export default MintPage;
