import React, { useState } from 'react';
import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'
import { sendAndConfirmTransaction } from '@solana/web3.js';
import { Buffer } from 'buffer';

// @ts-ignore
window.Buffer = Buffer;
const Rant = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    // Do something with the input text
    console.log('Rant:', inputText);
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    // input secret key
    const base58DecodePK = base58.decode('25cnzTyYevHs1cZkg5heb235WAXHaaZnD6ibwQyFTkTEz5FmMNCYdj8Dg2oryV4iEtNdfksMBMueNypwur327vRo')
    const keypairFromSecret = Web3.Keypair.fromSecretKey(base58DecodePK)
    const signer = keypairFromSecret;
    const message = inputText;
    const transaction = new Web3.Transaction()
    // pubkey
    const publicKey = new Web3.PublicKey('FemGKc5MWGFEDiYv12xDC24X6DTVLU7ZjX4gcvExmNid')
    const instruction = new Web3.TransactionInstruction({
    keys: [
        {
            pubkey: publicKey,
            isSigner: true,
            isWritable: false,
        }
    ],
    
    data: Buffer.alloc(message.length, message, 'utf8'),
    programId: new Web3.PublicKey("A9cGSBPTiq1nySm8ES9QMP63PtBaWWqhPXYEsjPtQ6Fe")
    
    })
    transaction.add(instruction)
    const signature = sendAndConfirmTransaction(
    connection,
    transaction,
    [signer]
    )

    console.log('SIGNATURE', signature)
    };


  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
};

export default Rant;
