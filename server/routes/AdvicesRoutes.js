const express = require('express');
const router=express.Router();
const {getAdvices} = require('../controllers/AdviceControllers')



router.get('/',getAdvices)



module.exports = router;