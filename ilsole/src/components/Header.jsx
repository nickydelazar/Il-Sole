import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import logo  from '../images/logo.png';

const Header = () => {
  return (
    <Box>
        <Flex bg="#660033" p={4} alignItems="center" justifyContent="space-between">
            <Box flex="1" display="flex" justifyContent="center" ml="6%">
                <Box as="img" src={logo} alt="Logo" boxSize="55px" h="20%"/>
            </Box>
            <Button backgroundColor="#DE8F18" color="white" _hover={{ backgroundColor: "#BF6F15" }}>
                Sign In
            </Button>
        </Flex>
    </Box>
  )
}

export default Header