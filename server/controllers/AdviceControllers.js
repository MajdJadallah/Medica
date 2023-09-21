const AdviceModel =require('../models/AdvicesModel');
const mongoose = require('mongoose');

//get the advices for mobile devices
const getAdvices =async (req,res)=>{
    try{
    const Advices = await AdviceModel.find();
    res.status(200).json({Advices:Advices})
    }catch(error){
    res.status(400).json({Error: error.message})
    }
}

const getadvice= async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error:"advice not found"});
    }
    const advice= await AdviceModel.findById(id)
    if(!advice){
        res.status(404).json({error:"advice not found"})
    }
    res.status(200).json({advice})
    }

module.exports={getAdvices,getadvice};