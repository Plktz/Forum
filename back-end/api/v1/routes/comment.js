const express = require('express');
const routes = express.Router();
const commentController = require('../controller/comment');

routes.post('/add', commentController.add);
routes.post('/read', commentController.read);

module.exports = routes;