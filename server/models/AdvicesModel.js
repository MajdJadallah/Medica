const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const AdviceSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    avatar:{
        type:String,
        required:true,
    }
})
module.exports=mongoose.model("advices",AdviceSchema)