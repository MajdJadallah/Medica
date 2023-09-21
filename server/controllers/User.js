const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const UserModel=require('../models/Users');
const AdminModel=require('../models/Admins');
const mongoose = require('mongoose');

const UserController= async (req, res) => {
    try {
      const users = await UserModel.find();
        // const formattedResponse = JSON.stringify(users, null, 2);
        res.status(200).json({users:users});
        console.log('response get')
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Error fetching users" });
    }
  }

//Get Single user
const getuser= async (req,res)=>{
  const {id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
  res.status(404).json({error:"user not found"});
  }
  const user= await UserModel.findById(id)
  if(!user){
      res.status(404).json({error:"user not found"})
  }
  res.status(200).json({user})
  }

  //edit user
  const updateUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "User not found" });
    }
    try {
      const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.log("Internal server error: " + error);
    }
  };
  
  //Creat user
  const CreateUser = async (req, res) => {
    try {
      const { username, password, email } = req.body;
      const user = await UserModel.findOne({ email });
      if (user) {
        // User with the same email already exists, return an error response
        return res.json({ message: "The user is already registered" });
      }
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = new UserModel({
        username: username,
        password: hashedPassword,
        email: email,
      });
      await newUser.save();
      return res.json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error("Error creating user:", error);
      res.json({ error: "Error creating user" });
    }
  };
  //login user
  const loginUser = async (req,res)=> {
   try{
   const {email,password} = req.body;
   const user= await UserModel.findOne({email});
   if (!user) {
     return res.json({ message: "User not found" });
   }    const isPasswordValid= await bcrypt.compare(password,user.password);
   if (!isPasswordValid) {
     return res.json({ message: "Username or password is incorrect" });
   }    //token to make user login to application
   const token =jwt.sign({id:user._id},process.env.SECRET)
   return res.json({token, adminId:user._id})
   }
   catch(err){
   return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  //Creat Admin

const signUp = async (req,res)=> {
  try{
  const {username,password,email}=req.body;
  const admin = await AdminModel.findOne({email});
   admin && res.json({message:"the user is already registered"})

  const hashedPassword=bcrypt.hashSync(password,10);
  const newAdmin= new AdminModel({
      username: username,
      password: hashedPassword,
      email:email
    });
  await newAdmin.save();
    return res.json({ message: "User created successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


const login = async (req,res)=> {
  try{
    const {email,password} = req.body;
    const admin= await AdminModel.findOne({email});

    if (!admin) {
      return res.json({ message: "User not found" });
    }    const isPasswordValid= await bcrypt.compare(password,admin.password);
if (!isPasswordValid) {
      return res.json({ message: "Username or password is incorrect" });
    }    //token to make user login to application
    const token =jwt.sign({id:admin._id},process.env.SECRET)
    return res.json({token, adminId:admin._id})
 }
  catch(err){
  return res.status(500).json({ error: "Internal Server Error" });
}
}



  module.exports ={UserController,CreateUser,signUp,login,getuser,updateUser,loginUser}