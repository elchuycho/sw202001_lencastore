var express = require('express');
var router = express.Router();
var userModel = require('./seguridad.model');

//HTTP GET POST PUT DELETE
/*
    GET     obteenr -> SELECT -> Consulta
        filtros - parametros // dentro de la uri
    POST    crear -> INSERT -> Agregar
        datos // dentro del body del request
    PUT     actualizar -> UPDATE -> modificar o act un recurso
        filtros - parametros // dentro de la uri
        datos // dentro del bosy del request
    DELETE      eliminar -> DELETE -> eliminar unr ecurso
        filtos - paramettrso // dentro de la uri
*/

// Crear un modelo de datos para la entidad

// CRUD
//http://localhost:3000/api/seguridad/users/all
//Obtener todos lor egsitros de ussarios
router.get('/users/all', (req,res)=>{
    return res.status(200).json(userModel.getAll());
}); //get users/all

//http://localhost:3000/api/seguridad/users/1
router.get('/users/:id',(req,res)=>{
    var id = parseInt(req.params.id);
    var user = userModel.getById(id);
    return res.status(200).json(user);
});

//localhost:3000/api/seguridad/users/new
router.post('/users/new', (req,res)=>{
    var datosEnviados = req.body;
    var newUser = userModel.addNew(datosEnviados);
    return res.status(200).json(newUser);
}); //post users/new



module.exports = router;