// routes/productRoutes.js
const router = require('express').Router();
const productController = require('../controllers/productController');
const { validateProduct } = require('../middleware/validateProduct');

// Route definitions [cite: 89, 90]
router.post('/', validateProduct, productController.createProduct);
router.get('/', productController.getAllProducts);
router.put('/:id', validateProduct, productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;