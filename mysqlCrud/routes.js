const express = require('express');
const router = express.Router();
const UserController = require('./controllers/userController');

const userController = new UserController();

router.get('/', userController.index.bind(userController));
router.get('/users/create', userController.create.bind(userController));
router.post('/users', userController.store.bind(userController));
router.get('/users/:id', userController.show.bind(userController));
router.get('/users/:id/edit', userController.edit.bind(userController));
router.post('/users/:id', userController.update.bind(userController));
router.post('/delete_users/:id', userController.delete.bind(userController));

module.exports = router;
