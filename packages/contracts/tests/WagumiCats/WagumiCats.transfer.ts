import { expect } from "chai";

export const shouldBehaveLikeAfterTransfer = () => {
  it("should behave like after contract transfer", async function () {
    expect(await this.nft.owner()).to.equal(
      "0xDCE4694e268bD83EA41B335320Ed11A684a1d7dB",
    );
  });
};
