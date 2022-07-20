import { useConnectToWallet } from "ethereal-react";

export const ConnectNetwork = () => {
  const [connect, { loading }] = useConnectToWallet();

  return (
    <button
      disabled={loading}
      className="p-4 mt-8 text-3xl text-white border-4 border-current"
      onClick={connect}
    >
      Connect
    </button>
  );
};
