import React from 'react';
import { Box } from '@chakra-ui/react';

const SushiSwapWidget: React.FC = () => {
    return (
        <Box
            as="iframe"
            src="https://app.sushi.com/swap"
            width="100%"
            height="100%"
            border="none"
            overflow="hidden"
            borderRadius="2xl"
        />
    );
};

export default SushiSwapWidget;
