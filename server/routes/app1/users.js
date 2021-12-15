const express = require('express');
const router = express.Router();
const userController = require('../../controllers/app1/user.controllers');
const auth = require('../../middlewares/app1/auth');

router.post('/new', userController.createUser);

router.post('/connection',userController.login);

router.post('/verif-email',userController.verifEmail);

router.get('/infos-user',auth.isLogin,userController.getInfosUser);

router.post('/update/name/:id',auth.isLogin,userController.updateNameField);

router.post('/update/firstname/:id',auth.isLogin,userController.updateFirstnameField);

router.post('/update/email/:id',auth.isLogin,userController.updateEmailField);

router.post('/update/adress/:id',auth.isLogin,userController.updateAdressField);

router.post('/update/password/:id',auth.isLogin, userController.updatePasswordField);

router.get('/verif-token',auth.isLogin,userController.verifToken);

router.get('/confirm/:id',userController.confirmAccount);

module.exports = router;
