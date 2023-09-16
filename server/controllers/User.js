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
// const getUser= async (req, res) => {
//     try {
//       const userID=localStorage.getItem('userID')
//       const user = await UserModel.findOne({userID});

//         const formattedResponse = JSON.stringify(user);
//         res.type('json').send(formattedResponse);
//         console.log('response get');
//         console.log(user);

//     } catch (error) {
//       console.error("Error fetching users:", error);
//       res.status(500).json({ error: "Error fetching users" });
//     }
//   }
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

  //Creat user
  const CreateUser=async (req, res) => {
    try {
      const newUser = new UserModel(req.body);
      await newUser.save();
      res.json(req.body);
      console.log('res posted successfully')
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Error creating user" });
    }
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



  module.exports ={UserController,CreateUser,signUp,login,getuser,updateUser}