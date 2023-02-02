const { Router } = require('express');
const {getAllOrders} = require('../controllers/order.controller');
const {getUserWithOrders} = require('../controllers/users.controller');

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
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Show orders
 */

router.get('/', getAllOrders);
router.get('/user/:id', getUserWithOrders);


module.exports = router;