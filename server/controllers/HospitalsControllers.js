const HospitalsModel =require('../models/HospitalsModel');

//get the hospitals for mobile devices
const getHospitals =async (req,res)=>{
    try{
    const hospitals = await HospitalsModel.find();
    res.status(200).json({hospitals:hospitals})
    }catch(error){
    res.status(400).json({Error: error.message})
    }
}
//get phesyology
const phesylogy=async (req,res)=>{
try{
    const centers = await HospitalsModel.find({phesylogy:true});
    res.status(200).json({centers:centers})

}catch(error){
    res.status(400).json({Error: error.message})
}
}
//get nutrition
const nutrition=async (req,res)=>{
try{
    const centers = await HospitalsModel.find({nutrition:true});
    res.status(200).json({centers:centers})

}catch(error){
    res.status(400).json({Error: error.message})
}
}


module.exports={getHospitals,phesylogy,nutrition};