const mongoose = require('mongoose');
const DoctorSchema = new mongoose.Schema({
name:{
type: String, required: true
},
email:{
type: String,
required: true,
unique: true
},
password:{
type:String,
required: true,
},
phone:{
    type: Number
},
gender:{
    type: String
},
specialitst:{
    type: String
},
role:{
    type: String
},
currentEmployer:{
    type:String
},
avatar:{
    type: String
},
timeWorking:{
    type: String
},
description:{
    type: String
},
review:{
    type: String
},
type:{
    type: String
}
});

const doctorModel=mongoose.model('doctors',DoctorSchema);

module.exports = doctorModel;