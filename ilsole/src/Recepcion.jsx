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
    Heading,
    VStack,
    HStack,
    Container,
  } from "@chakra-ui/react";

const Recepcion = () => {

    const [formData, setFormData] = useState({
        materiaPrima: "",
        control1: "",
        control2: "",
        control3: "",
        marca:"",
        proveedor: "",
        cant: "",
        nroRemito:"",
        temp: "",
        fechaElaborado: "",
        fechaVTO: "",
        lote: "",
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
              Registro de Datos - Recepción
              </Heading>
              <form onSubmit={handleSubmit}>
                  <VStack spacing={4}>
                      <FormControl id="materiaPrima">
                      <FormLabel>Materia Prima</FormLabel>
                      <Input
                          type="text"
                          name="materiaPrima"
                          value={formData.materiaPrima}
                          onChange={handleChange}
                          bg="white"
                      />
                      </FormControl>

                      <FormControl>
                        <FormLabel>Control</FormLabel>
                        <HStack spacing={4} align="start" mb={4}>
                            <Select
                            name="control1"
                            value={formData.control1}
                            onChange={handleChange}
                            placeholder="Transporte"
                            bg="white"
                            >
                            <option value="control1 1">OK</option>
                            <option value="control1 2">Mal estado</option>
                            </Select>

                            <Select
                            name="control2"
                            value={formData.control2}
                            onChange={handleChange}
                            placeholder="Envase"
                            bg="white"
                            >
                            <option value="control2 1">OK</option>
                            <option value="control2 2">Mal estado</option>
                            </Select>

                            <Select
                            name="control3"
                            value={formData.control3}
                            onChange={handleChange}
                            placeholder="Rotulado"
                            bg="white"
                            >
                            <option value="control3 1">OK</option>
                            <option value="control3 2">Mal estado</option>
                            </Select>
                        </HStack>
                      </FormControl>

                      <FormControl id="marca">
                      <FormLabel>Marca</FormLabel>
                      <Input
                          type="text"
                          name="marca"
                          value={formData.marca}
                          onChange={handleChange}
                          bg="white"
                      />
                      </FormControl>

                      <FormControl id="proveedor">
                      <FormLabel>Proveedor</FormLabel>
                      <Input
                          type="text"
                          name="proveedor"
                          value={formData.proveedor}
                          onChange={handleChange}
                          bg="white"
                      />
                      </FormControl>

                      <FormControl id="cant">
                      <FormLabel>Cantidad</FormLabel>
                      <Input
                          type="numer"
                          name="cant"
                          value={formData.cant}
                          onChange={handleChange}
                          bg="white"
                      />
                      </FormControl>

                      <FormControl id="nroRemito">
                      <FormLabel>Nro° Remito</FormLabel>
                      <Input
                          type="number"
                          name="nroRemito"
                          value={formData.nroRemito}
                          onChange={handleChange}
                          bg="white"
                      />
                      </FormControl>

                      <FormControl id="temp">
                      <FormLabel>Temperatura</FormLabel>
                      <Input
                          type="number"
                          name="temp"
                          value={formData.temp}
                          onChange={handleChange}
                          bg="white"
                      />
                      </FormControl>

                      <FormControl id="fechaElaborado">
                      <FormLabel>Fecha de Elaborado</FormLabel>
                      <Input
                          type="date"
                          name="fechaElaborado"
                          value={formData.fechaElaborado}
                          onChange={handleChange}
                          bg="white"
                      />
                      </FormControl>

                      <FormControl id="fechaVTO">
                      <FormLabel>Fecha de Vencimiento</FormLabel>
                      <Input
                          type="date"
                          name="fechaVTO"
                          value={formData.fechaVTO}
                          onChange={handleChange}
                          bg="white"
                      />
                      </FormControl>

                      <FormControl id="lote">
                      <FormLabel>Lote</FormLabel>
                      <Input
                          type="number"
                          name="lote"
                          value={formData.lote}
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

export default Recepcion