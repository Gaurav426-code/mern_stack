const mongoose = require('mongoose');

const mytype = new mongoose.Schema({
        fullname:{type:String},
        email:{type:String},
        dob:{type:String},
        mobile:{type:String},
        gender:{type:String},
        course:{type:String},
        pic:{type:String},
        payment:{type:String},
        address:{type:String},
        role:{
                type:String
        }
});


const mymodal = new mongoose.model("userdate",mytype);
module.exports = mymodal;