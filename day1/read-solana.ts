// hello
import 'dotenv/config'
import * as Web3 from '@solana/web3.js'

const publickey = new Web3.PublicKey('FemGKc5MWGFEDiYv12xDC24X6DTVLU7ZjX4gcvExmNid')

async function main() {
    // console.log('devnet url', Web3.clusterApiUrl('devnet'))

    const connection = new Web3.Connection(Web3.clusterApiUrl('testnet'))

    const balance = await connection.getBalance(publickey)
    console.log('balance', balance)

    const accountInfo = await connection.getAccountInfo(publickey)
    // console.log('accountInfo', accountInfo?.data.toString())
    console.log('accountInfo', accountInfo)


}

main()