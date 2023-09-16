const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const IllensSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
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
module.exports=mongoose.model("illenses",IllensSchema)