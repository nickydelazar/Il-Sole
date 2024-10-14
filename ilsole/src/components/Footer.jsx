import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import logo  from '../images/logo.png';

const Footer = () => {
  return (
    <Box>
        <Flex bg="#660033" p={4} justifyContent="start" alignItems="center">
            <Box as="img" src={logo} alt="Footer Logo" boxSize="55px" ml="45px" h="20%"/>
        </Flex>
    </Box>
  )
}

export default Footer