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
    const tokenMint = await token.createMint(
        connection,
        signer,
        publickey,
        publickey,
        9,
    );
    console.log('tokenMint', tokenMint.toBase58())
    // tokenMint 5i1nht2Wky3yPE2qSUwWcvcXExYkMESwMqdjL9VmjaGj
}
main()