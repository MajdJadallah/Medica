const mongoose = require('mongoose');
const HospitalSchema = new mongoose.Schema({
name:{
type: String, required: true
},
phone:{
    type: String, required: true
},
location:{
    type: String, required: true
},
city:{
    type: String, required: true
},
medical:{
    type: Boolean, required: true
},
nutrition:{
    type:Boolean ,required: true
},
avatar:{
    type: String, required: true
},
timeWorking:{
    type: String, required: true
},
phesylogy:{
    type: Boolean, required: true
},
description:{
    type: String, required: true
}
});

const hospitalModel=mongoose.model('hospitals',HospitalSchema);
module.exports = hospitalModel;