import { FooterLogo } from "@/airdrop/components/FooterLogo";
import { DISCORD_URL, GITHUB_URL, TWITTER_URL } from "@/airdrop/const/config";

export const IndexPage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="flex flex-col justify-center items-center h-screen">
        <FooterLogo
          discord={DISCORD_URL}
          github={GITHUB_URL}
          twitter={TWITTER_URL}
        />
      </div>
    </div>
  );
};

export default IndexPage;
