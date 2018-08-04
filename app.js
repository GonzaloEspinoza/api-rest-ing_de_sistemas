'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 6040;
 
const service =  require('./routes/api/v1.0/services');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use('/',service)
app.use('/api/v1.0',service)

app.listen(port,() => {
    console.log(`api-rset corriendo en http://192.168.1.8:${port}`)
}) 
