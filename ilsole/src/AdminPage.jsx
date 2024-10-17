import React, { useState } from 'react';
import { Box, Heading, Button, Collapse, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';

const initialUsers = [
  { id: 1, name: 'Lucas', email: 'lucas@example.com', role: 'admin', password: '' },
  { id: 2, name: 'Juan', email: 'juan@example.com', role: 'user', password: '' },
];

const AdminPage = () => {
  const [users, setUsers] = useState(initialUsers);
  const [showForm, setShowForm] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleAddUser = (userData) => {
    if (userData.name && userData.email && userData.role && userData.password) {
      setUsers([...users, { id: users.length + 1, ...userData }]);
      setShowForm(false); // Ocultar formulario
      setFormError(false); // Resetear el error
    } else {
      setFormError(true); // Mostrar error si faltan campos
    }
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <Header />
      <Box p={8}>
        <Heading as="h1" mb={6}>
          Panel de Administración
        </Heading>

        <Tabs>
          <TabList>
            <Tab>Gestión de Usuarios</Tab>
            <Tab>Gestión de Registros</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Heading as="h2" size="lg" mb={4}>
                Gestión de Usuarios
              </Heading>

              <UserTable users={users} onDelete={handleDeleteUser} />

              <Button onClick={() => setShowForm(!showForm)} colorScheme="orange" mt={4} >
                {showForm ? 'Cancelar' : 'Agregar Usuario'}
              </Button>

              <Collapse in={showForm} animateOpacity>
                <UserForm onSubmit={handleAddUser} formError={formError} />
              </Collapse>
            </TabPanel>

            <TabPanel>
              <Heading as="h2" size="lg" mb={4}>
                Gestión de Registros
              </Heading>
              <p>Aquí puedes gestionar los registros...</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Footer />
    </>
  );
};

export default AdminPage;
