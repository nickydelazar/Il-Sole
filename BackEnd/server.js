const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// Importar rutas
const productRoutes = require('./src/routes/productRoutes');
const userRoutes = require('./src/routes/userRoutes');
const produccionRoutes = require('./src/routes/produccionRoutes');
const controlPesadoRoutes = require('./src/routes/controlPesadoRoutes');
const envasadoRoutes = require('./src/routes/envasadoRoutes');

// Middlewares
app.use(cors());
app.use(express.json()); // Para parsear JSON

// Rutas principales
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/production', produccionRoutes);
app.use('/api/control-pesado', controlPesadoRoutes);
app.use('/api/envasado', envasadoRoutes);

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
