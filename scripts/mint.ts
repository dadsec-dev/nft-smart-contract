import { ethers, network } from "hardhat";

async function main() {
    const deployedContract = "0xCf53c3823dcDD189B0F35E34CA9ab2c97Ef1F92d";
    const NFTInterface = await ethers.getContractAt("INFT", deployedContract);

    const CID = "QmaovmuUZRGC5cq8QiwcBEpx2tu9pSACNstxCtrSQ2icGR";
    const URI = "ipfs://"+CID;
    ipfs://QmaovmuUZRGC5cq8QiwcBEpx2tu9pSACNstxCtrSQ2icGR
    await NFTInterface.safeMint(URI);
    console.log("successful")



}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
