const express = require('express');
const multer = require('multer');
const upload = multer();
const router = express.Router();
const userController = require('../controllers/userController');
router.post('/registration',upload.none(),userController.create);

module.exports = router;