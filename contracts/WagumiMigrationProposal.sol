// SPDX-License-Identifier: Unlicensed

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

pragma solidity ^0.8.13;

contract WagumiMigrationProposal {
  address public OLD_MULTI_SIG =
    address(0xdce4694e268bd83ea41b335320ed11a684a1d7db);

  function run() external {
    for (uint256 i = 0; i < 11; i++) {
      _safeMint(minter, (_currentId + i));
      supplyCounter.increment();
    }
  }
}
