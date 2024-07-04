module.exports = app => {
    const controller = require('../controllers/prompt-controller')();

    app.route('/api/prompt').post(controller.OpenAi);
}



/*const express = require('express')
const promptController = require('../controllers/prompt-controller')
const routes = express.Router()

routes.post('/api/prompt', promptController.sendText)

module.exports = routes */