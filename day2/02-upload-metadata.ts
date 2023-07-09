import { createMetaplexInstance } from './metaplex'

const metaplex = createMetaplexInstance()

const metadata = {
    name: "chewythepekingese-NFT",
    description: "My first Solana NFT using Metaplex Token Standard",
    image: "https://arweave.net/IchIiqVDT26_L_pTdEFP2YLeeBMPLlZhgSIdNJomVdo",
    attributes: [
        {
            trait_type: 'Event',
            value: 'Solana.Developers.Bootcamp'
        }
    ]    
}

async function main() {
    const { uri } = await metaplex.nfts().uploadMetadata(metadata)
    console.log('metadata url', uri);
}
main()