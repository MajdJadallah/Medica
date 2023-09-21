const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
 username: {
 type: String,
 required: true,
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
 gender: {
 type: String,
 },
 phone: {
 type: String,
 },
 healthIssue: {
 type: String,
 },
 role:{
 type: String,
 },
 avatar: {
 type: String,
 },
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
