const IllenseModel =require('../models/IllensModel');
const mongoose = require('mongoose');

//get the advices for mobile devices
const getIllenese =async (req,res)=>{
    try{
    const Illenses = await IllenseModel.find();
    res.status(200).json({Illenses:Illenses})
    }catch(error){
    res.status(400).json({Error: error.message})
    }
}

//get single article
const getIllens= async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error:"article not found"});
    }
    const illense= await IllenseModel.findById(id)
    if(!illense){
        res.status(404).json({error:"article not found"})
    }
    res.status(200).json({illense})
    }
module.exports={getIllenese,getIllens};