const ArticleModel =require('../models/ArticlesModels');
const mongoose = require('mongoose');

//get the nutrition articles
const getArticlesnutrition =async (req,res)=>{
    try{
    const Articles = await ArticleModel.find();
    res.status(200).json({Articles:Articles})
    }catch(error){
    res.status(400).json({Error: error.message})
    }
}
//get the physiology articles
const getArticlesphysiology =async (req,res)=>{
    try{
    const Articles = await ArticleModel.find({type:"physiology"});
    res.status(200).json({Articles:Articles})
    }catch(error){
    res.status(400).json({Error: error.message})
    }
}
//get single article
const getarticle= async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error:"article not found"});
    }
    const article= await ArticleModel.findById(id)
    if(!article){
        res.status(404).json({error:"article not found"})
    }
    res.status(200).json({article})
    }
module.exports={getArticlesnutrition,getArticlesphysiology,getarticle};