'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name : String,
    lastname : String,
    email : String,
    password : String,
    Date: {type:Date, default:Date.now()}
})

module.exports = mongoose.model('user',UserSchema);

