'use client'; // Assurez-vous que cette ligne est en haut

import { Flex, Box } from '@chakra-ui/react';
import ProtectedRoute from '../components/ProtectedRoute';

const Dapp: React.FC = () => {
  return (
    <ProtectedRoute>
    <Flex width="100%" height="100%" p={4} direction="row" justifyContent="space-between">
      {/* Left Column */}
      <Flex width="50%" direction="column" alignItems="center" justifyContent="center">
        <Box width="80%" h="90%" boxShadow="md" borderRadius="lg">
          
        </Box>
      </Flex>

      {/* Right Column */}
      <Flex width="50%" direction="column" alignItems="center" justifyContent="center">
        <Box boxShadow="md" borderRadius="2xl" backgroundColor="#0F172A" width="80%" h="90%">
          
        </Box>
      </Flex>
    </Flex>
  </ProtectedRoute>
  );
};

export default Dapp;



