import WalletConnectProvider from "@walletconnect/web3-provider";
import { RequireNetwork, WalletProvider } from "ethereal-react";
import type { AppProps } from "next/app";

import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import "@/cats/styles/index.css";
import { Error } from "@/cats/components/atoms/Error";
import { Loading } from "@/cats/components/atoms/Loading";
import { Container } from "@/cats/components/molecules/Container";
import { Intro } from "@/cats/components/templates/Intro";
import { Seo } from "@/cats/components/templates/Seo";
import { SwitchNetwork } from "@/cats/components/templates/SwitchNetwork";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Container>
      <Seo />
      <WalletProvider
        cacheProvider
        providerOptions={{
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: {
                1: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
                4: `https://rinkeby.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
              },
              infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
              network:
                process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
                  ? "mainnet"
                  : "rinkeby",
            },
          },
        }}
        fallback={<Intro />}
        loading={<Loading />}
      >
        <ErrorBoundary FallbackComponent={Error}>
          <Suspense fallback={<Loading />}>
            <RequireNetwork
              chainId={
                process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? 1 : 4
              }
              fallback={<SwitchNetwork />}
            >
              <Component {...pageProps} />
            </RequireNetwork>
          </Suspense>
        </ErrorBoundary>
      </WalletProvider>
    </Container>
  );
};

export default CustomApp;
