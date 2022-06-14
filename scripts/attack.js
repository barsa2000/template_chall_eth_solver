const {ethers} = require('hardhat');

async function main() {
  const [attacker] = await ethers.getSigners();
  /** CODE YOUR EXPLOIT HERE */
}

main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
});
