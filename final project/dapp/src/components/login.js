import * as Web3 from '@solana/web3.js'
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";

const ConnectWallet = async () => {
    const adapter = new PhantomWalletAdapter();
    try {
      await adapter.connect();
      // const base58DecodedPK = base58.decode(adapter.publicKey);
      const pubKeyDecoded = adapter.publicKey.toString()
      console.log(pubKeyDecoded)
    } catch (error) {
      console.error("Failed to connect Phantom wallet:", error);
    }
  }
  
  
  const LoginWallet = () => {
    return (
      <div>
        <button onClick={ConnectWallet}>Connect to Wallet!</button>
  
      </div>
    )
  
  }

  export default LoginWallet