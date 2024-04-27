import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Header() {
  return (
    <Box as="header" bg="blue.500" p={4}>
      <Text fontSize="xl" color="white">SpeedyClean</Text>
    </Box>
  );
}

export default Header;