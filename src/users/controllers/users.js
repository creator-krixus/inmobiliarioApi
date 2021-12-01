const controller = {};

//Creamos un nuevo usuario
controller.createUser = (req, res) => {
    res.json({message:'Usuario creado'});
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