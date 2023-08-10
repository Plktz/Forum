const express = require('express');
const routes = express.Router();
const discussionController = require('../controller/discussion');

routes.post('/create', discussionController.create);
routes.post('/read', discussionController.read);
routes.post('/readrecent', discussionController.readRecent);


module.exports = routes;