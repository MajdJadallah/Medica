const FAQModel=require('../models/FaqModel');
const mongoose = require('mongoose');

//get majd
// const getMajd =async (req,res)=>{
// const name =await req.params.name;
// try{
// console.log(req.params)
// res.status(200).send(`hello ${name}`)
// }
// catch(error){
// res.status(500).json({error:error.message})
// }
// }


//post FAQ
const createFAQ= async (req,res)=>{
const {question,answer} = req.body;
try{
const faq= await FAQModel.create({question,answer})
res.status(200).json({faq})
}
catch(error){
res.status(500).json({error: error});
}}

//Get FAQS
const getFAQ= async (req,res)=>{
try{
const FAQS = await FAQModel.find();
res.status(200).json({FAQS:FAQS})
}
catch(error){
res.status(500).json({error: error});
}}



//DELETE FAQ
const DeleteFAQ= async (req,res)=>{
    const{id}= req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({error:"The FAQ Not Found"});
        }
        const faq = await FAQModel.findOneAndDelete({_id:id});
        if(!workout){
            res.status(404).json({error:"No such found"})
        }
        res.status(200).json({message:"This FAQ was deledted",faq:faq});
    }catch(error){
        res.status(500).json({error: error});
    }
}

module.exports = {createFAQ,DeleteFAQ,getFAQ};