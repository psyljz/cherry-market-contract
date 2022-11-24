const { ethers, network } = require("hardhat")
// const { moveBlocks } = require("../utils/move-blocks")

const PRICE = ethers.utils.parseEther("0.1")

nft_address="0xe667Dd06b268eBf3845B1BD66904bd743478Fe0d"
async function mintAndList() {
    const nftMarketplace = await ethers.getContract("NftMarketplace")
    const array1 = [15, 16, 17,18,19]
    for (const tokenId of array1) {
        console.log(`${tokenId} need to listed`)
        console.log("Listing NFT...")
        const tx = await nftMarketplace.listItem(nft_address, tokenId, PRICE)

        nftMarketplace.listItem
        
        await tx.wait(1)
        console.log("NFT Listed!")
    }

    // if (network.config.chainId == 31337) {
    //     // Moralis has a hard time if you move more than 1 at once!
    //     await moveBlocks(1, (sleepAmount = 1000))
    // }
}

mintAndList()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
