'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { address, isConnecting, isDisconnected } = useAccount();
    const router = useRouter();

    useEffect(() => {
        if (isDisconnected) {
            router.push('/');
        }
    }, [isDisconnected, router]);

    if (isConnecting || isDisconnected) {
        return <div>Connect your wallet to access this page...</div>; // Or a custom loading component
    }

    return <>{children}</>;
};

export default ProtectedRoute;
