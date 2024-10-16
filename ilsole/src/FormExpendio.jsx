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
  } from "@chakra-ui/react";


const FormEnvasado = () => {

    const [formData, setFormData] = useState({
        producto: "",
        lote: "",
        destino: "",
        tempTransporte: "",
        LimpTransporte: "",
        responsable: "",
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
                Registro de Datos - Expendio
                </Heading>
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>

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

                        <FormControl id="lote">
                        <FormLabel>Lote</FormLabel>
                        <Input
                            type="text"
                            name="lote"
                            value={formData.lote}
                            onChange={handleChange}
                            bg="white"
                        />
                        </FormControl>

                        <FormControl id="destino">
                        <FormLabel>Destino</FormLabel>
                        <Input
                            type="text"
                            name="destino"
                            value={formData.destino}
                            onChange={handleChange}
                            bg="white"
                        />
                        </FormControl>

                        <FormControl id="tempTransporte">
                        <FormLabel>Temperatura del Transporte</FormLabel>
                        <Input
                            type="text"
                            name="tempTransporte"
                            value={formData.tempTransporte}
                            onChange={handleChange}
                            bg="white"
                        />
                        </FormControl>

                        <FormControl id="limpTransporte">
                        <FormLabel>Limpieza de Transporte</FormLabel>
                        <Input
                            type="text"
                            name="limpTrasnporte"
                            value={formData.LimpTransporte}
                            onChange={handleChange}
                            bg="white"
                        />
                        </FormControl>

                        <FormControl id="responsable">
                        <FormLabel>Responsable del Envio</FormLabel>
                        <Input
                            type="text"
                            name="responsable"
                            value={formData.responsable}
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

export default FormEnvasado