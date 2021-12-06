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
               console.log(hashed)
               res.json({isOk: true, msj:'Usuario confirmado'});
          }else{
               //Enviar mensaje de error
               res.json({isok: false, msj: 'Passwords not equals'});
          }
     } catch (error) {
          console.log(error)
     }
}

//Obtenemos lista de todos los usuarios
controller.getUsers = (req, res) => {
     res.json({message: 'lista de usuarios'});
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