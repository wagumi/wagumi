import { DefaultSeo as Default } from "next-seo";
import Head from "next/head";
import type { FC } from "react";

export const Seo: FC = () => {
  return (
    <>
      <Default
        noindex={false}
        nofollow={false}
        title="Wagumi DAO"
        canonical="https://wagumi.xyz"
        description="Wagumi DAO - A Japanese Web3 Community"
        openGraph={{
          locale: "en_US",
          site_name: "wagumi.xyz",
          type: "website",
          url: "https://wagumi.xyz",
          images: [{ url: "https://wagumi.xyz/ogp.png" }],
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
