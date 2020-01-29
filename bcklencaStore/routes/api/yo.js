var express = require('express');
var router = express.Router();
 
//http://localhost:3000/api/version
router.get( '/yo', function(req, res){
    res.status(200).json({"Luis Chuy Cho":"0801-1998-07102"});
});

module.exports = router;