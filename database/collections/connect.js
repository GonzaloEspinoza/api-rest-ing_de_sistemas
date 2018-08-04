'use strict'

var express = require('express');
var mongoose = require('mongoose');

//{ useNewUrlParser: true }   --> se sugiere utilizar de ese objeto, para parsear las ulr de coneccion 
mongoose.connect('mongodb://192.168.99.100:27017/Inmuebles',{ useNewUrlParser: true }, (err, res) =>{
    if(err) throw err
    console.log('Conexion a la base de datos establecida')
})

//mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });

module.exports = mongoose;