const swaggerUI = require('swagger-ui-express');
const swaggerJsDocs = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Documentation API Brexiu",
            version: "1.0.0"
        },
        servers: [
            {
                url:"http://localhost:8000"
            }
        ]
    },
    apis: ['./src/config/documentsApi.js']
}

const documents = (app) => {
    app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs(swaggerSpec)));
}

module.exports = documents;

//Creacion del esquema de la documentacion
/**
 * @swagger
 * components:
 *   schemas:
 *      Estate:
 *        type: object
 *        properties:
 *          clase:
 *              type: string
 *              description: Clase del inmueble
 *          precio:
 *              type: number
 *              description: Valor del inmueble
 *          estado:
 *              type: string
 *              description: Estado del inmueble venta o arrendo  
 *          area:
 *              type: number
 *              description: Cantidad de metros construidos del inmueble
 *          habitaciones: 
 *              type: number
 *              description: Cantidad de habitaciones del inmueble
 *          baños:
 *              type: number
 *              description: Cantidad de baños en el inmueble
 *          parqueaderos:
 *              type: number
 *              description: Cantidad de parqueaderos del inmueble
 *          estrato:
 *              type: number
 *              description: Estrato del inmueble
 *          piso:
 *              type: number
 *              description: Ubicacion del inmueble en pisos
 *          imagenes:
 *              type: string
 *              description: Url de la imagen del inmueble
 *          descripcion:
 *              type: string
 *          ubicacion:
 *              type: string
 *        required:
 *            -clase
 *            -precio
 *            -estado
 *            -habitaciones
 *            -baños      
 *        example:
 *           clase: casa 
 *           precio: 120000000
 *           estado: arrendo
 *           area: 78
 *           habitaciones: 3
 *           baños: 2
 *           parqueaderos: 1
 *           estrato: 5
 *           piso: 6
 *           imagenes: https://imagen.png
 *           descripcion: Hermosa propiedad
 *           ubicacion: 
 */

//Endpoint para crear nuevos inmuebles
/**
 * @swagger
 * /api/v1/estate:
 *  post:
 *      summary: Create new propertie
 *      tags: [estate]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Estate'
 *      responses:
 *          200:
 *              description: New propertie create!
 */

//Endpoint para obtener todos los inmuebles
/**
 * @swagger
 * /api/v1/estate:
 *  get:
 *      summary: Return all properties of the first page
 *      tags: [estate]                
 *      responses:
 *          200:
 *              description: All estate
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Estate'
 */

//Endpoint para obtener las propiedades por paginas en la base de datos
/**
 * @swagger
 * /api/v1/estate?page={page}&limit={limit}:
 *  get:
 *      summary: Return all properties the each page selected
 *      tags: [estate]
 *      parameters:
 *          - in: path
 *            name: page
 *            type: integer    
 *            required: true  
 *            description: Number of the page to return    
 *          - in: path
 *            name: limit
 *            type: integer  
 *            required: true  
 *            description: Number the items to return                     
 *      responses:
 *          200:
 *              description: All estaet of this page
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Estate'
 */



//Obtener una propiedad mediante el id de la propiedad
/**
 * @swagger
 * /api/v1/estate/{id}:
 *  get:
 *      summary: Return a propertie
 *      tags: [estate]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: A propertie
 *      responses:
 *          200:
 *              description: A propertie
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: objet
 *                          items:
 *                              $ref: '#/components/schemas/Estate'
 *          404:
 *              description: Propertie not found
 */

//Editar la informacion de una propiedad
/**
 * @swagger
 * /api/v1/estate/{id}:
 *  put:
 *      summary: Update a propertie
 *      tags: [estate]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Update a propertie
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Estate'
 *      responses:
 *          200:
 *              description: update propertie
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: objet
 *                          items:
 *                              $ref: '#/components/schemas/Estate'
 *          404:
 *              description: Propertie not found
 */


//Borra una propiedad
/**
 * @swagger
 * /api/v1/estate/{id}:
 *  delete:
 *      summary: Delete a propertie
 *      tags: [estate]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Delete a propertie
 *      responses:
 *          200:
 *              description: Delete propertie
 *          404:
 *              description: Propertie not found
 */