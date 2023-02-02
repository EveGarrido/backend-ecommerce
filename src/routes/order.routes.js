const { Router } = require('express');
const {getAllOrders, payOrder} = require('../controllers/order.controller');
const {getUserWithOrders} = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middlelware');

const router = Router();
/** 
 * @openapi
 * /api/v1/order/user/{id}:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     summary: Get orders by id user
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimun: 1
 *         required: true
 *         description: ID of the user to get orders
 *     responses:
 *       200:
 *         description: User with orders
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/orders'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error
 * /api/v1/order/{id}:
 *   put:
 *     security:
 *     - bearerAuth: []
 *     summary: Pay Order
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimun: 1
 *         required: true
 *         description: ID order to pay
 *     responses:
 *       200:
 *         description: Order paid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Order paid
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error
 */

router.get('/',authMiddleware, getAllOrders);
router.put('/:id',authMiddleware, payOrder);
router.get('/user/:id',authMiddleware, getUserWithOrders);


module.exports = router;