import { createMetaplexInstance } from './metaplex'

async function main() {
    const metaplex = createMetaplexInstance()
    const metadataUri = 'https://arweave.net/yuRymBGyvR7L0GQWLHrn0Mb8FqHp6z3q8fnGCERsYu0'
    const { nft } = await metaplex.nfts().create({
        uri: metadataUri,
        name: 'SolDevBootcamp',
        sellerFeeBasisPoints: 0,
    })
    console.log('nft', nft)
}

main()

// nft {
//     model: 'nft',
//     updateAuthorityAddress: PublicKey [PublicKey(FemGKc5MWGFEDiYv12xDC24X6DTVLU7ZjX4gcvExmNid)] {
//       _bn: <BN: d9b02813028872e017f46353e71bf215afc03cc69291616a3dc5d66fcb49fb92>
//     },
//     json: {
//       name: 'chewythepekingese-NFT',
//       description: 'My first Solana NFT using Metaplex Token Standard',
//       image: 'https://arweave.net/IchIiqVDT26_L_pTdEFP2YLeeBMPLlZhgSIdNJomVdo',
//       attributes: [ [Object] ]
//     },
//     jsonLoaded: true,
//     name: 'SolDevBootcamp',
//     symbol: '',
//     uri: 'https://arweave.net/yuRymBGyvR7L0GQWLHrn0Mb8FqHp6z3q8fnGCERsYu0',
//     isMutable: true,
//     primarySaleHappened: false,
//     sellerFeeBasisPoints: 0,
//     editionNonce: 255,
//     creators: [
//       {
//         address: [PublicKey [PublicKey(FemGKc5MWGFEDiYv12xDC24X6DTVLU7ZjX4gcvExmNid)]],
//         verified: true,
//         share: 100
//       }
//     ],
//     tokenStandard: 0,
//     collection: null,
//     collectionDetails: null,
//     uses: null,
//     programmableConfig: null,
//     address: PublicKey [PublicKey(J7vihEAwKSQNXN7DPp9FZHhP5ipNZWW4MhbQUESHJWpo)] {
//       _bn: <BN: fe5ce717ada67c53b841341de04dcf466287436a201b3466c95ceb9246f719f0>
//     },
//     metadataAddress: Pda [PublicKey(GU7s3mNVMu1x78bo9HBQMFmMndjS8Fg78FmAAxBrjMRQ)] {
//       _bn: <BN: e5d1bee1fcd8cf03affdef5b90d3f4d61e885248993693d25ecbf81e26b4f677>,
//       bump: 253
//     },
//     mint: {
//       model: 'mint',
//       address: PublicKey [PublicKey(J7vihEAwKSQNXN7DPp9FZHhP5ipNZWW4MhbQUESHJWpo)] {
//         _bn: <BN: fe5ce717ada67c53b841341de04dcf466287436a201b3466c95ceb9246f719f0>
//       },
//       mintAuthorityAddress: PublicKey [PublicKey(3R9RXuASFa7vnXs7prC3yPox9YAVftb4duQMy5TsW7bi)] {
//         _bn: <BN: 23e6d65048f4bd6a9552ea20d7e307ed36611a62505ffeebe10f3828355c7b9d>
//       },
//       freezeAuthorityAddress: PublicKey [PublicKey(3R9RXuASFa7vnXs7prC3yPox9YAVftb4duQMy5TsW7bi)] {
//         _bn: <BN: 23e6d65048f4bd6a9552ea20d7e307ed36611a62505ffeebe10f3828355c7b9d>
//       },
//       decimals: 0,
//       supply: { basisPoints: <BN: 1>, currency: [Object] },
//       isWrappedSol: false,
//       currency: { symbol: 'Token', decimals: 0, namespace: 'spl-token' }
//     },
//     token: {
//       model: 'token',
//       address: Pda [PublicKey(EirSgRQuo53VPF8nLVBgkDG1RervLPCnNErJ2P88pXek)] {
//         _bn: <BN: cbe0a5f7e1f4103127a77c3d815be7988bfe2c90b4deb157e12e25d2e1e1fded>,
//         bump: 254
//       },
//       isAssociatedToken: true,
//       mintAddress: PublicKey [PublicKey(J7vihEAwKSQNXN7DPp9FZHhP5ipNZWW4MhbQUESHJWpo)] {
//         _bn: <BN: fe5ce717ada67c53b841341de04dcf466287436a201b3466c95ceb9246f719f0>
//       },
//       ownerAddress: PublicKey [PublicKey(FemGKc5MWGFEDiYv12xDC24X6DTVLU7ZjX4gcvExmNid)] {
//         _bn: <BN: d9b02813028872e017f46353e71bf215afc03cc69291616a3dc5d66fcb49fb92>
//       },
//       amount: { basisPoints: <BN: 1>, currency: [Object] },
//       closeAuthorityAddress: null,
//       delegateAddress: null,
//       delegateAmount: { basisPoints: <BN: 0>, currency: [Object] },
//       state: 1
//     },
//     edition: {
//       model: 'nftEdition',
//       isOriginal: true,
//       address: Pda [PublicKey(3R9RXuASFa7vnXs7prC3yPox9YAVftb4duQMy5TsW7bi)] {
//         _bn: <BN: 23e6d65048f4bd6a9552ea20d7e307ed36611a62505ffeebe10f3828355c7b9d>,
//         bump: 255
//       },
//       supply: <BN: 0>,
//       maxSupply: <BN: 0>
//     }
//   }