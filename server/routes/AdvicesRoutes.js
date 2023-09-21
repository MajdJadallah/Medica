const express = require('express');
const router=express.Router();
const {getAdvices,getadvice}= require('../controllers/AdviceControllers')



router.get('/',getAdvices);
router.get('/:id',getadvice);



module.exports = router;