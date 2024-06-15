//header/PageTabs.tsx

'use client';

import { Flex, Button } from "@chakra-ui/react";
import { useRouter, usePathname } from 'next/navigation'

export default function PageTabs() {
    const router = useRouter();
    const pathname = usePathname();

    const handleButtonClick = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <Flex>
            <Flex
                w="50%"
                alignItems="center"
                justifyContent="center"
            >
                <Button
                    fontFamily="gotham, sans-serif"
                    background="transparent"
                    color="white"
                    onClick={() => handleButtonClick('https://selflivingtoken.gitbook.io/self-living-token-whitepaper/')}
                >
                    DOCS
                </Button>
            </Flex>
            <Flex
                w="50%"
                alignItems="center"
                justifyContent="center"
            >
                <Button
                    fontFamily="futura, sans-serif"
                    background="transparent"
                    color="white"
                    onClick={() => handleButtonClick('https://x.com/SelfLivingToken')}
                >
                    TWITTER
                </Button>
            </Flex>
            <Flex
                w="50%"
                alignItems="center"
                justifyContent="center"
            >
                <Button
                    fontFamily="futura, sans-serif"
                    background="transparent"
                    color="white"
                    onClick={() => router.push('/dashboard')}
                >
                    DASHBOARD
                </Button>
            </Flex>
            
               
                
            <Flex
                w="50%"
                alignItems="center"
                justifyContent="center"
            >
                <Button
                    fontFamily="futura, sans-serif"
                    background="transparent"
                    color="white"
                    onClick={() => handleButtonClick('https://telegram.org/')}
                >
                    TELEGRAM
                </Button>
            </Flex>
        </Flex>
    );
}
