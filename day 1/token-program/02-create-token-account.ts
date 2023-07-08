import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import base58 from 'bs58'
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';

async function main(){
    const connection = new Web3.Connection(Web3.clusterApiUrl('testnet'))
    const publickey = new Web3.PublicKey('FemGKc5MWGFEDiYv12xDC24X6DTVLU7ZjX4gcvExmNid')
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)
    const tokenMint = new Web3.PublicKey('5i1nht2Wky3yPE2qSUwWcvcXExYkMESwMqdjL9VmjaGj')
    const tokenAccount = await token.createAccount(
        connection,
        signer, //magbabayad ng trasaction fee
        tokenMint, // owner of account
        publickey,
    );
    console.log('token account', tokenAccount.toBase58())
}
//token account Bi6KBw73Jg33V3fucxh4XaPLueEiKLGGS7YddksWQGpT
main()