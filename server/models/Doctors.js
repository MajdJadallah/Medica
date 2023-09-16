const mongoose = require('mongoose');
const DoctorSchema = new mongoose.Schema({
name:{
type: String, required: true
},
phone:{
    type: Number, required: true
},
gender:{
    type: String, required: true
},
specialitst:{
    type: String, required: true
},
role:{
    type: String, required: true
},
currentEmployer:{
    type:String ,required: true
},
avatar:{
    type: String, required: true
},
timeWorking:{
    type: String, required: true
},
description:{
    type: String, required: true
},
review:{
    type: String, required: true
},
type:{
    type: String, required: true
}
});

const doctorModel=mongoose.model('doctors',DoctorSchema);

module.exports = doctorModel;