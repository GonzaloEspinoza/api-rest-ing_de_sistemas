'use strict'

var mongoose = require('mongoose');
var connect = require('../../../database/collections/connect')




var express = require('express');
var router = express.Router();

router.get('/' , (req ,res) => { 
    res.send({ menssage: 'SERVDOR API-REST CORRIENDO'})
    
});

router.post('register',(req,res) =>{

    //console.log();
})

module.exports = router