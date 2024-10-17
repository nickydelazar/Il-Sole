import React from 'react';
import  { useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Heading, Text, Grid } from '@chakra-ui/react';
import backgroundImg from './images/background.png';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


const Homepage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box>
      <Header />
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
              <Button onClick={() => handleNavigation('/expendio')} backgroundColor="#DE8F18" h="200px" _hover={{ backgroundColor: "#BF6F15" }}>CONTROL EXPENDIO</Button>
              <Button onClick={() => handleNavigation('/admin')} backgroundColor="#DE8F18" h="200px" _hover={{ backgroundColor: "#BF6F15" }}>PANEL DE ADMINISTRADOR</Button>
            </Grid>
        </Flex>
      <Footer />
    </Box>
  )
}

export default Homepage;