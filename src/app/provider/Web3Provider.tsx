'use client';

import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
    RainbowKitProvider,
    getDefaultWallets,
    getDefaultConfig,
    darkTheme,
} from '@rainbow-me/rainbowkit';
import {
    argentWallet,
    trustWallet,
    ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, useAccount } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { useRouter } from 'next/navigation';

const { wallets } = getDefaultWallets();

const config = getDefaultConfig({
    appName: 'RainbowKit demo',
    projectId: 'YOUR_PROJECT_ID',
    wallets: [
        ...wallets,
        {
            groupName: 'Other',
            wallets: [argentWallet, trustWallet, ledgerWallet],
        },
    ],
    chains: [sepolia],
    ssr: true,
});

const queryClient = new QueryClient();

function WalletWatcher() {
    const { address, isConnecting, isDisconnected } = useAccount();
    const router = useRouter();

    React.useEffect(() => {
        if (address && !isConnecting && !isDisconnected) {
            router.push('/dapp');
        }
    }, [address, isConnecting, isDisconnected, router]);

    return null;
}

export function Web3Provider({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider>
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <RainbowKitProvider theme={darkTheme({
                        accentColor: '#9d0208',
                        accentColorForeground: 'white',
                        borderRadius: 'medium',
                    })}>
                        <WalletWatcher />
                        {children}
                    </RainbowKitProvider>
                </QueryClientProvider>
            </WagmiProvider>
        </ChakraProvider>
    );
}

