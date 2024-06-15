'use client'; // Assurez-vous que cette ligne est en haut

import { Flex, Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import SushiSwapWidget from '../components/SushiSwapWidget';


const DEXToolsWidget = dynamic(() => import('../components/DEXToolsWidget'), { ssr: false });

const Dashboard: React.FC = () => {
  return (

    <Flex width="100%" height="100%" p={4} direction="row" justifyContent="space-between">
      {/* Left Column */}
      <Flex width="50%" direction="column" alignItems="center" justifyContent="center">
        <Box width="80%" h="90%" boxShadow="md" borderRadius="lg">
          <SushiSwapWidget />
        </Box>
      </Flex>

      {/* Right Column */}
      <Flex width="50%" direction="column" alignItems="center" justifyContent="center">
        <Box boxShadow="md" borderRadius="2xl" backgroundColor="#0F172A" width="80%" h="90%">
          <DEXToolsWidget />
        </Box>
      </Flex>
    </Flex>
  
  );
};

export default Dashboard;








// // Assuming React 18 or newer, the explicit import of React is not necessary for JSX.
// import { Box, Flex, Text } from '@chakra-ui/react';
// import SushiSwapWidget from '../components/SushiSwapWidget';
// // Assuming you have a similar UniswapWidget component

// const Dashboard: React.FC = () => {
//   return (
//     <Flex
//       alignItems="center"
//       justifyContent="center"
//       direction="column"
//       width="100%"
//       height="100%"
//       p={4}
//       aria-label="Dashboard Container"
//     >
//       <Flex alignItems="center" justifyContent="center" width="100%" height="35%">
//         <Box
//           alignItems="center"
//           backgroundColor="#9d0208"
//           height="70%"
//           width="60%"
//           p={4}
//           borderRadius="2xl"
//           aria-label="Introduction Section"
//         >
//           <Text
//             fontFamily="'Fredoka One', cursive"
//             color="white"
//             fontSize="2xl"
//             textAlign="center"
//             lineHeight="tall"
//           >
//             INTRODUCTION<br /><br />
//             Welcome to Self Living Token, $SLT.<br />
//           </Text>
//         </Box>
//       </Flex>
//       <Flex width="100%" height="60%">
//         <Box
//           flex="1"
//           m={2}
//           display="flex"
//           justifyContent="center"
//           height="25%"
//           width="60%"
//           aria-label="SushiSwap Widget Container"
//         >
//           <SushiSwapWidget />
//         </Box>
//       </Flex>
//     </Flex>
//   );
// };

// export default Dashboard;


// {/* <Box 
          
//           width="80%" 
//           height="80%" 
//           borderRadius="2xl" 
//           p={6} 
          
//           position="relative"
          
          
//         >
//           <Text fontFamily="'Fredoka One', cursive"  color="white" fontSize="2xl" textAlign="center" lineHeight="tall">
//             INTRODUCTION<br /><br />
//             Welcome to Self Living Token, $SLT.<br />
//             The first ever token proposing a buy back mechanism financed by taxes.<br />
//             Represented by an egg, make him evolve in order to unlock new utilities and discover its new appearance.<br /><br />
//             Only the bravest will hold until the egg reaches its ultimate evolution!
//           </Text>
//         </Box> */}