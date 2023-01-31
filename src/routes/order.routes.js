const { Router } = require('express');
const {getAllOrders} = require('../controllers/order.controller');
const {getUserWithOrders} = require('../controllers/users.controller');

const router = Router();

router.get('/', getAllOrders);
router.get('/user/:id', getUserWithOrders);


module.exports = router;