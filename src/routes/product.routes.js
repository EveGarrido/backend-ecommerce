const { Router } = require('express');
const {
  createProduct, 
  getAllProductsAvailable,
  getProductInCartbyIdUser
} = require('../controllers/product.controller');

const router = Router();

/**
 * @openapi
 * /api/v1/product/create:
 *   post:
 *     summary: create a new product
 *     tags:
 *       - Product
 *     requestBody:
 *       description: Required fields to create a new product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/newproduct'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             properties:
 *               type: string
 *               example: product created
 * /api/v1/product/available:
 *   get:
 *     summary: get product available
 *     tags:
 *       - Product
 *     responses:
 *       200:
 *         description: Products Available
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             properties:
 *                 status:
 *                   type: string
 *                   example: Ok
 *                 data:
 *                   type: array
 *                   items: {}
 * /api/v1/product/{id}:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     summary: Get products in cart by id user
 *     tags:
 *       - Product
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimun: 1
 *         required: true
 *         description: ID of the user to get products in cart
 *     responses:
 *       200:
 *         description: User with products in cart
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Ok
 *                 data:
 *                   type: array
 *                   items: {}
 */

router.post('/create', createProduct);
router.get('/available', getAllProductsAvailable);
router.get('/:id', getProductInCartbyIdUser);

module.exports = router;