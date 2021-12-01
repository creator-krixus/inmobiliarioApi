const express = require('express');
const router = express.Router();
const routerUsers = require('../users/routes/users')
const routerState = require('../estate/routes/property')

const apiRouter = (app) => {
    app.use('/api/v1', router);
    router.use('/users', routerUsers);
    router.use('/estate', routerState)
}

module.exports = apiRouter;