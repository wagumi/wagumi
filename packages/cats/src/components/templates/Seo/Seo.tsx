import { DefaultSeo as Default } from "next-seo";
import Head from "next/head";
import type { FC } from "react";

export const Seo: FC = () => {
  return (
    <>
      <Default
        noindex={false}
        nofollow={false}
        title={`Wagumi Cats${
          process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "" : " Testnet"
        }`}
        canonical="https://cats.wagumi.xyz"
        description="Wagumi Cats - NFT Collection for Wagumi DAO"
        openGraph={{
          locale: "en_US",
          site_name: "cats.wagumi.xyz",
          type: "website",
          url: "https://cats.wagumi.xyz",
          images: [{ url: "https://cats.wagumi.xyz/ogp.jpg" }],
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@WagumiDAO",
          site: "@WagumiDAO",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </>
  );
};
