import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';

//console.log(process.env.SOL_PRIVATE_KEY)
const publickey = new Web3.PublicKey('FemGKc5MWGFEDiYv12xDC24X6DTVLU7ZjX4gcvExmNid')
const partnerkey = new Web3.PublicKey('BTzFUJ5aMM6n1Uq5Aiy6jCSn8e9fNx6Vn3tkYNwLBh9U')

const value = 0.05
const totransfer = value * LAMPORTS_PER_SOL
console.log('value to transfer: ', totransfer)
async function main() {
    const transaction = new Web3.Transaction();
    const connection = new Web3.Connection(Web3.clusterApiUrl('testnet'))

    const balance = await connection.getBalance(publickey)
    console.log('balance', balance)
    console.log('balance after transfer: ', balance - totransfer)
    const sendSolInstruction = SystemProgram.transfer({
        fromPubkey: publickey,
        toPubkey: partnerkey,
        lamports: totransfer
    })
    transaction.add(sendSolInstruction)

    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const keyPairFromSecret = Web3.Keypair.fromSecretKey(base58DecodedPK)


    const txhash = await sendAndConfirmTransaction(connection, transaction, [keyPairFromSecret]);
    console.log('txhash', txhash)
}

main()