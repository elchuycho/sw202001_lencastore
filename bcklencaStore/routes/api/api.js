


// rutas -> router -> app : express

// rutas -> router : entidad -> router:api -> app:express

var express = require('express');
var router = express.Router();
 
//http://localhost:3000/api/version
router.get( '/version', function(req, res){
    res.status(200).json({"version":"API v1.0"});
});

module.exports = router;


/*
//Estructura de un modulo y uso de module.exports para exponer la funcionalidad del modulo

var libLencaFunction = {}; //JSON Javascript Object Notation

libLencaFunction.mensaje = "Hola Mundo";
libLencaFunction.version = "v1.0";
libLencaFunction.sayHello = ()=>{
    console.log("Hellow");
} //E56

module.exports = libLencaFunction;
*/