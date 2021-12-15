const express = require('express');
const router = express.Router();
const productController = require('../../controllers/app1/product.controllers');
const uploadImage = require('../../middlewares/app1/multer.config');



router.get('/', productController.getProductList);

router.get('/:id', productController.getOneProduct);

router.patch('/update/:id',uploadImage,productController.updateProduct);

router.post('/add',uploadImage,productController.addProduct);

router.delete('/:id',productController.deleteOne);



module.exports = router;
