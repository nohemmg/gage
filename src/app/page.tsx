'use client'; // Add this line at the top


import { Flex, Box, } from '@chakra-ui/react';
import PhoenixModel from './components/foenix';

import StepperComponent from './components/stepper';

import CodeSnippet from './components/CodeSnipet';

export default function Home() {

  return (
    <Flex flex-direction="column" width="100%" height="100%" p={4}>
      <Box
        as="video"
        autoPlay
        loop
        muted
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        objectFit="cover"
        zIndex="-1"
      >
        <source src="/wallpaper.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
      <Flex width="30%" alignItems="center" justifyContent="center">

      </Flex>

      <Flex width="40%" alignItems="center" justifyContent="center" flexDirection="column">
        <Box marginBottom="2em" width="50%" height="50%">
          <PhoenixModel />
        </Box>
        <Box marginBottom="3em" display="flex" alignItems="center" justifyContent="center" width="66%">
          <CodeSnippet />
        </Box>
        <Box width="50%" height="10">
          <StepperComponent />
        </Box>
      </Flex>

      <Flex width="30%" alignItems="center" justifyContent="center">
        <Box

          width="80%"
          height="80%"
          borderRadius="2xl"
          p={6}

          position="relative"


        >

        </Box>
      </Flex>
    </Flex>
  );
}
