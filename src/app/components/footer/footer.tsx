import { Flex, Box, Text, Link, Image } from "@chakra-ui/react";
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import dexscreenerIcon from '/public/dexscreener.png';
import dextoolIcon from '/public/dextool.png';

export default function Footer() {
    return (
        <Flex
            height="7%"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            color="white"
            backgroundColor="transparent"
            px={10} // Horizontal padding to space out elements from the edges
        >
            <Box fontSize="xl" fontFamily="Futura, sans-serif" textAlign="left">
                <Text>$SLT Powered by GxCL</Text>
            </Box>
            <Flex>
                <Link href="https://t.me/yourtelegram" isExternal>
                    <FaTelegramPlane size="24" />
                </Link>
                <Link href="https://www.dextools.io/" isExternal ml={4}>
                    <Image src={dextoolIcon.src} alt="Dextools" boxSize="24px" />
                </Link>
                <Link href="https://x.com/SelfLivingToken" isExternal ml={4}>
                    <FaTwitter size="24" />
                </Link>
                <Link href="https://dexscreener.com" isExternal ml={4}>
                    <Image src={dexscreenerIcon.src} alt="Dexscreener" boxSize="24px" />
                </Link>
            </Flex>
        </Flex>
    );
}
