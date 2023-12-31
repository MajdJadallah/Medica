const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const UserModel=require('../models/Users');
const AdminModel=require('../models/Admins');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2; 


cloudinary.config({
  cloud_name: 'dvmodwtsk',
  api_key: '575355687719425',
  api_secret: 'XUpZaTgm7htczwXF9ANJDAEFD9s',
});

const UserController= async (req, res) => {
  try {
    const users = await UserModel.find();
      const formattedResponse = JSON.stringify(users, null, 2);
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
      const user = await UserModel.findById(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      let imageUrl = user.avatar;
      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        imageUrl = result.secure_url;
      }
      user.set({
        ...req.body,
        avatar: imageUrl,
      });
      const updatedUser = await user.save();
      return res.status(200).json({ user: updatedUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.error("Internal server error:", error);
    }
  };



  //Creat user
  const CreateUser = async (req, res) => {
    try {
      const { username, password, email } = req.body;
      const user = await UserModel.findOne({ email });
      if (user) {
        return res.json({ message: "The user is already registered" });
      }
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = new UserModel({
        username: username,
        password: hashedPassword,
        email: email,
        date: new Date().toLocaleDateString("en-GB")
      });
      await newUser.save();
      return res.json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error("Error creating user:", error);
      res.json({ error: "Error creating user" });
    }
  };
  //login user
  const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Username or password is incorrect" });
      }
      const token = jwt.sign({ id: user._id }, process.env.SECRET);
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const year = String(currentDate.getFullYear()).slice(-2);
      const formattedDate = `${day}/${month}/${year}`;

      console.log(`User ${user.email} logged in at ${formattedDate}`);
      return res.json({ token, adminId: user._id });
    } catch (err) {
      // Log the error for debugging
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

  //Creat Admin

  const signUp = async (req, res) => {
    try {
      const { username, password, email } = req.body;
  
      // Check if the user already exists
      const admin = await AdminModel.findOne({ email });
      if (admin) {
        return res.status(400).json({ message: "User already registered" });
      }
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newAdmin = new AdminModel({
        username: username,
        password: hashedPassword,
        email: email,
        date: new Date().toLocaleDateString("en-GB") // Format as dd/mm/yy
      });
      await newAdmin.save();
      return res.json({ message: "User created successfully" });
    } catch (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };



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

//get single Admin 
const getadmin= async (req,res)=>{
  const {id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
  res.status(404).json({error:"user not found"});
  }
  const user= await AdminModel.findById(id)
  if(!user){
      res.status(404).json({error:"user not found"})
  }
  res.status(200).json({user})
  }


  const getAdmins = async (req, res) => {
    try {
      const admins = await AdminModel.find({});
      if (!admins || admins.length === 0) {
        return res.status(404).json({ error: "No admin users found" });
      }
      res.status(200).json({ admins });
    } catch (error) {
      console.error("Error fetching admin users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  

  module.exports ={UserController,CreateUser,signUp,login,getuser,updateUser,loginUser,getadmin,getAdmins}