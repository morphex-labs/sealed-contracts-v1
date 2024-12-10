import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.deployContract("SealedArtMarket", 
    ["0xBc0f82d123b76E8Ff5E7e8E825762137b1574292", "0xB1dD2Fdb023cB54b7cc2a0f5D9e8d47a9F7723ce", "0xB1dD2Fdb023cB54b7cc2a0f5D9e8d47a9F7723ce"]);

  await contract.waitForDeployment();

  console.log(
    `deployed to ${contract.target}`
  );

  console.log(`factory at ${await contract.sealedFundingFactory()}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
