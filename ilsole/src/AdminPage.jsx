import React, { useState } from 'react';
import {
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
    VStack,
    Collapse,
    IconButton
  } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

const initialUsers = [
    { id: 1, name: 'Lucas', email: 'lucas@example.com' },
    { id: 2, name: 'Juan', email: 'juan@example.com' },
  ];

const AdminPage = () => {

    const [users, setUsers] = useState(initialUsers); // Estado de los usuarios
    const [newUser, setNewUser] = useState({ name: '', email: '' }); // Nuevo usuario
    const [showForm, setShowForm] = useState(false);

    const handleAddUser = () => {
        const updatedUsers = [
          ...users,
          { id: users.length + 1, name: newUser.name, email: newUser.email },
        ];
        setUsers(updatedUsers);
        setNewUser({ name: '', email: '' }); // Limpiar el formulario
        setShowForm(false);
      };

    const handleDeleteUser = (id) => {
        const updatedUsers = users.filter((user) => user.id !== id); // Filtra los usuarios sin el seleccionado
        setUsers(updatedUsers);
    };

  return (
    <>
        <Header />
        <Box p={8}>
            <Heading as="h1" mb={6}>
                Panel de Administración
            </Heading>
            <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                <Tab>Usuarios</Tab>
                <Tab>Registros</Tab>
                </TabList>
                <TabPanels>
                {/* Pestaña de Usuarios */}
                <TabPanel>
                    <Heading as="h2" size="lg" mb={4}>
                    Gestión de Usuarios
                    </Heading>

                    {/* Tabla de Usuarios */}
                    <Table variant="simple" mb={6}>
                    <Thead>
                        <Tr>
                        <Th>ID</Th>
                        <Th>Nombre</Th>
                        <Th>Email</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.map((user) => (
                        <Tr key={user.id}>
                            <Td>{user.id}</Td>
                            <Td>{user.name}</Td>
                            <Td>{user.email}</Td>
                            <Td>
                                {/* Botón de eliminar */}
                                <IconButton
                                    aria-label="Eliminar usuario"
                                    icon={<DeleteIcon />}
                                    colorScheme="red"
                                    onClick={() => handleDeleteUser(user.id)} // Llamar a la función de eliminar
                                />
                            </Td>
                        </Tr>
                        ))}
                    </Tbody>
                    </Table>

                    {/* Botón para mostrar el formulario de agregar usuarios */}
                    <Button
                    onClick={() => setShowForm(!showForm)}
                    colorScheme="orange"
                    leftIcon={<AddIcon />}
                    mb={4}
                    >
                    {showForm ? 'Cancelar' : 'Agregar Usuario'}
                    </Button>

                    {/* Formulario de agregar usuario, colapsado hasta que se presione el botón */}
                    <Collapse in={showForm} animateOpacity>
                    <Box
                        p={4}
                        mt={4}
                        rounded="md"
                        shadow="md"
                        bg="gray.50"
                        borderWidth="1px"
                    >
                        <Heading as="h3" size="md" mb={4}>
                        Nuevo Usuario
                        </Heading>
                        <VStack spacing={4} align="stretch">
                        <FormControl id="name">
                            <FormLabel>Nombre</FormLabel>
                            <Input
                            type="text"
                            value={newUser.name}
                            onChange={(e) =>
                                setNewUser({ ...newUser, name: e.target.value })
                            }
                            placeholder="Nombre del usuario"
                            />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input
                            type="email"
                            value={newUser.email}
                            onChange={(e) =>
                                setNewUser({ ...newUser, email: e.target.value })
                            }
                            placeholder="Email del usuario"
                            />
                        </FormControl>
                        <Button
                            colorScheme="orange"
                            onClick={handleAddUser}
                            w="full"
                        >
                            Guardar Usuario
                        </Button>
                        </VStack>
                    </Box>
                    </Collapse>
                </TabPanel>

                {/* Pestaña de Registros */}
                <TabPanel>
                    <Heading as="h2" size="lg" mb={4}>
                    Gestión de Registros
                    </Heading>
                    <p>Aquí puedes gestionar los registros...</p>
                    {/* Puedes agregar la funcionalidad que necesites aquí */}
                </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
        <Footer />
    </>
  )
}

export default AdminPage