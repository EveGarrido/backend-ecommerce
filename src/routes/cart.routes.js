const { Router } = require('express');
const {
  addProductToCart,
  buyCart
} = require('../controllers/cart.controller');

const router = Router();

/**
 * @openapi
 * /api/v1/cart/add:
 *   post:
 *     summary: Add product to cart
 *     tags:
 *       - Cart
 *     requestBody:
 *       description: Required fields to add product to cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/addproduct'
 *     responses:
 *       201:
 *         description: Added Product
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             properties:
 *               type: string
 *               example: product add
 * /api/v1/cart/{id}:
 *   put:
 *     security:
 *     - bearerAuth: []
 *     summary: Buy cart
 *     tags:
 *       - Cart
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimun: 1
 *         required: true
 *         description: Buy Cart by id user, clear cart/product in cart and create order/product in order (send email)
 *     responses:
 *       200:
 *         description: Cart bought
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: cart bought
 */

router.post('/add', addProductToCart);
router.put('/:id', buyCart);

module.exports = router;