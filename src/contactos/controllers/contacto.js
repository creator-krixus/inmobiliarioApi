const contactoSchema = require('../models/contacto')

controller = {};

controller.createNewMessage = (req, res) => {
    const contacto = contactoSchema(req.body);
    contacto
            .save()
            .then(data =>  res.json(data))
            .catch(error =>  res.json({message: error}))
}

controller.getMessages = (req, res) => {
    contactoSchema
                .find()
                .then(data =>  res.json(data))
                .catch(error =>  res.json({message: error}))
}

module.exports = controller;