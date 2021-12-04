const propertySchema = require('../models/property');
const controller = {}

controller.createProperty = (req, res) => {
     const property = propertySchema(req.body);
     property
          .save()
          .then(data =>  res.json(data))
          .catch(error =>  res.json({message: error}))
}

controller.getEstate = (req, res) => {
     propertySchema
               .find()
               .then((data) => {
               if(data.length != 0){
                    res.json(data)
               }else{
                    res.send('No hay nada para mostrar');
               }
               })
               .catch((error) =>  res.json({message: error}))
}

controller.getEstate = (req, res) => {
     const options = req.query;
     propertySchema
     //Con paginate puedo paginar cuantos valores me regresa de la base de datos    
         .paginate({}, options)
         .then((data) => {
             if(data.length != 0){
                 res.json(data)
             }else{
                 res.send('No hay nada para mostrar');
             }
         })
         .catch((error) =>  res.json({message: error}))
 }

controller.getProperty = (req, res) => {
     const { id } = req.params; 
     propertySchema
         .findById(id)
         .then((data) =>  res.json({ data: data }))
         .catch((error) =>  res.json({message: error}))
}

controller.updateProperty = (req, res) => {
     res.json('Inmueble actualizado');
}

controller.deleteProperty = (req, res) => {
     const { id } = req.params; 
     propertySchema
         .remove({_id:id})
         .then((data) =>  res.json(data))
         .catch((error) =>  res.json({message: error}))
}

module.exports = controller