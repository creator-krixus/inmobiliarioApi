const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},
    {
        //Con timestamps me pone la fecha de creacion del objeto
        timestamps:true,
        //Con versionKey le quito el valor que trae por defecto la version
        versionKey:false
    })

module.exports = mongoose.model('users', userSchema)


