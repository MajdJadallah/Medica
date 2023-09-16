const DoctorsModel =require('../models/Doctors');

//get the doctors for mobile devices
const getDoctors =async (req,res)=>{
    try{
    const Doctors = await DoctorsModel.find();
    res.status(200).json(Doctors)
    }catch(error){
    res.status(400).json({Error: error.message})
    }
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
const createDoctor=async (req,res)=>{
    try{
    const {name,phone,gender,specialitst,role,currentEmployer,avatar,timeWorking,description,review,type} = req.body;
    const doctor = await DoctorsModel.create({name,phone,gender,specialitst,role,currentEmployer,avatar,timeWorking,description,review,type})
    res.status(200).json(doctor)
    }catch(error){
    res.status(400).json({Error: error.message})
    }
}
module.exports={getDoctors,phesyologies,nutrition,createDoctor};
