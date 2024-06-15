import type { Metadata } from "next";
import { Web3Provider } from "./provider/Web3Provider";
import { Inter } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import '@rainbow-me/rainbowkit/styles.css';
import { Box, Flex } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Self Living Token",
  description: "powered by GagéxCL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Web3Provider>
          <Box position="relative" w="100vw" h="100vh" overflow="hidden">
            <Box
              backgroundColor="#210002"
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              objectFit="cover"
              zIndex="-1"
            >
              
              
            </Box>
            <Flex
              bg="rgba(0, 0, 0, 0.5)" /* Optional: to darken the video */
              w="100%"
              h="100%"
              flexDirection="column"
            >
              <Header />
              <Flex h="90%">
                {children}
              </Flex>
              <Footer />
            </Flex>
          </Box>
        </Web3Provider>
      </body>
    </html>
  );
}

