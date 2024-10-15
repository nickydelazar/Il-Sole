import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Heading } from '@chakra-ui/react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      boxShadow="lg"
      m="auto"
      mt={10}
    >
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Iniciar sesion
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Ingresar el mail"
          />
        </FormControl>

        <FormControl id="password" mb={6}>
          <FormLabel>Contaseña</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Ingresar la contraseña"
          />
        </FormControl>

        <Button colorScheme="teal" type="submit" width="full">
          Iniciar Sesion
        </Button>
      </form>
    </Box>
  );
};

export default SignIn;
