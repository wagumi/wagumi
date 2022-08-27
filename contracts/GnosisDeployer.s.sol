// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "safe-contracts/GnosisSafe.sol";
import "safe-contracts/GnosisSafeL2.sol";
import "safe-contracts/proxies/GnosisSafeProxyFactory.sol";

contract GnosisScript is Script {
  address internal GNOSIS_PROXY_FACTORY_ADDRESS_1_3_0 =
    address(0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2);
  address internal GNOSIS_L1_SINGLETON_ADDRESS_1_3_0 =
    address(0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552);
  address internal GNOSIS_L2_SINGLETON_ADDRESS_1_3_0 =
    address(0x3E5c63644E683549055b9Be8653de26E0B4CD36E);
  address internal GNOSIS_COMPATIBILITY_FALLBACK_HANDLER =
    address(0xf48f2B2d2a534e402487b3ee7C18c33Aec0Fe5e4);

  address[] internal owners = new address[](5);
  GnosisSafeProxy internal proxy;
  GnosisSafe internal safe;
  GnosisSafeL2 public safeL2;

  function run() external {
    owners[0] = address(0x4fd9D0eE6D6564E80A9Ee00c0163fC952d0A45Ed);
    owners[1] = address(0xE3EF6f44C0aEcB8CF518a85D2739021aa3Cd02d9);
    owners[2] = address(0xa4dDE78906b73133296D43f23Ca4b41009059123);
    owners[3] = address(0xa3C2e2fBF83aB8e690c4E7e1C30Fa3778B7E4E1e);
    owners[4] = address(0x19a351b9F2991a3dd71f4ca38f98ad6F418Ed9ea);

    GnosisSafeProxyFactory factory = GnosisSafeProxyFactory(
      GNOSIS_PROXY_FACTORY_ADDRESS_1_3_0
    );

    vm.startBroadcast();
    if (block.chainid == 1) {
      proxy = factory.createProxyWithNonce(
        GNOSIS_L1_SINGLETON_ADDRESS_1_3_0,
        abi.encodeWithSignature(
          "setup(address[],uint256,address,bytes,address,address,uint256,address)",
          owners,
          2,
          address(0),
          "",
          GNOSIS_COMPATIBILITY_FALLBACK_HANDLER,
          address(0),
          0,
          0
        ),
        123
      );
      safe = GnosisSafe(payable(address(proxy)));
    } else {
      proxy = factory.createProxyWithNonce(
        GNOSIS_L2_SINGLETON_ADDRESS_1_3_0,
        abi.encodeWithSignature(
          "setup(address[],uint256,address,bytes,address,address,uint256,address)",
          owners,
          2,
          address(0),
          "",
          GNOSIS_COMPATIBILITY_FALLBACK_HANDLER,
          address(0),
          0,
          0
        ),
        123323
      );
      safeL2 = GnosisSafeL2(payable(address(proxy)));
    }
    vm.stopBroadcast();
  }
}
