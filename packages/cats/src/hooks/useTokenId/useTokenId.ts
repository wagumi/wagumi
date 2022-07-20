import type { Contract } from "ethereal-react";
import { useReadContract } from "ethereal-react";

export const useTokenId = (contract: Contract) => {
  const tokenId = useReadContract(contract, "totalSupply");

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return tokenId.toString();
};
