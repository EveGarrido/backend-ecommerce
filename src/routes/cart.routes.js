const { Router } = require('express');
const {
  addProductToCart,
  buyCart
} = require('../controllers/cart.controller');

const router = Router();

router.post('/create', addProductToCart);
router.put('/:id', buyCart);

module.exports = router;