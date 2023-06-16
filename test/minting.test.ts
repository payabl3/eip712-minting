import { expect } from "chai";
import { ethers } from "hardhat";

import { Contract, ContractFactory } from "ethers";
import { getEIP712Signature } from "./common/utils";
import {
  SIGNING_DOMAIN_NAME,
  SIGNATURE_VERSION,
  CHAIN_ID,
} from "./common/constants";
import { Minting__factory } from "../typechain-types";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

describe("Minting Contract", () => {
  let owner: HardhatEthersSigner;
  let signer1: HardhatEthersSigner;
  let signer2: HardhatEthersSigner;
  let Minting;
  let minting: Contract;

  before(async () => {
    [owner, signer1, signer2] = await ethers.getSigners();
    // Minting = await ethers.getContractFactory("Minting");
    // console.log(await Minting.deploy());
    Minting = await ethers.utils.getContractFactory("Minting");
    minting = await Minting.deploy();
    // await minting.deployed();
    // console.log(minting.connect(owner).balanceOf(signer1.address));
  });

  describe("Mint nft", () => {
    it("#recover", async () => {
      // console.log(await minting.getAddress());
      // console.log(await minting.getFunction("name").call(null));
      // minting.interface.forEachFunction((f) => console.log(f));

      // const contractAddress = await minting.getAddress();
      // const domain = {
      //   name: SIGNING_DOMAIN_NAME,
      //   version: SIGNATURE_VERSION,
      //   verifyingContract: contractAddress,
      //   chainId: CHAIN_ID,
      // };

      // const voucher = { tokenId: 1, buyer: signer1.address };
      // const types = {
      //   TokenVoucher: [
      //     { name: "tokenId", type: "uint256" },
      //     { name: "buyer", type: "address" },
      //   ],
      // };

      // const signature = await getEIP712Signature(
      //   domain,
      //   types,
      //   voucher,
      //   signer1
      // );

      // const params = {
      //   voucher: [1, signer1.address],
      //   signature,
      // };

    });
  });
});
