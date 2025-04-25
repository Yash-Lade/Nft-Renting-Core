const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying NFTRental contract from:", deployer.address);

  const nftAddress = "0xb0f0713879885a23970933dbfd582d5a3125c837"; // <-- replace with actual deployed NFT contract address

  const NFTRental = hre.ethers.getContractFactory("NFTRental");
  const rentalContract = await NFTRental.deploy(nftAddress);
  await rentalContract.deployed();

  console.log("✅ NFTRental deployed at:", rentalContract.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
