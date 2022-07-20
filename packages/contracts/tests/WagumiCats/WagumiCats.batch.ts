import { expect } from "chai";

export const shouldBehaveLikeAfterBatchMint = () => {
  it("should behave like after batch mint", async function () {
    expect(await this.nft.totalSupply()).to.equal(11);
    expect(
      await this.nft.balanceOf("0xDCE4694e268bD83EA41B335320Ed11A684a1d7dB"),
    ).to.equal(11);
    expect(await this.nft.owner()).to.equal(this.signers.admin.address);
  });
};
