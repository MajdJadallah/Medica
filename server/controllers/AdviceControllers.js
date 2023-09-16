const AdviceModel =require('../models/AdvicesModel');

//get the advices for mobile devices
const getAdvices =async (req,res)=>{
    try{
    const Advices = await AdviceModel.find();
    res.status(200).json({Advices:Advices})
    }catch(error){
    res.status(400).json({Error: error.message})
    }
}

module.exports={getAdvices};