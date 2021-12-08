const express = require('express');
const router = express.Router();
const controller = require('../controllers/property')

//Crear nuevo inmueble
router.post('/', controller.createProperty);

//Obtener todos los inmuebles paginados
router.get('/', controller.getEstate);

//Obtener todos los inmuebles una lista
router.get('/', controller.getEstateAll);

//Obtener inmueble por id
router.get('/:id', controller.getProperty);

//Editar un inmueble por id
router.put('/:id', controller.updateProperty);

//Borrar un inmueble por id
router.delete('/:id', controller.deleteProperty);



module.exports = router