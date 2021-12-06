const userSchema = require('../models/users')
const bcrypt = require('bcrypt');
//Numero de rondas de encriptaciones
const roundSalt = 10;


const controller = {};

//Creamos un nuevo usuario
controller.createUser = async (req, res) => {
     try {
          const {email, password, confirmPassword} = req.body;
          
          if (password == confirmPassword){
               //encriptar la clave
               const hashed = await bcrypt.hash(password, roundSalt);
               const user = userSchema({
                    email: email,
                    password: hashed
               });
               user
                    .save()
                    .then(data => {
                         res.json(data)
                         res.json({isOk: true, msj:'Usuario creado'});
                    } )
                    .catch(error =>  {
                         res.json(error)
                         res.json('Usuario no se puede crear');
                    })
               
          }else{
               //Enviar mensaje de error
               res.json({isOk: false, msj: 'Passwords not equals'});
          }
     } catch (error) {
          console.log(error)
     }
}

//Obtenemos lista de todos los usuarios
controller.getUsers = (req, res) => {
     userSchema
               .find()
               .then(data =>  res.json(data))
               .catch(error =>  res.json({msj: error}))
}

//Obtenemos un usuario por su id
controller.getUser = (req, res) => {
     res.json({message: 'usuario obtenido'});
}

//Actualizamos un usuario
controller.updateUser = (req, res) => {
     res.json({message: 'Usuario actualizado'});
}

//Borramos un usuario
controller.deleteUser = (req, res) => {
     res.json({message: 'usuario borrado'});
}
module.exports = controller;