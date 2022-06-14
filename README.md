# Template to solve Ethereum based CTF challenges

## Installation

1. Clone the repo
2. run `yarn install`, you may have to run `yarn install --ignore-engines` depending on the current version of hardhat and npm

## Configuration

To use an external network you need to add your private key adding `PRIVATE_KEY="<your_private_key>"` in your `.env` file.

To configure more external networks add them in `hardhat.config.js`, refer to the [hardhat docs](https://hardhat.org/config#networks-configuration).

This project comes preconfigured with the following networks:

- `hardhat`: the default hardhat network
- `local`: a network hosted on your machine at the default port, refer to the [geth docs](https://geth.ethereum.org/docs/interface/private-network)
- `fibonhack`: a network hosted by the Fibonhack team with limited RPC access

The last two will use the account you configured with the private key.

## Usage

Put your exploit in `scripts/attack.js` and your contracts in the `contracts` folder.

- If you want to use the hardhat network run `yarn run test`
- If you want to attack a specific network run `yarn run attack <target_network>`


## Resources

- [Solidity docs](https://docs.soliditylang.org/en/latest/)
- [Hardhat docs](https://hardhat.org/getting-started)
- [Ethers docs](https://docs.ethers.io/v5/single-page/)
- [hardhat-ethers docs](https://hardhat.org/plugins/nomiclabs-hardhat-ethers)
- [Waffle docs](https://ethereum-waffle.readthedocs.io/en/latest/index.html)
- [hardhat-waffle docs](https://hardhat.org/plugins/nomiclabs-hardhat-waffle)
- [hardhat-upgrades docs](https://www.npmjs.com/package/@openzeppelin/hardhat-upgrades)

## To learn more

- [OpenZeppelin curated resource list](https://github.com/OpenZeppelin/awesome-openzeppelin)
- [List of CTFs in Ethereum world](https://github.com/PumpkingWok/CTFGym)
