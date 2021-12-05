const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2')

const propertySchema = mongoose.Schema({
    clase: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required:true
    },
    area: {
        type: Number
    },
    habitaciones: {
        type: Number,
        required: true
    },
    baños: {
        type: Number,
        required: true
    },
    parqueaderos: {
        type: Number
    },
    estrato: {
        type: Number
    },
    piso: {
        type: Number
    },
    imagenes: {
        type: Array
    },
    descripcion: {
        type: String
    },
    ubicacion: {
        type: Object
    }
},{
           //Con timestamps me pone la fecha de creacion del objeto
           timestamps:true,
           //Con versionKey le quito el valor que trae por defecto la version
           versionKey:false
});

propertySchema.plugin(paginate)
module.exports = mongoose.model('estate', propertySchema)