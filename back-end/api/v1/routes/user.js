const express = require('express');
const routes = express.Router();
const userController = require('../controller/user');

routes.post('/login', userController.login);
routes.post('/register', userController.register);

module.exports = routes;