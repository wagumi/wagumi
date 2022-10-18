// SPDX-License-Identifier: Unlicensed

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

pragma solidity ^0.8.13;

contract WagumiMigrationProposal {
  address public OLD_MULTI_SIG =
    address(0xDCE4694e268bD83EA41B335320Ed11A684a1d7dB);
  address public NEW_MULTI_SIG =
    address(0xEA7e6C3D85804E220239D395C6B7aD1aEff8c216);
  address public WAGUMI_CATS_CONTRACT =
    address(0x6144D927EE371de7e7f8221b596F3432E7A8e6D9);

  address public ENS_CONTRACT =
    address(0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85);
  uint256 public WAGUMI_ETH_TOKEN_ID =
    18019805752382518475808758214599099996488809401149089142030556561887882232265;

  function run() external {
    for (uint256 i = 0; i < 11; i++) {
      IERC721(WAGUMI_CATS_CONTRACT).transferFrom(
        address(this),
        NEW_MULTI_SIG,
        i
      );
    }

    IERC721(ENS_CONTRACT).transferFrom(
      address(this),
      NEW_MULTI_SIG,
      WAGUMI_ETH_TOKEN_ID
    );

    NEW_MULTI_SIG.call{ value: address(this).balance }("");
  }
}
