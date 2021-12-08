const express = require('express');
const router = express.Router();
const routerUsers = require('../users/routes/users')
const routerState = require('../estate/routes/property')
const routerContacto = require('../contactos/routes/contacto')

const apiRouter = (app) => {
    app.use('/api/v1', router);
    router.use('/users', routerUsers);
    router.use('/estate', routerState);
    router.use('/contacto', routerContacto)
}

module.exports = apiRouter;