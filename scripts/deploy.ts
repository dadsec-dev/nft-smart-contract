import { ethers, network } from "hardhat";

async function main() {
  const [owner, acct1, aact2, acct3] = await ethers.getSigners();
  
  const ONFT = await ethers.getContractFactory("Generative");
  const DeployONFT = await ONFT.deploy("Generative-aNFT", "GNFT");
  await DeployONFT.deployed();
  console.log(DeployONFT.address);


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



