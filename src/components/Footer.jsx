import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" bg="blue.800" p={4}>
      <Text fontSize="sm" color="white">© 2024 SpeedyClean. All rights reserved.</Text>
    </Box>
  );
}

export default Footer;