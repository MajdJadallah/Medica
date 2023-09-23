const DoctorsModel =require('../models/Doctors');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const mongoose = require('mongoose');

//get the doctors for mobile devices
const getDoctors =async (req,res)=>{
    try{
    const Doctors = await DoctorsModel.find();
    res.status(200).json(Doctors)
    }catch(error){
    res.status(400).json({Error: error.message})
    }
}


const getdoctor= async (req,res)=>{
  const {id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
  res.status(404).json({error:"doctor not found"});
  }
  const doctor= await DoctorsModel.findById(id)
  if(!doctor){
      res.status(404).json({error:"doctor not found"})
  }
  res.status(200).json({doctor})
  }


//get phesyology
const phesyologies=async (req,res)=>{
try{
    const phesyology = await DoctorsModel.find({type:"Physiology"});
    res.status(200).json({Doctors:phesyology})

}catch(error){
    res.status(400).json({Error: error.message})
}
}
//get nutrition
const nutrition=async (req,res)=>{
try{
    const nutrition = await DoctorsModel.find({type:"nutrition"});
    res.status(200).json({Doctors:nutrition})

}catch(error){
    res.status(400).json({Error: error.message})
}
}

//post doctors
// const createDoctor=async (req,res)=>{
//     try{
//     const {name,phone,gender,specialitst,role,currentEmployer,avatar,timeWorking,description,review,type} = req.body;
//     const doctor = await DoctorsModel.create({name,phone,gender,specialitst,role,currentEmployer,avatar,timeWorking,description,review,type})
//     res.status(200).json(doctor)
//     }catch(error){
//     res.status(400).json({Error: error.message})
//     }
// }
const createDoctor = async (req, res) => {
    try {
      const {name,phone,gender,specialitst,role,currentEmployer,avatar,timeWorking,description,review,type,email,password} = req.body;
      const existingDoctor = await DoctorsModel.findOne({ email });
      if (existingDoctor) {
        return res.status(400).json({ Error: 'Doctor with this email already exists.' });
      }
      const hashedPassword = bcrypt.hashSync(password, 10);

      const doctor = await DoctorsModel.create({name,phone,gender,specialitst,role,currentEmployer,avatar,timeWorking,description,review,type,email,password:hashedPassword});
      res.status(200).json(doctor);
    } catch (error) {
      res.status(400).json({ Error: error.message });
    }
  };


const loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const doctor = await DoctorsModel.findOne({ email });
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, doctor.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Username or password is incorrect" });
    }
    // Generate and send JWT token
    const token = jwt.sign({ id: doctor._id }, process.env.SECRET);

    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear()).slice(-2);
    const formattedDate = `${day}/${month}/${year}`;
    console.log(`Doctor ${doctor.email} logged in at ${formattedDate}`);
    return res.json({ token, adminId: doctor._id });
  } catch (err) {
    // Log the error for debugging
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
  
module.exports={getDoctors,phesyologies,nutrition,createDoctor,loginDoctor,getdoctor};
