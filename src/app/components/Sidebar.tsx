import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Flex,  Spinner, Text } from '@chakra-ui/react';

interface Token {
    name: string;
    symbol: string;
}

interface PairData {
    baseToken: Token;
    quoteToken: Token;
    priceUsd: string;
    priceWeth: string;
    fdv: string;
    totalSupply: string;
    volume: {
        h24: string;
    };
    liquidity: {
        usd: string;
    };
    txns: {
        h1: {
            buys: number;
            sells: number;
        };
    };
}

const Sidebar: React.FC = () => {
    const [pairData, setPairData] = useState<PairData | null>(null);

    useEffect(() => {
        const fetchPairData = async () => {
            try {
                const response = await axios.get('https://api.dexscreener.com/latest/dex/tokens/0x698DC45e4F10966f6D1D98e3bFd7071d8144C233');
                if (response.data && response.data.pairs && response.data.pairs.length > 0) {
                    setPairData(response.data.pairs[0]);
                } else {
                    setPairData(null);
                }
            } catch (error) {
                console.error('Erreur lors du chargement des données de la paire', error);
                setPairData(null);
            }
        };

        fetchPairData();



    }, []);

    return (
        <Box p={4} color="white" borderRadius="md" boxShadow="md" height="100%" overflowY="auto">
            {pairData ? (
                <Box flex-direction="row" color="white" fontFamily="Futura, sans-serif" fontSize="2xl">
                    <Flex w="100%" justifyContent="center" alignItems="center">
                    
                        <Text mb="4" lineHeight="10"><strong>Price USD:</strong> ${pairData.priceUsd}</Text>
                        <Text mb="4" lineHeight="10"><strong>Volume 24H:</strong> ${pairData.volume.h24}</Text>
                    </Flex>
                    <Flex flex-direction="column" w="100%" justifyContent="center" alignItems="center">
                        <Text mb="4" lineHeight="10"><strong>Liquidity:</strong> ${pairData.liquidity.usd}</Text>
                        <Text mb="4" lineHeight="10"><strong> FDV:</strong> ${pairData.fdv}</Text>
                    
                    </Flex>
                    

                </Box>
            ) : (
                <Flex justifyContent="center" alignItems="center">
                    <Spinner size="lg" />
                    <Text color="white" ml={3}>Informations loading...</Text>
                </Flex>
            )}
        </Box>
    );


}

export default Sidebar;

