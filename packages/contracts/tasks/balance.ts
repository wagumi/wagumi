import { task } from "hardhat/config";

task(
  "balance",
  "Prints the balance of accounts",
  async ({ getNamedAccounts }) => {
    const { deployer } = await getNamedAccounts();
    console.log(deployer);
  },
);
