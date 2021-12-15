const express = require('express');
const router = express.Router();
const userRouter = require('./users');
const productRouter = require('./product.route');
const ordersRouter = require('./orders.route');
const contactRouter = require('./contact');

router.use('/products',productRouter);

router.use('/users',userRouter);

router.use('/orders',ordersRouter);

router.use('/contact',contactRouter)


module.exports = router;
