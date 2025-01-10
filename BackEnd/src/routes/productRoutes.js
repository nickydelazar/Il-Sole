const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');

// Rutas de productos
router.get('/', productController.getAllProducts);        // Obtener todos los productos
router.get('/:id', productController.getProductById);    // Obtener producto por ID
router.post('/', productController.createProduct);       // Crear un producto
router.put('/:id', productController.updateProduct);     // Actualizar un producto
router.delete('/:id', productController.deleteProduct);  // Eliminar un producto

module.exports = router;
