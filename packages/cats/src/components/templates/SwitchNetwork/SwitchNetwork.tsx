import { useSwitchNetwork } from "ethereal-react";

import { Container } from "@/cats/components/molecules/Container";

export const SwitchNetwork = () => {
  const [switchNetwork, { loading }] = useSwitchNetwork({
    chainId: process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? 1 : 4,
  });

  return (
    <Container>
      <h3 className="text-5xl">
        The example only supports the{" "}
        {process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
          ? "Ethereum Mainnet"
          : "Rinkeby Network"}
        .
      </h3>
      <button
        className="p-4 mt-8 text-3xl hover:bg-gray-300/40 border-4 border-current"
        disabled={loading}
        onClick={switchNetwork}
      >
        Switch to{" "}
        {process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
          ? "Mainnet"
          : "Rinkeby"}
      </button>
    </Container>
  );
};
