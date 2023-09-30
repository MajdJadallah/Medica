const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
username: {
type: String,
required: true,
unique: true
},
password:{
type:String,
required: true,
},
email:{
type:String,
required: true,
unique: true
},
role:{
type:String,
}
});
const AdminModel= mongoose.model('Admins', AdminSchema)
module.exports =AdminModel;