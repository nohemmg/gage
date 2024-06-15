import React from 'react';
import { Box, IconButton, useClipboard, Flex } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

const CodeSnippet: React.FC = () => {
  const code = "0X177C3973B16C16FB5D934CA92B6E6AFB03383268";
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <Box
      bg="#9d0208" /* Light yellow background */
      color="white" /* Dark text color */
      p={2} /* Padding */
      fontFamily="futura, sans-serif" /* Monospace font */
      fontWeight="bold" /* Bold text */
      borderRadius="md" /* Medium border radius */
      display="inline-flex" /* Inline flex display */
      alignItems="center"
    >
      <Box mr={2}>{code}</Box>
      <IconButton
        onClick={onCopy}
        size="sm"
        icon={<CopyIcon />}
        aria-label="Copy code"
        bg="#9d0208"
        color="white"
        borderRadius="md"
        _hover={{ bg: "#A24C11" }}
        _active={{ bg: "#d6c08b" }}
        _focus={{ boxShadow: "outline" }}
      />
    </Box>
  );
}

export default CodeSnippet;
