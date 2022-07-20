import { expect } from "chai";

export const shouldBehaveLikeAfterSale = () => {
  it("should permit nft minting", async function () {
    expect(await this.nft.saleIsActive()).to.equal(true);
    expect(await this.nft.totalSupply()).to.equal(12);
    expect(await this.nft.balanceOf(this.signers.admin.address)).to.equal(1);
  });
};
