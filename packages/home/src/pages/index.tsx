import { FooterLogo } from "@/home/components/FooterLogo";
import { GlowLogo } from "@/home/components/GlowLogo";
import { DISCORD_URL, GITHUB_URL, TWITTER_URL } from "@/home/const/config";

export const IndexPage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="flex flex-col justify-center items-center h-screen">
        <GlowLogo src="wagumi.png" />
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
