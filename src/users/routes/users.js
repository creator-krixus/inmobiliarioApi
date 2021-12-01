const express = require('express');
const router = express.Router();
const controller = require('../controllers/users')

//Crear nuevo usuario
router.post('/', controller.createUser);

//Retorna una lista completa de usuarios registrados
router.get('/', controller.getUsers);

//Retorna un usuario por su id
router.get('/:id', controller.getUser);

//Actualiza un usuario por su id
router.put('/:id', controller.updateUser);

//Elimina un registro de usuario por id
router.delete('/:id', controller.deleteUser);

module.exports = router;
