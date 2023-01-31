const { Router } = require('express');
const {
  createProduct, 
  getAllProductsAvailable,
  getProductInCartbyIdUser
} = require('../controllers/product.controller');

const router = Router();

router.post('/create', createProduct);
router.get('/available', getAllProductsAvailable);
router.get('/:id', getProductInCartbyIdUser);

module.exports = router;