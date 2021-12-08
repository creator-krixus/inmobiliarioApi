const mongoose = require('mongoose');

const contactoSchema = mongoose.Schema({
    estate: {
        type: Boolean,
        default: true
    },
    nombre: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    mensaje: {
        type: String,
        required:true
    }
},
{
    timestamp: true,
    versionKey: false
})

module.exports = mongoose.model('contactos', contactoSchema);