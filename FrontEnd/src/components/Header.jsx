import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo  from '../images/logo.png';
import SignIn from '../SignIn';

const Header = () => {
  return (
    <Box>
        <Flex bg="#660033" p='1.5%' alignItems="center" justifyContent="space-between">
            <Box flex="1" display="flex" justifyContent="center" ml="10.3%">
              <Link to="/">
                <Box as="img" src={logo} alt="Logo" boxSize="55px" h="100%" />
              </Link>
            </Box>
            <Link to='/SignIn'>
              <Button backgroundColor="#DE8F18" color="white" _hover={{ backgroundColor: "#BF6F15" }}>
                  Iniciar sesion
              </Button>
            </Link> 
        </Flex>
    </Box>
  )
}

export default Header