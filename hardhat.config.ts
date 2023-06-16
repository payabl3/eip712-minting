import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";

import * as dotenv from "dotenv";

dotenv.config();

const EMPTY_PRIVATE_KEY="0x00000000000000000";

const {
  DEPLOYER_PRIVATE_KEY,
  ETHERSCAN_API_KEY,
  ALCHEMY_API_KEY
} = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    sepolia: {
      url: `${ALCHEMY_API_KEY || ""}`,
      accounts: [`${DEPLOYER_PRIVATE_KEY || EMPTY_PRIVATE_KEY}`]
    }
  }
};

export default config;