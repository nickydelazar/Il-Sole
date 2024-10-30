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
    Select,
    Textarea,
    Heading,
    VStack,
    HStack,
    Container,
  } from "@chakra-ui/react";

const FormProduccion = () => {

    const [formData, setFormData] = useState({
        producto: "",
        materiaPrima: "",
        lote: "",
        planProduccion: "",
        produccion: "",
        pesoDescarte: "",
        observaciones: "",
        comentarios: "",
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
                Registro de Datos - Producción
                </Heading>
                <form onSubmit={handleSubmit}>
                    <HStack spacing={4} align="start" mb={4}>
                        <FormControl id="producto">
                        <FormLabel>Producto</FormLabel>
                        <Select
                            name="producto"
                            value={formData.producto}
                            onChange={handleChange}
                            placeholder="Seleccionar"
                            bg="white"
                        >
                            <option value="Producto 1">Empanada de Jamón y Queso</option>
                            <option value="Producto 2">Empanada de Carne</option>
                            <option value="Producto 3">Ravioles PV</option>
                            <option value="Producto 4">Ravioles Jamón y Queso</option>
                            <option value="Producto 5">Pizza</option>
                            <option value="Producto 6">Figacita</option>
                            <option value="Producto 7">Ñoquis</option>
                            <option value="Producto 8">Bocaditos</option>
                        </Select>
                        </FormControl>

                        <FormControl id="materiaPrima">
                        <FormLabel>Materia Prima</FormLabel>
                        <Select
                            name="materiaPrima"
                            value={formData.materiaPrima}
                            onChange={handleChange}
                            placeholder="Seleccionar"
                            bg="white"
                        >
                            <option value="Materia Prima 1">Materia Prima 1</option>
                            <option value="Materia Prima 2">Materia Prima 2</option>
                        </Select>
                        </FormControl>
                    </HStack>
                    <VStack spacing={4}>
                        <FormControl id="lote">
                        <FormLabel>Lote de MP/PREP</FormLabel>
                        <Input
                            type="number"
                            name="lote"
                            value={formData.lote}
                            onChange={handleChange}
                            bg="white"
                        />
                        </FormControl>

                        <FormControl id="produccion">
                        <FormLabel>Producción</FormLabel>
                        <Input
                            type="text"
                            name="produccion"
                            value={formData.produccion}
                            onChange={handleChange}
                            bg="white"
                        />
                        </FormControl>

                        <FormControl id="planProduccion">
                        <FormLabel>Plan de Producción</FormLabel>
                        <Input
                            type="text"
                            name="planProduccion"
                            value={formData.planProduccion}
                            onChange={handleChange}
                            bg="white"
                        />
                        </FormControl>

                        <FormControl id="pesoDescarte">
                        <FormLabel>Peso de Descarte</FormLabel>
                        <Input
                            type="number"
                            name="pesoDescarte"
                            value={formData.pesoDescarte}
                            onChange={handleChange}
                            bg="white"
                        />
                        </FormControl>

                        <FormControl id="observaciones">
                        <FormLabel>Observaciones (Indicar Fecha de Envasado)</FormLabel>
                        <Textarea
                            name="observaciones"
                            value={formData.observaciones}
                            onChange={handleChange}
                            bg="white"
                        />
                        </FormControl>

                        <FormControl id="comentarios">
                        <FormLabel>Comentarios</FormLabel>
                        <Textarea
                            name="comentarios"
                            value={formData.comentarios}
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
);
};

export default FormProduccion;