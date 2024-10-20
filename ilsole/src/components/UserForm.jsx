import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Select,
  Box,
  Text,
} from '@chakra-ui/react';

const UserForm = ({ onSubmit, formError }) => {
  const [formData, setFormData] = useState({ name: '', lastName: '', email: '', role: '', password: '' });
  const [showError, setShowError] = useState(false);

  // Efecto para manejar el borrado del error después de 5 segundos
  useEffect(() => {
    if (formError) {
      setShowError(true); // Muestra el error
      const timer = setTimeout(() => {
        setShowError(false); // Borrar el error después de 5 segundos
      }, 5000);
      return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
    } else {
      setShowError(false); // Ocultar el error si no hay error
    }
  }, [formError]); // Ejecutar el efecto cuando formError cambie

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.role && formData.password) {
      onSubmit(formData);
      setFormData({ name: '', email: '', role: '', password: '' });
      setShowError(false); // Asegúrate de ocultar el error si el formulario se envía correctamente
    } else {
      setShowError(true); // Asegúrate de mostrar el error si hay campos faltantes
    }
  };

  return (
    <Box p={4} mt={4} rounded="md" shadow="md" bg="gray.50" borderWidth="1px">
      <VStack spacing={4} align="stretch">
        <FormControl id="name" isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Nombre del usuario"
          />
        </FormControl>
       <FormControl> 
        <FormLabel>Apellido</FormLabel>
          <Input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            placeholder="Apellido del usuario"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email del usuario"
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Contraseña</FormLabel>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Contraseña del usuario"
          />
        </FormControl>

        <FormControl id="role" isRequired>
          <FormLabel>Role</FormLabel>
          <Select
            placeholder="Seleccionar rol"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Select>
        </FormControl>

        {showError && (
          <Text color="red.500" fontSize="m">
            Por favor completa todos los campos antes de agregar el usuario.
          </Text>
        )}

        <Button colorScheme="orange" onClick={handleSubmit} w="full">
          Guardar Usuario
        </Button>
      </VStack>
    </Box>
  );
};

export default UserForm;
