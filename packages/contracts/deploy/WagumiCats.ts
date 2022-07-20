import type { DeployFunction } from "hardhat-deploy/types";
import type { HardhatRuntimeEnvironment } from "hardhat/types";

import type { WagumiCats } from "@/typechain/WagumiCats";
import type { WagumiCats__factory } from "@/typechain/factories/WagumiCats__factory";

const deploy: DeployFunction = async ({
  getNamedAccounts,
  deployments,
  ethers,
}: HardhatRuntimeEnvironment) => {
  const WAGUMI_MULTISIG_ADDRESS = "0xDCE4694e268bD83EA41B335320Ed11A684a1d7dB";

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const WagumiCatsContract = await deploy("WagumiCats", {
    args: ["https://cats.wagumi.xyz/metadata/"],
    from: deployer,
    log: true,
  });

  const WagumiCatsFactory: WagumiCats__factory =
    await ethers.getContractFactory("WagumiCats");
  const WagumiCats: WagumiCats = WagumiCatsFactory.attach(
    WagumiCatsContract.address,
  );

  console.log("ownerBatchMint");

  const txOwnerBatchMint = await WagumiCats.ownerBatchMint(
    WAGUMI_MULTISIG_ADDRESS,
  );
  const receiptOwnerBatchMint = await txOwnerBatchMint.wait();
  console.log(JSON.stringify(receiptOwnerBatchMint, null, 4));

  console.log("setSaleIsActive");

  const txSetSaleIsActive = await WagumiCats.setSaleIsActive(true);
  const receiptSetSaleIsActive = await txSetSaleIsActive.wait();
  console.log(JSON.stringify(receiptSetSaleIsActive, null, 4));

  console.log("transferOwnership");

  const txTransferOwnership = await WagumiCats.transferOwnership(
    WAGUMI_MULTISIG_ADDRESS,
  );
  const receiptTransferOwnership = await txTransferOwnership.wait();
  console.log(JSON.stringify(receiptTransferOwnership, null, 4));
};

deploy.tags = ["WagumiCats"];

export default deploy;
