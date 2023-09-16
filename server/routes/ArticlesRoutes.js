const express = require('express');
const router=express.Router();
const {getArticlesnutrition,getArticlesphysiology,getarticle} = require('../controllers/ArticlesControllers')



router.get('/',getArticlesnutrition);
router.get('/physiology',getArticlesphysiology);
router.get('/:id',getarticle);



module.exports = router;