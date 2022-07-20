import { expect } from "chai";

export const shouldBehaveLikeDeployed = () => {
  it("should deploy successfully", async function () {
    expect(await this.nft.totalSupply()).to.equal(0);
  });
};
