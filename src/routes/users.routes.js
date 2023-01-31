const { Router } = require('express');
const getUserWithOrders = require('../controllers/users.controller');

const router = Router();

router.get('/orders/:id', getUserWithOrders);


module.exports = router;