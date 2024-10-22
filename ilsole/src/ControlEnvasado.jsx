import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import backgroundImg from './images/background.png';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Heading,
    VStack,
    Container,
    Textarea,
  } from "@chakra-ui/react";

const ControlEnvasado = () => {
    const [formData, setFormData] = useState({
        loteProd: "",
        loteEnvasado: "",
        producto: "",
        cantEnvases: "",
        cantDescarte: "",
        observaciones: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados: ", formData);
        // Aquí puedes enviar los datos al backend
    };
  return (
    <>
    <Header />
      <Box backgroundImage={`url(${backgroundImg})`}>
          <Container maxW="container.md" p={10}>
          <Box
              bg="orange.200"
              p={8}
              borderRadius="md"
              boxShadow="lg"
              borderColor="orange.600"
              borderWidth="1px"
          >
              <Heading mb={6} textAlign="center" color="orange.800">
              Registro de Datos - Envasado
              </Heading>
              <form onSubmit={handleSubmit}>
                  <VStack spacing={4}>

                  <FormControl id="loteProd">
                      <FormLabel>Lote de Producción</FormLabel>
                      <Input
                          type="text"
                          name="loteProd"
                          value={formData.loteProd}
                          onChange={handleChange}
                          bg="white"
                      />
                      </FormControl>
                    
                    <FormControl id="loteEnvasado">
                      <FormLabel>Lote de Envasado</FormLabel>
                      <Input
                          type="text"
                          name="loteDescarte"
                          value={formData.loteEnavasdo}
                          onChange={handleChange}
                          bg="white"
                      />
                      </FormControl>
                      
                      <FormControl id="producto">
                      <FormLabel>Producto</FormLabel>
                      <Input
                          type="text"
                          name="producto"
                          value={formData.producto}
                          onChange={handleChange}
                          bg="white"
                      />
                      </FormControl>

                      <FormControl id="cantEnvases">
                      <FormLabel>Cantidad envases unitarios</FormLabel>
                      <Input
                          type="text"
                          name="cantEnvases"
                          value={formData.cantEnvases}
                          onChange={handleChange}
                          bg="white"
                      />
                      </FormControl>

                      <FormControl id="cantDescarte">
                      <FormLabel>Cantidad de Descarte</FormLabel>
                      <Input
                          type="text"
                          name="cantDescarte"
                          value={formData.cantDescarte}
                          onChange={handleChange}
                          bg="white"
                      />
                      </FormControl>

                      <FormControl id="observaciones">
                        <FormLabel>Observaciones (Indicar Fecha de produccion)</FormLabel>
                        <Textarea
                            name="observaciones"
                            value={formData.observaciones}
                            onChange={handleChange}
                            bg="white"
                        />
                        </FormControl>

                      <Button colorScheme="orange" type="submit" size="lg" w="full">
                      Enviar
                      </Button>
                  </VStack>
              </form>
          </Box>
          </Container>
      </Box>
    <Footer />
  </>
  )
}

export default ControlEnvasado