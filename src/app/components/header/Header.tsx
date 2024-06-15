'use client';

import { Flex, Button, Box } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import PageTabs from "./PageTabs";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    return (
        <Flex height="10%" width="100%" justifyContent="center" alignItems="center" background="transparent"  >
            <Flex flex={1} h="100%" textAlign="left" alignItems="center" ml={4}>
                <Button 
                    fontFamily="Gotham, sans-serif"
                    background="none"
                    fontSize="3xl"
                    textColor="white"
                    fontWeight={200}
                    onClick={() => router.push('/')}
                    p="10%"
                >
                    SELF LIVING TOKEN
                </Button >
            </Flex >
            <Flex flex={1} h="100%" justifyContent="center" alignItems="center">
                <PageTabs />
            </Flex>
            <Box flex={1} display="flex" justifyContent="right" mr={4}>
                <ConnectButton label="Enter DAPP"/>
            </Box>
        </Flex >
    );
}