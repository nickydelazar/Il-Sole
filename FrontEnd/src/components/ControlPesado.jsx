import React, { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, Select, Heading, VStack } from '@chakra-ui/react';
import backgroundImg from '../images/background.png';

const ControlPesado = () => {
  const [formData, setFormData] = useState({
    producto: '',
    ingrediente: '',
    materiaPrima: '',
    fecha: '',
    lote: '',
    cantidad: '',
    observaciones: '',
  });

  const productos = ['Empanadas de JyQ', 'Ravioles JyQ', 'Ñoquis', 'Pizza']; // Añadir más productos
  const ingredientesPorProducto = {
    'Empanadas de JyQ': ['Masa', 'Relleno'],
    'Ravioles JyQ': ['Masa', 'Relleno de JyQ'],
    'Ñoquis': ['Masa de ñoquis'],
    'Pizza': ['Masa de pizza']
  };
  const materiaPrimaPorIngrediente = {
    'Masa': ['Harina', 'Agua', 'Levadura'],
    'Relleno': ['Carne', 'Verduras', 'Condimentos'],
    // Añadir más materias primas según el ingrediente
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "producto") {
      // Resetear ingrediente y materia prima al cambiar de producto
      setFormData({ ...formData, producto: value, ingrediente: '', materiaPrima: '' });
    } else if (name === "ingrediente") {
      // Resetear materia prima al cambiar de ingrediente
      setFormData({ ...formData, ingrediente: value, materiaPrima: '' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados: ", formData);
  };

  return (
    <Box backgroundImage={`url(${backgroundImg})`}>
      <Container maxW="container.md" p={10}>
        <Box bg="orange.200" p={8} borderRadius="md" boxShadow="lg" borderColor="orange.600" borderWidth="1px">
          <Heading mb={6} textAlign="center" color="orange.800">
            Control de Pesado
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>

              <FormControl id="producto">
                <FormLabel>Producto</FormLabel>
                <Select
                  name="producto"
                  value={formData.producto}
                  onChange={handleChange}
                  bg="white"
                >
                  <option value="">Selecciona un producto</option>
                  {productos.map((prod) => (
                    <option key={prod} value={prod}>
                      {prod}
                    </option>
                  ))}
                </Select>
              </FormControl>

              {formData.producto && (
                <FormControl id="ingrediente">
                  <FormLabel>Ingrediente</FormLabel>
                  <Select
                    name="ingrediente"
                    value={formData.ingrediente}
                    onChange={handleChange}
                    bg="white"
                  >
                    <option value="">Selecciona un ingrediente</option>
                    {ingredientesPorProducto[formData.producto].map((ing) => (
                      <option key={ing} value={ing}>
                        {ing}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              )}

              {formData.ingrediente && (
                <FormControl id="materiaPrima">
                  <FormLabel>Materia Prima</FormLabel>
                  <Select
                    name="materiaPrima"
                    value={formData.materiaPrima}
                    onChange={handleChange}
                    bg="white"
                  >
                    <option value="">Selecciona materia prima</option>
                    {materiaPrimaPorIngrediente[formData.ingrediente].map((mat) => (
                      <option key={mat} value={mat}>
                        {mat}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              )}

              {formData.materiaPrima && (
                <>
                  <FormControl id="lote" isRequired>
                    <FormLabel>Lote</FormLabel>
                    <Input
                      type="text"
                      name="lote"
                      value={formData.lote}
                      onChange={handleChange}
                      bg="white"
                    />
                  </FormControl>

                  <FormControl id="cantidad" isRequired>
                    <FormLabel>Cantidad</FormLabel>
                    <Input
                      type="number"
                      name="cantidad"
                      value={formData.cantidad}
                      onChange={handleChange}
                      bg="white"
                    />
                  </FormControl>

                  <FormControl id="observaciones">
                    <FormLabel>Observaciones</FormLabel>
                    <Input
                      type="text"
                      name="observaciones"
                      value={formData.observaciones}
                      onChange={handleChange}
                      bg="white"
                    />
                  </FormControl>

                  <Button colorScheme="orange" type="submit" size="lg" w="full">
                    Guardar
                  </Button>
                </>
              )}
            </VStack>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ControlPesado;
