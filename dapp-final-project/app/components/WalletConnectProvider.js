import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import { useMemo } from 'react'

export const WalletConnectProvider = ({ children }) => {
    
    // choose network, devnet for testing
    const network = WalletAdapterNetwork.Devnet

    const endpoint = useMemo(() => {
        if (network === WalletAdapterNetwork.Devnet) {
            return 'https://lively-dry-uranium.solana-devnet.discover.quiknode.pro/2254b0da43bf359b7d13a20adb274f08dcccb198/'
        }

        return clusterApiUrl(network)
    }, [network])

    const wallets = useMemo(() => [new PhantomWalletAdapter()], [network])

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}