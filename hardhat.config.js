require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require('hardhat-dependency-compiler');
require('dotenv').config();

const {PRIVATE_KEY} = process.env;

module.exports = {
  networks : {
    hardhat : {allowUnlimitedContractSize : true},

    // use this only if you run a local network
    local : {url : "http://localhost:8545", accounts : [ PRIVATE_KEY ]},

    fibonhack :
        {url : "http://ctf.fibonhack.it:20545", accounts : [ PRIVATE_KEY ]}
  },
  solidity : {compilers : [ {version : "0.8.7"} ]},
}
