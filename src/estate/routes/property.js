const express = require('express');
const router = express.Router();
const controller = require('../controllers/property')

//Crear nuevo inmueble
router.post('/', controller.createProperty);

//Obtener todos los inmuebles
router.get('/', controller.getEstate);

//Obtener inmueble por id
router.get('/:id', controller.getProperty);

//Editar un inmueble por id
router.put('/:id', controller.updateProperty);

//Borrar un inmueble por id
router.delete('/:id', controller.deleteProperty);



module.exports = router