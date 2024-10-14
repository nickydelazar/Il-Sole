import React from 'react';
import  { useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Heading, Text, Grid } from '@chakra-ui/react';
import logo  from '../images/logo.png';
import backgroundImg from '../images/background.png';


const Homepage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

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

        <Box backgroundImage={`url(${backgroundImg})`}
          backgroundSize="cover"
          backgroundPosition="center"
          height="85vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="md">
          <Flex direction="column" alignItems="center" py={10}>
            <Heading as="h1" fontSize="7xl" mb={4}>
            IL Sole
            </Heading>
            <Text fontSize="xl" mb={6}>
            Registro de Datos
            </Text>
          </Flex>
        </Box>

        <Flex justifyContent="center" alignContent="center">
            <Grid templateColumns="repeat(2, 1fr)" gap={6} w="90%" height="100%" margin="30px">
              <Button onClick={() => handleNavigation('/recepcion')} backgroundColor="#DE8F18" h="200px" _hover={{ backgroundColor: "#BF6F15" }}>RECEPCION DE MERCADERIA</Button>
              <Button onClick={() => handleNavigation('/produccion')} backgroundColor="#DE8F18" h="200px" _hover={{ backgroundColor: "#BF6F15" }}>PRODUCCION</Button>
              <Button onClick={() => handleNavigation('/producto-pesados')} backgroundColor="#DE8F18" h="200px" _hover={{ backgroundColor: "#BF6F15" }}>PRODUCTOS PESADOS</Button>
              <Button onClick={() => handleNavigation('/productos-envasados')} backgroundColor="#DE8F18" h="200px" _hover={{ backgroundColor: "#BF6F15" }}>PRODUCTOS ENVASADOS</Button>
            </Grid>
        </Flex>

        <Flex bg="#660033" p={4} justifyContent="start" alignItems="center">
            <Box as="img" src={logo} alt="Footer Logo" boxSize="55px" ml="45px" h="20%"/>
        </Flex>
    </Box>
  )
}

export default Homepage;