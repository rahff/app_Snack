const express = require('express');
const router = express.Router();
const orderController = require('../../controllers/app1/order.controllers');



router.post('/new', orderController.createOrder);

router.get('/list', orderController.getOrderList);

router.delete('/delete/:id', orderController.deleteOrder);





module.exports = router;