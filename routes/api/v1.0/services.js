'use strict'

var mongoose = require('mongoose');
var connect = require('../../../database/collections/connect')

var Registro = require('../../../database/collections/reg_user');

var express = require('express');
var router = express.Router();


router.get('/1' , (req ,res) => { 
    res.send({ menssage: 'SERVIDOR API-REST CORRIENDO'})
    
});

var http = require('http').createServer(webServer);

function webServer(req, res){
    
}


router.post('/register', (req ,res) =>{
    console.log(req.body);

    let registro = new Registro()
    registro.name = req.body.name
    registro.lastname = req.body.lastname
    registro.email = req.body.email
    registro.password = req.body.password

    registro.save((err, usertStored) => {
        if(err) res.status(500).send({messaje: `Error al savar la base de datos:${err}`})

    res.status(200).send({usertStored});
    })
})

router.get('/users', (req, res) =>{
    console.log(req.params)

    Registro.find({}).exec((err,docs)=>{
        res.status(200).send({info:docs})
    })
})



module.exports = router