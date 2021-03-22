const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Name:String,
    Email:String,
    Password:Number
});

module.exports = mongoose.model('User',UserSchema);